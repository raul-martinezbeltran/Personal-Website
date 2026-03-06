const navItemStyle =
  "px-4 py-2 text-sm font-medium rounded-full bg-gray-100 border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-200 hover:text-black hover:shadow-md transform hover:-translate-y-0.5 transition";

export default function Button({ name, link }: { name: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-center ${navItemStyle}`}
    >
      {name}
    </a>
  );
}
