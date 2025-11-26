import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((item, index) => (
        <div key={index}>
            <Link to={`/blog/${item.id}`}>-{item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
