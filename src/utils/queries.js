import { gql } from '@apollo/client';

export const QUERY_GET_PROJECTS = gql`
  query getProject($id: ID!) {
    project(_id: $id) {
      id
      title
      subtitle
      description
      image
      link
    }
  }
`;
