import Link from "next/link";


function Footer(){
    return(

        // pl-6 pr-6
        <footer id="footer" className="flex justify-between pt-15 pb-15 items-center align-middle bg-[rgb(245,252,255)] pl-6 pr-6 max-lg:p-8 max-lg:flex-col max-lg:gap-y-10 ">

            <div id="footer-logo">
                <img src="/assets/logo.png" alt="logo" className="w-35" /> 
            </div>

            <div id="footer-menu" className="max-lg:hidden">
                <ul className="flex justify-between text-xl gap-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="#expertise" >Expertise</Link>
                    </li>
                    <li>
                        <Link href="#about-me" >About</Link>
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
                <a href="">
                    <img src="/assets/github.png" alt="" className="w-10 h-10"/>
                </a>
                <a href="">
                    <img src="/assets/li.png" alt="" className="w-10 h-10"/>
                </a>
                <a href="">
                    <img src="/assets/ig.png" alt="" className="w-10 h-10"/>
                </a>
                <a href="">
                    <img src="/assets/Twitter.png" alt="" className="w-10 h-10"/>
                </a>
            </div>

        </footer>
    );
}

export default Footer;