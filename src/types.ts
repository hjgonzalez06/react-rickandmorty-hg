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
    id: number,
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
}

export type LocationsGeneralCard = {
    locations: Locations[],
}

export type EpisodesGeneralCard = {
    episodes: Episodes[],
}

export type DetailedModals = {
    type: string,
    character?: Characters,
    location?: Locations,
    episode?: Episodes,
    show: boolean,
    setShow: (show: boolean) => void
}

export type DetailedCharacter = {
    character: Characters,
    show: boolean,
    setShow: (show: boolean) => void
}

export type DetailedLocation = {
    location: Locations,
    show: boolean,
    setShow: (show: boolean) => void
}

export type DetailedEpisode = {
    episode: Episodes,
    show: boolean,
    setShow: (show: boolean) => void
}

export type NavButtons = {
    location?: string,
    setLocationAction?: (location: string) => void
}

export type PaginationProps = {
    location: string,
    pages: number,
    next: number,
    setPageAction: (type: string, page?: number) => void
}

export type SearcherProps = {
    location: string,
    searchCharacters: (word: string, filter: string) => void,
    searchLocations: (word: string, filter: string) => void,
    searchEpisodes: (word: string, filter: string) => void
}

export type ErrorsProp = {
    message: string
}

export type LoadingProp = {
    loading: boolean
}

export type State = {
    page: {
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