import { Lang } from "@/lib/types";
import UnifiedButton from "@/components/ui/UnifiedButton";
import UnifiedCard from "@/components/ui/UnifiedCard";
import IconSvg from "@/components/ui/IconSvg";
import contacts from "@/data/contacts.json";

interface ContactButtonsProps {
  lang: Lang;
  proposeText: { [key in Lang]: string };
}

export default function ContactButtons({
  lang,
  proposeText,
}: ContactButtonsProps) {
  return (
    <UnifiedCard
      className="text-center bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200"
      size="large"
      interactive
    >
      <h3 className="text-heading-md font-semibold mb-6 text-primary-700">
        {proposeText[lang]}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
        {[
          { ...contacts.telegram, displayName: "Telegram" },
          { ...contacts.whatsapp, displayName: "WhatsApp" },
          { ...contacts.imo, displayName: "imo" },
          { ...contacts.signal, displayName: "Signal" },
          { ...contacts.email, displayName: "Email" },
          {
            ...contacts.phone,
            displayName: lang === "ru" ? "Телефон" : "Phone",
          },
        ].map((item) => (
          <UnifiedButton
            key={item.name}
            as="link"
            href={item.link}
            variant="primary"
            size="md"
            className="w-full"
            aria-label={`${lang === "ru" ? "Связаться через" : "Contact via"} ${item.displayName}`}
          >
            {item.displayName}
          </UnifiedButton>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-xl border border-primary-200">
        <div className="text-heading-sm font-semibold text-primary-600 mb-2 flex items-center justify-center gap-2">
          <IconSvg name="phone" size="sm" color="current" className="w-5 h-5" />
          {lang === "ru" ? "Бесплатная консультация" : "Free Consultation"}
        </div>
        <p className="text-body-md text-secondary-600">
          {lang === "ru"
            ? "Обсудим ваш случай и подберем оптимальное решение"
            : "Let's discuss your case and find the optimal solution"}
        </p>
      </div>
    </UnifiedCard>
  );
}
