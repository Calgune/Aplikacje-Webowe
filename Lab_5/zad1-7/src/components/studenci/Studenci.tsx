interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

const Students: Student[] = [
  { imie: "Jan", nazwisko: "Kowalski", rocznik: 1999 },
  { imie: "Anna", nazwisko: "Nowak", rocznik: 2000 },
  { imie: "Piotr", nazwisko: "Wiśniewski", rocznik: 1998 },
];

function Studenci() {
  return (
    <div>
      <h2>Lista studentów</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>

        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Studenci;
