import Card from '@/components/card';
import CardService from '@/components/cardService';
import { classNames } from '../components/classNames';

export default function About() {
  return (
    <>
      <p className='text-center'>
        ДЛЯ ВАШЕЙ КОНФИДЕНЦИАЛЬНОСТИ РАБОТАЕМ ДИСТАНЦИОННО ОНЛАЙН,
      </p>
      <p className='text-center'>
        {' '}
        выберите любой вид связи, нажав на ссылку:
        <a href='tg://resolve?domain=detective_moscow' className='font-bold'>
          {' '}
          Telegram
        </a>
        ,
        <a href='whatsapp://send?phone=79150010025' className='font-bold'>
          {' '}
          Whatsapp
        </a>
        ,
        <a href='mailto:Pravo018@gmail.com' className='font-bold'>
          {' '}
          E-mail
        </a>
        .
      </p>
      <p className='indent-5 text-justify mt-4'>
        Детективное агентство &ldquo;Право&rdquo; является{' '}
        <strong>элитарным</strong> и оказывает детективные услуги для тех, кто
        может финансово их заказать - Профессиональные услуги стоят дорого.
        Организовываем поиск, розыск, собираем и проверяем информацию разного
        направления, проводим анализ и выстраиваем алгоритм действий по
        конкретной ситуации. Повторяющихся заказов в исполнении нет, всегда
        применяются новые креативные методы и задействуются различные ресурсы,
        требующие финансовых затрат. Мы <strong>Гарантируем</strong>{' '}
        <strong>Профессиональное</strong> и <strong>Оперативное</strong>{' '}
        исполнение Вашего Заказа - Вы получаете <strong>Результат</strong> и{' '}
        <strong>Конфиденциальность</strong>, Вам не нужно переживать за
        обращение к нам, мы не соохраняем никаких данных о Заказчике и
        результаты работ. Отношения между Нами выстраиваются{' '}
        <strong>Доверительными</strong> и <strong>Уважительными</strong>.
        Штаб-квартира расположена в Москве, осуществляем детективную
        деятельность на всей территории России, СНГ и за рубежом. Наши
        сотрудники не прохлаждаются в офисе, так как постоянно находятся в
        разъездах, выполняя свою работу.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 mt-10'>
        {[
          {
            title: 'ДОСЬЕ',
            price: 'От 150.000 рублей',
            text: 'Сбор интересующей информации о человеке, об объекте',
          },
          {
            title: 'НАБЛЮДЕНИЕ',
            price: 'От 150.000 рублей',
            text: 'Установление образа жизни, фиксация контактов и др.',
          },
          {
            title: 'ЧАСТНЫЕ РАССЛЕДОВАНИЯ',
            price: 'От 1.000.000 рублей',
            text: 'Установление истины, сбор сведений, очевидцев, свидетелей.',
          },
          {
            title: 'ПРОВЕРКА НА ИЗМЕНУ, ЛИБО ЕЕ ОТСУТСТВИЕ',
            price: 'От 500.000 рублей',
            text: 'Наблюдение, контакты, связи, соц. сети',
          },
          {
            title: 'ЧАСТНЫЙ ПОИСК ЛЮДЕЙ, РОЗЫСК ДОЛЖНИКОВ',
            price: 'От 500.000 рублей',
            text: 'Оперативный поиск по России и за рубежом',
          },
          {
            title: 'ПРОВЕРКА ПЕРСОНАЛА',
            price: 'От 250.000 рублей',
            text: 'Сбор и проверка предоставленных данных кандидатом',
          },
          {
            title: 'ПРОВЕРКА ФИРМ И ДЕЛОВЫХ ПАРТНЕРОВ',
            price: 'От 1.000.000 рублей',
            text: 'Сбор и проверка сведений, счетов, баланса, имущества, разоблачение мошенников',
          },
          {
            title: 'IT - ИНТЕРНЕТ',
            price: 'От 700.000 рублей',
            text: 'Поиск и установление данных в глобальной сети, мессенджерах, соц. сетях и др.',
          },
          {
            title: 'ИНФОРМАЦИЯ ЗА РУБЕЖОМ',
            price: 'От 1.500.000 рублей',
            text: 'Сбор и проверка интересующей информации о человеке, об объекте',
          },
        ].map((card) => {
          return <CardService key={card.title} data={card} />;
        })}
      </div>
      <h3 className='text-red-600 mt-8 uppercase'>о нас</h3>
      <p className='indent-5 text-justify mt-4'>
        Детективное агентство &ldquo;Право&rdquo; создано в 2010 году, офицером
        в отставке - старшим оперуполномоченным по особо важным делам, ветераном
        боевых действий, награжденным государственными наградами. На основании
        Лицензии МВД РФ 50ЧД2021000323 наше агентство оказывает детективные
        услуги на территории России и за Рубежом. В детективном агентстве
        &ldquo;Право&rdquo; работают опытные, квалифицированные и
        профессиональные сыщики с высшими образованиями, многолетним опытом -
        исключительно оперативный состав различных силовых служб ФСБ, МВД, МО -
        офицеры в отставке. Каждый Сыщик профессионально выполняет свою работу
        на высоком должном уровне.
      </p>
      <p className='indent-5 text-justify mt-4'>
        Сегодняшний рынок детективных услуг на просторах интернета насыщен
        непрофессиональными кадрами, либо &ldquo;гражданскими-стажерами&rdquo;,
        получившими лицензию после трехмесячного срока обучения не имеющих
        совсем опыта в сыске или попросту мошенниками без лицензий, которые
        якобы гарантируют 100% результат. Имейте ввиду, что при выполнении
        любого задания существует риск, либо форс-мажор, который настоящий
        Профессионал учитывает и обговаривает с Заказчиком.
      </p>
      <p className='indent-5 text-justify mt-4'>
        Стоимость наших услуг, на первый взгляд, может показаться дорогой, но
        после решения Ваших семейных, бизнес и иных проблем, на практике
        окажется оправданной. Покупая дешевый товар, Вы осознанно принимаете его
        изначальное низкое качество, либо сомнительное происхождение. Поэтому,
        будьте внимательны при выборе частного детектива - Детективное агентство
        &ldquo;Право&rdquo; предоставляет Профессиональные услуги.
      </p>
      <ul className='list-none text-center max-w-3xl py-5'>
        {[
          {
            id: 1,
            title: 'ВСЕГДА ПРИДЕРЖИВАЕМСЯ СТРОГОЙ КОНФИДЕНЦИАЛЬНОСТИ.',
            text: 'После передачи информации заказчику, все сведения, хранящиеся у нас, в обязательном порядке уничтожаются.',
          },
          {
            id: 2,
            title: 'ПРИМЕНЯЕМ НАРАБОТАННЫЕ СВЯЗИ',
            text: 'Взаимодействуем с коллегами по всему миру, а также с правоохранительными органами и государственными учреждениями.',
          },
          {
            id: 3,
            title: 'ПОСТОЯННО ПОВЫШАЕМ УРОВЕНЬ ПРОФЕССИОНАЛЬНОГО РАЗВИТИЯ',
            text: 'Идем в ногу со временем, внедряем новейшие технологии.',
          },
          {
            id: 4,
            title: 'РАБОТАЕМ ДИСТАНЦИОННО - ОНЛАЙН',
            text: 'Конфиденциальность и экономия время, приступаем незамедлительно к выполнению задания',
          },
        ].map((item) => {
          return (
            <li
              key={item.id}
              className={classNames(
                item.id % 2 === 0 ? 'transparent' : 'bg-neutral-900',
                'px-4 py-3'
              )}
            >
              <h3>{item.title}</h3>
              <p className='text-neutral-400'>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <div className='bg-neutral-900 p-6'>
        <h2 className='text-center text-lg'>
          ПРЕДЛАГАЕМ ПОМОЩЬ В РЕШЕНИИ ВАШИХ ПРОБЛЕМ И ЗАДАЧ
        </h2>
        <p className='text-neutral-400 text-justify'>
          Меры, которые предлагаем мы, ориентированы не только на результат, а
          также на минимизацию затрат времени и финансов. Потому, что для нас
          важна благодарность заказчика. Безвыходных ситуаций не бывает!
        </p>
      </div>
      <h2 className='text-center text-lg text-red-600 uppercase pt-6 mt-2'>
        ПРИНЦИПЫ ЧАСТНОГО ДЕТЕКТИВА «ПРАВО»
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
        {[
          {
            title: 'КОНФИДЕНЦИАЛЬНОСТЬ',
            text: 'Ваши секреты строго охраняются, после работы все данные уничтожаются',
          },
          {
            title: 'КОМПЕТЕНТНОСТЬ',
            text: 'Знания и опыт позволяют оказывать услуги профессионально',
          },
          {
            title: 'ДОСТОВЕРНОСТЬ ИНФОРМАЦИИ',
            text: 'Проверенные нами данные – это ваши правильные уверенные решения',
          },
          {
            title: 'ЗАКОННОСТЬ',
            text: 'Действуем в правовом поле – в рамках действующего законодательства',
          },
          {
            title: 'ОПЕРАТИВНОСТЬ',
            text: 'От скорости поиска людей и сбора информации зависит итог дела',
          },
          {
            title: 'ЧЕЛОВЕЧНОСТЬ',
            text: 'За каждой историей стоят люди: их чувства и судьбы',
          },
        ].map((item) => {
          return <Card key={item.title} data={item} />;
        })}
      </div>
      <div>
        <h4 className='text-center'>
          ПРОЦЕСС ЗАКАЗА ВЫГЛЯДИТ СЛЕДУЮЩИМ ОБРАЗОМ:
        </h4>
        <ul>
          {[
            'Бесплатная предварительная консультация по телефону, email, telegram, whatsapp',
            'Получение вводных данных от Заказчика для определения сроков исполнения и стоимости услуги',
            'Оплата через СБП (систему быстрых платежей) на карту банка, привязанную к мобильному номеру, а также криптовалютой',
            'Сбор информации / Сыскные мероприятия',
            'Предоставление отчета',
          ].map((li, i) => {
            return (
              <li
                className={classNames(
                  'text-neutral-400 font-bold',
                  i % 2 === 0 ? 'bg-neutral-900' : 'bg-transparent'
                )}
                key={i}
              >
                {li}
              </li>
            );
          })}
        </ul>
      </div>
      <h4>ОСТЕРЕГАЙТЕСЬ МОШЕННИКОВ!</h4>
      <p>
        <strong>Частное детективное агентство «Право»</strong> имеет безупречную
        репутацию на рынке детективных услуг. Возможны случаи, когда мошенники
        или недобросовестные коллеги могут представляться сотрудниками нашего
        агентства. Чтобы распознать аферистов, помните следующее:
      </p>
      <ul className='list-disc'>
        <li>
          Все заказы принимаются на e-mail: <strong>Pravo018@gmail.com</strong>,{' '}
          <a href='tg://resolve?domain=detective_moscow'>
            {' '}
            <strong>Telegram</strong>
          </a>
          ,{' '}
          <a href='whatsapp://send?phone=79150010025'>
            {' '}
            <strong>Whatsapp</strong>
          </a>
          , либо по телефону{' '}
          <a href='tel:+79150010025'>
            <strong>+7 (915) 001-00-25</strong>
          </a>
          . 
        </li>
        <li>
          Наш сайт:{' '}
          <a href='https://право18.рф'>
            <strong>https://право18.рф</strong>
          </a>
          .
        </li>
      </ul>
    </>
  );
}
