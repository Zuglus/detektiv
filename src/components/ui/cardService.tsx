export default function CardService({
  data,
}: {
  data: { title: string; price: string; text: string };
}) {
  return (
    <div className="card group cursor-pointer">
      <div className="text-center">
        <h4 className="text-heading-md font-semibold text-secondary-900 mb-4 uppercase tracking-wider group-hover:text-primary-600 transition-colors">
          {data.title}
        </h4>
        <div className="text-body-md text-secondary-600 leading-relaxed mb-6">
          {data.text}
        </div>
        <div className="inline-flex items-center justify-center px-6 py-3 bg-primary-50 text-primary-700 font-semibold text-lg rounded-xl border border-primary-200 group-hover:bg-primary-100 transition-colors">
          {data.price}
        </div>
      </div>
    </div>
  );
}
