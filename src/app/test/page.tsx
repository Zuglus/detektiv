import data from '@/data/test.json';

export default function Test() {
  return (
    <>
      <h2 className='text-3xl'>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </>
  );
}
