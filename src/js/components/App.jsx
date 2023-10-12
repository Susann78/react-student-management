import "../../css/App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { studentData } from "../service/data";

// Import der Seiten
import StudentsOverview from '../pages/StudentsOverview';
import NewStudent from "../pages/NewStudent";
import StudentDetails from "../pages/StudentDetails";

function App() {

  const [students, setStudent] = useState(studentData);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Route fuer Uebersichtsansicht aller Studenten / Startseite*/}
          <Route path="/" element={<StudentsOverview students={students} setStudent={setStudent} />} />
          {/* Route fuer die Detail-/Einzelansicht eines bestimmten Studenteneintrags */}
          <Route path={`students/:studentId`} element={<StudentDetails students={students} />} />
          {/* Route fuer Formular zum Eintragen neuer Studenten */}
          <Route path={`students/create`} element={<NewStudent students={students} setStudent={setStudent} />} />;
          {/* Route fuer Fehlermeldung bei nicht definierter URL */}
          <Route path="*" element={<h1>404 - Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
