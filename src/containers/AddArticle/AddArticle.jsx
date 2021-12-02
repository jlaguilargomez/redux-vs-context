import { useState, useContext } from "react";
import { ArticleContext } from "src/context/articleContext";

const initArticle = {
  title: "",
  body: "",
};

const AddArticle = () => {
  const [newArticle, setNewArticle] = useState(initArticle);
  const { dispatch } = useContext(ArticleContext);

  const handleArticleData = (e) => {
    setNewArticle((article) => {
      return { ...article, [e.target.name]: e.target.value };
    });
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    console.log(newArticle);
    dispatch({ type: "ADD_ARTICLE", payload: newArticle });
  };

  return (
    <form onSubmit={addNewArticle}>
      <input
        type="text"
        name="title"
        id="title"
        value={newArticle.title}
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        name="body"
        id="body"
        value={newArticle.body}
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};

export default AddArticle;
