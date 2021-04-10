import * as types from "./ActionType";
import * as courseApi from "../../api/courseApi";

function loadCoursesSuccess(courses) {
  return { type: types.loadCoursesSuccess, courses };
}

function createCourseSuccess(course) {
  return { type: types.createCourseSuccess, course };
}

function updateCourseSuccess(courses) {
  return { type: types.updateCourseSuccess, courses };
}

export function loadCourses() {
  return async function (dispatch) {
    try {
      const courses = await courseApi.getCourses();
      dispatch(loadCoursesSuccess(courses));
    } catch (error) {
      throw error;
    }
  };
}

export function saveCourses(course) {
  debugger;
  return async function (dispatch, getState) {
    try {
      const saveCourse = await courseApi.saveCourse(course);
      course.id
        ? dispatch(updateCourseSuccess(saveCourse))
        : dispatch(createCourseSuccess(saveCourse));
    } catch (error) {
      throw error;
    }
  };
}
