import { Action, Path } from '../../../types';
import { changePageAction as changeCharsPage } from './charactersDuck';
import { changePageAction as changeLocsPage } from './locationsDuck';
import { changePageAction as changeEpsPage } from './episodesDuck';

function getCurrentPath() {

    let path: string = window.location.pathname.replace("/","");

    return path === "" ? "Characters" : path.charAt(0).toUpperCase() + path.slice(1);

};

let initialData: Path = {

    current: getCurrentPath()

};
const SET_LOCATION = "SET_LOCATION";
const DEFAULT_PAGE = 1;

export default function reducer (state: Path = initialData, action: Action) {

    switch (action.type) {

        case SET_LOCATION:
            return {...state, current: action.payload};
        default:
            return state;

    }

};

export let setLocationAction = (location: string) => (dispatch: any, getState: any) => {

    dispatch({
        type: SET_LOCATION,
        payload: location
    });


};

export let setPageAction = (type: string, page?: number) => (dispatch: any, getState: any) => {

    page = page || DEFAULT_PAGE;

    switch (type) {
        case "characters":
            changeCharsPage(page)(dispatch, getState);
            break;
        case "locations":
            changeLocsPage(page)(dispatch, getState);
            break;
        case "episodes":
            changeEpsPage(page)(dispatch, getState);
            break;
    }

};