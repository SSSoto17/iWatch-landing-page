import { FaApple } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <article className="flex justify-between gap-x-16 w-full text-lg font-medium items-center py-14">
      <a href="/">
        <FaApple size="50px" />
      </a>
      <menu className="flex w-full max-w-2xl gap-x-8 justify-between items-center">
        <li>
          <a href="/">Mac</a>
        </li>
        <li>
          <a href="/">iPhone</a>
        </li>
        <li>
          <a href="/">iPad</a>
        </li>
        <li className="active rounded-full px-8 py-1 font-semibold">
          <a href="/">iWatch</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
      </menu>
      <ul className="flex items-center">
        <li className="px-5">
          <a href="/">
            <HiMagnifyingGlass size="24px" />
          </a>
        </li>
        <li className="px-5 border-l border-inherit">
          <a href="/">
            <FiShoppingBag size="24px" />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Header;
