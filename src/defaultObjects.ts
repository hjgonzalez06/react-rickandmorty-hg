import { Characters, Locations, Episodes, Residents } from './types';

export const DefaultCharacter: Characters = {
    id: 0,
    name: "",
    species: "",
    type: "",
    gender: "",
    image: ""
};

const DefaultResidents: Residents[] = [{
    id: 0,
    name: "",
    image: ""
}];

export const DefaultLocation: Locations = {
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: DefaultResidents
};

export const DefaultEpisode: Episodes = {
    id: 0,
    name: "",
    air_date: "",
    episode: "",
    characters: DefaultResidents
}