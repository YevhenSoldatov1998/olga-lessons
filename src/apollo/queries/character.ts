import {gql} from "@apollo/client";

export const characterQuery = gql`
    query Character($id: ID!) {
        character(id: $id) {
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
            
            episode {
                name
            }
          
        }
    }
`

