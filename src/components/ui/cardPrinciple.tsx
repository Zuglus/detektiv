'use client';

export default function CardPrinciple({
  data,
}: {
  data: { title: string; text: string };
}) {
  return (
    <article className="principle-card group transition-all duration-300 hover:scale-105 focus-within:scale-105 focus-not-obscured" tabIndex={0} role="article">
      <div className="text-center">
        <h4 className="text-heading-sm font-semibold text-white mb-4 uppercase tracking-wider group-hover:text-primary-100 group-focus:text-primary-100 transition-colors duration-300">
          {data.title}
        </h4>
        <div className="text-body-md text-white leading-relaxed">
          {data.text}
        </div>
      </div>
    </article>
  );
}