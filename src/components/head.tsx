import Nav from './nav';
import SocialIcons from './socialIcons';
import { Rout } from './types';

export default function Head({ data, routes }: { data: any, routes: Rout[] }) {
  return (
    <header className='text-center'>
      <div className='md:flex md:justify-between md:py-1'>
        <Nav routes={routes} />
        <SocialIcons />
      </div>
      <h1 className='text-red-600 font-serif text-5xl sm:text-6xl antialiased font-bold uppercase'>
        &laquo;{data.header}&raquo;
      </h1>
      <h2 className='text-red-500 text-sm sm:text-lg antialiased uppercase' dangerouslySetInnerHTML={{ __html: data.div1 }} />
      <div className='text-sm sm:text-base max-w-xs sm:max-w-md mx-auto font-semibold my-8 bg-gradient-to-br from-black from-30% to-red-600 uppercase' dangerouslySetInnerHTML={{ __html: data.div2 }} />
    </header>
  );
}
