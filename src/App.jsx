import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex alegreya-font custom-scrollbar h-screen flex-col w-full overflow-hidden overflow-y-scroll bg-fuchsia-100">
      <Header />
      <main className="p-10">
        <div className="w-full items-center md:flex">
          <div className="lg:w-1/2 w-full">
            <div className="md:text-5xl text-2xl text-center md:text-start w-full sm:my-10 font-bold alegreya-font gap-4 flex flex-col">
              <div>Your Designs, Our Prints</div>
              <div>Big Profits, Zero Risk!</div>
            </div>
            <div className="h-72 relative my-5 flex md:hidden items-center justify-center w-full">
              <img src="./tshirt.png" alt="" />
              <div className="absolute text-center h-40 w-40 text-slate-300 text-2xl">
                Your Design here
              </div>
              <img
                src="./Stroke.svg"
                height={200}
                width={200}
                className="w-96 hidden md:block absolute left-24 bottom-0 h-40"
                alt="strokeoffset"
              />
            </div>
            <div className="mt-10 sm:w-1/2 w-full sm:text-2xl text-xl sm:text-start text-center text-gray-700 gap-4 flex flex-col">
              <p>
                <span className="text-green-600">&#10003;</span> 100% Free to
                use
              </p>
              <p>
                <span className="text-green-600">&#10003;</span> 900+
                High-Quality Products
              </p>
              <p>
                <span className="text-green-600">&#10003;</span> Largest global
                print network
              </p>
            </div>
            <div className="w-full text-2xl mt-10 font text-green-600">
              <p>Trusted by over 8M sellers around the world</p>
            </div>
            <div className="flex items-center md:justify-start justify-center w-full my-10 gap-5">
              <Button text="Start for free" type="primary" />
              <Button text="How it works" type="secondary" />
            </div>
          </div>
          <div className="h-96 relative hidden lg:flex items-center justify-center w-1/2">
            <img src="./tshirt.png" alt="" />
            <div className="absolute text-center rounded-full h-40 w-40 text-slate-300 text-2xl ">
              Your Design here
            </div>
            <img
              src="./Stroke.svg"
              height={150}
              width={150}
              className="w-96 hidden lg:block absolute right-8 bottom-12 h-40"
              alt="strokeoffset"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
