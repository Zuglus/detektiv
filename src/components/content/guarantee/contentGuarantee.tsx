import { Lang } from "@/components/utility/types";
import content from './guarantee.json';
import contacts from '@/data/contacts.json';

export default function ContentGuarantee({ lang }: { lang: Lang }) {
  const { header,
    subheader,
    text,
    boxText,
    propose
  } = content;
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-display-md text-secondary-900 mb-4 font-bold">
          {header[lang]}
        </h1>
        <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
      </div>

      {/* Subheader */}
      <div className="card text-center mb-8">
        <p className="text-body-lg text-secondary-700 leading-relaxed">
          {subheader[lang]}
        </p>
      </div>

      {/* Main Content */}
      <div className="card mb-8">
        <div 
          className="text-body-lg text-secondary-700 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: text[lang] }}
        />
      </div>

      {/* Highlight Section */}
      <div className="card mb-8 border-l-4 border-primary-500 bg-primary-50">
        <p className="text-body-lg font-semibold text-secondary-900">
          {boxText[lang]}
        </p>
      </div>

      {/* Contact Section */}
      <div className="card text-center">
        <p className="text-body-lg text-secondary-700 mb-6">
          {propose[lang]}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            contacts.telegram,
            contacts.whatsapp,
            contacts.email,
            contacts.phone,
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="btn-primary hover:scale-105 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
