import Nav from './nav';
import SocialIcons from '@/components/ui/socialIcons';
import { Rout } from '@/components/utility/types';

export default function Head({ data, routes }: { data: any, routes: Rout[] }) {
  return (
    <header className='text-center'>
      <div className='md:flex md:justify-between md:py-1'>
        <Nav routes={routes} />
        <SocialIcons />
      </div>
      <h1 className='font-bold font-serif text-5xl text-red-600 sm:text-6xl antialiased uppercase'>
        &laquo;{data.header}&raquo;
      </h1>
      <h2 className='text-red-500 text-sm sm:text-lg antialiased uppercase' dangerouslySetInnerHTML={{ __html: data.div1 }} />
      <div className='bg-gradient-to-br from-30% from-black to-red-600 mx-auto my-8 max-w-xs sm:max-w-md font-semibold text-sm sm:text-base uppercase' dangerouslySetInnerHTML={{ __html: data.div2 }} />
    </header>
  );
}
