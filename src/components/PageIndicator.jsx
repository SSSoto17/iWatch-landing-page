import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const PageIndicator = ({ page }) => {
  return (
    <article className="flex gap-4 items-center font-medium text-base self-end">
      <BsArrowLeft size="18" className="cursor-pointer" />
      <p className="cursor-default">{page}</p>
      <BsArrowRight size="18" className="cursor-pointer" />
    </article>
  );
};

export default PageIndicator;
