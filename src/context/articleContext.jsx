import { createContext, useState } from "react";

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

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(baseArticles);

  const saveArticle = (article) => {
    console.log("pene", article);
  };

  return (
    <ArticleContext.Provider value={{ articles, saveArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
