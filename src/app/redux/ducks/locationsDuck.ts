import { Data, Action } from '../../../types';
import { gql } from '@apollo/client';
import { client } from '../apollo/sourceApi';

const initialData: Data = {
    fetching: false,
    data: [],
    current: {},
    nextPage: 1,
    pages: 1
}

const CHANGE_PAGE = "CHANGE_PAGE";
const GET_LOCATIONS = "GET_LOCATIONS";
const GET_LOCATIONS_ERROR = "GET_LOCATIONS_ERROR";
const GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS";

export default function reducer(state = initialData, action: Action){

    switch(action.type){
        case CHANGE_PAGE:
            return {...state, nextPage: action.payload};
        case GET_LOCATIONS:
            return {...state, fetching: true};
        case GET_LOCATIONS_ERROR:
            return {...state, fetching: false, error: action.payload};
        case GET_LOCATIONS_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages, error: null };
        default:
            return state;
    }

}

export let getLocationsAction = (changePage?: boolean) => (dispatch: any, getState: any) => {

    let query = gql`
        query ($page: Int){
            locations (page: $page){
                results{
                    id,
                    name,
                    type,
                    dimension,
                    residents{
                        id,
                        name,
                        image
                    }
                }
                info{
                    pages,
                    prev,
                    next
                }
            }
        }
    `

    const { nextPage } = getState().locations;

    dispatch({
        type: GET_LOCATIONS
    });

    return client.query({
        query,
        variables: {page: nextPage}
    })
    .then( ({data, error}) => {
        if (error) {
            dispatch({
                type: GET_LOCATIONS_ERROR,
                payload: error
            });
            return;
        };
        dispatch({
            type: GET_LOCATIONS_SUCCESS,
            payload: data.locations
        });
        if (changePage) {
            dispatch({
                type: CHANGE_PAGE,
                payload: data.locations.info.next ? data.locations.info.next : 1
            });
        };
    });

};

export let searchLocationsAction = (word: string, filter: string) => (dispatch: any, getState: any) => {

    let query: any;
    
    switch (filter) {
        case "Name":
            query = gql `
                query ($word: String, $page: Int){
                    locations (filter: {name: $word}, page: $page){
                        results{
                            id,
                            name,
                            type,
                            dimension,
                            residents{
                                id,
                                name,
                                image
                            }
                        }
                        info{
                            pages,
                            prev,
                            next
                        }
                    }
                }
            `;
            break;
        case "Type":
            query = gql `
                query ($word: String, $page: Int){
                    locations (filter: {type: $word}, page: $page){
                        results{
                            id,
                            name,
                            type,
                            dimension,
                            residents{
                                id,
                                name,
                                image
                            }
                        }
                        info{
                            pages,
                            prev,
                            next
                        }
                    }
                }
            `;
            break;
    };

    const { nextPage } = getState().locations;

    dispatch({
        type: GET_LOCATIONS
    });

    return client.query({
        query,
        variables: {
            word,
            page: nextPage
        }
    })
    .then( ({data, error}) => {
        if (error) {
            dispatch({
                type: GET_LOCATIONS_ERROR,
                payload: error
            });
            return;
        };
        dispatch({
            type: GET_LOCATIONS_SUCCESS,
            payload: data.locations
        });
        dispatch({
            type: CHANGE_PAGE,
            payload: data.locations.info.next ? data.locations.info.next : 1
        });
    });

};

export let changePageAction = (page: number) => (dispatch: any, getState: any) => {

    dispatch({
        type: CHANGE_PAGE,
        payload: page
    });

    getLocationsAction(true)(dispatch,getState);

};