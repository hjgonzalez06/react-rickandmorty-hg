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

const CHANGE_PAGE = "CHANGE_PAGE";
const GET_EPISODES = "GET_EPISODES";
const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS";
const GET_EPISODES_ERROR = "GET_EPISODES_ERROR";

export default function reducer(state = initialData, action: Action){

    switch(action.type){
        case CHANGE_PAGE:
            return {...state, nextPage: action.payload};
        case GET_EPISODES:
            return {...state, fetching: true};
        case GET_EPISODES_ERROR:
            return {...state, fetching: false, error: action.payload};
        case GET_EPISODES_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages, error: null };
        default:
            return state;
    }

}

export let getEpisodesAction = (changePage?: boolean) => (dispatch: any, getState: any) => {

    let query = gql`
        query ($page: Int){
            episodes (page: $page){
                results{
                    id,
                    name,
                    air_date,
                    episode,
                    characters{
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
                payload: error.message
            });
            return;
        };
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: data.episodes
        });
        if (changePage) {
            dispatch({
                type: CHANGE_PAGE,
                payload: data.episodes.info.next ? data.episodes.info.next : 1
            });
        };
    })
    .catch( e => {
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: e.message
        });
    });

};

export let searchEpisodesAction = (word: string, filter: string) => (dispatch: any, getState: any) => {

    let query: any;
    
    switch (filter) {
        case "Name":
            query = gql `
                query ($word: String, $page: Int){
                    episodes (filter: {name: $word}, page: $page){
                        results{
                            id,
                            name,
                            air_date,
                            episode,
                            characters{
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
        case "Episode":
            query = gql `
                query ($word: String, $page: Int){
                    episodes (filter: {episode: $word}, page: $page){
                        results{
                            id,
                            name,
                            air_date,
                            episode,
                            characters{
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

    const { nextPage } = getState().episodes;

    dispatch({
        type: GET_EPISODES
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
                type: GET_EPISODES_ERROR,
                payload: error.message
            });
            return;
        };
        dispatch({
            type: GET_EPISODES_SUCCESS,
            payload: data.episodes
        });
        dispatch({
            type: CHANGE_PAGE,
            payload: data.episodes.info.next ? data.episodes.info.next : 1
        });
    })
    .catch( e => {
        dispatch({
            type: GET_EPISODES_ERROR,
            payload: e.message
        });
    });

};

export let changePageAction = (page: number) => (dispatch: any, getState: any) => {

    dispatch({
        type: CHANGE_PAGE,
        payload: page
    });

    getEpisodesAction(true)(dispatch,getState);

};