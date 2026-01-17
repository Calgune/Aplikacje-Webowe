type PrzyciskProps = {
  onClick: () => void;
};

function Przycisk({ onClick }: PrzyciskProps) {
  return <button onClick={onClick}>Dodaj</button>;
}

export default Przycisk;
