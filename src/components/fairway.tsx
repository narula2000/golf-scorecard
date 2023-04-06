import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';

import FairwayEnum from '../enums';

const Fairway = () => {
  const [fairway, setFairway] = useState(FairwayEnum.On);
  console.log(fairway);

  return (
    <RadioGroup
      className="flex flex-row w-32 p-4 bg-black/10 rounded-xl justify-center"
      value={fairway}
      onChange={setFairway}
    >{
      [FairwayEnum.Left, FairwayEnum.On, FairwayEnum.Right, FairwayEnum.Hazards].map((value) => (
      <RadioGroup.Option value={value} key={value} className="p-3">
        {({ checked }) => (
          <span className={checked ? 'bg-black/50' : ''}>{value[0]}</span>
        )}
      </RadioGroup.Option>
      ))
    }
    </RadioGroup>
  );
  // return (
  //   <div className="grid w-32 grid-cols-4 justify-center rounded-xl bg-black/10 p-4">
  //     <div>
  //       <input type="radio" name="option" form="L" className="peer hidden" />
  //       <label
  //         onClick={setFairwayLeft}
  //         htmlFor="L"
  //         className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
  //       >
  //         L
  //       </label>
  //     </div>
  //     <div>
  //       <input
  //         type="radio"
  //         name="option"
  //         form="O"
  //         className="peer hidden"
  //         defaultChecked
  //       />
  //       <label
  //         onClick={setFairwayOn}
  //         htmlFor="O"
  //         className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
  //       >
  //         O
  //       </label>
  //     </div>
  //     <div>
  //       <input type="radio" name="option" form="R" className="peer hidden" />
  //       <label
  //         onClick={setFairwayRight}
  //         htmlFor="R"
  //         className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
  //       >
  //         R
  //       </label>
  //     </div>
  //     <div>
  //       <input type="radio" name="option" form="H" className="peer hidden" />
  //       <label
  //         onClick={setFairwayHazard}
  //         htmlFor="H"
  //         className="cursor-pointer rounded-xl p-2 justify-center peer-checked:bg-black/50 active:bg-black/50 active:font-bold active:text-white"
  //       >
  //         H
  //       </label>
  //     </div>
  //   </div>
  // );
};

export default Fairway;
