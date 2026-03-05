import Course from "../../Components/Course";
import Navbar from "../../Components/Navbar";

export default function Coursework() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Coursework
          </h1>
          <p className="text-gray-600 text-sm">
            Selected academic experiences during my time at U.C. San Diego.
          </p>
        </div>

        <div className="space-y-2">
          <Course
            code="CSE 100"
            name="Advanced Data Structures"
            institution="U.C. San Diego"
            description="Theoretical and performance analysis of high performance data structures and algorithms. Some data structures include unbalanced tress, graphs, and priority queues."
          />
          <Course
            code="CSE 101"
            name="Design and Analysis of Algorithms"
            institution="U.C. San Diego"
            description="Design and analysis of algorithms, measuring complexity of algorithms, time and storage."
          />
          <Course
            code="CSE 110"
            name="Software Engineering"
            institution="U.C. San Diego"
            description="Introduction to software development and engineering methods. Hands-on with specification, design,
            implementation, and testing. Agile and tools such as IDE's, version control and test harness were used."
          />
          <Course
            code="CSE 112"
            name="Advanced Software Engineering"
            institution="U.C. San Diego"
            description="Software engineering topics with large systems such as requirements, specifications, testing, maintenance, and design.
            A huge emphasis is placed on development tools and automated environments."
          />
        </div>
      </main>
    </div>
  );
}
