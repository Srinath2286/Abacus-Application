import { Button,ButtonGroup,Box } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
//import "./m.css";

let initial = {
  studentName: "",
  studentDOB: "",
  address: "",
  mobilenumber: "",
  age: "",
  gender: "",
 

};
export default function AddStudent() {
  const [student, setstudent] = useState(initial);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setstudent({ ...student, [name]: value });
  };
  let datasubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/addadmission`, student);
  };
  return (
    <Box bg="lightgrey" w="100%" height={"720px"} p={4} color="black" textAlign={"center"} >
      <ButtonGroup
          variant="link"
          HStack
          spacing="5"
          align="center"
          fontFamily={"sans-serif"}
          fontWeight="extrabold"
        >
          <Link to={"/home"}>
            <Button colorScheme="white">HOME</Button>
          </Link>
          <Button colorScheme="white"> ACADEMY</Button>

          <Link to={"/Courseenrolled"}>
            <Button colorScheme="white">
              <Link to={"/Courseenrolled"}> ENROLLED COURESES</Link>
            </Button>
          </Link>
          
        </ButtonGroup>
      
      
    <div>
      
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
        <input id="gender"
          type="text"
          value={student.gender}
          placeholder="Enter your gender "
          name="gender"
          onChange={handleChange}
          required
        />
        
        <input type="submit" value={"ADD-DATA"} />
      </form>

      <Link
        style={{ marginLeft: "600px", marginTop: "20px" }}
        to={"/studentadmission"}
      >
        <Button bgColor={"black"} color={"white"}>
          View-Admission
        </Button>
      </Link>
    </div>
    </Box>
  );
}