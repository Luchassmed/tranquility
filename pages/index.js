export default function Home() {
  return (
    <>
      <div className="bg-[#3B41F1]">
        <div className="flex flex-row items-center justify-around">
          <div className="px-72 pt-72 pb-24">
            <h1 className="text-white text-6xl font-extrabold leading-relaxed">
              hi, i'm <br /> luchas schmidt
            </h1>

            <div>
              <p className="pt-10 pb-5 text-amber-400 font-bold text-lg">
                OCCUPATION
              </p>
              <h3 className="text-white font-bold text-lg pb-2">
                Junior Development Specialsit at DaxMedia
              </h3>
              <h3 className="text-white font-bold text-lg">
                Computer Science and Informatics B.Sc student at Roskilde
                University
              </h3>
            </div>
          </div>
          <div className="px-48 pt-72 pb-24">
            <img src="/avatar.png" />
          </div>
        </div>
      </div>
    </>
  );
}
