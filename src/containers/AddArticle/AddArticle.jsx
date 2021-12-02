import { useState, useContext } from "react";
import { ArticleContext } from "src/context/articleContext";

const initForm = {
  title: "",
  body: "",
};

const AddArticle = () => {
  const [form, setForm] = useState(initForm);
  const { saveArticle } = useContext(ArticleContext);

  const handleArticleData = (e) => {
    setForm((formVal) => {
      return { ...formVal, [e.target.name]: e.target.value };
    });
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    saveArticle(form);
  };

  return (
    <form onSubmit={addNewArticle}>
      <input
        type="text"
        name="title"
        id="title"
        value={form.title}
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        name="body"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  );
};

export default AddArticle;
