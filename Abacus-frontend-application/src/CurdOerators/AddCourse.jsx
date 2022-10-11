import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./m.css";
import NavbarOne from "./Navbarone";
let initial = {
  courseName: "",
  courseDescription: "",
  courseDuration: "",
  noofStudents: "",
  courseTime: "",
};
export default function AddCourse() {
  const [course, setcourse] = useState(initial);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setcourse({ ...course, [name]: value });
  };
  let datasubmit = async (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/course/addcourse`, course);
  };
  return (
    <div>
      <NavbarOne /><br />
      <form onSubmit={datasubmit}>
        <input id="courseName"
          type="text"
          value={course.courseName}
          placeholder="Enter Your Course name "
          name="courseName"
          onChange={handleChange}
          required
        />
        <input id="courseDescription"
          type={"text"}
          value={course.courseDescription}
          placeholder="Enter Your coursedescription "
          name="courseDescription"
          onChange={handleChange}
          required
        />
        <input id="courseDuration"
          type="text"
          value={course.courseDuration}
          placeholder="Enter Your  courseDuration"
          name="courseDuration"
          onChange={handleChange}
          required
        />
        <input id="noofStudents"
          type="number"
          value={course.noofStudents}
          placeholder="Enter Your no of students enrolled "
          name="noofStudents"
          onChange={handleChange}
          required
        />

        <input id="courseTime"
          type="text"
          value={course.courseTime}
          placeholder="Enter Your coursetime "
          name="courseTime"
          onChange={handleChange}
          required
        />
        <input type="submit" value={"ADD_DATA"} />
      </form>
      <Link
        style={{ marginLeft: "580px", marginTop: "20px" }}
        to={"/admincourse"}
      >
        <Button bgColor={"black"} color={"white"}>View-Course</Button>
      </Link>
    </div>
  );
}
