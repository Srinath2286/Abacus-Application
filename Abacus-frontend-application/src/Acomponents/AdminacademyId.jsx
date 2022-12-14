import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import hello from "../assets/deletedproducts.svg";
export default function AdminacademyId() {
 
  const [take, setTake] = useState({});
  const[allData,setAllData]=useState([])
  console.log(take);
  let id = useParams();
  let deleteacademy = async () => {
    try {
      axios.delete(`http://localhost:8080/deleteacademy/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    deleteacademy();
  }, []);
  const handleDelete=(id)=>{
    allData.splice(id,1)
    setAllData([...allData])
  }
  return (
    <div>
      <div
        style={{
          margin: "auto",
        }}
      >
        <img
          src={hello}
          width={"400px"}
          height={"400px"}
          style={{ margin: "auto", marginTop: "50px" }}
        />
        <br />
        <br />
        <Link to={"/adminacademy"}>
          <br />
          <Button bgColor={"black"} color={"white"} ml={"600px"}onClick={()=>handleDelete(id)}>
            Admin-academy
          </Button>
        </Link>
      </div>
    </div>
  );
}
