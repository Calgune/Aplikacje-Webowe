import { useState } from "react";
import type { Student } from "./StudentManager";

type DodawanieProps = {
  onDodaj: (student: Student) => void;
};

function Dodawanie({ onDodaj }: DodawanieProps) {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState("");

  const handleSubmit = () => {
    if (!imie || !nazwisko || !rocznik) {
      alert("Wszystkie pola muszą być wypełnione");
      return;
    }

    const rocznikNumber = Number(rocznik);

    if (isNaN(rocznikNumber)) {
      alert("Rocznik musi być liczbą");
      return;
    }

    onDodaj({
      imie,
      nazwisko,
      rocznik: rocznikNumber,
    });

    setImie("");
    setNazwisko("");
    setRocznik("");
  };

  return (
    <div>
      <h3>Dodaj studenta</h3>

      <input
        type="text"
        placeholder="Imię"
        value={imie}
        onChange={(e) => setImie(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nazwisko"
        value={nazwisko}
        onChange={(e) => setNazwisko(e.target.value)}
      />

      <input
        type="text"
        placeholder="Rocznik"
        value={rocznik}
        onChange={(e) => setRocznik(e.target.value)}
      />

      <button onClick={handleSubmit}>Dodaj</button>
    </div>
  );
}

export default Dodawanie;
