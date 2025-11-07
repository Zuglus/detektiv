import { Metadata } from 'next';
import UnifiedButton from '@/components/ui/UnifiedButton';
import UnifiedCard from '@/components/ui/UnifiedCard';
import IconSvg from '@/components/ui/IconSvg';

export const metadata: Metadata = {
  title: 'Design System | Detektiv',
  description: 'Comprehensive design system documentation',
  robots: 'noindex, nofollow',
};

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-secondary-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Design System
          </h1>
          <p className="text-lg text-secondary-600">
            Comprehensive component library and design guidelines
          </p>
        </div>

        {/* Buttons Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Buttons</h2>

          {/* Variants */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <UnifiedButton variant="primary">Primary</UnifiedButton>
              <UnifiedButton variant="secondary">Secondary</UnifiedButton>
              <UnifiedButton variant="ghost">Ghost</UnifiedButton>
              <UnifiedButton variant="outline">Outline</UnifiedButton>
              <UnifiedButton variant="danger">Danger</UnifiedButton>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <UnifiedButton size="sm">Small</UnifiedButton>
              <UnifiedButton size="md">Medium</UnifiedButton>
              <UnifiedButton size="lg">Large</UnifiedButton>
              <UnifiedButton size="xl">Extra Large</UnifiedButton>
            </div>
          </div>

          {/* With Icons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <UnifiedButton variant="primary">
                <IconSvg name="phone" className="w-5 h-5 mr-2" />
                Call Us
              </UnifiedButton>
              <UnifiedButton variant="secondary">
                <IconSvg name="email" className="w-5 h-5 mr-2" />
                Email
              </UnifiedButton>
              <UnifiedButton variant="outline">
                <IconSvg name="telegram" className="w-5 h-5 mr-2" />
                Telegram
              </UnifiedButton>
            </div>
          </div>

          {/* States */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">States</h3>
            <div className="flex flex-wrap gap-4">
              <UnifiedButton variant="primary" disabled>Disabled</UnifiedButton>
              <UnifiedButton variant="primary" fullWidth className="max-w-md">
                Full Width
              </UnifiedButton>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Cards</h2>

          {/* Variants */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UnifiedCard variant="default">
                <h4 className="font-semibold mb-2">Default Card</h4>
                <p className="text-sm text-secondary-600">
                  Standard card with white background and shadow
                </p>
              </UnifiedCard>

              <UnifiedCard variant="dark">
                <h4 className="font-semibold mb-2">Dark Card</h4>
                <p className="text-sm text-secondary-200">
                  Dark background with light text
                </p>
              </UnifiedCard>

              <UnifiedCard variant="emergency">
                <h4 className="font-semibold mb-2">Emergency Card</h4>
                <p className="text-sm text-secondary-600">
                  Eye-catching design for urgent information
                </p>
              </UnifiedCard>

              <UnifiedCard variant="accent">
                <h4 className="font-semibold mb-2">Accent Card</h4>
                <p className="text-sm text-secondary-600">
                  Highlighted with accent color
                </p>
              </UnifiedCard>

              <UnifiedCard variant="principle">
                <h4 className="font-semibold mb-2">Principle Card</h4>
                <p className="text-sm text-secondary-600">
                  For displaying company principles
                </p>
              </UnifiedCard>

              <UnifiedCard variant="pricing">
                <h4 className="font-semibold mb-2">Pricing Card</h4>
                <p className="text-sm text-secondary-600">
                  Specialized for pricing information
                </p>
              </UnifiedCard>

              <UnifiedCard variant="trust">
                <h4 className="font-semibold mb-2">Trust Card</h4>
                <p className="text-sm text-secondary-600">
                  Trust indicators and guarantees
                </p>
              </UnifiedCard>

              <UnifiedCard variant="gradient">
                <h4 className="font-semibold mb-2">Gradient Card</h4>
                <p className="text-sm text-white">
                  Gradient background with white text
                </p>
              </UnifiedCard>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Sizes</h3>
            <div className="space-y-6">
              <UnifiedCard size="compact">
                <p className="text-sm">Compact card with minimal padding</p>
              </UnifiedCard>

              <UnifiedCard size="default">
                <p>Default card with standard padding</p>
              </UnifiedCard>

              <UnifiedCard size="large">
                <p>Large card with generous padding</p>
              </UnifiedCard>
            </div>
          </div>

          {/* Special Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Special Cards</h3>
            <div className="space-y-6">
              {/* Disclaimer Card */}
              <div>
                <UnifiedCard
                  variant="default"
                  className="bg-accent-50 border-l-4 border-accent-500"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <IconSvg name="info" size="lg" color="current" className="text-accent-600" />
                    </div>
                    <p className="text-body-md leading-relaxed text-accent-800">
                      Стоимость услуг в прайсе указана ориентировочно, определить точную сумму заказа зависит от представленной информации, от уровня сложности заказа, определения ресурсов привлекаемых для достижения цели.
                    </p>
                  </div>
                </UnifiedCard>
                <div className="mt-3 space-y-1">
                  <code className="text-sm text-secondary-500 block">
                    UnifiedCard variant="default" + bg-accent-50 + border-l-4 border-accent-500
                  </code>
                  <p className="text-xs text-secondary-500">
                    Disclaimer card with accent background and left border. Uses UnifiedCard with smooth transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icons Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Icons</h2>

          {/* Navigation Icons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Navigation</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <IconSvg name="home" size="lg" />
                <span className="text-sm mt-2">home</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="arrowLeft" size="lg" />
                <span className="text-sm mt-2">arrowLeft</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="arrowRight" size="lg" />
                <span className="text-sm mt-2">arrowRight</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="chevronUp" size="lg" />
                <span className="text-sm mt-2">chevronUp</span>
              </div>
            </div>
          </div>

          {/* Communication Icons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Communication</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <IconSvg name="phone" size="lg" color="primary" />
                <span className="text-sm mt-2">phone</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="email" size="lg" color="primary" />
                <span className="text-sm mt-2">email</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="telegram" size="lg" color="primary" />
                <span className="text-sm mt-2">telegram</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="whatsapp" size="lg" color="primary" />
                <span className="text-sm mt-2">whatsapp</span>
              </div>
            </div>
          </div>

          {/* Business Icons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Business</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <IconSvg name="user" size="lg" color="accent" />
                <span className="text-sm mt-2">user</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="bolt" size="lg" color="accent" />
                <span className="text-sm mt-2">bolt</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="file-badge" size="lg" color="accent" />
                <span className="text-sm mt-2">file-badge</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="handshake" size="lg" color="accent" />
                <span className="text-sm mt-2">handshake</span>
              </div>
            </div>
          </div>

          {/* Custom Icons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Custom Icons</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <IconSvg name="experience" size="3xl" color="primary" />
                <span className="text-sm mt-2">experience</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="detective" size="3xl" color="primary" />
                <span className="text-sm mt-2">detective</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="founder" size="3xl" color="primary" />
                <span className="text-sm mt-2">founder</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="refund" size="3xl" color="primary" />
                <span className="text-sm mt-2">refund</span>
              </div>
            </div>
          </div>

          {/* Icon Sizes */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-secondary-800 mb-6">Sizes</h3>
            <div className="flex flex-wrap items-end gap-6">
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="sm" />
                <span className="text-sm mt-2">sm</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="md" />
                <span className="text-sm mt-2">md</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="lg" />
                <span className="text-sm mt-2">lg</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="xl" />
                <span className="text-sm mt-2">xl</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="2xl" />
                <span className="text-sm mt-2">2xl</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="3xl" />
                <span className="text-sm mt-2">3xl</span>
              </div>
              <div className="flex flex-col items-center">
                <IconSvg name="check" size="4xl" />
                <span className="text-sm mt-2">4xl</span>
              </div>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Colors</h2>

          {/* Primary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Primary (Green)</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-primary-50 rounded-lg border border-secondary-200"></div>
                <p className="text-sm">primary-50</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary-100 rounded-lg"></div>
                <p className="text-sm">primary-100</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary-300 rounded-lg"></div>
                <p className="text-sm">primary-300</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary-600 rounded-lg"></div>
                <p className="text-sm text-white">primary-600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary-700 rounded-lg"></div>
                <p className="text-sm text-white">primary-700</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-primary-900 rounded-lg"></div>
                <p className="text-sm text-white">primary-900</p>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Secondary (Gray)</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-secondary-50 rounded-lg border border-secondary-200"></div>
                <p className="text-sm">secondary-50</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary-100 rounded-lg"></div>
                <p className="text-sm">secondary-100</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary-300 rounded-lg"></div>
                <p className="text-sm">secondary-300</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary-600 rounded-lg"></div>
                <p className="text-sm text-white">secondary-600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary-700 rounded-lg"></div>
                <p className="text-sm text-white">secondary-700</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary-900 rounded-lg"></div>
                <p className="text-sm text-white">secondary-900</p>
              </div>
            </div>
          </div>

          {/* Accent */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Accent (Orange)</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-accent-50 rounded-lg border border-secondary-200"></div>
                <p className="text-sm">accent-50</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent-100 rounded-lg"></div>
                <p className="text-sm">accent-100</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent-300 rounded-lg"></div>
                <p className="text-sm">accent-300</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent-600 rounded-lg"></div>
                <p className="text-sm text-white">accent-600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent-700 rounded-lg"></div>
                <p className="text-sm text-white">accent-700</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent-900 rounded-lg"></div>
                <p className="text-sm text-white">accent-900</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Typography</h2>

          <div className="space-y-8">
            {/* Headings */}
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-6">Headings</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="text-display-lg font-bold text-secondary-900">
                    Display Large (64px)
                  </h1>
                  <code className="text-sm text-secondary-500">text-display-lg</code>
                </div>
                <div>
                  <h2 className="text-display-md font-bold text-secondary-900">
                    Display Medium (48px)
                  </h2>
                  <code className="text-sm text-secondary-500">text-display-md</code>
                </div>
                <div>
                  <h3 className="text-heading-xl font-bold text-secondary-900">
                    Heading XL (36px)
                  </h3>
                  <code className="text-sm text-secondary-500">text-heading-xl</code>
                </div>
                <div>
                  <h4 className="text-heading-lg font-bold text-secondary-900">
                    Heading Large (30px)
                  </h4>
                  <code className="text-sm text-secondary-500">text-heading-lg</code>
                </div>
                <div>
                  <h5 className="text-heading-md font-bold text-secondary-900">
                    Heading Medium (24px)
                  </h5>
                  <code className="text-sm text-secondary-500">text-heading-md</code>
                </div>
                <div>
                  <h6 className="text-heading-sm font-bold text-secondary-900">
                    Heading Small (20px)
                  </h6>
                  <code className="text-sm text-secondary-500">text-heading-sm</code>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-6">Body Text</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-body-xl text-secondary-900">
                    Body XL (20px) - Large body text for emphasis
                  </p>
                  <code className="text-sm text-secondary-500">text-body-xl</code>
                </div>
                <div>
                  <p className="text-body-lg text-secondary-900">
                    Body Large (18px) - Comfortable reading size
                  </p>
                  <code className="text-sm text-secondary-500">text-body-lg</code>
                </div>
                <div>
                  <p className="text-body-md text-secondary-900">
                    Body Medium (16px) - Default body text size
                  </p>
                  <code className="text-sm text-secondary-500">text-body-md</code>
                </div>
                <div>
                  <p className="text-body-sm text-secondary-900">
                    Body Small (14px) - Smaller text for secondary content
                  </p>
                  <code className="text-sm text-secondary-500">text-body-sm</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Spacing (8pt Grid)</h2>

          <div className="space-y-6">
            <p className="text-secondary-600">
              All spacing follows an 8px base unit for consistency
            </p>

            <div className="space-y-4">
              {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <div className={`bg-primary-600 h-8`} style={{ width: `${size * 4}px` }}></div>
                  <code className="text-sm">
                    {size * 4}px ({size * 0.25}rem) - {size === 1 ? '0.25' : size / 4}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Glass Effects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">Glass Effects</h2>

          <div className="relative p-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <h4 className="font-semibold mb-2">Glass Card</h4>
                <p className="text-sm text-secondary-600">
                  Medium blur with frosted effect
                </p>
              </div>

              <div className="glass-nav p-6">
                <h4 className="font-semibold mb-2">Glass Nav</h4>
                <p className="text-sm text-secondary-600">
                  Light blur for navigation
                </p>
              </div>

              <button className="glass-button p-6 text-left">
                <h4 className="font-semibold mb-2">Glass Button</h4>
                <p className="text-sm text-secondary-600">
                  Interactive with hover effects
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
