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
    <div className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </h2>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
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

          <a
            href={link}
            className="mt-6 inline-block text-sm font-medium text-gray-700 hover:text-black transition"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}
