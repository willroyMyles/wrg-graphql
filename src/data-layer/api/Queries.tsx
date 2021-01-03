import { gql } from '@apollo/client';
import Posts from '../../models/Posts';

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

export const CREATE_POST = gql`
mutation CreatePost($post: PostInput){
  createPost(input:{data: $post}){
    post{
      title
      id
    }
  }
}
`
