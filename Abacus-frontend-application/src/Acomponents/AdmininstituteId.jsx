import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import hello from "../assets/deletedproducts.svg";
export default function Admininstituteid() {
  const [take, setTake] = useState({});
  let parms = useParams();
  let funtwo = async () => {
    try {
      axios.delete(`http://localhost:8080/deleteinstitute/${parms.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    funtwo();
  }, []);
  return (
    <div>
      <div
        style={{
          margin: "auto",
        }}
      >
        <img
          src={hello}
          width={"400px"}
          height={"400px"}
          style={{ margin: "auto", marginTop: "50px" }}
        />
        <br />
        <br />
        <Link to={"/admininstituteid"}>
          <br />
          <Button bgColor={"black"} color={"white"} ml={"600px"}>
            Admin-academy
          </Button>
        </Link>
      </div>
    </div>
  );
}