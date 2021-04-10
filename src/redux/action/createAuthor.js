import * as types from "./ActionType";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.loadAuthorsSuccess, authors };
}
export function loadAuthors() {
  return async function (dispatch) {
    try {
      const authors = await authorApi.getAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
}
