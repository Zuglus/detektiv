interface Content {
  title: string;
  paragraphs: string[];
}

interface ContentAboutProps {
  content: Content;
}

export default function ContentAbout({ content }: ContentAboutProps) {
  const { title, paragraphs } = content;

  return (
    <div className="bg-[#f4f4f4] shadow-lg mx-auto mt-12 p-6 md:p-10 rounded-lg max-w-prose font-serif text-black">
      <h3 className="mb-6 font-extrabold text-3xl text-center text-gray-700 uppercase tracking-widest">
        {title}
      </h3>
      <div className="space-y-4 leading-loose">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
