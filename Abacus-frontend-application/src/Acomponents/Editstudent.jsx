import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Stack,
  Input,
  Link,
  Center,
} from "@chakra-ui/react";
import { spacing } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let initail = {
  Enrollcourse: "",
};
export default function Editstudent() {
  const [text, setText] = useState(initail);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("/editstudent");
  };

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
      <br></br>
      <Center>
        <h1>Edit Student</h1>
      </Center>
      <FormControl>
        <Stack spacing={4} padding={4}>
          <Stack direction="row" spacing={3} padding={1}>
            <Input
              placeholder="enter your first name"
              padding={4}
              size="md"
              width="23%"
              bg="white"
              pl="3"
            ></Input>

            <Input
              placeholder="enter your last name"
              size="md"
              width="23%"
              bg="white "
              float="right"
            />

            <Input
              placeholder="enter male or female"
              size="md"
              width="23%"
              bg="white"
            />
          </Stack>
          <Stack direction="row" spacing={3} padding={1}>
            <Input
              placeholder="enter your father name"
              size="md"
              width="23%"
              bg="white"
            />

            <Input
              placeholder="enter phone number"
              size="md"
              width="23%"
              bg="white"
            />
            <Input
              placeholder="enter alternate number "
              size="md"
              width="23%"
              bg="white"
            />
          </Stack>
          <Input
            padding={4}
            placeholder="enter your mother name"
            size="md"
            width="23%"
            bg="white"
          />

          <Input
            placeholder="enter your email Id"
            size="md"
            width="23%"
            bg="white"
          />
          <Input
            placeholder="enter your age"
            size="md"
            width="23%"
            bg="white"
          />
        </Stack>
      </FormControl>

      <Box
        m={"auto"}
        marginLeft={"250px"}
        backgroundColor={"honeydew"}
        marginTop="-170px"
        width={"620px"}
        height={"255px"}
        borderRadius={"7px"}
        padding={2}
      >
        Address information
        <br></br>
        <br></br>
        <label padding={5}>House No</label>
        <Input size="sm" width="23%" bg="white" />
        <br></br>
        <br />
        <label>Street Name</label>
        <Input size="sm" width="23%" bg="white" />
        <br></br>
        <br />
        <Stack direction="row" sapcing={2}>
          <label>Area Name</label>
          <Input size="sm" width="23%" bg="white" />
          <br></br>
          <br />
          <label>State</label>
          <Input size="sm" width="23%" bg="white" />
        </Stack>
        <label>Pincode</label>
        <Input size="sm" width="23%" bg="white" />
        <label>Nationality</label>
        <Input size="sm" width="23%" bg="white" />
        <Button
          borderRadius={"5px"}
          fontWeight={"bold"}
          color="white"
          bgColor={"green.400"}
          onClick={DataSubmit}
          h={"35px"}
          w={"120px"}
          float={"right"}
        >
          <Link to={"editstudent"}>update student</Link>
        </Button>
        <br></br>
      </Box>
      <br></br>
      <Button
        borderRadius={"5px"}
        fontWeight={"bold"}
        color="blue"
        bgColor={""}
        onClick={DataSubmit}
        h={"35px"}
        w={"100px"}
        float={"right"}
      >
        <Link to={"editstudent"}>Next</Link>
      </Button>
    </Box>
  );
}
