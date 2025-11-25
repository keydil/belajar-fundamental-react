import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const SearchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <div>
      <div>
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={SearchKeyDown}
        ></input>
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </div>
  );
}

export default Search;
