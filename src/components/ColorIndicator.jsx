import ColorSpacer from "./ColorSpacer";

const ColorIndicator = () => {
  return (
    <ul className="grid justify-items-center content-center gap-1">
      <li className="w-8 h-8 bg-[#404354] rounded-full border-[3px] border-white drop-shadow-lg cursor-pointer"></li>
      <li>
        <ColorSpacer />
      </li>
      <li className="w-5 h-5 bg-[#58D7C4] rounded-full border border-white cursor-pointer"></li>
      <li>
        <ColorSpacer />
      </li>
      <li className="w-5 h-5 bg-[#a2bae1] rounded-full border border-white cursor-pointer"></li>
    </ul>
  );
};

export default ColorIndicator;
