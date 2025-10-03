import ImageContainer from "../components/ImageContainer";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center w-[100vw] px-50 mt-10">
      <section className="w-[100%] h-[50vh]">
        <div className="justify-start text-stone-600 text-md font-medium font-['Inter']">
          <h1>
            Welcome <br />
            to my world of visuals
          </h1>
        </div>

        <div className="bg-black aspect-video mt-[2rem] w-[100%] h-[50vh] rounded-xl overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="/img/Vorupoer_Edits/Klit_siluette_Mobile.jpg"
            alt="klit ved vesterhavet"
          />
        </div>

        <div className="flex justify-end mt-[2rem]text-stone-600 text-md font-medium font-['Inter'] mt-[2rem] ">
          <h1>
            Scroll down to explore <br />
            my aesthetics
          </h1>
        </div>
      </section>

      {/*Section 1 - Architecture */}
      <section className="grid grid-cols-1 w-[100%] h-[80vh] mt-[30rem]">
        <div className="">
          <h2>
            Architecture - <em> I love it</em>
          </h2>
        </div>

        <ImageContainer />

        {/*Image container */}
        <div className="grid grid-cols-4 bg-() w-[100%] h-[100%]  overflow-hidden rounded-xl ">
          <div className="w-80 h-[584px] relative">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Uni.jpg"
            />
          </div>
          <div className=" w-80 h-[584px] relative">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Rosensgade-2.jpg"
            />
          </div>
          <div className="w-80 h-[584px] relative">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Chair.jpg"
            />
          </div>
          <div className="w-80 h-[584px] relative ">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Street-3.jpg"
            />
          </div>
        </div>
      </section>

      {/*Section 2 - Tools */}
      <section className="grid grid-cols-1 w-[100%] h-auto mt-[10rem] justify-items-center">
        <div className="">
          <h3>I can't do much without these</h3>
        </div>
      </section>

      {/*Section 3 - Nature */}
      <section className="grid grid-cols-1 w-[100%] h-[80vh] mt-[10rem] mb-[30rem]">
        <div className="">
          <h1 className="text-stone-600 text-md font-medium">Keep going</h1>
          <h2>
            Architecture - <em> I love it</em>
          </h2>
        </div>

        {/*Image container */}
        <div className="grid grid-cols-4 bg-() w-[100%] h-[100%]  overflow-hidden rounded-xl ">
          <div className="w-80 h-[584px] relative">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Uni.jpg"
            />
          </div>
          <div className=" w-80 h-[584px] relative">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Rosensgade-2.jpg"
            />
          </div>
          <div className="w-80 h-[584px] relative">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Chair.jpg"
            />
          </div>
          <div className="w-80 h-[584px] relative ">
            <img
              className="w-80 h-[585px] left-[-11px] top-0 absolute"
              src="/img/fotografi/Street-3.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
