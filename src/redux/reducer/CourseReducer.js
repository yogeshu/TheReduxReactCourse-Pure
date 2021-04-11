import * as types from "../action/ActionType";
import initialState from "./InitialState";

export default function CourseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.createCourseSuccess:
      return [...state, { ...action.course }];
    case types.updateCourseSuccess:
      return state.map(course =>  course.id === action.course.id ? action.course : course
      );
    case types.loadCoursesSuccess:
      return action.courses;
    default:
      return state;
  }
}
