import posts from "../posts.json";
import Article from "../components/Arcticle";
import { useState } from "react";

function Homepage() {
    const [search, setSearch] = useState("");

    const changeSearch = (event) => {
        setSearch(event.target.value);
        
    };

  return (
    <div>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input onChange={changeSearch}></input>
        </div>
        <small>Ditemukan 0 data dengan pencarian kata {search}</small>
      {posts.map(({ title, tags, author, date }, index) => (   
        <Article {...{ title, tags, author, date }} key={index} />
      ))}
    </div>
  );
}

export default Homepage;