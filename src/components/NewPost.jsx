import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
      <p>
        <label htmlFor="body">Comment</label>
        <textarea
          id="body"
          rows={3}
          required
          onChange={props.onCommentChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
