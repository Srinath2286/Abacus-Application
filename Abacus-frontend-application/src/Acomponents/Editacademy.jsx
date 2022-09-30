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
export default function Editacademy() {
  const [text, setText] = useState(initail);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("/admincourse");
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
          <Button colorScheme="white" alignSelf={"center"} fontSize={20}>
            Acadamey{" "}
          </Button>
          <Button colorScheme="white" alignSelf={"center"}>
            Course{" "}
          </Button>
          <Button colorScheme="white" alignSelf={"center"}>
            students{" "}
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
        <h1>Edit Academy</h1>
      </Center>
      <FormControl>
        <Stack spacing={4} padding={4}>
          <Stack direction="row" spacing={20} padding={1}>
            <Input
              placeholder="Enter Academy Name"
              padding={4}
              size="lg"
              width="28%"
              bg="white"
              pl="3"
              fontSize={14}
            ></Input>

            <Input
              placeholder="Enter the contact Number"
              size="lg"
              width="28%"
              bg="white "
              float="right"
              fontSize={14}
            />
          </Stack>
          <Stack direction="row" spacing={20} padding={1}>
            <Input
              placeholder="Enter the Academy image url"
              size="lg"
              width="28%"
              bg="white"
              fontSize={14}
            />
            <Input
              placeholder="Enter the Academy email"
              size="lg"
              width="28%"
              bg="white"
              fontSize={14}
            />
          </Stack>

          <Stack direction="row" spacing={20} padding={1}>
            <Input
              placeholder="Enter Academy Location"
              size="lg"
              width="28%"
              bg="white"
              fontSize={14}
            ></Input>
            <Input
              placeholder="Enter Academy description"
              size="lg"
              height={"100"}
              width="28%"
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
        w={"130px"}
        float={"right"}
      >
        <Link to={""}>update Academy</Link>
      </Button>
      <br></br>
      <br></br>
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
        <Link to={""}>Next</Link>
      </Button>
    </Box>
  );
}
