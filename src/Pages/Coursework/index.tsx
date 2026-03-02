import Course from "../../Components/Course";
import Navbar from "../../Components/Navbar";

export default function Coursework() {
  return (
    <div className="CourseworkPage">
      <Navbar />
      <h1>Coursework Page</h1>
      <Course
        code="CSE 110"
        name="Software Engineering"
        description="Coded with a group"
      />
      <Course
        code="CSE 112"
        name="Advanced Software Engineering"
        description="Coded with a group"
      />
    </div>
  );
}
