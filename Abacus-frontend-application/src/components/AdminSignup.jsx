import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, FormControl, HStack, Stack } from "@chakra-ui/react";

import { blue } from "@mui/material/colors";

let initialState = {
  userRole: "",
  email: "",
  userName: "",
  mobileMumber: "",
  password: "",
  conformpassword: "",
};
export default function AdminSignup() {
  const [academy, setAcademy] = useState(initialState);
  const [take, setTake] = useState([]);
  console.log(take);
  let handling = (e) => {
    const { name, value } = e.target;
    setAcademy({ ...academy, [name]: value });
  };
  const navigate = useNavigate();
  let array = JSON.parse(localStorage.getItem("userdata")) || {};
  let submitLoginData = async (event) => {
    event.preventDefault();
    array = { ...academy };
    localStorage.setItem("userdata", JSON.stringify(array));
    await axios.post(`http://localhost:8080/adminregister`, academy);
    console.log(academy);
    navigate("/adminlogin");
  };

  
  return (
    <div>
      <Box
        bg="brown"
        w="100%"
        height={"90px"}
        p={4}
        color="white"
        fontSize={"15"}
        fontFamily="sans-serif"
        fontWeight={"extrabold"}
        textAlign={"center"}
      >
        <Button colorScheme="white" float={"right"}>
          <Link to={"/adminlogin"}>Login </Link>
        </Button>
        <Button colorScheme="white" float={"right"}>
          <Link to={"/adminsignup"}>Signup </Link>
        </Button>
        <Button colorScheme="white" float={"left"}>
          Abacus Academy Admission Portal{" "}
        </Button>
      </Box>
      <FormControl
        id="from-1"
        onSubmit={submitLoginData}
        textAlign={"center"}
        bgGradient="linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"
        padding={"50px"}
        borderRadius={"2px"}
        boxShadow={"20px"}
        isRequired
      >
        <stack spacing={3}>
          <div style={{ fontSize: 28, color: blue }}>
            <h1>SIGNUP</h1>
          </div>
          <Box>
            <div>
              <form id="from-1" onSubmit={submitLoginData}>
                <select name="userRole" onChange={handling}>
                  <option value={"choose"}>admin/user</option>
                  <option value="admin">admin</option>
                  <option value="user" disabled>user</option>
                </select>

                <input 
                  id="email"
                  type="email"
                  value={academy.email}
                  placeholder="Enter your email"
                  onChange={handling}
                  name="email"
                  required
                />
                <input
                  id="userName"
                  type="text"
                  value={academy.userName}
                  placeholder="Enter username"
                  onChange={handling}
                  name="userName"
                  required
                />
                <input
                  id="mobileMumber"
                  type="number"
                  value={academy.mobileMumber}
                  placeholder="Enter mobile number"
                  onChange={handling}
                  name="mobileMumber"
                  required
                />
                <input
                  id="password"
                  type="password"
                  value={academy.password}
                  placeholder="Enter password"
                  onChange={handling}
                  name="password"
                  required
                />
                <input
                  id="conformpassword"
                  type="password"
                  value={academy.conformpassword}
                  placeholder="conform password"
                  onChange={handling}
                  name="conformpassword"
                  required
                />

                <HStack>
                   
                  <input id="button1" type={"submit"} value={"SUBMIT"} />
                  
                  <Link to={"/adminlogin"}>
                    <input
                      style={{ width: "180px" }}
                      id="button2"
                      type={"submit"}
                      value={"Already user? Login"}
                    />
                  </Link>
                </HStack>
              </form>
              <br />
              <br />
              <br />
            </div>
          </Box>
        </stack>
      </FormControl>
    </div>
  );
}
