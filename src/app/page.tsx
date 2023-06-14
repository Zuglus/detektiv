import CardPrinciple from '@/components/cardPrinciple';
import CardService from '@/components/cardService';
import contacts from '@/data/contacts.json';

export default function About() {
  return (
    <>
      <p className='text-center'>
        ДЛЯ ВАШЕЙ КОНФИДЕНЦИАЛЬНОСТИ РАБОТАЕМ ДИСТАНЦИОННО ОНЛАЙН,
      </p>
      <p className='text-center'>
        {' '}
        выберите любой вид связи, нажав на ссылку:
        {[contacts.telegram, contacts.whatsapp, contacts.email].map((item) => {
          return (
            <a key={item.name} href={item.link}>
              {' '}
              {item.name}
              {item === contacts.email ? '.' : ','}
            </a>
          );
        })}
      </p>
      <p>
        Детективное агентство &laquo;Право&raquo; является{' '}
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
      <p>
        Детективное агентство &laquo;Право&raquo; создано в 2010 году, офицером
        в отставке - старшим оперуполномоченным по особо важным делам, ветераном
        боевых действий, награжденным государственными наградами. На основании
        Лицензии МВД РФ 50ЧД2021000323 наше агентство оказывает детективные
        услуги на территории России и за Рубежом. В детективном агентстве
        &laquo;Право&raquo; работают опытные, квалифицированные и
        профессиональные сыщики с высшими образованиями, многолетним опытом -
        исключительно оперативный состав различных силовых служб ФСБ, МВД, МО -
        офицеры в отставке. Каждый Сыщик профессионально выполняет свою работу
        на высоком должном уровне.
      </p>
      <p>
        Сегодняшний рынок детективных услуг на просторах интернета насыщен
        непрофессиональными кадрами, либо &laquo;гражданскими-стажерами&raquo;,
        получившими лицензию после трехмесячного срока обучения не имеющих
        совсем опыта в сыске или попросту мошенниками без лицензий, которые
        якобы гарантируют 100% результат. Имейте ввиду, что при выполнении
        любого задания существует риск, либо форс-мажор, который настоящий
        Профессионал учитывает и обговаривает с Заказчиком.
      </p>
      <p>
        Стоимость наших услуг, на первый взгляд, может показаться дорогой, но
        после решения Ваших семейных, бизнес и иных проблем, на практике
        окажется оправданной. Покупая дешевый товар, Вы осознанно принимаете его
        изначальное низкое качество, либо сомнительное происхождение. Поэтому,
        будьте внимательны при выборе частного детектива - Детективное агентство
        &laquo;Право&raquo; предоставляет Профессиональные услуги.
      </p>
      <ul className='list-none text-center max-w-3xl py-5 my-3'>
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
            <li key={item.id} className='odd:bg-neutral-900 px-4 py-3'>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <div className='bg-neutral-900 p-6 my-3'>
        <h2 className='text-center text-lg'>
          ПРЕДЛАГАЕМ ПОМОЩЬ В РЕШЕНИИ ВАШИХ ПРОБЛЕМ И ЗАДАЧ
        </h2>
        <p>
          Меры, которые предлагаем мы, ориентированы не только на результат, а
          также на минимизацию затрат времени и финансов. Потому, что для нас
          важна благодарность заказчика. Безвыходных ситуаций не бывает!
        </p>
      </div>
      <h2 className='text-center text-lg text-red-600 uppercase pt-10 pb-3'>
        ПРИНЦИПЫ ЧАСТНОГО ДЕТЕКТИВА «ПРАВО»
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
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
          return <CardPrinciple key={item.title} data={item} />;
        })}
      </div>
      <div>
        <h4 className='text-center pt-10 pb-3'>
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
                className='text-neutral-400 font-bold odd:bg-neutral-900 p-3'
                key={i}
              >
                {li}
              </li>
            );
          })}
        </ul>
      </div>
      <h4 className='pt-10 pb-3'>ОСТЕРЕГАЙТЕСЬ МОШЕННИКОВ!</h4>
      <p className='text-neutral-400'>
        <strong>Частное детективное агентство &laquo;Право&raquo;</strong> имеет
        безупречную репутацию на рынке детективных услуг. Возможны случаи, когда
        мошенники или недобросовестные коллеги могут представляться сотрудниками
        нашего агентства. Чтобы распознать аферистов, помните следующее:
      </p>
      <ul className='list-disc pt-3'>
        <li className='pb-2 text-neutral-400'>
          Все заказы принимаются на e-mail:{' '}
          <strong className='select-all text-white'>
            {contacts.email.directName}
          </strong>
          , <a href={contacts.telegram.link}> {contacts.telegram.name}</a>,{' '}
          <a href={contacts.whatsapp.link}> {contacts.whatsapp.name}</a>, либо
          по телефону <a href={contacts.phone.link}>{contacts.phone.name}</a>
          . 
        </li>
        <li className='text-neutral-400'>
          Наш сайт: <a href={contacts.site}>{contacts.site}</a>.
        </li>
      </ul>
      <div className='p-10 text-2xl'>Нам доверяют решение любых вопросов!</div>
    </>
  );
}
