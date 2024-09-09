import Link from 'next/link';

export default function Button({
  name,
  url,
}: {
  name: string;
  url: string;
}): JSX.Element {
  return (
    <Link
      className='border-olive-500 bg-olive-700 hover:bg-olive-600 m-3 p-3 border rounded-md text-lg text-white hover:text-olive-100 uppercase tracking-wide transition-colors duration-300 ease-in-out'
      href={url}
    >
      {name}
    </Link>
  );
}
