import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Ducks
import pagesDuck from './ducks/pagesDuck';
import charactersDuck, { getCharactersAction } from './ducks/charactersDuck';
import locationsDuck, { getLocationsAction } from './ducks/locationsDuck';
import episodesDuck, { getEpisodesAction } from './ducks/episodesDuck';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

let rootReducers = combineReducers({
    page: pagesDuck,
    characters: charactersDuck,
    locations: locationsDuck,
    episodes: episodesDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){

    let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

    getCharactersAction()(store.dispatch, store.getState);
    getLocationsAction()(store.dispatch, store.getState);
    getEpisodesAction()(store.dispatch, store.getState);

    return store;

}