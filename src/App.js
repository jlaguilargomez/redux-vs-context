import Articles from "src/containers/Articles/Articles";
import "./App.css";
import AddArticle from "./containers/AddArticle/AddArticle";
import ArticleProvider from "./context/articleContext";

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}

export default App;
