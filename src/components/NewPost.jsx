import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmittedForm = (event) => {
    event.preventDefault();
    const postData = {
      authorOfPost: author,
      commentOfPost: comment,
    };
    props.onPosting(postData);
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmittedForm}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleAuthorChange} />
      </p>
      <p>
        <label htmlFor="body">Comment</label>
        <textarea id="body" rows={3} required onChange={handleCommentChange} />
      </p>
      <p className={classes.actions}>
        <button>Submit</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </p>
    </form>
  );
}

export default NewPost;
