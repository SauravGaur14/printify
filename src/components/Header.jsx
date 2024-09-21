import Logo from "./Logo";
import Button from "./Button";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <div className="flex py-4 w-full shadow-2xl px-6 items-center justify-between">
      <div className="w-1/3">
        <Logo />
      </div>
      <div className="md:flex hidden w-1/2 items-center justify-between font-semibold text-xl text-[#353a47]">
        <ul className="flex w-full items-center justify-between font-semibold text-xl text-[#353a47] ">
          <li className="hover:scale-105 cursor-pointer hover:text-purple-500">
            Catalog
          </li>
          <li className="hover:scale-105 cursor-pointer hover:text-purple-500">
            Pricing
          </li>
          <li className="hover:scale-105 cursor-pointer hover:text-purple-500">
            Blog
          </li>
          <li className="hover:scale-105 cursor-pointer hover:text-purple-500">
            Help
          </li>
        </ul>
      </div>
      <div className="sm:flex hidden w-1/3 justify-end gap-4">
        <Button text="Login" type="primary" />
        <Button text="Sign up" type="secondary" />
      </div>
      <div className="block md:hidden">
        <Hamburger/>
      </div>
    </div>
  );
}
