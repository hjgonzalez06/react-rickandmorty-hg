import { Data, Action } from '../../../types';
import { gql } from '@apollo/client';
import { client } from '../apollo/sourceApi';

const initialData: Data = {
    fetching: false,
    data: [],
    current: {},
    nextPage: 1,
    pages: 1
};

const GET_EPISODES = "GET_EPISODES";
const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS";
const GET_EPISODES_ERROR = "GET_EPISODES_ERROR";
const UPDATE_PAGE = "UPDATE_PAGE";

export default function reducer(state = initialData, action: Action){

    switch(action.type){
        case GET_EPISODES:
            return {...state, fetching: true};
        case GET_EPISODES_ERROR:
            return {...state, fetching: false, error: action.payload};
        case GET_EPISODES_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages, error: null }
        case UPDATE_PAGE:
            return {};
        default:
            return state;
    }

}

export let getEpisodesAction = () => (dispatch: any, getState: any) => {

    let query = gql`
        query ($page: Int){
            episodes (page: $page){
                results{
                    id,
                    name,
                    air_date,
                    episode,
                    characters{
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

    const { nextPage } = getState().episodes;

    dispatch({
        type: GET_EPISODES
    });

    return client.query({
        query,
        variables: {page: nextPage}
    })
    .then( ({data, error}) => {
        if (error) {
            dispatch({
                type: GET_EPISODES_ERROR,
                payload: error
            });
            return;
        };
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: data.episodes
        });
        dispatch({
            type: UPDATE_PAGE,
            payload: data.episodes.info.next ? data.episodes.info.next : 1
        });
    });

};