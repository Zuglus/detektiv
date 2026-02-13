import { Lang } from "@/components/utility/types";
import IconSvg from "@/components/ui/IconSvg";
import UnifiedCard from "@/components/ui/UnifiedCard";
import content from "./contact.json";
import contacts from "@/data/contacts.json";

export default function ContentContact({ lang }: { lang: Lang }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-display-lg text-secondary-900 mb-4 font-bold">
          {content.header[lang]}
        </h1>
        <p className="text-body-xl text-secondary-600 mb-6 max-w-2xl mx-auto">
          {content.subtitle[lang]}
        </p>
        <div className="w-32 h-1 gradient-primary mx-auto rounded-full" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6 mb-12">
        {/* Emergency Contact - Hero Block */}
        <UnifiedCard
          variant="emergency"
          className="col-span-12 lg:col-span-8 group relative overflow-hidden"
          size="large"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-500" />
          <div className="relative z-10 p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-heading-lg font-bold text-secondary-900 mb-2">
                  {content.emergency.title[lang]}
                </h2>
                <p className="text-body-lg text-secondary-700">
                  {content.emergency.description[lang]}
                </p>
              </div>
              <div className="text-accent-600 text-body-sm font-semibold bg-accent-50 px-3 py-1 rounded-full">
                {content.responseTime.phone[lang]}
              </div>
            </div>
            <a
              href={contacts.phone.link}
              className="inline-flex items-center gap-3 text-heading-md font-bold text-primary-600 hover:text-primary-700 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-primary-600/40 rounded-lg"
              aria-label={`Позвонить по экстренному номеру ${contacts.phone.name}`}
            >
              <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-300">
                <IconSvg
                  name="phone"
                  size="xl"
                  color="current"
                  className="w-12 h-12"
                />
              </div>
              {contacts.phone.name}
            </a>
          </div>
        </UnifiedCard>

        {/* Office Address */}
        <UnifiedCard className="col-span-12 lg:col-span-4 text-center group">
          <div className="p-6">
            <h3 className="text-heading-sm font-semibold text-secondary-900 mb-3">
              {content.addressTitle[lang]}
            </h3>
            <p className="text-body-md text-secondary-700 mb-4">
              {content.address[lang]}
            </p>
            <p className="text-body-sm text-secondary-500">
              {content.addressDescription[lang]}
            </p>
          </div>
        </UnifiedCard>

        {/* Email */}
        <UnifiedCard className="col-span-12 md:col-span-6 lg:col-span-4 group">
          <div className="p-6 text-center">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-heading-sm font-semibold text-secondary-900">
                {content.email[lang]}
              </h3>
              <span className="text-body-xs text-accent-600 bg-accent-50 px-2 py-1 rounded-full">
                {content.responseTime.email[lang]}
              </span>
            </div>
            <a
              href={contacts.email.link}
              className="inline-flex items-center gap-2 text-body-md text-primary-600 hover:text-primary-700 transition-colors duration-300 group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary-600 rounded"
              aria-label={`Отправить email на ${contacts.email.directName}`}
            >
              <IconSvg
                name="email"
                size="sm"
                color="current"
                className="w-5 h-5"
              />
              {contacts.email.directName}
            </a>
            <p className="text-body-sm text-secondary-500 mt-2">
              {content.emailDescription[lang]}
            </p>
          </div>
        </UnifiedCard>

        {/* Messengers Block */}
        <UnifiedCard className="col-span-12 md:col-span-6 lg:col-span-8 group">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-heading-sm font-semibold text-secondary-900 mb-2">
                  {content.messengers.title[lang]}
                </h3>
                <p className="text-body-md text-secondary-600">
                  {content.messengers.description[lang]}
                </p>
              </div>
              <span className="text-body-xs text-accent-600 bg-accent-50 px-2 py-1 rounded-full">
                {content.responseTime.messengers[lang]}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Telegram */}
              <a
                href={contacts.telegram.link}
                className="flex flex-col items-center p-4 bg-secondary-50 hover:bg-secondary-100 rounded-xl transition-all duration-300 group/messenger focus:outline-none focus:ring-2 focus:ring-primary-600"
                aria-label="Связаться через Telegram"
              >
                <IconSvg
                  name="telegram"
                  size="lg"
                  color="current"
                  className="w-10 h-10 mb-3 text-primary-600 group-hover/messenger:text-primary-700 transition-colors duration-300 group-hover/messenger:scale-110 transform"
                />
                <span className="text-body-sm font-medium text-secondary-800">
                  {content.telegram[lang]}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={contacts.whatsapp.link}
                className="flex flex-col items-center p-4 bg-secondary-50 hover:bg-secondary-100 rounded-xl transition-all duration-300 group/messenger focus:outline-none focus:ring-2 focus:ring-primary-600"
                aria-label="Связаться через WhatsApp"
              >
                <IconSvg
                  name="whatsapp"
                  size="lg"
                  color="current"
                  className="w-10 h-10 mb-3 text-primary-600 group-hover/messenger:text-primary-700 transition-colors duration-300 group-hover/messenger:scale-110 transform"
                />
                <span className="text-body-sm font-medium text-secondary-800">
                  {content.whatsapp[lang]}
                </span>
              </a>
            </div>
          </div>
        </UnifiedCard>
      </div>

      {/* Confidentiality Section */}
      <UnifiedCard
        variant="accent"
        className="relative overflow-hidden"
        size="large"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5" />
        <div className="relative z-10 p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-heading-md font-bold text-secondary-900 mb-4">
              {content.confidentiality.title[lang]}
            </h3>
            <p className="text-body-lg text-secondary-700 leading-relaxed">
              {content.confidentiality.description[lang]}
            </p>
          </div>
        </div>
      </UnifiedCard>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Детективное агентство",
            url: "https://право18.рф",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: contacts.phone.name,
                contactType: "customer service",
                availableLanguage: ["Russian", "English"],
                hoursAvailable: "24/7",
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: contacts.address.streetAddress,
              addressLocality: contacts.address.addressLocality,
              addressCountry: contacts.address.addressCountry,
            },
            email: contacts.email.directName,
          }),
        }}
      />
    </div>
  );
}
