import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function AllPosts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default AllPosts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const responseData = await response.json();
  return responseData.posts;
}
