export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className='mt-3 text-justify text-neutral-400'>{children}</p>;
}
