export default function CardService({
  data,
}: {
  data: { title: string; price: string; text: string };
}) {
  return (
    <div className="card-service">
      <div className="card group cursor-pointer">
        <div className="service-content text-center">
          <div>
            <h4 className="text-heading-sm font-semibold text-secondary-900 mb-8 uppercase tracking-wide group-hover:text-primary-600 transition-colors w-2/3 mx-auto">
              {data.title}
            </h4>
            <p className="text-body-sm text-secondary-700 leading-relaxed mb-8">
              {data.text}
            </p>
          </div>
          <div className="service-footer">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-primary-50 text-primary-700 font-bold text-xl rounded-xl border border-primary-200 group-hover:bg-primary-100 transition-colors">
              {data.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
