import React from 'react';
import { DetailedModals } from '../../../types';
import CharacterModal from './detailed/CharacterModal';
import LocationModal from './detailed/LocationModal';
import EpisodeModal from './detailed/EpisodeModal';

function DetailedCards({ type, character, location, episode, show, setShow }: DetailedModals){

    switch(type){
        case 'Character':
            return <CharacterModal character={character!} show={show} setShow={setShow} />;
        case 'Location':
            return <LocationModal location={location!} show={show} setShow={setShow} />;
        case 'Episode':
            return <EpisodeModal episode={episode!} show={show} setShow={setShow} />;
    };

};

export default DetailedCards;