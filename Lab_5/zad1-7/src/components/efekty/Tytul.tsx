import { useEffect, useState } from "react";

function Tytul() {
  const [tytul, setTytul] = useState<string>("");

  useEffect(() => {
    document.title = tytul || "Domyślny tytuł";
  }, [tytul]);

  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz tytuł strony"
        value={tytul}
        onChange={(e) => setTytul(e.target.value)}
      />
    </div>
  );
}

export default Tytul;
