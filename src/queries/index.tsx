import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
    query GetPeople($page: String!) {
        people(page: $page) {
            count
            next
            previous
            results {
                name
                height
                gender
                mass
                homeworld {
                    name
                    rotation_period
                    orbital_period
                    diameter
                    population
                    gravity
                    surface_water
                    climate
                    terrain
                }
            }
        }
    }
`;

export const SEARCH_BY_NAME = gql`
    query SearchPeople($name: String!) {
        search(name: $name) {
            count
            results {
                name
                gender
                mass
                homeworld {
                    name
                    rotation_period
                    orbital_period
                    diameter
                    population
                    gravity
                    surface_water
                    climate
                    terrain
                }
            }
        }
    }
`;
