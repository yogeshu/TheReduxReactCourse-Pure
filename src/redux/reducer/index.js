import {combineReducers} from 'redux'
import courses from './CourseReducer'
import authors from './AuthorReducer'

const rootReducer = combineReducers({
    courses, // courses:courses,
    authors
})
export default rootReducer;