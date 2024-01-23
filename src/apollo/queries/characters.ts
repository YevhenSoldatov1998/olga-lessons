import {gql} from "@apollo/client";

export const charactersQuery = gql`
    query Characters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                prev
                next
            }
            results{
                id
                name
                status
                species
                gender
                origin{
                    name
                    dimension
                }
                image
            }
        }
    }
`

