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


export const GET_COMMENTS = gql`
query GetComments($id:String){
  comments(where : {post : {_id : $id}} ){
    content
    createdAt
    isOffer
  }
}
`

export const POSTSBY =  gql`
query getPosts($c:String, $s:String){
    posts(where:{category : $c, sub_category:$s }){
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
        views
        comments{
          id
        }
    }
  }
`;

export const GET_POST = gql`
  query getPost($id : ID!){
    post(id : $id){
      views
    }
  }
`

export const UPDATE_POST = gql`
  mutation operation( $id : ID!, $views : Int){
    updatePost(input:{where:{id:$id}, data:{views:$views}}){
      post{
          views
          id
        }
    }
  }
`

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

export const CREATE_COMMENT = gql`
  mutation CreateComment($comment : CommentInput){
    createComment(input:{data:$comment}){
      comment{
        content
        id
      }
    }
  }
`

export const REGISTER = gql`
  mutation register($data : UsersPermissionsRegisterInput!){
    register(input: $data){
      jwt
      user{
        id
        username
      }
    }
  }
`

export const LOGIN = gql`
  mutation login($data: UsersPermissionsLoginInput!){
    login(input: $data){
      jwt
      user{
        id
      }
    }
  }
`
