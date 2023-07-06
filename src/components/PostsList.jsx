import { useLoaderData } from "react-router-dom";
import SinglePost from "./SinglePost";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <SinglePost
              key={post.id}
              name={post.authorOfPost}
              body={post.textInsidePost}
              id={post.id}
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
