import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavbarOne from "../CurdOerators/Navbarone";

export default function Admininstitute() {
  const [take, setTake] = useState([]);
  let navigate = useNavigate();
  let parms = useParams();
  console.log(take);
  let getinstitute = async () => {
    try {
      let two = await axios.get(`http://localhost:8080/fetchinstitute`);
      setTake(two.data);
    } catch (error) {
      console.log(error);
    }
  };
  let hello = () => {
    navigate("/");
  };

  useEffect(() => {
    getinstitute();
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
              <h3>Institute Name: {item.instituteName}</h3>
              <h3>Institute Desc: {item.instituteDescription}</h3>
              <h3>Address: {item.address}</h3>
              <h3>MobileNo: {item.mobilenumber}</h3>
              <h3>Email: {item.email}</h3>
              <Link to={`/admincourse/${item.id}`}>
                <Button onClick={hello} bgColor={"black"} color={"white"}>
                  DELETE
                </Button>
                </Link>
                <Button onClick={hello} bgColor={"black"} color={"white"}>
                  Edit
                </Button>
                
                
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
