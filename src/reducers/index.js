import {SEARCH_TEXT} from '../actions';
export function searchText (state = {}, action) {
    switch (action.type) {
      case SEARCH_TEXT:
        return {serachText: action.text};
      default:
        return state;
    }
}
