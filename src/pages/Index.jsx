import posts from "../posts.json";
import Article from "../components/Arcticle";

function Homepage() {
  return (
    <div>
      <h1>Simple Blog</h1>
      {posts.map((blog) => (
        <Article title={blog.title} tags={blog.tags} author={blog.author} date={blog.date} />      
      ))}
    </div>
  );
}

export default Homepage;