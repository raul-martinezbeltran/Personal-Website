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
      </main>
    </div>
  );
}
