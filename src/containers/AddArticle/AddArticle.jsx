import { useState } from "react";

const AddArticle = () => {
  const [article, setArticle] = useState();

  const handleArticleData = (e) => {
    console.log(e);
  };

  const addNewArticle = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={addNewArticle}>
      <input
        type="text"
        name="title"
        id="title"
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
