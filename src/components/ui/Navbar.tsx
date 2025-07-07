import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";

// max-lg:flex-col   max-lg:items-center
function Navbar() {
  return (
    <>
      {/* Normal Navbar */}
      <nav
        id="navbar"
        className=" p-6 flex justify-between items-center shadow-xl fixed bg-white w-full z-10 "
      >
        <div id="navbar-logo" className="">
          <Image src="/logo.png" alt="logo" width={180} height={20}></Image>
        </div>
        <div id="navbar-menu" className="">
          <ul className="flex justify-between text-xl gap-10  ">
            <li className="select-none">
              <a href="#home">Home</a>
            </li>

            <li className="select-none">
              <a href="#expertise">Expertise</a>
            </li>
            <li className="select-none">
              <a href="#about-me">About</a>
            </li>
            <li className="select-none">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="select-none">
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>
        <div id="navbar-contact" className="select-none">
          <Link href="#form">
            <Button
              title="Contact Me"
              className="cursor-pointer border border-[#5E3BEE] text-[#5E3BEE] bg-white hover:bg-[#5E3BEE] hover:text-white rounded-lg pt-2.5 pb-2.5 pl-6 pr-6 select-none transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
            ></Button>
          </Link>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
