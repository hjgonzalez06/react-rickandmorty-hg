import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Col, Spinner } from 'react-bootstrap';
import { GeneralCard, State } from '../../../types';

function GeneralCards({ type, characters, locations, episodes }: GeneralCard){

    function renderCards(): JSX.Element | undefined {

        switch(type){
            case 'Characters':
                return ;
            case 'Locations':
                return ;
            case 'Episodes':
                return ;
        };

    };

    function loadingCards(): JSX.Element | undefined {

        switch(type){
            case 'Characters':
                return ;
            case 'Locations':
                return ;
            case 'Episodes':
                return ;
        };

    };

    function loadingErrors(): JSX.Element | undefined {

        switch(type){
            case 'Characters':
                return ;
            case 'Locations':
                return ;
            case 'Episodes':
                return ;
        };

    };

    return (

        <>
            {loadingCards() ? loadingCards() : loadingErrors() ? loadingErrors() : renderCards()};
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