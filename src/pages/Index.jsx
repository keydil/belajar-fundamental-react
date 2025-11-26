import postsData from "../posts.json";
import Article from "../components/Arcticle.jsx";
import { useEffect, useState } from "react";
import Search from "../components/Search.jsx";

function Homepage({ name }) {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    useEffect(() => {
        console.log("ada posts baru");
    });
    
  return (
    <div>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (   
        <Article {...props} key={index} name={name} />
      ))}
      <hr />
      <h2>External Posts</h2>
      
    </div>
  );
}

export default Homepage;