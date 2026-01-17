import { useState } from "react";
import Dodawanie from "./Dodawanie";

export interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function StudentManager() {
  const [students, setStudents] = useState<Student[]>([
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 1999 },
    { imie: "Anna", nazwisko: "Nowak", rocznik: 2000 },
    { imie: "Piotr", nazwisko: "Wiśniewski", rocznik: 1998 },
  ]);

  const dodajStudenta = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div>
      <h2>Student Manager</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dodawanie onDodaj={dodajStudenta} />
    </div>
  );
}

export default StudentManager;
