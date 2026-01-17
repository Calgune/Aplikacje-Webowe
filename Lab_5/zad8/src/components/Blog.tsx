import { Link } from "react-router-dom";
import type { Article } from "./types";

function Blog() {
  const articles: Article[] = JSON.parse(
    localStorage.getItem("articles") || "[]"
  );

  return (
    <div>
      <h2>Blog</h2>

      {articles.length === 0 && <p>Brak artykułów</p>}

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>

      <Link to="/dodaj">Dodaj artykuł</Link>
    </div>
  );
}

export default Blog;
