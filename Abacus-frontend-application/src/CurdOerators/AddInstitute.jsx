import { Button} from "@chakra-ui/react";
import axios from "axios";
import {Link} from "react-router-dom"
import { useState } from "react";
import "./m.css";
import NavbarOne from "./Navbarone";
let initial = {
  instituteName: "",
  instituteDescription: "",
  address: "",
  mobilenumber: "",
  email: ""
};
export default function AddInstitute() {
  const [institute, setinstitute] = useState(initial);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setinstitute({ ...institute, [name]: value });
  };
  let datasubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8080/addinstitute`, institute);
  };
  return (
    <div>
      <NavbarOne /><br />
      <form onSubmit={datasubmit}>
        <input id="instituteName"
          type="text"
          value={institute.instituteName}
          placeholder="Enter Your Institute Name "
          name="instituteName"
          onChange={handleChange}
          required
        />
        <input id="instituteDescription"
          type="text"
          value={institute.instituteDescription}
          placeholder="Enter Description "
          name="instituteDescription"
          onChange={handleChange}
          required
        />
        <input id="address"
          type="text"
          value={institute.address}
          placeholder="Enter Your  institute address"
          name="address"
          onChange={handleChange}
          required
        />
        <input id="mobilenumber"
          type="number"
          value={institute.mobilenumber}
          placeholder="Enter Your Mobile number "
          name="mobilenumber"
          onChange={handleChange}
          required
        />

        <input id="email"
          type="text"
          value={institute.email}
          placeholder="Enter Your email "
          name="email"
          onChange={handleChange}
          required
        />
        <input type="submit" value={"ADD_DATA"} />
      </form>
      <Link
        style={{ marginLeft: "580px", marginTop: "20px" }}
        to={"/admininstitute"}
      >
        <Button bgColor={"black"} color={"white"}>
          View-Institute
        </Button>
      </Link>
    </div>
    
  );
}