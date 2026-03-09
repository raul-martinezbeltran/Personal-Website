export default function Course({
  code,
  name,
  institution,
  description,
}: {
  code: string;
  name: string;
  institution: string;
  description: string;
}) {
  return (
    <div className="h-full">
      <div className="h-full bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition flex flex-col">
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{name}</h2>

        {/* Code */}
        <div className="text-sm font-semibold text-gray-500 mb-2">{code}</div>

        {/* Institution */}
        <p className="text-sm text-gray-500 mb-4">{institution}</p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
