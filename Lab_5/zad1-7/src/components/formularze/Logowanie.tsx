import { useState } from "react";

function Logowanie() {
  const [login, setLogin] = useState<string>("");
  const [haslo, setHaslo] = useState<string>("");
  const [powtorzHaslo, setPowtorzHaslo] = useState<string>("");

  const wszystkiePolaWypelnione = login && haslo && powtorzHaslo;
  const haslaZgodne = haslo === powtorzHaslo;

  const handleClick = () => {
    if (!haslaZgodne) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano poprawnie");
    }
  };

  return (
    <div>
      <div>
        <label>Nazwa użytkownika</label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>

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

      <button
        disabled={!wszystkiePolaWypelnione}
        onClick={handleClick}
      >
        Logowanie
      </button>
    </div>
  );
}

export default Logowanie;
