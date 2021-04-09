import * as types from './ActionType'
import * as authorApi from '../../api/authorApi'

export function loadAuthorsSuccess(authors){
   return { type: types.loadAuthorsSuccess, authors}
}
export function loadAuthors(){
   return function (dispatch){
    return authorApi.getAuthors().then(authors =>{
        dispatch(loadAuthorsSuccess(authors));
    }).catch(error=>{
        throw error;
    })
   }
}