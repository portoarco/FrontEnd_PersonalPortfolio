import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    // pl-6 pr-6
    <footer
      id="footer"
      className="flex justify-between pt-15 pb-15 items-center align-middle bg-[rgb(245,252,255)] pl-6 pr-6 max-lg:p-8 max-lg:flex-col max-lg:gap-y-10 "
    >
      <div id="footer-logo">
        <img src="/logo.png" alt="logo" className="w-35" />
      </div>

      <div id="footer-menu" className="max-lg:hidden">
        <ul className="flex justify-between text-xl gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="#expertise">Expertise</Link>
          </li>
          <li>
            <Link href="#about-me">About</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#testimonial">Testimonial</Link>
          </li>
        </ul>
      </div>

      <div id="social-media" className="flex justify-between gap-5 ">
        <a href="https://github.com/portoarco?tab=repositories">
          <Image
            src="/github.png"
            alt="github icon"
            width={50}
            height={50}
          ></Image>
        </a>
        <a href="https://id.linkedin.com/in/arcoanggoro">
          <Image
            src="/li.png"
            alt="Linkedin icon"
            width={50}
            height={50}
          ></Image>
        </a>
        <a href="https://www.instagram.com/arcoanggoro123/">
          <Image
            src="/ig.png"
            alt="Instagram icon"
            width={50}
            height={50}
          ></Image>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
