import { useState, useEffect } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList(props) {
  const [posts, setPosts] = useState([]);
  const [fetchingPosts, setFetchingPosts] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setFetchingPosts(true);
      const response = await fetch("http://localhost:8080/posts");
      const responseData = await response.json();
      setPosts(responseData.posts);
      setFetchingPosts(false);
    }

    fetchPosts();
  }, []);

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onPosting={addPostHandler} />
        </Modal>
      ) : null}

      {!fetchingPosts && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.commentOfPost}
              name={post.authorOfPost}
              body={post.commentOfPost}
            />
          ))}
        </ul>
      )}

      {!fetchingPosts && posts.length === 0 && (
        <div className={classes.noPosts}>
          <h1>There are no posts yet...</h1>
          <p>Start adding some!</p>
        </div>
      )}

      {fetchingPosts && (
        <div className={classes.loadingPosts}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
