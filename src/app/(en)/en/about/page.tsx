import ContentMain from '@/components/content/contentMain';
import contentData from '@/data/main.json';
import contactsData from '@/data/contacts.json';

export default function AboutEn() {
  return (
      <ContentMain data={contentData.en} contacts={contactsData} />
  );
}
