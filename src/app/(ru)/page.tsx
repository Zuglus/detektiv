import ContentAbout from '@/components/contentAbout';
import content from '@/data/about.json';
import contacts from '@/data/contacts.json';

export default function About() {
  return (
    <>
      <ContentAbout data={content.ru} contacts={contacts} />
    </>
  );
}
