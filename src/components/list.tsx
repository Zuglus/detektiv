export default function List({ children }: { children: React.ReactNode }) {
  const list: string[] = children as Array<string>;
  return (
    <ul className='w-3/4 text-neutral-400'>
      {list.map((elem: string) => (
        <li className='mt-3 mr-auto' key={elem}>
          {elem}
        </li>
      ))}
    </ul>
  );
}
