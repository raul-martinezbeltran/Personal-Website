import Navbar from "../../Components/Navbar";
import computerImage from "../../../public/images/computer.jpg";
import Button from "../../Components/Button";

export default function Home() {
  return (
    <div className="text-gray-900 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 shadow-lg grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: About */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Raul Martinez Beltran
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-500 font-medium">
              Software Engineer
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to my personal portfolio. Here you can learn more about my
              experience, explore the projects I've built, and see the
              technologies I enjoy working with. I focus on building clean,
              scalable, and user-centered applications.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              I graduated from UC San Diego with a B.S. in Computer Science and
              minored in cognitive science.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              I am currently looking for software engineering opportunities!
            </p>
          </div>

          {/* Right Side: Image + Buttons */}
          {/* Right Side: Image + Buttons */}
          <div className="flex flex-col items-center gap-8">
            <img
              src={computerImage}
              alt="Picture of a computer"
              className="w-72 md:w-80 rounded-2xl border border-gray-200 shadow-lg object-cover"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md">
              <Button name="Contact" link="mailto:raulmar1341@gmail.com" />
              <Button
                name="GitHub"
                link="https://github.com/raul-martinezbeltran"
              />
              <Button
                name="LinkedIn"
                link="https://www.linkedin.com/in/raul-martinez-beltran/"
              />
              <Button name="UCSD" link="https://cse.ucsd.edu/" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
