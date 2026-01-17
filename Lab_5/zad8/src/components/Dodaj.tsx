import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Article } from "./types";

function Dodaj() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const dodajArtykul = () => {
    if (!title || !content) return;

    const articles: Article[] = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );

    const newArticle: Article = {
      id: Date.now(),
      title,
      content,
    };

    localStorage.setItem(
      "articles",
      JSON.stringify([...articles, newArticle])
    );

    navigate("/blog");
  };

  return (
    <div>
      <h2>Dodaj artykuł</h2>

      <input
        type="text"
        placeholder="Tytuł"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Treść"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button onClick={dodajArtykul}>DODAJ</button>
    </div>
  );
}

export default Dodaj;
