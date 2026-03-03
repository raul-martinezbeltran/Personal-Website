export default function Job({
  company,
  title,
  location,
  date,
  description,
}: {
  company: string;
  title: string;
  location: string;
  date: string;
  description: string;
}) {
  return (
    <div className="border-b border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
          <div>
            {/* Company */}
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">
              {company}
            </h2>

            {/* Title */}
            <h3 className="mt-1 text-base font-medium text-gray-800">
              {title}
            </h3>

            {/* Location */}
            <p className="mt-2 text-sm text-gray-500">{location}</p>
          </div>

          {/* Date (Right aligned on larger screens) */}
          <div className="mt-3 sm:mt-0 text-sm text-gray-500 sm:text-right">
            {date}
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
