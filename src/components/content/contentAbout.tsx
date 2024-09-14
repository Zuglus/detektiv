export default function ContentAbout({ data }: { data: any }) {
  return (
    <>
      {/* About Section */}
      <div className="bg-[#8bb298] shadow-lg mt-12 p-6 md:p-10 rounded-lg">
        <h3 className="mb-6 font-bold text-2xl text-center text-white md:text-3xl uppercase tracking-wider">
          {data.aboutHeader}
        </h3>
        <p
          className="text-white leading-loose"
          dangerouslySetInnerHTML={{ __html: data.aboutText }}
        />
      </div>
    </>
  );
}
