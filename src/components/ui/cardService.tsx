export default function CardService({
  data,
}: {
  data: { title: string; price: string; text: string };
}) {
  return (
    <div className="hover:scale-105 border-2 border-olive-600 bg-olive-50 shadow-md hover:shadow-lg p-6 rounded-lg text-center transition-transform duration-300 ease-in-out">
      <h4 className="font-bold text-olive-800 text-xl uppercase tracking-wider">
        {data.title}
      </h4>
      <div className="mt-4 font-light text-olive-600 leading-relaxed">
        {data.text}
      </div>
      <div className="mt-6 font-semibold text-lg text-olive-700">
        {data.price}
      </div>
    </div>
  );
}
