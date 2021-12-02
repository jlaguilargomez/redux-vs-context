const Article = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};

export default Article;
