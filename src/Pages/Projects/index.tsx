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

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Project
            name="Personal Portfolio Web Application"
            description="A web app used to showcase my projects, coursework, employment. The purpose is to showcase who I am as a candidate.
            Additionally, this project will be a in work in progress since I will continue to develop and learn new skills along the way."
            link="https://github.com/raul-martinezbeltran/Personal-Website"
            skills={["React", "TypeScript", "HTML", "CSS"]}
          />
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
              "ORMs",
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
            name="Taxi Travel Time Trajectories Deep Learning Model"
            description="Built a deep learning model to predict the travel time for many taxis in Portugal. Data utilized to train the model had been cleaned, santized, and transformed.
            Additionally, exploratory data analysis had been performed to further dive into the dataset that was being investigated."
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
          <Project
            name="Invoice Management Web Application"
            description="A web application that allows efficient management of invoices by centralizing transactions on one platform.
            Users are able to add, remove, and modify invoices, as well keep track of the statuses of their invoices. Users can keep track of analytics given their current revenue stream from any transactions made."
            link="https://github.com/raul-martinezbeltran/nextjs-dashboard"
            skills={[
              "TypeScript",
              "Next.js",
              "HTML",
              "CSS",
              "PostgreSQL",
              "GitHub Actions",
              "ORMs",
              "Vercel",
            ]}
          />
        </div>
      </main>
    </div>
  );
}
