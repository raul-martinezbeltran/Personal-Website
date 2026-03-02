export default function Job({
  name,
  location,
  date,
  description,
}: {
  name: string;
  location: string;
  date: string;
  description: string;
}) {
  return (
    <div className="Job">
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
}
