import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";

import Licznik from "./components/licznik/Licznik";
import NowyLicznik from "./components/licznik/NowyLicznik";

import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizcja";

import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";

import ELicznik from "./components/efekty/eLicznik";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";

import Komentarze from "./components/produkty/Komentarze";


function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Treść zadań 1–7</h1>

      <hr />
      <h2>Zadanie 1 – Koszyk</h2>
      <Koszyk />
      <NowyKoszyk />

      <hr />
      <h2>Zadanie 2 – Licznik</h2>
      <Licznik />
      <NowyLicznik />

      <hr />
      <h2>Zadanie 4 – Inne</h2>
      <Ternary />
      <Aktualizacja />

      <hr />
      <h2>Zadanie 5 – Studenci</h2>
      <Studenci />
      <StudentManager />

      <hr />
      <h2>Zadanie 6 – useEffect</h2>
      <ELicznik />
      <Tytul />
      <Odliczanie />

      <hr />
      <h2>Zadanie 7 – Komentarze (API)</h2>
      <Komentarze />
    </div>
  );
}

export default App;