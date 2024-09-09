export default function Card({
  data,
}: {
  data: { title: string; text: string };
}) {
  return (
    <div className="border-4 border-olive-600 bg-olive-50 shadow-lg hover:shadow-2xl my-10 p-8 rounded-lg md:w-1/2 text-center transition-shadow duration-300">
      <h4 className="font-bold text-olive-800 text-xl uppercase">{data.title}</h4>
      <div className="mt-4 text-base text-olive-700">{data.text}</div>
    </div>
  );
}
