import * as types from '../action/ActionType'

export default function CourseReducer(state=[], action){
    switch(action.type){
        case types.createCourse:
            return [...state, {...action.course}]
        case types.loadCoursesSuccess:
            return action.courses;
    default: 
    return state;
}
}