 import * as types from './ActionType'
 import * as courseApi from '../../api/courseApi'
export
function createCourse(course){
    return { type: types.createCourse, course}
}
function loadCoursesSuccess(courses){
    return { type: types.loadCoursesSuccess, courses}
}
export function loadCourses(){
    return function (dispatch){
     return courseApi.getCourses().then(courses =>{
         dispatch(loadCoursesSuccess(courses));
     }).catch(error=>{
         throw error;
     })
    }
}