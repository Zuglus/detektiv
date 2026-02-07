import { render, screen } from '@testing-library/react'

// Mock child components
jest.mock('@/components/ui/UnifiedCard', () => {
  return function MockUnifiedCard({
    children,
    variant,
    interactive,
    ...props
  }: {
    children: React.ReactNode;
    variant?: string;
    interactive?: boolean;
    [key: string]: unknown;
  }) {
    return (
      <div data-testid={`unified-card-${variant || 'default'}`} data-interactive={interactive} {...props}>
        {children}
      </div>
    )
  }
})

jest.mock('@/components/ui/UnifiedButton', () => {
  return function MockUnifiedButton({
    children,
    as,
    ...props
  }: {
    children: React.ReactNode;
    as?: string;
    [key: string]: unknown;
  }) {
    if (as === 'link') {
      return <a data-testid="unified-button" {...props}>{children}</a>
    }
    return <button data-testid="unified-button" {...props}>{children}</button>
  }
})

jest.mock('@/components/utility/scrollReveal', () => {
  return function MockScrollReveal({ children }: { children: React.ReactNode }) {
    return <div data-testid="scroll-reveal">{children}</div>
  }
})

// Mock JSON data
jest.mock('@/components/content/main/main.json', () => ({
  subheader: {
    ru: 'Мы на связи онлайн:',
    en: 'We are online and ready to help:'
  },
  intro: {
    ru: 'Детективное агентство Грозного',
    en: 'The detective agency of Grozny'
  },
  proposeHeader: {
    ru: 'предлагаем помощь\n в решении ваших вопросов',
    en: 'we offer help in solving your issues'
  },
  proposeText: {
    ru: 'Меры, которые предлагаем мы, ориентированы на получение исключительно профессионального результата в короткие сроки - для нас важна благодарность заказчика.',
    en: 'The measures we offer are focused on achieving exclusively professional results in a short time - the customer\'s gratitude is important to us.'
  },
  serviceList: [
    {
      ru: { title: 'досье', text: 'Сбор интересующей информации о человеке, об объекте' },
      en: { title: 'dossier', text: 'Collection of relevant information about a person or object' }
    },
    {
      ru: { title: 'наблюдение', text: 'Установление образа жизни' },
      en: { title: 'surveillance', text: 'Determination of lifestyle' }
    },
    {
      ru: { title: 'частные расследования', text: 'Установление истины' },
      en: { title: 'private investigations', text: 'Establishing truth' }
    },
    {
      ru: { title: 'частный поиск людей', text: 'Одноклассников, попутчиков' },
      en: { title: 'private search for people', text: 'Classmates, fellow travelers' }
    },
    {
      ru: { title: 'частный розыск должников и алиментщиков', text: 'Оперативный поиск' },
      en: { title: 'private search for debtors', text: 'Operational search' }
    },
    {
      ru: { title: 'проверка персонала', text: 'Сбор и проверка данных' },
      en: { title: 'personnel check', text: 'Collection and verification' }
    },
    {
      ru: { title: 'проверка фирм и деловых партнеров', text: 'Сбор и проверка сведений' },
      en: { title: 'business partner check', text: 'Collection and verification' }
    },
    {
      ru: { title: 'it - интернет', text: 'Поиск и установление данных' },
      en: { title: 'IT - internet', text: 'Search and establishment' }
    },
    {
      ru: { title: 'информация за рубежом', text: 'Сбор и проверка информации' },
      en: { title: 'information abroad', text: 'Collection and verification' }
    }
  ],
  orderListHeader: {
    ru: 'процесс заказа выглядит следующим образом:',
    en: 'the order process is as follows:'
  },
  orderList: {
    ru: [
      'Бесплатная предварительная консультация по телефону, email, telegram, whatsapp',
      'Получение вводных данных от Заказчика для определения сроков исполнения и стоимости услуги',
      'Оплата через СБП (систему быстрых платежей) или криптовалютой',
      'Сбор информации / Сыскные мероприятия',
      'Предоставление отчета'
    ],
    en: [
      'Free preliminary consultation via phone, email, telegram, whatsapp',
      'Receiving initial data from the client to determine deadlines and service costs',
      'Payment through fast payment system or cryptocurrency',
      'Collection of information / Investigative activities',
      'Report submission'
    ]
  },
  benefitsList: [
    {
      id: 1,
      ru: { title: 'всегда придерживаемся строгой конфиденциальности', text: 'После передачи информации заказчику, все сведения, хранящиеся у нас, в обязательном порядке уничтожаются.' },
      en: { title: 'we always adhere to strict confidentiality', text: 'After the information is passed to the client, all data stored with us is obligatorily destroyed.' }
    },
    {
      id: 2,
      ru: { title: 'применяем наработанные связи', text: 'Взаимодействуем с коллегами по всему миру' },
      en: { title: 'we apply well-established connections', text: 'We cooperate with colleagues worldwide' }
    },
    {
      id: 3,
      ru: { title: 'постоянно повышаем уровень профессионального развития', text: 'Идем в ногу со временем' },
      en: { title: 'we constantly raise our level of professional development', text: 'We keep up with the times' }
    },
    {
      id: 4,
      ru: { title: 'работаем дистанционно - онлайн', text: 'Конфиденциальность и экономия время' },
      en: { title: 'we work remotely - online', text: 'Confidentiality and time-saving' }
    }
  ],
  detektivePrinciplesHeader: {
    ru: 'принципы нашего агентства',
    en: 'principles of our agency'
  },
  detektivePrinciplesList: [
    {
      ru: { title: 'конфиденциальность' },
      en: { title: 'Confidentiality' }
    },
    {
      ru: { title: 'компетентность' },
      en: { title: 'Competence' }
    },
    {
      ru: { title: 'достоверность информации' },
      en: { title: 'Information accuracy' }
    },
    {
      ru: { title: 'законность' },
      en: { title: 'Legality' }
    },
    {
      ru: { title: 'оперативность' },
      en: { title: 'Efficiency' }
    },
    {
      ru: { title: 'человечность' },
      en: { title: 'Humanity' }
    }
  ],
  alertHeader: {
    ru: 'Остерегайтесь мошенников!',
    en: 'Beware of fraudsters!'
  },
  alertText: {
    ru: 'Наше детективное агентство имеет безупречную репутацию',
    en: 'Our detective agency has an impeccable reputation'
  },
  alertSubstring1: {
    ru: 'Все заказы принимаются на e-mail: ',
    en: 'All orders are accepted via email: '
  },
  alertSubstring2: {
    ru: ' либо по телефону ',
    en: ' or by phone '
  },
  alertSubstring3: {
    ru: 'Наш сайт: ',
    en: 'Our website: '
  }
}), { virtual: true })

