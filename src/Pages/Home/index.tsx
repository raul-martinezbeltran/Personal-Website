import Navbar from "../../Components/Navbar";
import computerImage from "../../../public/images/computer.jpg";
import Button from "../../Components/Button";

export default function Home() {
  return (
    <div className="text-gray-900 min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">
        {/* Hero Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: About */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Raul Martinez Beltran
            </h1>
            <h2 className="text-xl text-gray-500 mb-6">Software Engineer</h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to my personal portfolio. Here you can learn more about my
              experience, explore the projects I've built, and see the
              technologies I enjoy working with. I focus on building clean,
              scalable, and user-centered applications.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I graduated from U.C. San Diego with a B.S. in Computer Science
              and minored in cognitive science.
            </p>
          </div>

          {/* Right Side: Image + Buttons */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <img
              src={computerImage}
              alt="Picture of a computer"
              className="w-72 rounded-2xl border border-gray-200 shadow-sm object-cover"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              <Button
                name="GitHub"
                link="https://github.com/raul-martinezbeltran"
              />
              <Button name="LinkedIn" link="https://linkedin.com" />
              <Button name="Resume" link="#" />
              <Button name="Portfolio" link="#" />
              <Button name="Contact" link="#" />
              <Button name="Blog" link="#" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
