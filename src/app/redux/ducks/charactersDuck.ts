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
const GET_CHARACTERS = "GET_CHARACTERS";
const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

export default function reducer(state = initialData, action: Action){

    switch(action.type){
        case CHANGE_PAGE:
            return {...state, nextPage: action.payload};
        case GET_CHARACTERS:
            return {...state, fetching: true};
        case GET_CHARACTERS_ERROR:
            return {...state, fetching: false, error: action.payload};
        case GET_CHARACTERS_SUCCESS:
            return {...state, fetching: false, data: action.payload.results, pages: action.payload.info.pages, error: null };
        default:
            return state;
    };

};

export let getCharactersAction = (changePage?: boolean) => (dispatch: any, getState: any) => {
    
    let query = gql`
        query ($page: Int){
            characters (page: $page){
                results{
                    id,
                    name,
                    species,
                    type,
                    gender,
                    image
                }
                info{
                    pages,
                    prev,
                    next
                }
            }
        }
    `

    const { nextPage } = getState().characters;

    dispatch({
        type: GET_CHARACTERS
    });

    return client.query({
        query,
        variables: {page: nextPage}
    })
    .then( ({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: error.message
            });
            return;
        };
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: data.characters
        });
        if (changePage) {
            dispatch({
                type: CHANGE_PAGE,
                payload: data.characters.info.next ? data.characters.info.next : 1
            });
        };
    })
    .catch( e => {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            payload: e.message
        });
    });

};

export let searchCharactersAction = (word: string, filter: string) => (dispatch: any, getState: any) => {

    let query: any;
    
    switch (filter) {
        case "Name":
            query = gql `
                query ($word: String, $page: Int){
                    characters (filter: {name: $word}, page: $page){
                        results{
                            id,
                            name,
                            species,
                            type,
                            gender,
                            image
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
                    characters (filter: {type: $word}, page: $page){
                        results{
                            id,
                            name,
                            species,
                            type,
                            gender,
                            image
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

    const { nextPage } = getState().characters;

    dispatch({
        type: GET_CHARACTERS
    });

    return client.query({
        query,
        variables: {
            word,
            page: nextPage
        }
    })
    .then( ({ data, error }) => {
        if (error) {
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: error.message
            });
            return;
        };
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: data.characters
        });
        dispatch({
            type: CHANGE_PAGE,
            payload: data.characters.info.next ? data.characters.info.next : 1
        });
    })
    .catch( e => {
        dispatch({
            type: GET_CHARACTERS_ERROR,
            payload: e.message
        });
    });

};

export let changePageAction = (page: number) => (dispatch: any, getState: any) => {

    dispatch({
        type: CHANGE_PAGE,
        payload: page
    });

    getCharactersAction(true)(dispatch,getState);

};