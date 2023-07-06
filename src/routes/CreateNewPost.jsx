import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./CreateNewPost.module.css";

function CreateNewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="authorOfPost" required />
        </p>
        <p>
          <label htmlFor="body">Message</label>
          <textarea id="body" name="textInsidePost" rows={3} required />
        </p>
        <p className={classes.actions}>
          <button>Submit</button>
          <Link to=".." className={classes.cancel}>
            Cancel
          </Link>
        </p>
      </Form>
    </Modal>
  );
}

export default CreateNewPost;

export async function action(context) {
  const formData = await context.request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json",
    },
  });
  return redirect("/");
}
