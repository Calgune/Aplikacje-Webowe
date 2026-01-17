import { useState } from "react";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

function Komentarz({
  id,
  body,
  postId,
  likes: initialLikes,
  user,
}: KomentarzProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  const like = () => {
    setLikes((prev) => prev + 1);
  };

  const dislike = () => {
    setLikes((prev) => prev - 1);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <div>
        <strong>{user.fullName}</strong> (@{user.username})
      </div>

      <p>{body}</p>

      <small>Post ID: {postId}</small>

      <div style={{ marginTop: "8px" }}>
        <button onClick={dislike}>👎</button>
        <span style={{ margin: "0 10px" }}>{likes}</span>
        <button onClick={like}>👍</button>
      </div>
    </div>
  );
}

export default Komentarz;
