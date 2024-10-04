export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
        <div className="font-bold text-5xl flex items-end gap-3">
          <span>Buy Me a Chai</span>
          <span>
            <img className="w-12" src="/mainCup.webp" alt="" />
          </span>
        </div>
        <p>
          A crowd funding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      {/* second section starts from here */}

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white pb-11">
        <h1 className="text-2xl font-bold text-center my-10">
          Your fans can buy you a chai
        </h1>

        <div className="flex justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="/workingoncomputer.webp"
              alt=""
              className="rounded-full p-2 text-black"
              width={100}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="/coin.webp"
              alt=""
              className="rounded-full p-2 text-black"
              width={100}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              src="/workingoncomputer.webp"
              alt=""
              className="rounded-full p-2 text-black"
              width={100}
            />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>

      {/* Third section from here */}

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white pb-11 ">
        <h1 className="text-2xl font-bold text-center my-10">
          Learn More About us
        </h1>

        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Tb1CLQuJOsE?si=eUfPIO5Axm22rkiR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
