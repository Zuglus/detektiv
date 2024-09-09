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
  className="relative mt-4 font-bold text-4xl text-olive-50 sm:text-5xl lg:text-6xl hover:text-yellow-400 uppercase tracking-wide transform transition-all duration-300 ease-in-out hover:scale-105"
  style={{ 
    fontFamily: "'Dancing Script', cursive", /* Рукописный стиль */
    textShadow: '2px 4px 6px rgba(0,0,0,0.7)', /* Объемная тень */
    padding: '0 20px', 
    letterSpacing: '0.1em', /* Увеличенный трекинг для выразительности */
    transition: 'transform 0.3s ease, color 0.3s ease', /* Плавные анимации */
    backgroundClip: 'text', /* Текст как бы "вырезан" на фоне */
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
