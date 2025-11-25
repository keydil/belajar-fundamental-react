function Article() {
    const name = "Fadhil";
    const tittles = ["React Fundamental", "Penggunaan React.js", "React Router"];

    // titles.map((item => item)
  return (
    <div>
      <h1>{name}</h1>
      <div>
        {tittles.map((title) => {
            return (
            <div>
                <div>{title}</div>
                <div>{title}</div>
            </div>
            )
        })}
        </div>
    </div>
  );
}

export default Article;