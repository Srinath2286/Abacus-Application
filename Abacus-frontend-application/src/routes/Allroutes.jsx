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
import Private from "../ContextApiHook/MainHook";
import StudentAdmission from "../Acomponents/StudentAdmission";
import StudentAdmissionId from "../Acomponents/StudentAdmissionId";
import AdminSignup from "../components/AdminSignup";
import AdminLogin from "../components/AdminLogin";
export default function Allroutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Loginhere />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/home" element={<Private><Home /></Private>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/enrolled" element={<Private><Enrolledcourse /></Private>} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Courseenrolled" element={<Private><Courseenrolled /></Private>} />
        <Route path="/adminacademy" element={<Private><Adminacademy /></Private>} />
        <Route path="/adminacademy/:id" element={<Private><AdminacademyId /></Private>} />
        <Route path="/editacademy" element={<Private><Editacademy /></Private>} />
        <Route path="/editcourse" element={<Private><Editcourse /></Private>} />
        <Route path="/admincourse" element={<Private><Admincourse /></Private>} />
        <Route path="/admincourse/:id" element={<Private><AdminoneId /></Private>} />
        <Route path="/adminstudent" element={<Private><Adminstudent /></Private>} />
        <Route path="/editstudent" element={<Private><Editstudent /></Private>} />
        <Route path="/aacademy" element={<Private><AddAcademy /></Private>} />
        <Route path="/acourse" element={<Private><AddCourse /></Private>} />
        <Route path="/astudent" element={<Private><AddStudent /></Private>} />
        <Route path="/adminstudent/:id" element={<Private><AddStudent /></Private>} />
        <Route path="/addinstitute" element={<Private><AddInstitute /></Private>} />
        <Route path="/admininstitute" element={<Private><Admininstitute/></Private>}/>
        <Route path="/admininstitute/:id" element={<Private><Admininstituteid /></Private>} />
        <Route path="/studentadmission" element={<StudentAdmission />} />
        <Route path="/studentadmission/:id" element={<StudentAdmissionId />} />
      </Routes>
    </Box>
  );
}
