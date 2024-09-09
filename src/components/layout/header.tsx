import Nav from './nav';
import SocialIcons from '@/components/ui/socialIcons';
import { Rout } from '@/components/utility/types';

export default function Header({ data, routes }: { data: any, routes: Rout[] }) {
  return (
    <header className="bg-olive-700 p-6 text-center text-white">
      <div className="md:flex md:justify-between items-center md:py-2">
        <Nav routes={routes} />
        <SocialIcons />
      </div>

      <h1
        className="relative mt-4 font-extrabold text-[#f0f0f0] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide transform transition-all duration-200 ease-in-out"
        style={{
          fontFamily: "'Roboto', sans-serif", /* Строгий современный шрифт */
          textShadow: '1px 2px 3px rgba(0,0,0,0.5)', /* Легкая тень для четкости */
          padding: '0 20px',
          letterSpacing: '0.05em', /* Легкое увеличение интервала между буквами */
          transition: 'transform 0.2s ease, color 0.2s ease', /* Уменьшение времени анимаций */
        }}
      >
        &laquo;{data.header}&raquo;
      </h1>


      <h2
        className="mt-2 text-lg text-olive-100 sm:text-xl antialiased"
        dangerouslySetInnerHTML={{ __html: data.div1 }}
      />

      <div
        className="bg-olive-600 bg-gradient-to-r from-olive-500 to-olive-400 shadow-md mx-auto my-6 px-4 py-2 rounded-lg max-w-xs sm:max-w-md font-semibold text-base text-center sm:text-lg uppercase"
        dangerouslySetInnerHTML={{ __html: data.div2 }}
      />
    </header>
  );
}
