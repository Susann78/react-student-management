import "../../css/App.scss";
import "../../css/student.scss";
import { Link } from "react-router-dom";

import StudentCard from "../components/Student";

function StudentsOverview({ students, setStudent }) {
     
      function handleRemove (id) {
        setStudent(students.filter((student) => student.id !== id));
      };
    
    return (
      <div className="app">
        <h1>Student Management</h1>
  
        <section className="students">
    {/* hier durchmappe ich meine Daten aus students und hole mir jedes einzelne Object mittels des Parameter student raus, den ich als prop für die Student.jsx weitergebe */}
          {students.map((student) => (
            // key:value -> student:student
            <StudentCard student={student} key={student.id} onRemove={handleRemove} />
          ))}
        </section>
        <div>
            <button className="button"><Link to="students/create">Add Student</Link></button>
        </div>
      </div>
    );
}

export default StudentsOverview;