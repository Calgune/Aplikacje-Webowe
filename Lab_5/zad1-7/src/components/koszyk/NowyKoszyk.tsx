import Produkt from "./Produkt";

const Produkty: string[] = [
  "Jabłko",
  "Gruszka",
  "Banan",
  "Pomarańcza",
  "Winogrona",
];

function NowyKoszyk() {
  return (
    <div>
      <h2>Nowy koszyk</h2>
      <ul>
        {Produkty.map((produkt) => (
          <Produkt nazwa={produkt} />
        ))}
      </ul>
    </div>
  );
}

export default NowyKoszyk;
