import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Stack,
  Input,
  Center,
} from "@chakra-ui/react";
import { spacing } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  EditIcon,
  AddIcon,
  DeleteIcon,
  LocationIcon,
  LockIcon,
} from "@chakra-ui/icons";
let initail = {
  Enrollcourse: "",
};
export default function Editcourse() {
  const [text, setText] = useState(initail);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("adminstudent");
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
          <Button colorScheme="white" alignSelf={"center"} fontSize={20}>
            Course{" "}
          </Button>
          <Button colorScheme="white" alignSelf={"center"}>
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
        <h1>Edit course</h1>
      </Center>
      <FormControl>
        <Stack spacing={6} padding={4}>
          <Stack direction="row" spacing={20} padding={1}>
            <Input
              placeholder="Enter Course Name"
              padding={4}
              size="lg"
              width="28%"
              bg="white"
              pl="3"
              fontSize={14}
            ></Input>

            <Input
              placeholder="Enter Number of students enrolled for course "
              size="lg"
              width="30%"
              bg="white "
              float="right"
              fontSize={11}
            />
          </Stack>

          <Input
            placeholder="Enter the Course Duration"
            size="lg"
            width="28%"
            bg="white"
            fontSize={14}
          />
          <Stack direction="row" spacing={20} padding={1}>
            <Input
              placeholder="Enter the Course Timing"
              size="lg"
              width="28%"
              bg="white"
              fontSize={14}
            />

            <Input
              placeholder="Enter Academy description"
              size="lg"
              height={"110"}
              width="30%"
              bg="white"
              fontSize={14}
            />
          </Stack>
        </Stack>
      </FormControl>

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
        <Link to={"adminstudent"}>update Course</Link>
      </Button>
      <br />
      <br />
      <Button
        borderRadius={"5px"}
        fontWeight={"bold"}
        color="blue"
        bgColor={""}
        onClick={DataSubmit}
        h={"35px"}
        w={"80px"}
        float={"right"}
      >
        <Link to={"adminstudent"}>Next</Link>
      </Button>
    </Box>
  );
}
