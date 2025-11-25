const ArticleStatus = ({ isNew }) => {
  return isNew && <span>-- Baru !!!</span> ;
};

function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <small> Date : {props.date}, tag: {props.tags.join(", ")}, author: {props.author}
        <ArticleStatus isNew={props.isNew} />
      </small>
    </div>
  );
}

export default Article;