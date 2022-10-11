import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./m.css";
import NavbarOne from "./Navbarone";
let initial = {
  academyId: "",
  academyName: "",
  academyImageurl: "",
  mobileNumber: "",
  email: "",
  location: "",
  description: "",
};
export default function AddAcademy() {
  const [academy, setAcademy] = useState(initial);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setAcademy({ ...academy, [name]: value });
  };
  let datasubmit = async (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/academy/addacademy`, academy);
  };
  return (
    <div>
      <NavbarOne /><br />
      <form onSubmit={datasubmit}>
        <input id="academyName"
          type="text"
          value={academy.academyName}
          placeholder="Enter Your Academy Name "
          name="academyName"
          onChange={handleChange}
          required
        />
        <input id="academyImageurl"
          type="url"
          value={academy.academyImageurl}
          placeholder="Enter Your Image url "
          name="academyImageurl"
          onChange={handleChange}
          required
        />
        <input id="mobileNumber"
          type="number"
          value={academy.mobileNumber}
          placeholder="Enter Your  mobilenumber"
          name="mobileNumber"
          onChange={handleChange}
          required
        />
        <input id="email"
          type="email"
          value={academy.email}
          placeholder="Enter Your email "
          name="email"
          onChange={handleChange}
          required
        />
        <input id="location"
          type="text"
          value={academy.location}
          placeholder="Enter Your  location"
          name="location"
          onChange={handleChange}
          required
        />
        <input id="description"
          type="text"
          value={academy.description}
          placeholder="Enter Your discription "
          name="description"
          onChange={handleChange}
          required
        />
        <input type="submit" value={"ADD_DATA"} />
      </form>
      <Link
        style={{ marginLeft: "580px", marginTop: "20px" }}
        to={"/adminacademy"}
      >
        <Button bgColor={"black"} color={"white"}>
          view-Academy
        </Button>
      </Link>
    </div>
  );
}
