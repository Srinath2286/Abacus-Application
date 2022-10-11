import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarOne from "../CurdOerators/Navbarone";

export default function StudentAdmission() {
  const [take, setTake] = useState([]);
  let navigate = useNavigate();
  let parms = useParams();
  console.log(take);
  let getstudent = async () => {
    try {
      let two = await axios.get(`http://localhost:8080/viewadmission`);
      setTake(two.data);
    } catch (error) {
      console.log(error);
    }
  };
  let hello = () => {
    navigate("/");
  };

  useEffect(() => {
    getstudent();
  }, []);

  return (
    <Box>
      
      <br />
      <br />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid black",
            flexWrap: "wrap",
          }}
        >
          {take.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                borderRadius: "10px",
                fontSize: "18px",
                
                fontFamily: "serif",
                margin: "10px",
                padding: "20px",
              }}
            >
              <h1>Student Name: {item.studentName}</h1>
              <h2>Student DOB: {item.studentDOB}</h2>
              <h2>Address: {item.address}</h2>
              <h2>Mobile No: {item.mobilenumber}</h2>
              <h2>Age: {item.age}</h2>
              <h2>Gender: {item.gender}</h2>
              <h2>Course Name: {item.coursename}</h2>
              <Link to={`/admincourse/${item.id}`}>
                <Button onClick={hello} bgColor={"black"} color={"white"}>
                  DELETE
                </Button>
                </Link>
                <Link to={`/Form`}>
                <Button onClick={hello} bgColor={"black"} color={"white"}>
                  Edit
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
