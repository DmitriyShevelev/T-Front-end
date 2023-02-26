function getId() {
    return 100;
}
function getUser(id) {
    return new Promise((resolve, reject) => {
        //resolve - callback of "then" method, reject - callback of "reject" method
        setTimeout(() => {
           if(Math.random() < 0.7) {
               //moving to the resolved
                resolve("user" + id); 
           } else {
               reject(() => {console.log("Wrong id")});
           } 
        }, 1000)
    })
}
function getProduct(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve ("Product of the user " + user);
            } else {
                reject(() => {
                    console.log("kuku", `the user ${user} doesn't have any products`);
                })
            }
            
        }, 1000)

        
    })
}
/************then chain syntax************** */

// function displayProduct() {
//     const id = getId();
//     getUser(id)
//      .then(user => getProduct(user)).catch(err => {err(); return "kuku"})
//      .then(product => console.log(product))
//     .finally(() => console.log("bye"));
// }
// displayProduct();

/*************************************************** */
/**************** async/await syntax */
// async function displayProduct() {
//     const id = getId();
//     try {
//         const user = await getUser(id);
//         const product = await getProduct(user);
//         console.log(product);
//     } catch (err) {
//         err();
//     } finally {
//         console.log('bye')
//     }
// }
//displayProduct().then(()=>console.log("go to eat; good appetite "));
// function sleep(timeout) {
//     return new Promise(resolve => setTimeout(resolve, timeout));
//  }
//  async function sleepTest() {
//     console.log('My func start');
//        await sleep(3000);
//    console.log('My func finished')       
//  }
//  sleepTest().then(()=>console.log('bye'));
