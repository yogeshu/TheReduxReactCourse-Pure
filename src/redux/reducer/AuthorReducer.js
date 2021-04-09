import * as types from '../action/ActionType'
import initialState from './InitialState'
export default function AuthorReducer(state=initialState.authors, action){
    switch(action.type){
        
        case types.loadAuthorsSuccess:
            return action.authors;
    default: 
    return state;
}
}