import Navbar from "../../Components/Navbar";
import Project from "../../Components/Project";

export default function Projects() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-gray-600 text-sm">
            Work that have performed over the years, involving academic and
            personal project work.
          </p>
        </div>

        <div className="space-y-2">
          <Project
            name="Food Journal Web Application"
            description="A web app that empowers food lovers to review meals, share their culinary experiences, and explore what others have tasted. 
            It's a community-driven platform that brings food enthusiasts together, helping each other explore the world of cuisine from the comfort of home. 
            With the aid of AI, Food Journal recommends recipes tailored to your tastes and connects you to the best sources for those recipes."
            link="https://github.com/raul-martinezbeltran/FoodJournal2.0"
            skills={[
              "Python",
              "JavaScript",
              "MySQL",
              "CSS",
              "HTML",
              "FastAPI",
              "React",
              "Agile Project Methodology",
              "GitHub Actions (CI/CD)",
            ]}
          />
          <Project
            name="Birds of a Feather Android Application"
            description="An android application that allows college students to connect with each other and share which classes they have taken
            with each other. The app allows students to discover other students that are nearby their device and allow them to see if there any course matches."
            link="https://github.com/raul-martinezbeltran/birds-of-a-feather"
            skills={[
              "Java",
              "XML",
              "SQL",
              "Android Bluetooth API",
              "Agile Project Methodology",
              "Jira",
              "GitHub Actions (CI/CD)",
              "Android Espresso",
              "Robolectric",
            ]}
          />
          <Project
            name="Taxi Travel Time Trajectories"
            description="Built a deep learning model to predict the travel time for many taxis in Portugal."
            link="https://github.com/raul-martinezbeltran/Taxi-Travel-Time-Trajectories"
            skills={[
              "Python",
              "PyTorch",
              "Pandas",
              "NumPy",
              "Seaborn",
              "MatPlotLib",
            ]}
          />
        </div>
      </main>
    </div>
  );
}
