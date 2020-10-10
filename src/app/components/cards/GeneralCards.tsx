import React from 'react';
import { connect } from 'react-redux';
import { GeneralCard, State } from '../../../types';
import Characters from './general/CharactersCards';
import Locations from './general/LocationsCards';
import Episodes from './general/EpisodesCards';
import Loading from '../info-pages/Loading';
import Errors from '../info-pages/Errors';

function GeneralCards({ type, characters, locations, episodes }: GeneralCard){

    function renderCards(): JSX.Element | undefined {

        switch(type){
            case 'Characters':
                return <Characters />
            case 'Locations':
                return <Locations />
            case 'Episodes':
                return <Episodes />
        };

    };

    function loadingCards(): JSX.Element | undefined {

        switch(type){
            case 'Characters':
                return characters.loading ? <Loading /> : undefined;
            case 'Locations':
                return locations.loading ? <Loading /> : undefined;
            case 'Episodes':
                return episodes.loading ? <Loading /> : undefined;
        };

    };

    function loadingErrors(): JSX.Element | undefined {

        switch(type){
            case 'Characters':
                return characters.error ? <Errors message={characters.error} /> : undefined;
            case 'Locations':
                return locations.error ? <Errors message={locations.error} /> : undefined;
            case 'Episodes':
                return episodes.error ? <Errors message={episodes.error} /> : undefined;
        };

    };

    return (

        <>
            {loadingCards() ? loadingCards() : loadingErrors() ? loadingErrors() : renderCards()}
        </>

    )

}

function mapStateToProps(state: State){

    return {
        characters: {
            loading: state.characters.fetching,
            error: state.characters.error
        },
        locations: {
            loading: state.locations.fetching,
            error: state.locations.error
        },
        episodes: {
            loading: state.episodes.fetching,
            error: state.episodes.error
        }
    };

};

export default connect(mapStateToProps)(GeneralCards);