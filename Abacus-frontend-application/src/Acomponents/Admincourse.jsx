import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarOne from "../CurdOerators/Navbarone";

export default function Admincourse() {
  
  const [take, setTake] = useState([]);
  let navigate = useNavigate();
  let parms = useParams();
  console.log(take);
  let funone = async () => {
    try {
      let two = await axios.get("http://localhost:8080/viewcourse");
      setTake(two.data);
      console.log(two)
    } catch (error) {
      console.log(error);
    }
  };
  let hello = () => {
    navigate("/");
  };

  useEffect(() => {
    funone();
   
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
              <h1>{item.courseName}</h1>
              <h2>{item.courseDuration}</h2>
              <h2>⌚{item.courseTime}</h2>
              <h2>{item.courseDescription}</h2>
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
