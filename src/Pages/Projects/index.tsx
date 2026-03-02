import Navbar from "../../Components/Navbar";
import Project from "../../Components/Project";

export default function Projects() {
  return (
    <div className="ProjectsPage">
      <Navbar />
      <h1>Projects Page</h1>
      <Project
        name="Food Journal 2.0"
        description="A food journal"
        link="https://www.google.com"
      />
    </div>
  );
}
