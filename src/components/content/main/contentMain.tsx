import UnifiedCard from "@/components/ui/UnifiedCard";
import UnifiedButton from "@/components/ui/UnifiedButton";
import ScrollReveal from "@/components/utility/scrollReveal";
import IconSvg from "@/components/ui/IconSvg";
import content from "./main.json";
import contacts from "@/data/contacts.json";
import { Lang } from "@/components/utility/types";

// Unique icon per service card
const serviceIcons = [
  "document", // досье
  "eye", // наблюдение
  "shield", // частные расследования
  "user", // частный поиск людей
  "target", // частный розыск должников
  "contact", // проверка персонала
  "building", // проверка фирм
  "bolt", // IT - интернет
  "mapPin", // информация за рубежом
];

// Icons for benefits section
const benefitIcons = [
  "lock", // конфиденциальность
  "handshake", // наработанные связи
  "trophy", // проф. развитие
  "bolt", // дистанционно
];

function ContentMain({ lang }: { lang: Lang }) {
  return (
    <div className="relative">
      <ScrollReveal>
        <section className="bg-primary-50 py-12 md:py-16 transform-gpu lazy-section">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-display-sm text-secondary-900 mb-6 md:mb-8">
              {content.subheader[lang]}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[contacts.telegram, contacts.whatsapp, contacts.email].map(
                (item) => (
                  <UnifiedButton
                    key={item.name}
                    as="link"
                    href={item.link}
                    variant="primary"
                    title={item.link}
                  >
                    {item.name}
                  </UnifiedButton>
                ),
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <UnifiedCard>
              <div
                className="text-body-lg text-secondary-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.intro[lang] }}
              />
            </UnifiedCard>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <section className="py-16 gradient-primary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/15 backdrop-blur-xs border border-white/25 rounded-2xl p-8 text-white">
              <h2 className="text-display-sm mb-6">
                {content.proposeHeader[lang]}
              </h2>
              <p className="text-body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {content.proposeText[lang]}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.serviceList.map((card, index) => {
                // Adaptive alternating patterns for different breakpoints
                // Mobile (1 col): every 3rd card (0, 3, 6) for balanced distribution
                // Tablet (2 cols): every 4th card (0, 4, 8) for symmetry
                // Desktop (3 cols): every 4th card (0, 4, 8) for diagonal pattern
                const isMobileAccent = index % 3 === 0;
                const isTabletDesktopAccent = index % 4 === 0;

                return (
                  <div
                    key={card[lang].title}
                    className="h-full service-card-wrapper"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <UnifiedCard
                      variant="default"
                      interactive
                      className={`
                        h-full group
                        ${isMobileAccent ? "bg-primary-100 border-primary-300" : ""}
                        ${
                          isTabletDesktopAccent
                            ? "md:bg-primary-100 md:border-primary-300"
                            : "md:bg-white md:border-white/25 md:backdrop-blur-sm"
                        }
                      `}
                    >
                      <div className="text-center">
                        {/* Icon with responsive accent colors */}
                        <div className="mb-6 flex justify-center">
                          <div
                            className={`
                              w-16 h-16 rounded-2xl flex items-center justify-center
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                              [&_svg]:stroke-2 [&_svg_path]:fill-none [&_svg_circle]:fill-none [&_svg_rect]:fill-none

                              ${
                                isMobileAccent
                                  ? "bg-primary-600 text-white shadow-lg group-hover:shadow-xl"
                                  : "bg-primary-100 text-primary-600 group-hover:bg-primary-200"
                              }

                              ${
                                isTabletDesktopAccent
                                  ? "md:bg-primary-600 md:text-white md:shadow-lg md:group-hover:shadow-xl"
                                  : "md:bg-primary-100 md:text-primary-600 md:group-hover:bg-primary-200"
                              }
                            `}
                          >
                            <IconSvg
                              name={serviceIcons[index] || "target"}
                              size="xl"
                              color="current"
                            />
                          </div>
                        </div>

                        {/* Title with responsive accent colors */}
                        <h4
                          className={`
                            text-heading-sm font-semibold mb-6 uppercase tracking-wide
                            transition-colors duration-300 w-2/3 mx-auto

                            ${
                              isMobileAccent
                                ? "text-primary-900 group-hover:text-primary-700"
                                : "text-secondary-900 group-hover:text-primary-600"
                            }

                            ${
                              isTabletDesktopAccent
                                ? "md:text-primary-900 md:group-hover:text-primary-700"
                                : "md:text-secondary-900 md:group-hover:text-primary-600"
                            }
                          `}
                        >
                          {card[lang].title}
                        </h4>

                        {/* Description with responsive accent colors */}
                        <p
                          className={`
                            text-body-sm leading-relaxed

                            ${isMobileAccent ? "text-primary-800" : "text-secondary-700"}

                            ${isTabletDesktopAccent ? "md:text-primary-800" : "md:text-secondary-700"}
                          `}
                        >
                          {card[lang].text}
                        </p>
                      </div>
                    </UnifiedCard>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="py-16 bg-secondary-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3
                className="text-display-sm text-secondary-900 mb-4 font-display font-black"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                {content.orderListHeader[lang]}
              </h3>
              <div className="flex justify-center items-center gap-2">
                <div className="w-8 h-px bg-primary-400/40" />
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <div className="w-16 h-1 gradient-primary rounded-full" />
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <div className="w-8 h-px bg-primary-400/40" />
              </div>
            </div>

            <div className="space-y-4">
              {content.orderList[lang].map((step: string, index: number) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10 gradient-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 text-body-sm">
                      {index + 1}
                    </div>
                    <UnifiedCard
                      variant="default"
                      size="compact"
                      className="flex-1"
                    >
                      <p className="text-body-md text-secondary-700">{step}</p>
                    </UnifiedCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits List */}
      <ScrollReveal delay={100}>
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.benefitsList.map((item, index) => (
                <UnifiedCard
                  key={item.id}
                  variant="default"
                  interactive
                  className="h-full border-l-4 border-primary-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                      <IconSvg
                        name={benefitIcons[index] || "check"}
                        size="lg"
                        color="current"
                      />
                    </div>
                    <div>
                      <h3 className="text-heading-sm text-secondary-900 mb-3">
                        {item[lang].title}
                      </h3>
                      <p className="text-body-md text-secondary-600">
                        {item[lang].text}
                      </p>
                    </div>
                  </div>
                </UnifiedCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Detective Principles */}
      <ScrollReveal delay={100}>
        <section className="py-16 gradient-primary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2
                className="text-display-sm text-white mb-4 font-display font-black"
                style={{
                  letterSpacing: "-0.02em",
                  textShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                }}
              >
                {content.detektivePrinciplesHeader[lang]}
              </h2>
              <div className="flex justify-center items-center gap-2">
                <div className="w-12 h-px bg-primary-300/50" />
                <div className="w-3 h-3 rounded-full border-2 border-primary-300" />
                <div className="w-20 h-1 bg-primary-300 rounded-full" />
                <div className="w-3 h-3 rounded-full border-2 border-primary-300" />
                <div className="w-12 h-px bg-primary-300/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.detektivePrinciplesList.map((item, index) => (
                <UnifiedCard
                  key={item[lang].title}
                  variant="principle"
                  interactive
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <h4 className="text-heading-sm font-semibold text-white mb-4 uppercase tracking-wider hover:text-primary-100 transition-colors duration-300">
                      {item[lang].title}
                    </h4>
                    <div className="text-body-md text-white leading-relaxed">
                      {item[lang].text}
                    </div>
                  </div>
                </UnifiedCard>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <UnifiedCard variant="emergency" className="text-center p-12">
              <div className="mb-8 flex justify-center">
                <IconSvg name="warning" size="4xl" color="error" />
              </div>
              <h3 className="text-3xl font-bold text-error-700 mb-6 font-display">
                {content.alertHeader[lang]}
              </h3>

              <div
                className="text-body-lg text-secondary-700 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.alertText[lang] }}
              />

              <div className="space-y-4 text-secondary-700 text-left">
                <div className="flex items-start">
                  <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div className="text-body-md">
                    {content.alertSubstring1[lang]}{" "}
                    <UnifiedButton
                      as="link"
                      href={contacts.email.link}
                      variant="ghost"
                      size="sm"
                      className="inline font-semibold p-0 h-auto"
                    >
                      {contacts.email.directName}
                    </UnifiedButton>
                    ,{" "}
                    <UnifiedButton
                      as="link"
                      href={contacts.telegram.link}
                      variant="ghost"
                      size="sm"
                      className="inline font-semibold p-0 h-auto"
                    >
                      {contacts.telegram.name}
                    </UnifiedButton>
                    ,{" "}
                    <UnifiedButton
                      as="link"
                      href={contacts.whatsapp.link}
                      variant="ghost"
                      size="sm"
                      className="inline font-semibold p-0 h-auto"
                    >
                      {contacts.whatsapp.name}
                    </UnifiedButton>
                    , {content.alertSubstring2[lang]}{" "}
                    <UnifiedButton
                      as="link"
                      href={contacts.phone.link}
                      variant="ghost"
                      size="sm"
                      className="inline font-semibold p-0 h-auto"
                    >
                      {contacts.phone.name}
                    </UnifiedButton>
                    .
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div className="text-body-md">
                    {content.alertSubstring3[lang]}{" "}
                    <UnifiedButton
                      as="link"
                      href={contacts.site}
                      variant="ghost"
                      size="sm"
                      className="inline font-semibold p-0 h-auto"
                    >
                      {contacts.site}
                    </UnifiedButton>
                    .
                  </div>
                </div>
              </div>
            </UnifiedCard>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

export default ContentMain;
