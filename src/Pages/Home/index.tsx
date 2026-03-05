import Navbar from "../../Components/Navbar";

export default function Home() {
  return (
    <div className="text-gray-900 min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Raul Martinez Beltran
        </h1>

        <h2 className="text-xl text-gray-500 mb-8">Software Engineer</h2>

        <img
          src="src/public/computer.jpg"
          alt="Picture of a computer"
          className="w-72 rounded-2xl border border-gray-200 shadow-sm mb-8 object-cover"
        />

        <p className="text-gray-600 leading-relaxed max-w-2xl py-4">
          Welcome to my personal portfolio. Here you can learn more about my
          experience, explore the projects I've built, and see the technologies
          I enjoy working with. I focus on building clean, scalable, and
          user-centered applications.
        </p>

        <p className="text-gray-600 leading-relaxed max-w-2xl py-4">
          I graduated from U.C. San Diego with a B.S. in Computer Science and
          minored in cognitive science.
        </p>
      </main>
    </div>
  );
}
