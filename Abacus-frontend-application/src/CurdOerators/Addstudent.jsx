import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./m.css";
import NavbarOne from "./Navbarone";
let initial = {
  studentName: "",
  studentDOB: "",
  address: "",
  mobilenumber: "",
  age: "",

};
export default function AddStudent() {
  const [student, setstudent] = useState(initial);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setstudent({ ...student, [name]: value });
  };
  let datasubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/addstudent`, student);
  };
  return (
    <div>
      <NavbarOne /><br />
      <form onSubmit={datasubmit}>
        <input id="studentName"
          type="text"
          value={student.studentName}
          placeholder="Enter Your Name "
          name="studentName"
          onChange={handleChange}
          required
        />
        <input id="studentDOB"
          type="date"
          value={student.studentDOB}
          placeholder="Enter Your DOB "
          name="studentDOB"
          onChange={handleChange}
          required
        />
        <input id="address"
          type="text"
          value={student.address}
          placeholder="Enter Your  address"
          name="address"
          onChange={handleChange}
          required
        />
        <input id="mobilenumber"
          type="number"
          value={student.mobilenumber}
          placeholder="Enter Your mobilenumber "
          name="mobilenumber"
          onChange={handleChange}
          required
        />
        <input id="age"
          type="number"
          value={student.age}
          placeholder="Enter Your age "
          name="age"
          onChange={handleChange}
          required
        />

        <input type="submit" value={"ADD-DATA"} />
      </form>

      <Link
        style={{ marginLeft: "600px", marginTop: "20px" }}
        to={"/adminstudent"}
      >
        <Button bgColor={"black"} color={"white"}>
          View-Student
        </Button>
      </Link>
    </div>
  );
}