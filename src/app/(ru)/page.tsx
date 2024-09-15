import ContentMain from '@/components/content/contentMain';
import contentData from '@/data/main.json';
import contactsData from '@/data/contacts.json';

export default function About() {

  return (
    <ContentMain data={contentData.ru} contacts={contactsData} />
  );
}
