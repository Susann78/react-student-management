import "../../css/App.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { genNewId } from "../service/data";


const initialState = {
  id: 0,
  name: "",
  birthdate: "",
  city: "",
  address: "",
  study: "",
  admission: "",
  level: ""
};

function StudentForm({ addStudent, students }) {
  const [formStudent, setFormStudent] = useState({ ...initialState });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormStudent((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
      id: genNewId(students),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formStudent);
    setFormStudent({ ...initialState });
    navigate(`/`);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <Input
          name="name"
          label="Name"
          value={formStudent.name}
          placeholder="Lala Miro"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="birthdate"
          label="Date of Birth"
          value={formStudent.birthdate}
          placeholder="12.5.1987"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="city"
          label="City"
          value={formStudent.city}
          placeholder="Paris"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="address"
          label="Address"
          value={formStudent.address}
          placeholder="15 rue Fénelon"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="email"
          label="Email"
          value={formStudent.email}
          placeholder="miro.lala@gmail.com"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="study"
          label="Study"
          value={formStudent.study}
          placeholder="Art"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="admission"
          label="Admission Date"
          value={formStudent.admission}
          placeholder="12.5.2005"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="level"
          label="Level"
          value={formStudent.level}
          placeholder="7th Grade"
          type="text"
          onChange={handleChange}
        />
      </div>
      <input className="form-button" type="submit" value="Add Student" />
   </form>
  );
}
export default StudentForm;
