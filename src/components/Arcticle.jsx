function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <small> Date : {props.date}, tag: {props.tags.join(", ")}, author: {props.author}</small>
    </div>
  );
}

export default Article;