export const initialState: IState = {
    nextPage: '',
    previousPage: '',
    people: {
        count: '0',
        next: '',
        previous: '',
        results: [],
    },
};

export interface ILocationState {
    person: IPerson
}

export interface IState {
    nextPage: string;
    previousPage: string;
    people: IPeople;
}

export interface IPeople {
    count: string;
    next: string;
    previous: string;
    results: IPerson[];
}

export interface IPerson {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: IPlanet;
}

interface IPlanet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}
