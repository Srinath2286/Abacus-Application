import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

let init = [
  {
    to: "/home",
    title: "HOME",
  },
  {
    to: "/acourse",
    title: "COURSE",
  },
  {
    to: "/aacademy",
    title: "ACADEMY",
  },
  {
    to: "/astudent",
    title: "STUDENT",
  },
  {
    
      to: "/addinstitute",
      title: "INSTITUTE",
    
  },
  
  {
    to: "/adminlogin",
    title: "LOGOUT",
  },
];
let one = {
  color: "black",
  textDecoration: "none",
};
let two = {
  color: "green",
  textDecoration: "none",
};
let array = JSON.parse(localStorage.getItem("userdata")) || {};
export default function NavbarOne() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          border: "1px solid black",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        {init.map((item) => (
          <div>
            <NavLink
              style={({ isActive }) => (isActive ? one : two)}
              to={item.to}
            >
              {item.title}
            </NavLink>
          </div>
        ))}
        {array.userName}
      </div>
    </div>
  );
}
