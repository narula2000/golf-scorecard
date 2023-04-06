import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="h-10 w-28">
      <div className="flex flex-row h-10 w-full rounded-lg relative mt-1">
        <button
          onClick={decrement}
          className=" bg-black/5 text-white-600 hover:text-white-700 hover:bg-black/50 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <p className="justify-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700">
          {count}
        </p>
        <button
          onClick={increment}
          className="bg-black/5 text-white-600 hover:text-white-700 hover:bg-black/50 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
