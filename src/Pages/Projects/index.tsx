import Navbar from "../../Components/Navbar";
import Project from "../../Components/Project";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-gray-600 text-sm">
            Selected personal and academic work.
          </p>
        </div>

        <div className="space-y-2">
          <Project
            name="Food Journal Web Application"
            description="A food journal"
            link="https://github.com/raul-martinezbeltran/FoodJournal2.0"
            skills={["Python", "HTML", "JavaScript"]}
          />
          <Project
            name="Birds of a Feather Android Application"
            description="An android application"
            link="https://github.com/raul-martinezbeltran/birds-of-a-feather"
            skills={["Java", "XML"]}
          />
          <Project
            name="Taxi Travel Time Trajectories"
            description="Predicting travel time projectories"
            link="https://github.com/raul-martinezbeltran/Taxi-Travel-Time-Trajectories"
            skills={["Python", "PyTorch", "Pandas", "NumPy"]}
          />
        </div>
      </main>
    </div>
  );
}
