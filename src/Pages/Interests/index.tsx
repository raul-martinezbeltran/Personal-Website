import Interest from "../../Components/Interest";
import Navbar from "../../Components/Navbar";

export default function Interests() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Interests
          </h1>
          <p className="text-gray-600 text-sm">
            These are my current interests and areas I am currently exploring.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-6">
          <Interest
            name="The Odin Project"
            description="Develop and strengthening web development skills through a cirriculum and exposure to projects with HTML, CSS, JavaScript."
            link="https://www.theodinproject.com/"
            other={[
              "Front End Development",
              "Back End Development",
              "Full Stack Development",
            ]}
          />
          <Interest
            name="Dive Into Deep Learning"
            description="An interactive deep learning book with code, math, and discussions. Currently using the version that is implemented with PyTorch."
            link="https://d2l.ai/"
            other={["Machine Learning", "Deep Learning"]}
          />
        </div>
      </main>
    </div>
  );
}
