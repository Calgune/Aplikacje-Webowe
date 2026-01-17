import Produkt from "./Produkt";

function Koszyk() {
  return (
    <div>
      <h2>Koszyk</h2>
      <ul>
        <Produkt nazwa="Jabłko" />
        <Produkt nazwa="Gruszka" />
        <Produkt nazwa="Banan" />
        <Produkt nazwa="Pomarańcza" />
        <Produkt nazwa="Winogrona" />
      </ul>
    </div>
  );
}

export default Koszyk;
