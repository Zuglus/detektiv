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
      className='text-lg m-3 p-3 border border-red-500 hover:bg-red-500 hover:text-black uppercase'
      href={url}
    >
      {name}
    </Link>
  );
}
