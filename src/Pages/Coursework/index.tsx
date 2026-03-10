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

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
          <Course
            code="CSE 120"
            name="Operating Systems Principles"
            institution="U.C. San Diego"
            description="Operating systems concepts, including processes, synchronization, scheduling, memory management, virtual memory, file systems, and protection."
          />
          <Course
            code="CSE 132A"
            name="Database Systems Principles"
            institution="U.C. San Diego"
            description="Basic concepts of databases, including data modeling, relational databses, query languages, optimization, dependencies, schema design, and concurrency control."
          />
          <Course
            code="CSE 160"
            name="Introduction to Parallel Computing"
            institution="U.C. San Diego"
            description="Introduction to high performance parallel computing: parallel architecture, algorithms, software, and problem-solving techniques. Processor-memory organizations, shared and nonshared memory models:
            message passing and multithreading, data parallelism; speedup, efficiency, synchronization, and scalability."
          />
        </div>
      </main>
    </div>
  );
}
