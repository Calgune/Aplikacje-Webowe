import { useState } from "react";

type Produkt = {
  nazwa: string;
  cena: number;
};

function Aktualizacja() {
  const [produkt, setProdukt] = useState<Produkt>({
    nazwa: "Pomidor",
    cena: 50,
  });

  const zmienCene = () => {
    setProdukt((prev) => ({
      ...prev,
      cena: 100,
    }));
  };

  return (
    <div>
      <div>
        Aktualnie {produkt.nazwa} kosztuje {produkt.cena}
      </div>

      <button onClick={zmienCene}>Zmień cenę</button>
    </div>
  );
}

export default Aktualizacja;
