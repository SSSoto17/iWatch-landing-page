import Image from "next/image";

import watchNavy from "../assets/navy.png";
import WatchOptions from "./WatchOptions";
import ColorIndicator from "./ColorIndicator";

const WatchShowcase = ({ option }) => {
  return (
    <article className="col-span-2 grid grid-flow-col auto-cols-auto gap-x-4 gap-y-16">
      <Image src={watchNavy} alt={option} className="w-[486px] col-start-1" />
      <WatchOptions />
      <ColorIndicator />
    </article>
  );
};

export default WatchShowcase;
