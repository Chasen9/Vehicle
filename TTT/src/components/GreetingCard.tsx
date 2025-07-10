type GreetingCardProps = {
  name: string;
  day: string;
};

export default function GreetingCard(props: GreetingCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Hello, {props.name}!</h2>
      <p className="text-gray-600">Hope you're having a great {props.day}.</p>
    </div>
  );
}
