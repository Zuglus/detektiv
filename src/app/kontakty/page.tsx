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
      <section className='mb-32 text-center'>
        <div className='max-w-[700px] mx-auto px-3 lg:px-6'>
          <h2 className='text-3xl font-bold mb-12'>Контакты</h2>
          <div className='flex'>
            <ul>
              <li>
                <div>Официальный и единственный адрес:</div>
                <div>{address}</div>
              </li>
              <li>
                <div>E-mail:</div>
                <a href={email.link}>{email.name}</a>
              </li>
              <li>
                <div>Мобильный:</div>
                <a href={phone.link}>{phone.name}</a>
              </li>
              <li>
                <div>Telegram (нажать иконку):</div>
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
              <li>
                <div>Whatsapp (нажать иконку):</div>
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
        </div>
      </section>
    </>
  );
}
