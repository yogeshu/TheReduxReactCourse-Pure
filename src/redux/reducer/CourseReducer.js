import * as types from '../action/ActionType'
import initialState from './InitialState'

export default function CourseReducer(state=initialState.courses, action){
    switch(action.type){
        case types.createCourse:
            return [...state, {...action.course}]
        case types.loadCoursesSuccess:
            return action.courses;
    default: 
    return state;
}
}