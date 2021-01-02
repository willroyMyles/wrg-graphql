import { gql } from '@apollo/client';

export const CATEGORIES = gql`
query GetCategories{
    categories{
      title
      sub
    }
  }
`;


export const POSTS = (cat:string) => gql`
query {
    posts(where:{category : "${cat}" }){
        title
        category
        createdAt
        published_at
        make
        model
        category
        sub_category
        id
        content
        year
    }
  }
`;

