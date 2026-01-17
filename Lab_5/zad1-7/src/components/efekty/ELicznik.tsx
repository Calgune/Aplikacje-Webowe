import { useEffect, useState } from "react";

function ELicznik() {
  const [licznik, setLicznik] = useState<number>(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    if (licznik > 0) {
      console.log(`Licznik zwiększył się do ${licznik}`);
    }
  }, [licznik]);

  const dodaj = () => {
    setLicznik(licznik + 1);
  };

  return (
    <div>
      <p>Licznik: {licznik}</p>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
}

export default ELicznik;
