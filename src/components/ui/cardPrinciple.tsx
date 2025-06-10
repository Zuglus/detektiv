'use client';

export default function CardPrinciple({
  data,
}: {
  data: { title: string; text: string };
}) {
  return (
    <div 
      className="p-6 rounded-xl group cursor-pointer transition-all shadow-lg hover:shadow-xl"
      style={{
        background: 'rgba(26, 82, 47, 0.4)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(87, 187, 122, 0.5)',
        color: 'white'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(30, 102, 56, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(26, 82, 47, 0.4)';
      }}
    >
      <div className="text-center">
        <h4 className="text-xl font-semibold text-white mb-4 uppercase tracking-wider group-hover:text-primary-200 transition-colors">
          {data.title}
        </h4>
        <div className="text-base text-white/95 leading-relaxed">
          {data.text}
        </div>
      </div>
    </div>
  );
}
