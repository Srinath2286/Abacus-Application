import {
  Box,
  ButtonGroup,
  Button,
  FormControl,
  HStack,
  Img,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { EditIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import NavbarOne from "../CurdOerators/Navbarone";

let initail = {
  search: "",
};
export default function Adminacademy() {
  const [text, setText] = useState(initail);
  const [taking, setTaking] = useState([]);
  console.log(taking);
  let ravan = useNavigate(null);
  let handling = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  let DataSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    ravan("/aacademy");
  };
  const handleScroll = (event) => {
    console.log("scrollTop: ", event.currentTarget.scrollTop);
    console.log("offsetHeight: ", event.currentTarget.offsetHeight);
  };
  let onemorefunciton = async () => {
    axios
      .get(`http://localhost:8080/getacademy`)
      .then((res) => {
        setTaking(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // newfucntions();
    onemorefunciton();
  }, []);

  return (
    <Box
      m={"auto"}
      mt={"30px"}
      backgroundColor={"lightgray"}
      width={"900px"}
      height={"600px"}
      marginTop={"20px"}
      borderRadius={"7px"}
      
    >
      <NavbarOne />
      

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
      <div
        style={{
          border: "3px solid lightgrey",
          width: "100%",
          height: "500px",
          overflow: "scroll",
        }}
        onScroll={handleScroll}
      >
        <Box mt={"60px"}>
          <HStack justify={"space-around"}>
            <Box p={"10px"} backgroundColor={"white"} borderRadius={"10px"}>
              <Img
                ml={"13px"}
                borderRadius={"10px"}
                w={"200px"}
                h={"220px"}
                src="https://n2.sdlcdn.com/imgs/a/b/v/SDL045636489_1372824048_image1-f7ced.jpg"
              />
              <Text fontWeight={"bold"}>Abacus Center</Text>
              <HStack spacing={"20px"}>
                <Text fontWeight={"bold"}>Place Channai</Text>
                <br></br>
                <br></br>
                <br></br>
              </HStack>
              <HStack spacing={"20px"} float="right">
                <Link to={"/editacademy"}>
                  <EditIcon w={4} h={4} />
                </Link>
                <DeleteIcon w={4} h={4} />
              </HStack>
            </Box>
            <Box p={"10px"} backgroundColor={"white"} borderRadius={"10px"}>
              <Img
                ml={"20px"}
                bgColor={"white"}
                borderRadius={"10px"}
                w={"200px"}
                h={"220px"}
                src="https://purepng.com/public/uploads/large/purepng.com-abacusobjectsabacuschild-school-education-object-abacus-brain-mathematical-number-maths-631522325942w9y7x.png"
              />
              <Text fontWeight={"bold"}>Abacus Academy</Text>
              <HStack spacing={"20px"}>
                <Text fontWeight={"bold"}>Place Bangalore</Text>
                <br></br>
                <br></br>
                <br></br>
              </HStack>
              <HStack spacing={"20px"} float="right">
                <Link to={"/editacademy"}>
                  <EditIcon w={4} h={4} />
                </Link>
                <DeleteIcon w={4} h={4} />
              </HStack>
            </Box>
       
            <Box p={"10px"} backgroundColor={"white"} borderRadius={"10px"}>
              <Img
                ml={"12px"}
                borderRadius={"10px"}
                w={"200px"}
                h={"220px"}
                src="https://i.pinimg.com/originals/69/64/c8/6964c83ddbb5c71e884b482715362217.jpg"
              />
              <Text fontWeight={"bold"}>Abc Academy</Text>
              <HStack spacing={"20px"}>
                <Text ml={"10px"} fontWeight={"bold"}>
                  Coimbatore 
                </Text>
                <br></br>
                <br></br>
                <br></br>
              </HStack>
              <HStack spacing={"20px"} float="right">
                <Link to={"/aacademy"}>
                  <EditIcon w={4} h={4} float="right" />
                </Link>
                <DeleteIcon w={4} h={4} float="left" />
                <br></br>
              </HStack>
            </Box>
            <br></br>
            <br></br>
          </HStack>
          <br></br>
          <Button
            borderRadius={"5px"}
            padding="10px"
            fontWeight={"bold"}
            onClick={DataSubmit}
            h={"30px"}
            w={"150px"}
            bgColor={"black"}
            color="white"
            float={"right"}
            paddingRight={3}
          >
            <HStack spacing={1}>
              <AddIcon w={4} h={4}></AddIcon>
            </HStack>
            <Link to={"/aacademy"}>Add-Academy</Link>
          </Button>
        </Box>
        <br />
        <br />
        <Box
          display={"flex"}
          justifyContent="space-between"
          flexWrap={"wrap"}
          margin={"10px"}
        >     
          {taking.map((item) => (
            <Box
              key={item.id}
              p={"10px"}
              backgroundColor={"white"}
              borderRadius={"10px"}
            >
              <Img
                borderRadius={"10px"}
                w={"210px"}
                h={"220px"}
                src={item.academyImageurl}
              />
              <Text fontWeight={"bold"}>Academy name: {item.academyName}</Text>
              <Text fontWeight={"bold"}>Location: {item.location}</Text>
              <Text fontWeight={"bold"}>Mobile No: {item.mobileNumber}</Text>
              <Text fontWeight={"bold"}>Email: {item.email}</Text>
              <Text fontWeight={"bold"}>
              Description: {item.description}   
              </Text>
                <Link to={`/adminacademy/${item.id}`}>  
                <Button marginLeft={"50px"} bgColor={"black"} color={"white"}>
                  DELETE
                </Button>
                </Link> 
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  );
}
