import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post name="Mandeep" body="React.js is awesome" />
      <Post name="Manuel" body="I love using React.js" />
    </ul>
  );
}

export default PostsList;
