import Button from "../Button";

export default function Interest({
  name,
  description,
  link,
  other,
}: {
  name: string;
  description: string;
  link?: string;
  other?: string;
}) {
  return (
    <div className="h-full">
      <div className="h-full bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition flex flex-col">
        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Other info as pill */}
        {other && (
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded-full">
              {other}
            </span>
          </div>
        )}

        {/* Push button to bottom */}
        {link && (
          <div className="mt-auto pt-6">
            <Button name="Learn More →" link={link} />
          </div>
        )}
      </div>
    </div>
  );
}
