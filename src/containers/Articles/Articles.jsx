import { useContext } from "react";
import Article from "src/containers/Article/Article";

import { ArticleContext } from "src/context/articleContext";

const Articles = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
