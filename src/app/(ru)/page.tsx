import ContentMain from '@/components/content/contentMain';
import contentData from '@/data/main.json';
import contactsData from '@/data/contacts.json';
import {ContentData, Contacts} from '@/components/utility/types'

export default function About() {

  return (
    <>
      <ContentMain data={contentData.ru} contacts={contactsData} />
    </>
  );
}
