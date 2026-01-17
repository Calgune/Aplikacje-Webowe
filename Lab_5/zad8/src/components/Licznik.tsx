import { useEffect, useState } from "react";

function Licznik() {
  const [licznik, setLicznik] = useState<number>(() => {
    const zapisany = localStorage.getItem("licznik");
    return zapisany ? Number(zapisany) : 0;
  });

  const dodaj = () => {
    setLicznik((prev) => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem("licznik", licznik.toString());
  }, [licznik]);

  return (
    <div>
      <h2>Licznik: {licznik}</h2>
      <button onClick={dodaj}>Dodaj</button>
    </div>
  );
}

export default Licznik;
