import AuthService from "./auth-service";
import {AuthProvider, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider} from 'firebase/auth';
import {authState} from 'rxfire/auth';
import {from, Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import { LoginData } from "../models/common/login-data";
import { nonAuthorizedUser, UserData } from "../models/common/user-data";
import appFire from "../config/fire-config";
import { collection, CollectionReference, doc, DocumentReference, DocumentSnapshot, getDoc, getFirestore } from "firebase/firestore";
import { FACEBOOK, GITHUB, GOOGLE, MICROSOFT, TWITTER } from "../config/networks-config";

import { Auth, sendSignInLinkToEmail } from "firebase/auth";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const networkProviders: Map<string, AuthProvider> = new Map( [
    [GOOGLE, new GoogleAuthProvider()],
    [GITHUB, new GithubAuthProvider()],
    [TWITTER, new TwitterAuthProvider()],
    [FACEBOOK, new FacebookAuthProvider()],
    
])
export default class AuthServiceFire implements AuthService {
    private authFire = getAuth(appFire);
    private collectionAuth: CollectionReference;
    constructor(private collectionAdministrators: string) {
        this.collectionAuth = collection(getFirestore(appFire), this.collectionAdministrators);
    };
    async isAdmin(id?: string): Promise<boolean> {
        if (!id) {
            return false;
        }

        const docRef: DocumentReference = doc(this.collectionAuth, id);
        const docSnap: DocumentSnapshot = await getDoc(docRef);

        return docSnap.exists();
    }

    getUserData(): Observable<UserData> {
        return authState(this.authFire)
            .pipe ( mergeMap(user => from(this.isAdmin(user?.uid))
                .pipe(map((isAdmin) => {
                    if (!!user) {
                        return {
                            username: user.uid,
                            displayName: user.displayName ?? user.email!,
                            isAdmin: isAdmin
                        };
                    }

                    return nonAuthorizedUser;
                }))
            ));
    }
    login(loginData: LoginData): Promise<boolean> {
        

      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000/courses',
        // This must be true.
        handleCodeInApp: true,
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'http://localhost:3000/courses/statistics/cost'
      };
      
      
      
      const auth = getAuth();
      sendSignInLinkToEmail(auth, loginData.email, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', loginData.email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
      
      
       
      
      // Confirm the link is a sign-in with email link.
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, loginData.email, window.location.href)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
          });
      }      
      
      
      return loginData.password ? this.loginPassword(loginData) : this.loginNetworkProvider(loginData.email);
    }






    logout(): Promise<boolean> {
        return signOut(this.authFire).then(()=>true).catch(()=>false);
    }
    private loginPassword(loginData: LoginData): Promise<boolean> {
        return signInWithEmailAndPassword(this.authFire, loginData.email, loginData.password)
        .then(()=>true).catch(()=>false);
    }
    private loginNetworkProvider(provider: string): Promise<boolean> {
        const networkProvider: AuthProvider | undefined = networkProviders.get(provider);
        if (!networkProvider) {
            return Promise.resolve(false);
        }
        return signInWithPopup(this.authFire, networkProvider).then(()=>true).catch(()=>false);
    }
    
}

