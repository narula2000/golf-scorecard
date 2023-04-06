import { useState } from 'react';

import FairwayEnum from '../enums';

const Fairway = () => {
  const [fairway, setFairway] = useState(FairwayEnum.On);
  const setFairwayLeft = () => setFairway(FairwayEnum.Left);
  const setFairwayOn = () => setFairway(FairwayEnum.On);
  const setFairwayRight = () => setFairway(FairwayEnum.Right);
  const setFairwayHazard = () => setFairway(FairwayEnum.Hazards);
  console.log(fairway);

  /**
    *
    <div className="h-10 w-28">
      <div className="flex flex-row h-10 w-full rounded-lg relative mt-1">
        <button
          onClick={setFairwayLeft}
          className=" bg-black/5 text-white-600 hover:text-white-700 hover:bg-black/50 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl">L</span>
        </button>
        <button
          onClick={setFairwayOn}
          className=" bg-black/5 text-white-600 hover:text-white-700 hover:bg-black/50 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl">O</span>
        </button>
        <button
          onClick={setFairwayRight}
          className="bg-black/5 text-white-600 hover:text-white-700 hover:bg-black/50 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl">R</span>
        </button>
        <button
          onClick={setFairwayHazard}
          className=" bg-black/5 text-white-600 hover:text-white-700 hover:bg-black/50 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl">H</span>
        </button>
      </div>
    </div>
    * */

  return (
    <div className="grid w-32 grid-cols-4 justify-center rounded-xl bg-black/10 p-4">
      <div>
        <input type="radio" name="option" form="L" className="peer hidden" />
        <label
          onClick={setFairwayLeft}
          htmlFor="L"
          className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
        >
          L
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="option"
          form="O"
          className="peer hidden"
          defaultChecked
        />
        <label
          onClick={setFairwayOn}
          htmlFor="O"
          className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
        >
          O
        </label>
      </div>
      <div>
        <input type="radio" name="option" form="R" className="peer hidden" />
        <label
          onClick={setFairwayRight}
          htmlFor="R"
          className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
        >
          R
        </label>
      </div>
      <div>
        <input type="radio" name="option" form="H" className="peer hidden" />
        <label
          onClick={setFairwayHazard}
          htmlFor="H"
          className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
        >
          H
        </label>
      </div>
    </div>
  );
};

export default Fairway;
