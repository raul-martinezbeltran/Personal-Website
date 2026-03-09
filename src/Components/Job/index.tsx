export default function Job({
  company,
  title,
  location,
  date,
  tasks,
}: {
  company: string;
  title: string;
  location: string;
  date: string;
  tasks: string[];
}) {
  return (
    <div className="h-full">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-87.5">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                {company}
              </h2>

              <h3 className="mt-1 text-base font-medium text-gray-800">
                {title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">{location}</p>
            </div>

            <div className="mt-3 sm:mt-0 text-sm text-gray-500 sm:text-right">
              {date}
            </div>
          </div>

          {/* Tasks */}
          {tasks.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-gray-600 leading-relaxed list-disc list-inside overflow-y-auto flex-1">
              {tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
