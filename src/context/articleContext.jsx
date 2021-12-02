import { createContext, useState, useReducer } from "react";
import { reducer } from "src/reducer/reducer";

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
  const [articles, dispatch] = useReducer(reducer, baseArticles);
  // const [articles, setArticles] = useState(baseArticles);

  // const saveArticle = (article) => {
  //   setArticles((articles) => [
  //     ...articles,
  //     { ...article, id: Math.random() * 1 },
  //   ]);
  // };

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
