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
      className="bg-gradient-to-r from-[#50c878] hover:from-[#2a4f4f] to-[#2a6f4f] hover:to-[#1e453f] shadow-md hover:shadow-lg m-2 px-5 py-2 rounded-full font-medium text-sm text-white hover:text-[#b3e5a6] uppercase tracking-wide transform transition-all duration-300 ease-in-out hover:scale-105"
      href={url}
    >
      {name}
    </Link>

  );
}
