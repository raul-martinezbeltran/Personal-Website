import Job from "../../Components/Job";
import Navbar from "../../Components/Navbar";

export default function Employment() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Employment
          </h1>
          <p className="text-gray-600 text-sm">
            Professional experience and work history.
          </p>
        </div>

        <div className="space-y-2">
          <Job
            company="Apple"
            title="Community Specialist"
            location="San Diego, CA"
            date="November 2024 - December 2025"
            tasks={[
              "Analyzed sales data to formulate strategies with reseller partners using Tableau and Excel",
              "Establish and grow relationships with reseller partners to grow consumer and small business channels",
              "Execute based on sales trends to drive KPIs and increase Y/ Y revenue",
              "Uphold business standards and manage confidential information. Maintain merchandising and operational success",
              "Provide and maintain company and brand image",
            ]}
          />
          <Job
            company="Apple"
            title="Reseller Specialist"
            location="San Diego, CA"
            date="April 2022 - October 2024"
            tasks={[
              "Developed growth-driven solutions for customers",
              "Uphold business standards and manage confidential information",
              "Trained partner leadership in product presentation and sales",
              "Debugged device configuration issues for demonstrations",
            ]}
          />
        </div>
      </main>
    </div>
  );
}
