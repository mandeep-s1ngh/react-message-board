import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList(props) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            onAuthorChange={handleAuthorChange}
            onCommentChange={handleCommentChange}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post name={author} body={comment} />
        <Post name="Mandeep" body="I love React.js" />
      </ul>
    </>
  );
}

export default PostsList;