jest.mock('@/data/contacts.json', () => ({
  telegram: { name: 'Telegram', link: 'tg://resolve?domain=+79150010025' },
  whatsapp: { name: 'Whatsapp', link: 'whatsapp://send?phone=79150010025' },
  email: { name: 'E-mail', link: 'mailto:detectivegroznyi@gmail.com', directName: 'detectivegroznyi@gmail.com' },
  phone: { name: '+7 (915) 001-00-25', link: 'tel:+79150010025' },
  site: 'https://право18.рф'
}), { virtual: true })

import ContentMain from '../main/contentMain'

describe('ContentMain', () => {
  it('renders main content for Russian language', () => {
    render(<ContentMain lang="ru" />)
    
    expect(screen.getByText('Мы на связи онлайн:')).toBeInTheDocument()
    expect(screen.getByText('предлагаем помощь в решении ваших вопросов')).toBeInTheDocument()
    expect(screen.getByText('процесс заказа выглядит следующим образом:')).toBeInTheDocument()
  })

  it('renders main content for English language', () => {
    render(<ContentMain lang="en" />)
    
    expect(screen.getByText('We are online and ready to help:')).toBeInTheDocument()
    expect(screen.getByText('we offer help in solving your issues')).toBeInTheDocument()
    expect(screen.getByText('the order process is as follows:')).toBeInTheDocument()
  })

  it('renders contact buttons', () => {
    render(<ContentMain lang="ru" />)
    
    // Check for UnifiedButton contact buttons in the quick contact section
    const contactButtons = screen.getAllByTestId('unified-button').slice(0, 3)
    expect(contactButtons).toHaveLength(3)
    expect(contactButtons[0]).toHaveTextContent('Telegram')
    expect(contactButtons[1]).toHaveTextContent('Whatsapp')
    expect(contactButtons[2]).toHaveTextContent('E-mail')
  })

  it('renders service cards', () => {
    render(<ContentMain lang="ru" />)
    
    // Check for service titles in the content
    expect(screen.getByText('досье')).toBeInTheDocument()
    expect(screen.getByText('наблюдение')).toBeInTheDocument()
    expect(screen.getByText('частные расследования')).toBeInTheDocument()
    expect(screen.getByText('частный поиск людей')).toBeInTheDocument()
    expect(screen.getByText('частный розыск должников и алиментщиков')).toBeInTheDocument()
    expect(screen.getByText('проверка персонала')).toBeInTheDocument()
    expect(screen.getByText('проверка фирм и деловых партнеров')).toBeInTheDocument()
    expect(screen.getByText('it - интернет')).toBeInTheDocument()
    expect(screen.getByText('информация за рубежом')).toBeInTheDocument()
  })

  it('renders order process steps', () => {
    render(<ContentMain lang="ru" />)
    
    expect(screen.getByText(/Бесплатная предварительная консультация/)).toBeInTheDocument()
    expect(screen.getByText(/Получение вводных данных от Заказчика/)).toBeInTheDocument()
  })

  it('renders benefits list', () => {
    render(<ContentMain lang="ru" />)
    
    expect(screen.getByText('всегда придерживаемся строгой конфиденциальности')).toBeInTheDocument()
    expect(screen.getByText(/После передачи информации заказчику/)).toBeInTheDocument()
  })

  it('renders detective principles', () => {
    render(<ContentMain lang="ru" />)
    
    expect(screen.getByText('принципы нашего агентства')).toBeInTheDocument()
    expect(screen.getAllByTestId('unified-card-principle')).toHaveLength(6)
  })

  it('renders contact information section', () => {
    render(<ContentMain lang="ru" />)
    
    expect(screen.getByText('Остерегайтесь мошенников!')).toBeInTheDocument()
    expect(screen.getByText('detectivegroznyi@gmail.com')).toBeInTheDocument()
  })

  it('has correct semantic structure', () => {
    const { container } = render(<ContentMain lang="ru" />)

    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('relative')

    const sections = wrapper.querySelectorAll('section')
    expect(sections.length).toBeGreaterThan(0)
  })

  it('renders scroll reveal components', () => {
    render(<ContentMain lang="ru" />)
    
    const scrollReveals = screen.getAllByTestId('scroll-reveal')
    expect(scrollReveals.length).toBeGreaterThan(5)
  })
})
