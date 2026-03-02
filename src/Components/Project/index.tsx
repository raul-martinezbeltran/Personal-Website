export default function Project({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link: string;
}) {
  return (
    <div className="border-b border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h2>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        <a
          href={link}
          className="mt-4 inline-block text-sm text-gray-500 hover:text-black transition"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
