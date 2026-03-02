import Navbar from "../../Components/Navbar";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Raul Martinez Beltran
        </h1>

        <h2 className="text-xl text-gray-500 mb-8">Software Engineer</h2>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Welcome to my personal portfolio. Here you can learn more about my
          experience, explore the projects I’ve built, and see the technologies
          I enjoy working with. I focus on building clean, scalable, and
          user-centered web applications.
        </p>
      </main>
    </div>
  );
}
