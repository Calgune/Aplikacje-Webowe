import { useState } from "react";
import Przycisk from "./Przycisk";

function NowyLicznik() {
  const [licznik, setLicznik] = useState<number>(0);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <Przycisk onClick={dodaj} />
    </div>
  );
}

export default NowyLicznik;
