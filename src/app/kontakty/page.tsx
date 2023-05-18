import { Breadcrumbs } from '@/components/breadcrumbs';
import {
  address,
  email,
  phone,
  telegram,
  whatsapp,
} from '@/data/contacts.json';
import Image from 'next/image';
import imgTelegram from '../../../public/icons/telegram.svg';

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
                    <path d='M18.384 22.779a1.19 1.19 0 0 0 1.107.145 1.16 1.16 0 0 0 .724-.84C21.084 18 23.192 7.663 23.983 3.948a.78.78 0 0 0-.26-.758.8.8 0 0 0-.797-.14C18.733 4.602 5.82 9.447.542 11.4a.827.827 0 0 0-.542.799c.012.354.25.661.593.764 2.367.708 5.474 1.693 5.474 1.693s1.452 4.385 2.209 6.615c.095.28.314.5.603.576a.866.866 0 0 0 .811-.207l3.096-2.923s3.572 2.619 5.598 4.062Zm-11.01-8.677 1.679 5.538.373-3.507 10.185-9.186a.277.277 0 0 0 .033-.377.284.284 0 0 0-.376-.064L7.374 14.102Z' />
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
                    <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                  </svg>
                </a>
              </li>
            </ul>
            <form>
              <div className='form-group mb-6'>
                <input
                  type='text'
                  className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-neutral-800
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-red-800 focus:border-red-300 focus:outline-none'
                  id='inputName'
                  placeholder='Имя'
                />
              </div>
              <div className='form-group mb-6'>
                <input
                  type='email'
                  className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-neutral-800
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-red-800 focus:border-red-300 focus:outline-none'
                  id='inputEmail'
                  placeholder='Email'
                />
              </div>
              <div className='form-group mb-6'>
                <textarea
                  className='
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-neutral-800
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-red-800 focus:border-red-300 focus:outline-none
          '
                  id='inputMessage'
                  rows={3}
                  placeholder='Сообщение'
                ></textarea>
              </div>
              <div className='form-group form-check text-center mb-6'>
                <input
                  type='checkbox'
                  className='form-check-input appearance-none h-4 w-4 border border-red-900 rounded-sm bg-white checked:bg-red-800 checked:border-red-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                  id='check'
                />
                <label
                  className='form-check-label inline-block text-white'
                  htmlFor='check'
                >
                  Отправить себе копию сообщения
                </label>
              </div>
              <button
                type='submit'
                className='
          w-full
          px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-500 hover:shadow-lg
          focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out'
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
