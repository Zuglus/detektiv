import Card from "@/components/ui/card";

export default function ContentJob({ data, contacts }: { data: any, contacts: any }) {
  return (
    <>
      <Card
        data={{
          title: data.cardTitle,
          text: data.cardText,
        }}
      />
      <p className='md:w-1/2 md:text-start'>
        {data.portfolioTitle}
      </p>
      <ul className='text-white'>
        {
          data.portfolioList.map((i: string) => <li key={i} className='md:mb-2'>{i}</li>)
        }
      </ul>
      <p className='md:w-1/2 md:text-start' dangerouslySetInnerHTML={{ __html: data.portfolioLink }} />
      <p className='bg-red-950 mt-1 md:mt-5 mb-5 md:mb-10 p-2 md:p-4' dangerouslySetInnerHTML={{ __html: data.portfolioAlert }} />
    </>);
}
