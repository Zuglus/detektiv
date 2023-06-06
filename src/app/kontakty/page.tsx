import { Breadcrumbs } from '@/components/breadcrumbs';
import {
  address,
  email,
  phone,
  telegram,
  whatsapp,
} from '@/data/contacts.json';

export const metadata = {
  title: 'Детективное агентство «Право» | Контакты',
};

export default function Contact() {
  return (
    <>
      <Breadcrumbs name='Контакты' link={''} secondName={''} />
      <section className='md:w-full mb-12 text-center'>
        <div className='px-3 lg:px-6'>
          <h2 className='text-3xl font-bold mb-10'>Контакты</h2>
          <ul>
            <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
              <div className='text-neutral-400'>
                Официальный и единственный адрес:
              </div>
              <div>{address}</div>
            </li>
            <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
              <div className='text-neutral-400'>E-mail:</div>
              <a href={email.link}>{email.directName}</a>
            </li>
            <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
              <div className='text-neutral-400'>Мобильный:</div>
              <a href={phone.link}>{phone.name}</a>
            </li>
            <li className='bg-neutral-900 p-3 mb-5 md:w-1/2 mx-auto'>
              <div className='text-neutral-400'>Telegram (нажать иконку):</div>
              <a href={telegram.link}>
                <svg
                  className='m-auto'
                  height={40}
                  width={40}
                  fill-rule='evenodd'
                  stroke-linejoin='round'
                  stroke-miterlimit='1.414'
                  clip-rule='evenodd'
                  viewBox='0 0 24 24'
                  fill='white'
                >
                  <path d={telegram.icon} />
                </svg>
              </a>
            </li>
            <li className='bg-neutral-900 p-3 md:w-1/2 mx-auto'>
              <div className='text-neutral-400'>Whatsapp (нажать иконку):</div>
              <a href={whatsapp.link}>
                <svg
                  className='m-auto'
                  height={40}
                  width={40}
                  fill-rule='evenodd'
                  stroke-linejoin='round'
                  stroke-miterlimit='1.414'
                  clip-rule='evenodd'
                  viewBox='0 0 24 24'
                  fill='white'
                >
                  <path d={whatsapp.icon} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
