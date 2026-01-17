type ProduktProps = {
  nazwa: string;
};

function Produkt({ nazwa }: ProduktProps) {
  return <li>{nazwa}</li>;
}

export default Produkt;