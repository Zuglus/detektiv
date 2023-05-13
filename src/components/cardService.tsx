export default function CardService({ data }) {
  return (
    <div className='text-center p-6 border-2 border-solid border-gray-800'>
      <h4 className='text-red-500 uppercase font-bold text-lg'>{data.title}</h4>
      <div className='mt-4 text-sm'>{data.price}</div>
      <div className='mt-4 text-neutral-400 font-light'>{data.text}</div>
    </div>
  );
}
