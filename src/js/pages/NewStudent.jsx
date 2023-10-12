import "../../css/App.scss";
import "../../css/student.scss";

import StudentForm from "../components/StudentForm";


function NewStudent({ students, setStudent }) {

     const addStudent = (newStudent) => {
        setStudent((previousStudent) => [...previousStudent, newStudent])  
         
      };

     
    return (
        <div className="app">
          <h1>Add New Student</h1>
    
          <section className="form-wrapper">
          <div>
            <StudentForm addStudent={addStudent} students={students}/>
          </div>
          </section>
        </div>
      );
}

export default NewStudent;