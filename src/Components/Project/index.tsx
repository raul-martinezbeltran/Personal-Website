import Button from "../Button";

export default function Project({
  name,
  description,
  link,
  skills,
}: {
  name: string;
  description: string;
  link: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-col w-full bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition">
      {/* Title */}
      <h2 className="text-xl font-semibold tracking-tight text-gray-900">
        {name}
      </h2>

      {/* Main content: description + skills */}
      <div className="flex-1 flex flex-col mt-2">
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Button sticks to bottom */}
      <div className="mt-6">
        <Button name="View Project →" link={link} />
      </div>
    </div>
  );
}
