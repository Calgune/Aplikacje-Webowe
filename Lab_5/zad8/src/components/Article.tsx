import { useParams } from "react-router-dom";
import type { Article } from "./types";

function Article() {
  const { id } = useParams();

  const articles: Article[] = JSON.parse(
    localStorage.getItem("articles") || "[]"
  );

  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <p>Artykuł nie istnieje</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
