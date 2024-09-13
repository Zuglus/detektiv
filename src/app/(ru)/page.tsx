import ContentAbout from '@/components/content/contentAbout';
import contentData from '@/data/about.json';
import contactsData from '@/data/contacts.json';
import {ContentData, Contacts} from '@/components/utility/types'

interface AboutProps {
  content: ContentData;
  contacts: Contacts;
}

export default function About() {
  const data: ContentData = contentData;
  const contacts: Contacts = contactsData;
  return (
    <>
      <ContentAbout data={data.ru} contacts={contacts} />
    </>
  );
}
