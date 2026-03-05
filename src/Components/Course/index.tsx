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
    <div className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                {name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">{institution}</p>
            </div>

            <span className="text-sm text-gray-500 font-medium">{code}</span>
          </div>

          {/* Description */}
          <p className="mt-2 text-gray-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
