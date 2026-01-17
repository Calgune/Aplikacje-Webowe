import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./components/Blog";
import Article from "./components/Article";
import Dodaj from "./components/Dodaj";
import Licznik from "./components/Licznik";

function App() {
  return (
    <BrowserRouter>
      <Licznik></Licznik>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Strona główna</Link> |{" "}
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Witaj na blogu!</h1>
              <Link to="/blog">Przejdź do bloga</Link>
            </div>
          }
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/dodaj" element={<Dodaj />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
