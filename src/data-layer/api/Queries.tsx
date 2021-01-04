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
