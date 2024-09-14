import ContentMain from '@/components/content/contentMain';
import content from '@/data/main.json';
import contacts from '@/data/contacts.json';

export default function MainEn() {
  return (
    <>
      <ContentMain data={content.en} contacts={contacts} />
    </>
  );
}
