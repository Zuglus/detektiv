import UnifiedButton from '@/components/ui/UnifiedButton';
import UnifiedCard from '@/components/ui/UnifiedCard';
import IconSvg from '@/components/ui/IconSvg';

export default function Custom404() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full">
        <UnifiedCard variant="emergency" className="group relative overflow-hidden" size="large">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-500" />
          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent-100 rounded-2xl">
                <IconSvg name="warning" size="4xl" color="accent" />
              </div>
            </div>
            <h2 className="text-heading-xl md:text-display-md font-bold text-secondary-900 mb-4">
              Ошибка 404
            </h2>
            <p className="text-body-lg md:text-body-xl text-secondary-700 mb-8">
              Материал не найден. Страница отсутствует! Проверьте адрес.
            </p>
            <UnifiedButton as="link" href="/" variant="primary" size="lg">
              Главная страница
            </UnifiedButton>
          </div>
        </UnifiedCard>
      </div>
    </div>
  );
}
