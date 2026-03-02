export default function Course({
  code,
  name,
  description,
}: {
  code: string;
  name: string;
  description: string;
}) {
  return (
    <div className="border-b border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </h2>

          <span className="text-sm text-gray-500 font-medium">{code}</span>
        </div>
        <p className="text-gray-600 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
