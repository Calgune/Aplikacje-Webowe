import { useEffect, useState } from "react";

function Odliczanie() {
  const [czas, setCzas] = useState<number>(15.0);
  const [dziala, setDziala] = useState<boolean>(false);

  useEffect(() => {
    if (!dziala) return;

    const interval = setInterval(() => {
      setCzas((prev) => {
        if (prev <= 0.1) {
          clearInterval(interval);
          setDziala(false);
          return 0;
        }
        return Math.round((prev - 0.1) * 10) / 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [dziala]);

  const tekstPrzycisku =
    czas === 0 ? "Odliczanie zakończone" : dziala ? "STOP" : "START";

  return (
    <div>
      <div>{czas.toFixed(1)} sek</div>

      <button
        onClick={() => setDziala((prev) => !prev)}
        disabled={czas === 0}
      >
        {tekstPrzycisku}
      </button>
    </div>
  );
}

export default Odliczanie;
