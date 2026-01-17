import { useEffect, useState } from "react";
import Komentarz from "./Komentarz";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzType {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

function Komentarze() {
  const [komentarze, setKomentarze] = useState<KomentarzType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setKomentarze(data.comments);
      });
  }, []);

  return (
    <div>
      <h2>Komentarze</h2>

      {komentarze.map((komentarz) => (
        <Komentarz
          key={komentarz.id}
          id={komentarz.id}
          body={komentarz.body}
          postId={komentarz.postId}
          likes={komentarz.likes}
          user={komentarz.user}
        />
      ))}
    </div>
  );
}

export default Komentarze;
