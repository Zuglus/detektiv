export default function Card({
  data,
  className = '',
}: {
  data: { title: string; text: string };
  className?: string; 
}) {
  return (
    <article className={`card group cursor-pointer interactive-hint focus-not-obscured ${className}`} tabIndex={0}>
      <div className="text-center card-content">
        <h4 className="text-heading-md font-semibold text-secondary-900 mb-4 uppercase tracking-wider group-hover:text-primary-600 transition-colors">
          {data.title}
        </h4>
        <div className="text-body-md text-secondary-600 leading-relaxed">
          {data.text}
        </div>
      </div>
    </article>
  );
}
