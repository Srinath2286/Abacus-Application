import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Viewacademy";
import Loginhere from "../components/Login";
import SignUp from "../components/Signup";
import Enrolledcourse from "../components/Enrolledcourse";
import Form from "../components/Form";
import Courseenrolled from "../components/Courseenrolled";
import Adminacademy from "../Acomponents/Adminacademy";
import Editacademy from "../Acomponents/Editacademy";
import Editcourse from "../Acomponents/Editcourse";

import Editstudent from "../Acomponents/Editstudent";
import Adminstudent from "../Acomponents/Adminstudent";
import AddAcademy from "../CurdOerators/Addacademy";
import AddCourse from "../CurdOerators/AddCourse";
import AddStudent from "../CurdOerators/Addstudent";
import AddInstitute from "../CurdOerators/AddInstitute";
import Admincourse from "../Acomponents/Admincourse";
import AdminoneId from "../Acomponents/AdmincourseId";
import AdminacademyId from "../Acomponents/AdminacademyId";
import Admininstituteid from "../Acomponents/AdmininstituteId";
import Admininstitute from "../Acomponents/Admininstitute";
export default function Allroutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginhere />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/enrolled" element={<Enrolledcourse />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Courseenrolled" element={<Courseenrolled />} />
        <Route path="/adminacademy" element={<Adminacademy />} />
        <Route path="/adminacademy/:id" element={<AdminacademyId />} />
        <Route path="/editacademy" element={<Editacademy />} />
        <Route path="/editcourse" element={<Editcourse />} />
        <Route path="/admincourse" element={<Admincourse />} />
        <Route path="/admincourse/:id" element={<AdminoneId />} />
        <Route path="/adminstudent" element={<Adminstudent />} />
        <Route path="/editstudent" element={<Editstudent />} />
        <Route path="/aacademy" element={<AddAcademy />} />
        <Route path="/acourse" element={<AddCourse />} />
        <Route path="/astudent" element={<AddStudent />} />
        <Route path="/adminstudent/:id" element={<AddStudent />} />
        <Route path="/addinstitute" element={<AddInstitute />} />
        <Route path="/admininstitute" element={<Admininstitute/>}/>
        <Route path="/admininstitute/:id" element={<Admininstituteid />} />
      </Routes>
    </Box>
  );
}
