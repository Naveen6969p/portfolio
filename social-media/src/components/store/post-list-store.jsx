import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts:() => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const postListReduceer = (currPostList, action) => {
    let newPosts = currPostList;
    if (action.type === "DELETE_POST") {
      newPosts = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    }

      else if (action.type === "ADD_INITAIAL_POSTS") {
        newPosts = action.payload.posts;
      

    } else if (action.type === "ADD_POST") {
      newPosts = [action.payload, ...currPostList];
    }
    return newPosts;
  };

  const addPost = (post) => {
   

    dispatchPostList({
      type: "ADD_POST",
      payload: {
      post,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITAIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(postListReduceer, []);

  return (
    <PostListData.Provider value={{ postList, addPost, addInitialPosts,deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
