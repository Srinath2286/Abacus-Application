import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
let initail = {
  Enrollcourse: "",
};
export default function Enrolledcourse() {
  const [text, setText] = useState(initail);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("/Form");
  };
  const handleScroll = (event) => {
    console.log("scrollTop: ", event.currentTarget.scrollTop);
    console.log("offsetHeight: ", event.currentTarget.offsetHeight);
  };

  return (
    <Box
      m={"auto"}
      mt={"20px"}
      backgroundColor={"lightgrey"}
      width={"900px"}
      height={"550px"}
      borderRadius={"7px"}
    >
      <Box bg="slateblue" w="100%" p={4} color="white" textAlign={"center"}>
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
      </Box>
      <br />
      <div
        style={{
          border: "3px solid lightgrey",
          width: "100%",
          height: "480px",
          overflow: "scroll",
        }}
        onScroll={handleScroll}
      >
        <FormControl w={"400px"} m={"auto"} border="none" textAlign={"center"}>
          <HStack spacing={4}>
            <Input
              type={"text"}
              value={text.Enrollcourse}
              name="search"
              placeholder={"Type here to search Course "}
              onChange={handling}
              bg={"white"}
              h={"45px"}
            />
            <Button
              borderRadius={"none"}
              fontWeight={"bold"}
              color="black"
              bgColor={"magenta"}
              onClick={DataSubmit}
              h={"38px"}
              w={"120px"}
            >
              Search
            </Button>
          </HStack>
        </FormControl>
        <br></br>

        <Box
          m={"auto"}
          mt={"5px"}
          backgroundColor={"green.200"}
          width={"600px"}
          height={"160px"}
          borderRadius={"5px"}
          padding={3}
          fontFamily="serif"
        >
          <text>
            Course name: Doug Abacus <br></br>
            Course Duration: 3months <br></br>
            Course Available Timing: 6am to 6pm <br></br>
            Number of Students: 222 <br></br>
            Course Description: yyyy
          </text>
          <Link to={"/Form"}>
            <Button
              color={"white"}
              bgColor={"black"}
              style={{ display: "flex", float: "right" }}
            >
              ENROLL NOW
            </Button>
          </Link>
        </Box>
        <br></br>
        <Box
          m={"auto"}
          mt={"5px"}
          backgroundColor={"green.200"}
          width={"600px"}
          height={"160px"}
          borderRadius={"5px"}
          padding={3}
          fontFamily="serif"
        >
          <text>
            Course name: Melissa & Doug Add Abacus <br></br>
            Course Duration: 3months <br></br>
            Course Available Timing: 6am to 6pm <br></br>
            Number of Students: 122 <br></br>
            Course Description: yyyy
          </text>
          <Link to={"/Form"}>
            <Button
              color={"white"}
              bgColor={"black"}
              style={{ display: "flex", float: "right" }}
            >
              ENROLL NOW
            </Button>
          </Link>
        </Box>
        <br />
        <Box
          m={"auto"}
          mt={"5px"}
          backgroundColor={"green.200"}
          width={"600px"}
          height={"160px"}
          borderRadius={"5px"}
          padding={3}
          fontFamily="serif"
        >
          <text>
            Course name: Melissa & Doug Add Abacus <br></br>
            Course Duration: 3months <br></br>
            Course Available Timing: 6am to 6pm <br></br>
            Number of Students: 122 <br></br>
            Course Description: yyyy
          </text>
          <Link to={"/Form"}>
            <Button
              color={"white"}
              bgColor={"black"}
              style={{ display: "flex", float: "right" }}
            >
              ENROLL NOW
            </Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
}
