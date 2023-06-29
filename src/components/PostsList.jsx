import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList(props) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onPosting={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.body}
              name={post.authorOfPost}
              body={post.commentOfPost}
            />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div className={classes.noPosts}>
          <h1>There are no posts yet...</h1>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
