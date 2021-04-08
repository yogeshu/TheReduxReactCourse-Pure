import {combineReducers} from 'redux'
import courses from './CourseReducer'


const rootReducer = combineReducers({
    courses // courses:courses
})
export default rootReducer;