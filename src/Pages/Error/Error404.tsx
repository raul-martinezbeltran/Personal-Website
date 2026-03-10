import Navbar from "../../Components/Navbar";

export default function Error404() {
  return (
    <div className="text-gray-900 min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            404
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-lg text-gray-700">Page Not Found</p>

          {/* Description */}
          <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
      </main>
    </div>
  );
}
