import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import hello from "../assets/deletedproducts.svg";
export default function AdminoneId() {
  const [course, setcourse] = useState({});
  console.log(course);
  let usen = useNavigate();
  let parms = useParams();
  let deletecourse = async () => {
    try {
      axios.delete(`http://localhost:8000/?deletecourse/${parms.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    deletecourse();
  }, [1]);
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
        <Link to={"/admincourse"}>
          <br />
          <Button bgColor={"black"} color={"white"} ml={"600px"}>
            AdminCourse
          </Button>
        </Link>
        <br />
        <br />
        <Link to={"/adminacademy"}>
          <br />
          <Button bgColor={"black"} color={"white"} ml={"600px"}>
            Admin-academy
          </Button>
        </Link>
      </div>
    </div>
  );
}
