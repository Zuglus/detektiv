import ContentAbout from '@/components/content/contentAbout';
import content from '@/data/about.json';

export default function AboutEn() {
  return (
    <>
      <ContentAbout data={content.en} />
    </>
  );
}
