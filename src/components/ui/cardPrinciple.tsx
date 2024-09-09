export default function CardPrinciple({
  data,
}: {
  data: { title: string; text: string };
}) {
  return (
    <div className="border-2 border-olive-600 bg-olive-50 shadow-lg p-6 border-solid rounded-lg text-center transform transition-transform hover:scale-105 duration-300">
      <h4 className="font-bold text-olive-800 text-xl uppercase tracking-wide">
        {data.title}
      </h4>
      <div className="mt-4 text-md text-olive-700">{data.text}</div>
    </div>
  );
}
