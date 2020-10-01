export interface Characters {
    id: number,
    name: string,
    species: string,
    type: string,
    gender: string,
    image: string
}

export interface Locations {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: Residents[]
}

export interface Episodes {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: Residents[]
}

export interface Residents {
    name: string,
    image?: string
}

export interface Data {
    fetching: boolean,
    data: any,
    current: object,
    nextPage: number,
    pages: number
}

export interface Action {
    type: string,
    payload: any
}

export interface Path {
    current: string
}

interface Status {
    loading: boolean,
    error?: string
}

export type GeneralCard = {
    type: string,
    characters: Status,
    locations: Status,
    episodes: Status
}

export type CharactersGeneralCard = {
    characters: Characters[],
    /* show: boolean,
    setShow: (show: boolean) => void */
}

export type LocationsGeneralCard = {
    locations: Locations[],
    /* show: boolean,
    setShow: (show: boolean) => void */
}

export type EpisodesGeneralCard = {
    episodes: Episodes[],
    /* show: boolean,
    setShow: (show: boolean) => void */
}

export type DetailedCard = {
    type: string,
    characters?: Status,
    locations?: Status,
    episodes?: Status,
    show: boolean,
    setShow: (show: boolean) => void
}

export type DetailedCharacter = {
    character: Characters
}

export type DetailedLocation = {
    location: Locations
}

export type DetailedEpisode = {
    episode: Episodes
}

export type NavButtons = {
    location?: string,
    setLocationAction?: (location: string) => void
}

export type State = {
    path: {
        current: string
    },
    characters: {
        fetching: boolean,
        data: Characters[],
        current: object,
        nextPage: number,
        pages: number,
        error?: string
    }
    locations: {
        fetching: boolean,
        data: Locations[],
        current: object,
        nextPage: number,
        pages: number,
        error?: string
    }
    episodes: {
        fetching: boolean,
        data: Episodes[],
        current: object,
        nextPage: number,
        pages: number,
        error?: string
    }
}