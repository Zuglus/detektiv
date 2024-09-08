export default function Card({
  data,
}: {
  data: { title: string; text: string };
}) {
  return (
    <div className='text-center p-6 border-2 border-solid border-gray-800 my-10 md:w-1/2'>
      <h4 className='uppercase font-bold text-lg'>{data.title}</h4>
      <div className='mt-4 text-sm'>{data.text}</div>
    </div>
  );
}
