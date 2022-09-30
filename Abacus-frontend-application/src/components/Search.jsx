import {
  Box,
  ButtonGroup,
  Button,
  FormControl,
  HStack,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavbarOne from "../CurdOerators/Navbarone";
let initail = {
  search: "",
};
export default function Homepage() {
  const [text, setText] = useState(initail);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("/enrolled");
  };

  return (
    <Box
      m={"auto"}
      mt={"30px"}
      backgroundColor={"lightgray"}
      width={"900px"}
      height={"550px"}
      borderRadius={"7px"}
    >
      
      <Box
        bg="tomato"
        w="100%"
        p={4}
        color="white"
        fontSize={"15"}
        fontFamily="sans-serif"
        fontWeight={"extrabold"}
        textAlign={"center"}
      >
        <ButtonGroup variant="link" Stack spacing="30">
          <Button colorScheme="white">Abacus academy </Button>
          <Button colorScheme="white">Academy </Button>

          <Button colorScheme="white">
            <Link to={"/Courseenrolled"}> Enrolled </Link>{" "}
          </Button>

          <Link to={"/login"}>
            <Button colorScheme="white" flex={"right"}>
              <Link to={"/login"}>Logout </Link>
            </Button>
          </Link>
        </ButtonGroup>
      </Box>

      <br />
      <br />
      <FormControl w={"400px"} m={"auto"} border="none" textAlign={"center"}>
        <HStack spacing={4}>
          <Input
            type={"text"}
            value={text.search}
            name="search"
            placeholder={"Type here to search Academy "}
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
      <Box mt={"60px"}>
        <HStack justify={"space-around"}>
          <Box p={"10px"} backgroundColor={"white"} borderRadius={"10px"}>
            <Img
              ml={"13px"}
              borderRadius={"10px"}
              w={"200px"}
              h={"200px"}
              src="https://n2.sdlcdn.com/imgs/a/b/v/SDL045636489_1372824048_image1-f7ced.jpg"
            />
            <Text fontWeight={"bold"}>Abacus Center</Text>
            <HStack spacing={"20px"}>
              <Text fontWeight={"bold"}>Place Channai</Text>
              <Text>⭐⭐⭐⭐⭐</Text>
            </HStack>
          </Box>
          <Box p={"10px"} backgroundColor={"white"} borderRadius={"10px"}>
            <Img
              ml={"20px"}
              bgColor={"white"}
              borderRadius={"10px"}
              w={"200px"}
              h={"200px"}
              src="https://purepng.com/public/uploads/large/purepng.com-abacusobjectsabacuschild-school-education-object-abacus-brain-mathematical-number-maths-631522325942w9y7x.png"
            />
            <Text fontWeight={"bold"}>Abacus Academy</Text>
            <HStack spacing={"20px"}>
              <Text fontWeight={"bold"}>Place Bangalore</Text>
              <Text>⭐⭐⭐⭐⭐</Text>
            </HStack>
          </Box>
          <Box p={"10px"} backgroundColor={"white"} borderRadius={"10px"}>
            <Img
              ml={"12px"}
              borderRadius={"10px"}
              w={"200px"}
              h={"200px"}
              src="https://i.pinimg.com/originals/69/64/c8/6964c83ddbb5c71e884b482715362217.jpg"
            />
            <Text fontWeight={"bold"}>Abc Academy</Text>
            <Text ml={"10px"} fontWeight={"bold"}>
              Coimbatore ⭐⭐⭐⭐⭐
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
