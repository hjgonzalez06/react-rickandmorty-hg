import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Ducks
import appDuck from './ducks/appDuck';
import charactersDuck from './ducks/charactersDuck';
import locationsDuck from './ducks/locationsDuck';
import episodesDuck from './ducks/episodesDuck';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

let rootReducers = combineReducers({
    app: appDuck,
    characters: charactersDuck,
    locations: locationsDuck,
    episodes: episodesDuck
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){

    let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));



    return store;

}