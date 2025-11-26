import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((item, index) => (
        <div key={index}>
            <Link to={`/blog/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
