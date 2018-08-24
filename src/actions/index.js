export const SEARCH_TEXT = 'SEARCH_TEXT';
export function searchTextfn(text) {
    return {
      type: 'SEARCH_TEXT',
      text
    }
  }
 