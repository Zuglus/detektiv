import Card from "./card";

export default function ContentJob({ data, contacts }: { data: any, contacts: any }) {
  return (
    <>
      <Card
        data={{
          title: data.cardTitle,
          text: data.cardText,
        }}
      />
      <p className='md:text-start md:w-1/2'>
        {data.portfolioTitle}
      </p>
      <ul className='text-white'>
        {
          data.portfolioList.map((i: string) => <li className='md:mb-2'>{i}</li>)
        }
      </ul>
      <p className='md:w-1/2 md:text-start' dangerouslySetInnerHTML={{ __html: data.portfolioLink }} />
      <p className='mb-5 mt-1 p-2 md:mt-5 md:mb-10 md:p-4 bg-red-950' dangerouslySetInnerHTML={{ __html: data.portfolioAlert }} />
    </>);
}
