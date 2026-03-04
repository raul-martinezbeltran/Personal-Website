import Job from "../../Components/Job";
import Navbar from "../../Components/Navbar";

export default function Employment() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
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
            date="October 2024 - December 2025"
            description="Sell stuff"
          />
          <Job
            company="Apple"
            title="Reseller Specialist"
            location="San Diego, CA"
            date="April 2022 - October 2024"
            description="Sell stuff"
          />
        </div>
      </main>
    </div>
  );
}
