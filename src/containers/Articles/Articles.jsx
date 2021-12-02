import { useState } from "react";
import Article from "src/containers/Article/Article";

const baseArticles = [
  {
    id: 1,
    title: "post 1",
    body: "Quisque cursus, metus vitae pharetra",
  },
  {
    id: 2,
    title: "post 2",
    body: "Quisque cursus, metus vitae pharetra",
  },
];

const Articles = () => {
  const [articles, setArticles] = useState(baseArticles);

  return (
    <div>
      {articles.map((article, i) => (
        <Article key={i} article={article} />
      ))}
    </div>
  );
};

export default Articles;
