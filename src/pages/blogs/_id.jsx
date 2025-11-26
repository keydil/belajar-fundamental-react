import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
    const param = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, []);

  return (
    <div>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
    </div>
  );        
}

export default SinglePost;