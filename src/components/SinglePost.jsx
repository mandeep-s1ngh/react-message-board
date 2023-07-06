import { Link } from "react-router-dom";
import classes from "./SinglePost.module.css";

function SinglePost(props) {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.name}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </li>
  );
}

export default SinglePost;
