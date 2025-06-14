import { Lang } from "@/components/utility/types";
import contacts from '@/data/contacts.json';

interface ContactButtonsProps {
  lang: Lang;
  proposeText: { [key in Lang]: string };
}

export default function ContactButtons({ lang, proposeText }: ContactButtonsProps) {
  return (
    <div className="gradient-card-isolated text-center bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200">
      <h3 className="text-heading-md font-semibold mb-6 text-primary-700">
        {proposeText[lang]}
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {[
          { ...contacts.telegram, displayName: 'Telegram' },
          { ...contacts.whatsapp, displayName: 'WhatsApp' },
          { ...contacts.email, displayName: 'Email' },
          { ...contacts.phone, displayName: lang === 'ru' ? 'Телефон' : 'Phone' },
        ].map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="btn-primary text-center transition-all duration-300 hover:scale-105 focus-not-obscured"
            aria-label={`${lang === 'ru' ? 'Связаться через' : 'Contact via'} ${item.displayName}`}
          >
            <span className="block text-sm font-medium">{item.displayName}</span>
          </a>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
        <p className="text-heading-sm font-semibold text-primary-600 mb-2 flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Иконка телефона">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {lang === 'ru' ? 'Бесплатная консультация' : 'Free Consultation'}
        </p>
        <p className="text-body-md text-secondary-600">
          {lang === 'ru' 
            ? 'Обсудим ваш случай и подберем оптимальное решение' 
            : 'Let\'s discuss your case and find the optimal solution'
          }
        </p>
      </div>
    </div>
  );
}