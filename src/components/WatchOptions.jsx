import Image from "next/image";

import watchNavy from "../assets/navy.png";
import watchMint from "../assets/mint.png";
import watchOcean from "../assets/ocean.png";

const WatchOptions = () => {
  return (
    <ul className="flex gap-7 justify-between col-start-1">
      <li className="grid grid-rows-3 max-w-32 w-full cursor-pointer">
        <Image
          src={watchNavy}
          alt="Navy"
          className="w-[90px] col-start-1 row-span-full z-10 place-self-center"
        />
        <div className="col-start-1 row-start-2 row-span-2 bg-[#434558] opacity-60 rounded-lg"></div>
      </li>
      <li className="grid grid-rows-3 max-w-32 w-full cursor-pointer">
        <Image
          src={watchMint}
          alt="Mint"
          className="w-[90px] col-start-1 row-span-full z-10 place-self-center"
        />
        <div className="col-start-1 row-start-2 row-span-2 bg-[#6ADDCC] opacity-60 rounded-lg"></div>
      </li>
      <li className="grid grid-rows-3 max-w-32 w-full cursor-pointer">
        <Image
          src={watchOcean}
          alt="Navy"
          className="w-[90px] col-start-1 row-span-full z-10 place-self-center"
        />
        <div className="col-start-1 row-start-2 row-span-2 bg-[#a2bae1] opacity-60 rounded-lg"></div>
      </li>
    </ul>
  );
};

export default WatchOptions;
