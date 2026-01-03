import React from 'react'
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { PostListData } from './store/post-list-store';

const Post = ({post}) => {
  const {deletePost} = useContext(PostListData)
  return <div class="card my-card" style={{width: "30rem"}}>

    

  <div class="card-body">
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
  <MdDelete />
    <span class="visually-hidden"></span>
  </span>
  
    <h5 class="card-title">{post.title}</h5>
    
    <p class="card-text">{post.body}</p>
   {post.tags.map((tag) => <span class="badge text-bg-primary hashtag">{tag}</span> )}
   <div class="alert alert-success" role="alert">
This Post is reacted by {post.reaction}
 people
</div>
  </div>
</div>
}

export default Post