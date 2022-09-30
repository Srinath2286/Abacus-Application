import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  HStack,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
let initail = {
  Enrollcourse: "",
};
export default function Admin() {
  const [text, setText] = useState(initail);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("/adminacademy");
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
      height={"500px"}
      borderRadius={"7px"}
    >
      <Box bg="tomato" w="100%" p={4} color="white" textAlign={"center"}>
        <ButtonGroup
          variant="link"
          HStack
          spacing="5"
          align="center"
          fontFamily={"sans-serif"}
          fontWeight="extrabold"
        >
          <Button colorScheme="white">
            <Link to={"/"}> Home </Link>
          </Button>
          <Button colorScheme="white"> Acadamey </Button>
          <Button colorScheme="white">Enrolled Course </Button>
        </ButtonGroup>
      </Box>
      <div
        style={{
          border: "3px solid lightgrey",
          width: "100%",
          height: "460px",
          overflow: "scroll",
        }}
        onScroll={handleScroll}
      >
        <FormControl w={"400px"} m={"auto"} border="none" textAlign={"center"}>
          <HStack spacing={4}></HStack>
        </FormControl>
        <br></br>
        <Box
          m={"auto"}
          mt={"5px"}
          backgroundColor={"green.200"}
          width={"400px"}
          height={"140px"}
          borderRadius={"7px"}
          padding={3}
        >
          <text>
            Course name :Doug Abacus <br></br>
            <br></br>
            Joined Date :DD/MM/YYYY <br></br>
            <br></br>
            Course End Date :DD/MM/YYYY
          </text>

          <br />
          <text>
            Course name :Doug Abacus <br></br>
            <br></br>
            Joined Date :DD/MM/YYYY <br></br>
            <br></br>
            Course End Date :DD/MM/YYYY
          </text>
          <br />
          <text>
            Course name :Doug Abacus <br></br>
            <br></br>
            Joined Date :DD/MM/YYYY <br></br>
            <br></br>
            Course End Date :DD/MM/YYYY
          </text>
          <br />
          <text>
            Course name :Doug Abacus <br></br>
            <br></br>
            Joined Date :DD/MM/YYYY <br></br>
            <br></br>
            Course End Date :DD/MM/YYYY
          </text>

          <Button
            borderRadius={"5px"}
            fontWeight={"bold"}
            color="white"
            bgColor={"red"}
            onClick={DataSubmit}
            h={"25px"}
            w={"100px"}
            float={"right"}
          >
            My learning
          </Button>
        </Box>
      </div>
    </Box>
  );
}
