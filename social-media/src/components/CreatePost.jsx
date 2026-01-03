import React, { useContext, useRef } from "react";
import { PostListData } from "./store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;

    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ")

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
     postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

  

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      })
    })
    .then(res => res.json())
    .then((post) =>  addPost(post));


   


  };

  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div class="mb-3">
        <label for="tags" class="form-label">
          Enter Your User id here
        </label>
        <input type="userId" class="form-control" ref={userIdElement} />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="How are you feeling Today"
          ref={postTitleElement}
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">
          Post Content
        </label>
        <textarea
          rows="5"
          class="form-control"
          ref={postBodyElement}
        />
      </div>
      <div class="mb-3">
        <label for="reactions" class="form-label">
          Number of Reactions
        </label>
        <input type="number" ref={reactionsElement} class="form-control" />
      </div>

      <div class="mb-3">
        <label for="tags" class="form-label">
          Hashtag
        </label>
        <input type="text" ref={tagsElement} class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
