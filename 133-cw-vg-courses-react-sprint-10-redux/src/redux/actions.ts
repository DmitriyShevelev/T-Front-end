import Course from "../models/course";
import {PayloadAction} from '@reduxjs/toolkit'
import { UserData } from "../models/common/user-data";
import ErrorCode from "../models/common/error-code";
import {authService, college} from '../config/service-config'
import { LoginData } from "../models/common/login-data";
export const SET_COURSES = "set_courses";
export const SET_USER_DATA = "set_user_data";
export const SET_ERROR_CODE = "set_error_code";

type ActionType<T> = (data: T)=>PayloadAction<T>;

export const setCourses:ActionType<Course[]>  = courses => (
    {payload: courses, type: SET_COURSES}
)
export const setUserData: ActionType<UserData> = userData => (
    {payload: userData, type: SET_USER_DATA}
)
export const setErrorCode: ActionType<ErrorCode> = errorCode => (
    {payload: errorCode, type: SET_ERROR_CODE}
)
export const addCourseAction = function(course: Course): (dispatch:any)=>void {
    return asyncActionDispatch.bind(null, college.addCourse.bind(college,course));
           
    }
export const removeCourseAction = function(id: number) : (dispatch:any)=>void {
    return asyncActionDispatch.bind(null, college.removeCourse.bind(college, id));
           
    }
export const updateCourseAction = function(id: number, course: Course) : (dispatch:any)=>void {
    return asyncActionDispatch.bind(null, college.updateCourse.bind(college, id, course));
}
export const loginAction = function(loginData: LoginData) : (dispatch:any)=>void {
    return asyncActionDispatch.bind(null, authService.login.bind(authService, loginData));
}
async function asyncActionDispatch(serviceMethod: Function, dispatch: any) {
    try {
        await serviceMethod();
        dispatch(setErrorCode(ErrorCode.NO_ERROR));
    } catch (err: any) {
        dispatch(setErrorCode(err))
    }
}