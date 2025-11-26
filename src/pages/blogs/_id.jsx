import { useLoaderData } from "react-router-dom";

function SinglePost() {
    const post = useLoaderData();

  return (
    <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
    </div>
  );        
}

export default SinglePost;