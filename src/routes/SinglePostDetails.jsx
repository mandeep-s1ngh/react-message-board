import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./SinglePostDetails.module.css";

function SinglePostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.authorOfPost}</p>
        <p className={classes.text}>{post.textInsidePost}</p>
      </main>
    </Modal>
  );
}

export default SinglePostDetails;

export async function loader(loadContext) {
  const response = await fetch(
    "http://localhost:8080/posts/" + loadContext.params.postId
  );
  const responseData = await response.json();
  return responseData.post;
}
