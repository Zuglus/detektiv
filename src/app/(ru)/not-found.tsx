import UnifiedButton from '@/components/ui/UnifiedButton';

export default function NotFound() {
  return (
    <div className="py-10 md:p-20 text-center">
      <h2 className="text-2xl md:text-4xl">
        Ошибка 404. Материал не найден.
      </h2>
      <div className="my-10">
        Страница отсутствует! Проверьте адрес.
      </div>
      <UnifiedButton as="link" href="/" variant="primary">
        Главная страница
      </UnifiedButton>
    </div>
  );
}
