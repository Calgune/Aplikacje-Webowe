import { useState } from "react";

function Haslo() {
  const [haslo, setHaslo] = useState<string>("");
  const [powtorzHaslo, setPowtorzHaslo] = useState<string>("");

  let komunikat = "";

  if (!haslo && !powtorzHaslo) {
    komunikat = "Proszę wprowadzić hasło";
  } else if (haslo !== powtorzHaslo) {
    komunikat = "Hasła nie są zgodne";
  }

  return (
    <div>
      <div>
        <label>Hasło</label>
        <input
          type="text"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        />
      </div>

      <div>
        <label>Powtórz Hasło</label>
        <input
          type="text"
          value={powtorzHaslo}
          onChange={(e) => setPowtorzHaslo(e.target.value)}
        />
      </div>

      <div>{komunikat}</div>
    </div>
  );
}

export default Haslo;
