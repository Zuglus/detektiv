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
        className="relative my-10 font-extrabold text-4xl text-gray-900 sm:text-5xl lg:text-6xl uppercase tracking-widest"
        style={{
          fontFamily: "'Playfair Display', serif",
          letterSpacing: '0.15em',
          padding: '20px',
          background: 'linear-gradient(135deg, #8bb298, #a8d0b9)', /* Dark Green to Gold */
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)', /* Shadow for depth */
          textShadow: '2px 4px 8px rgba(0, 0, 0, 0.7)', /* Text shadow for legibility */
          display: 'inline-block',
        }}
      >
        {data.intro} <br />
        <span style={{ fontSize: '0.8em' }}>{data.header}</span> <br />
        <span style={{ fontSize: '0.8em' }}>{data.headerName}</span>
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
