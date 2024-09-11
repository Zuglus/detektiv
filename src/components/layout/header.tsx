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

      <div
        className="inline-block relative mt-6 text-[#f0f0f0] text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-wide transform transition-all duration-200 ease-in-out"
        style={{
          fontFamily: "'Playfair Display', serif", /* Совместимость шрифта с заголовком */
          textShadow: '1px 2px 3px rgba(0,0,0,0.4)', /* Легкая тень для выделения текста */
          letterSpacing: '0.08em', /* Увеличенное межбуквенное расстояние */
          lineHeight: '1.4', /* Четкость и читаемость */
          backgroundColor: '#2a4f4f', /* Темно-зеленый фон для контраста с текстом */
          borderRadius: '10px', /* Мягкие углы для элегантности */
          padding: '15px 30px', /* Просторные отступы */
          width: 'fit-content', /* Ширина подстраивается под текст */
          transition: 'background-color 0.3s ease, transform 0.3s ease', /* Плавные изменения при наведении */
        }}
      >
        {data.intro}
      </div>

      <h1
        className="relative mt-6 font-extrabold text-[#f0f0f0] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wider transform transition-all duration-200 ease-in-out"
        style={{
          fontFamily: "'Playfair Display', serif", /* Элегантный и профессиональный шрифт с засечками */
          textShadow: '2px 3px 4px rgba(0,0,0,0.6)', /* Более четкая тень для выделения */
          padding: '10px 20px',
          letterSpacing: '0.08em', /* Чуть большее межбуквенное расстояние для выразительности */
          lineHeight: '1.2', /* Четкость и читаемость на всех экранах */
          transition: 'transform 0.3s ease, color 0.3s ease', /* Более плавные и замедленные анимации */
          color: '#fff', /* Контрастный белый цвет для текста */
        }}
      >
        {data.header}<br />
        {data.headerName}
      </h1>

      <div
        className="bg-olive-600 bg-gradient-to-r from-olive-500 to-olive-400 shadow-md mx-auto my-6 px-4 py-2 rounded-lg max-w-xs sm:max-w-md font-semibold text-base text-center sm:text-lg uppercase"
        dangerouslySetInnerHTML={{ __html: data.div1 }}
      />

      <h2
        className="mt-2 text-lg text-olive-100 sm:text-xl antialiased"
        dangerouslySetInnerHTML={{ __html: data.div2 }}
      />
    </header>
  );
}
