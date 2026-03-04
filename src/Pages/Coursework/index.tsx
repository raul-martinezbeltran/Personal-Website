import Course from "../../Components/Course";
import Navbar from "../../Components/Navbar";

export default function Coursework() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Coursework
          </h1>
          <p className="text-gray-600 text-sm">
            Selected academic experiences.
          </p>
        </div>

        <div className="space-y-2">
          <Course
            code="CSE 15L"
            name="Software Tools and Techniques Laboratory"
            description="Hands-on exploration with software development tools and techniques."
          />
          <Course
            code="CSE 100"
            name="Advanced Data Structures"
            description="Usage and implementation of data structures as well as their theoretical and performance analysis."
          />
          <Course
            code="CSE 110"
            name="Software Engineering"
            description="Introduction to software development and engineering methods. Learned agile development, testing, version control, and usage of IDE's."
          />
          <Course
            code="CSE 112"
            name="Advanced Software Engineering"
            description="Software engineering topics associated with large systems development such as specifications, testing and maintenance, and design."
          />
        </div>
      </main>
    </div>
  );
}
