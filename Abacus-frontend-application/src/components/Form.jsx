import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

import "./main.css";

let initialState = {
  firstname: "",
  lastName: "",
  fatherName: "",
  motherName: "",
  email: "",
  mobileNumber: "",
  alternateNumber: "",
  maleorFemale: "",
  age: "",
  houseNumber: "",
  areaName: "",
  pinCode: "",
  streetName: "",
  state: "",
  nationality: "",
};
export default function Addstudent() {
  const [academy, setAcademy] = useState(initialState);
  const [take, setTake] = useState([]);
  console.log(take);
  let handling = (e) => {
    const { name, value } = e.target;
    setAcademy({ ...academy, [name]: value });
  };
  let submitAcademyData = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:8080/student/addstudent`, academy);
    console.log(academy);
  };
  let newfunction = async () => {
    await axios
      .get(`http://localhost:8080/student/addstudent`)
      .then((res) => {
        setTake(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  useEffect(() => {
    newfunction();
  }, []);
  return (
    <Box
      m={"auto"}
      mt={"20px"}
      backgroundColor={"lightgrey"}
      width={"900px"}
      height={"570px"}
      borderRadius={"7px"}
    >
      <Box bg="purple" w="100%" p={4} color="white" textAlign={"center"}>
        <ButtonGroup
          variant="link"
          HStack
          spacing="24px"
          fontFamily={"sans-serif"}
          fontWeight="extrabold"
          textAlign={"center"}
        >
          <Button colorScheme="white" alignSelf={"center"}>
            Acadamey{" "}
          </Button>
          <Button colorScheme="white" alignSelf={"center"}>
            Course{" "}
          </Button>
          <Button colorScheme="white" alignSelf={"center"} fontSize={20}>
            Students{" "}
          </Button>
          <Link to={"/login"}>
            <Button colorScheme="white" flex={"right"}>
              <Link to={"/login"}>Logout </Link>
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
      <div>
        <form onSubmit={submitAcademyData}>
          <div>
            <input
              id="firstName"
              type="text"
              value={academy.firstName}
              placeholder="Enter the firstname"
              onChange={handling}
              name="firstName"
              required
            />
            <input
              id="lastName"
              type="text"
              value={academy.lastName}
              placeholder="Enter the lastname"
              onChange={handling}
              name="lastName"
              required
            />
            <input
              id="fatherName"
              type="text"
              value={academy.fatherName}
              placeholder="Enter the fathername"
              onChange={handling}
              name="fatherName"
              required
            />
            <input
              id="motherName"
              type="text"
              value={academy.motherName}
              placeholder="Enter the mothername"
              onChange={handling}
              name="motherName"
              required
            />

            <input
              id="email"
              type="email"
              value={academy.email}
              placeholder="Enter the emailid"
              onChange={handling}
              name="email"
            />

            <input
              id="mobileNumber"
              type="number"
              value={academy.mobileNumber}
              placeholder="Enter the contactnumber"
              onChange={handling}
              name="mobileNumber"
            />

            <input
              id="alternateNumber"
              type="number"
              value={academy.alternateNumber}
              placeholder="Enter the alternate number"
              onChange={handling}
              name="alternateNumber"
            />

            <input
              id="maleorFemale"
              type="text"
              value={academy.maleorFemale}
              placeholder="Enter male or female"
              onChange={handling}
              name="maleorFemale"
            />

            <input
              id="age"
              type="number"
              value={academy.age}
              placeholder="Enter the age"
              onChange={handling}
              name="age"
            />
          </div>
        </form>
      </div>
    </Box>
  );
}
