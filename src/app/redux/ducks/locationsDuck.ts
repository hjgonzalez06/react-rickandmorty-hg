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

const GET_LOCATIONS = "GET_LOCATIONS";
const GET_LOCATIONS_ERROR = "GET_LOCATIONS_ERROR";
const GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS";
const UPDATE_PAGE = "UPDATE_PAGE";

export default function reducer(state = initialData, action: Action){

    switch(action.type){
        case GET_LOCATIONS:
            return {...state, fetching: true};
        case GET_LOCATIONS_ERROR:
            return {...state, fetching: false, error: action.payload};
        case GET_LOCATIONS_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages, error: null }
        case UPDATE_PAGE:
            return {};
        default:
            return state;
    }

}

export let getLocationsAction = () => (dispatch: any, getState: any) => {

    let query = gql`
        query ($page: Int){
            locations (page: $page){
                results{
                    id,
                    name,
                    type,
                    dimension,
                    residents{
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
        dispatch({
            type: UPDATE_PAGE,
            payload: data.locations.info.next ? data.locations.info.next : 1
        });
    });

};