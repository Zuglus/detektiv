import contacts from "@/data/contacts.json";
import IconSvg from "./IconSvg";

export default function SocialIconsFooter() {
  const iconMapping: {
    [key: string]:
      | "phone"
      | "email"
      | "telegram"
      | "whatsapp"
      | "imo"
      | "signal";
  } = {
    [contacts.phone.name]: "phone",
    [contacts.email.name]: "email",
    [contacts.telegram.name]: "telegram",
    [contacts.whatsapp.name]: "whatsapp",
    [contacts.imo.name]: "imo",
    [contacts.signal.name]: "signal",
  };

  return (
    <nav
      className="flex items-center justify-center space-x-4"
      aria-label="Ссылки для связи"
      role="navigation"
    >
      {[
        contacts.phone,
        contacts.email,
        contacts.telegram,
        contacts.whatsapp,
        contacts.imo,
        contacts.signal,
      ].map((icon) => {
        const isExternal =
          icon.link.startsWith("http") ||
          icon.link.startsWith("mailto") ||
          icon.link.startsWith("tel");

        return (
          <a
            href={icon.link}
            key={icon.name}
            className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 focus-not-obscured focus:outline-none focus:ring-3 focus:ring-primary-500 focus:ring-offset-2 text-primary-700 hover:text-primary-900 hover:scale-110 hover:bg-primary-500/20 hover:shadow-lg hover:shadow-primary-500/40"
            title={`Связаться с нами через ${icon.name}`}
            aria-label={`Связаться с нами через ${icon.name}${isExternal ? " (откроется в новой вкладке)" : ""}`}
            target={
              isExternal &&
              !icon.link.startsWith("tel") &&
              !icon.link.startsWith("mailto")
                ? "_blank"
                : undefined
            }
            rel={
              isExternal &&
              !icon.link.startsWith("tel") &&
              !icon.link.startsWith("mailto")
                ? "noopener noreferrer"
                : undefined
            }
          >
            <IconSvg name={iconMapping[icon.name]} size="xl" color="current" />
          </a>
        );
      })}
    </nav>
  );
}
