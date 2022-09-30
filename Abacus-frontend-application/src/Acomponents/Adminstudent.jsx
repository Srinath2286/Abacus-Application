import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarOne from "../CurdOerators/Navbarone";

export default function Adminstudent() {
  const [take, setTake] = useState([]);
  let navigate = useNavigate();
  let parms = useParams();
  console.log(take);
  let getstudent = async () => {
    try {
      let two = await axios.get(`http://localhost:8080/viewstudent`);
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
      <NavbarOne />
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
                fontWeight: "bold",
                fontFamily: "serif",
                margin: "10px",
                padding: "20px",
              }}
            >
              <h1>{item.studentName}</h1>
              <h2>{item.studentDOB}</h2>
              <h2>{item.address}</h2>
              <h2>{item.mobilenumber}</h2>
              <h2>{item.age}</h2>
              <Link to={`/admincourse/${item.id}`}>
                <Button onClick={hello} bgColor={"black"} color={"white"}>
                  DELETE
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
