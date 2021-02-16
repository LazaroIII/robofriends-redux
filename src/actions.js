import {CHANGE_SEARCH_FIELD} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})//* 'between () so I don't need to use return