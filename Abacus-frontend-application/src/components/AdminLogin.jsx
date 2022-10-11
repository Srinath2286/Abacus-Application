import {
    Box,
    Button,
    Center,
    FormControl,
    Input,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React, { useContext, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { AuthLogin } from "../PrivateRoutes/ProtectedRoutes";
  let initial = {
    email: "",
    password: "",
  };
  export default function AdminLogin() {
    const [boom, setBoom] = useState(initial);
    const {isLogin,isLogout}=useContext(AuthLogin)
    let ravan = useNavigate(null);
    let handling = (e) => {
      const { name, value } = e.target;
      setBoom({ ...boom, [name]: value });
    };
  
    let array = JSON.parse(localStorage.getItem("userdata")) || {};
    let token=Math.random()*2747;
    let submitdata = (event) => {
      event.preventDefault();
      if (array.email === boom.email && array.password === boom.password) {
        alert(`login Succesful`);
        ravan("/adminacademy");
        isLogin(token)
      } else if (array.email !== boom.email) {
        alert(`provide correct email`);
        ravan("/adminlogin");
      } else if (array.password !== boom.password) {
        alert(`proide correct password`);
        ravan("/adminlogin");
      } else {
        alert(`login successful`);
        ravan("/adminacademy");
      }
    };
    let submitLoginData = async (event) => {
      event.preventDefault();
    };
  
    return (
      
      <div>
        <Box
          bg="brown"
          w="100%"
          height={"120px"}
          p={8}
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
          <Button colorScheme="white" float={"right"}>
            <Link to={"/adminlogin"}>Home </Link>
          </Button>
          <Button colorScheme="white" float={"left"}>
            Abacus Academy Admission Portal{" "}
          </Button>
        </Box>
        <FormControl
          id="hello"
          onSubmit={submitLoginData}
          textAlign={"center"}
          bgGradient="linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)"
          padding={"50px"}
          borderRadius={"2px"}
          isRequired
        >
          <Box width={"30%"} height={"490px"} margin="auto">
            <br />
            <br />
  
            <Text
              fontFamily={"sans-serif"}
              fontWeight={"bold"}
              fontSize={"30px"}
              textAlign="center"
            >
              {/* <Box bg="tomato" w="100%" p={1} color="white" borderRadius="7px" aligntext="center">
         LOGIN
         </Box> */}
            </Text>
            <Center>
              <FormControl
                textAlign={"center"}
                bgGradient="teal"
                padding={"50px"}
                borderRadius={"10px"}
                isRequired
              >
                <Stack spacing={3}>
                  <h1
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      fontSize: "20px",
                    }}
                  >
                    Login
                  </h1>
                  <Input
                    required
                    type={"email"}
                    name="email"
                    value={boom.email}
                    placeholder="Enter email"
                    onChange={handling}
                    borderColor={"green.500"}
                  />
                  <Input
                    required={true}
                    type={"password"}
                    name="password"
                    value={boom.password}
                    placeholder="Enter your password"
                    onChange={handling}
                    borderColor={"green.500"}
                  />
                  <Button colorScheme={"orange"} onClick={submitdata}>
                    LOGIN
                  </Button>
                  <br />
                  <Link to={"/adminsignup"}>
                    <Button colorScheme={"facebook"}>
                      New user/admin?Signup
                    </Button>
                  </Link>
                </Stack>
              </FormControl>
            </Center>
          </Box>
        </FormControl>
      </div>
      
    );
  }
  