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