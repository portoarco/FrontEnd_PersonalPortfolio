import Button from "@/components/Button";
import Cardlist from "@/components/Cardlist";
import Contactbtn from "@/components/Contactbutton";
import Portobutton from "@/components/Portfoliobutton";
import Testicard from "@/components/Testicard";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AccordionNavbar from "@/components/Accordion-navbar";

export default function Home() {
  return (
    <div>
      <div className="max-lg:hidden">
        <Navbar></Navbar>
      </div>

      <div className="flex justify-center">
        <AccordionNavbar></AccordionNavbar>
      </div>

      <Contactbtn></Contactbtn>

      {/* p-18 */}
      <section
        id="home"
        className="p-18 max-lg:p-2 bg-[rgb(245,252,255)] flex  justify-between items-center pt-30 max-lg:pt-20"
      >
        <div id="banner-greetings" className="w-4xl">
          <p className=" text-3xl text-justify mb-4 max-lg:text-center mt-10 max-lg:text-3xl font-sans font-extrabold">
            Hello, I am <span className="text-blue-600 font-bold">Arco</span> 👋
          </p>
          <img
            src="/assets/bannerarco.svg"
            alt="foto-lg"
            className="lg:hidden w-full"
          />

          <p className="font-bold text-7xl max-lg:text-center  max-lg:mt-10">
            {" "}
            <span className="text-[#5E3BEE]">Full Stack</span> Web Developer
          </p>
          <p className="font-normal text-xl mt-[21px] text-justify max-lg:text-center max-lg:mt-10">
            I build fast, responsive fullstack web applications using React,
            Next.js, Tailwind CSS, and MySQL. I bring a unique perspective,
            strong fundamentals, and a passion for solving real-world problems
            through code.
          </p>

          {/* Get in Touch Btn */}
          <Link href="">
            <Button
              title="View CV"
              className="cursor-pointer border border-[#5E3BEE] rounded-lg bg-[#5E3BEE] text-white mt-12 pt-2.5 pb-2.5 pl-6 pr-6 max-lg:hidden"
            ></Button>
          </Link>
        </div>

        {/* PHOTO BANNER */}
        <div id="banner-photo" className="">
          <img
            src="/assets/bannerarco.svg"
            alt=""
            className="w-2xl max-lg:hidden 2xl:w-5xl "
          />
        </div>
      </section>

      {/* p-18 */}
      <section id="expertise" className="p-18 max-lg:p-8">
        <div id="exp-header" className="max-lg:mt-30 max-sm:mt-20">
          <p className="font-semibold text-2xl max-lg:hidden">My Skills</p>
          <p className="font-bold text-4xl mt-[20px] max-lg:text-center">
            My Expertise
          </p>
        </div>

        <div id="exp-list" className="mt-[50px] items-center">
          <ul
            id="exp-list-detail"
            className="grid grid-cols-4 gap-x-5 max-lg:flex flex-col gap-y-15"
          >
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/assets/exp-chain.png"
                title="Front-End"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores exercitationem sit temporibus eius deleniti nam eveniet doloremque esse rerum!"
              ></Cardlist>
            </li>
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/assets/exp-tag.png"
                title="Back-End"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores exercitationem sit temporibus eius deleniti nam eveniet doloremque esse rerum!"
              ></Cardlist>
            </li>
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/assets/exp-uiux.png"
                title="DevOps & Tools"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores exercitationem sit temporibus eius deleniti nam eveniet doloremque esse rerum!"
              ></Cardlist>
            </li>
          </ul>
        </div>
      </section>

      {/* p-18 */}
      <section
        id="about-me"
        className="flex justify-center gap-x-15 gap-y-10  items-center pt-15 max-lg:flex max-lg:flex-col max-lg:p-8 p-18  "
      >
        <div id="photo-profile" className="max-lg:mt-30 max-sm:mt-20">
          <img src="/assets/aboutme.png" alt="" className=" max-lg:w-full " />
        </div>
        <div id="about-me-story" className="w-[1100px] max-lg:w-full">
          <p className="font-semibold text-2xl max-lg:hidden">About</p>
          <p className="font-bold text-4xl mt-[20px] max-lg:mt-0 max-lg:text-center ">
            About Me
          </p>
          <p className="mt-[25px] text-justify select-none">
            {" "}
            I am a Fullstack Web Developer with a non-IT background who
            transitioned into tech out of a deep interest in software
            development. After completing several training programs and courses,
            I found that working in IT truly aligns with my passion and way of
            thinking. Through consistency and dedication, I’ve built a solid
            understanding of core programming principles and applied them
            directly in real-world projects.
          </p>
          <p className="mt-[15px] text-justify select-none">
            I have strong fundamentals in both logic and data structures. On the
            front end, I work with React, Next.js, and Tailwind CSS to create
            responsive, user-friendly interfaces. On the back end, I am
            experienced with MySQL, user authentication and authorization, and
            API integration. I also understand the basics of deploying
            applications using modern platforms. In every development process, I
            value continuous learning, clear communication, and staying
            persistent when solving challenges{" "}
          </p>
        </div>
      </section>

      {/* p-18 */}
      <section id="portfolio" className="p-18 max-lg:p-8">
        <div
          id="portfolio-header"
          className="flex justify-between items-center max-lg:flex-col max-lg:mt-30 max-sm:mt-20"
        >
          <div id="portfolio-header-title" className="max-lg:text-center">
            <p className="font-semibold text-2xl">Recent Projects</p>
            <p className="font-bold text-4xl mt-[20px]">My Portfolio</p>
          </div>
          <div
            id="portfolio-header-btn"
            className="flex items-center max-lg:hidden"
          >
            <Link href="https://github.com/portoarco?tab=repositories">
              <Button
                title="Visit My GitHub"
                iconUrl="/assets/github.png"
                className="cursor-pointer border bg-[#E62872] rounded-lg text-white p-3"
              ></Button>
            </Link>
          </div>
        </div>

        <div id="portfolio-list" className="mt-[50px]">
          <ul
            id="portfolio-list-detail"
            className="grid grid-cols-3 gap-x-8 max-lg:grid-cols-1 max-lg:gap-y-10"
          >
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/assets/service1.png"
                title="Ahuse"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores exercitationem sit temporibus eius deleniti nam eveniet doloremque esse rerum!"
              ></Cardlist>
              <Portobutton href="#"></Portobutton>
            </li>
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/assets/service2.png"
                title="App Dashboard"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores exercitationem sit temporibus eius deleniti nam eveniet doloremque esse rerum!"
              ></Cardlist>
              <Portobutton href="#"></Portobutton>
            </li>
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/assets/service3.png"
                title="Easy Rent"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At asperiores exercitationem sit temporibus eius deleniti nam eveniet doloremque esse rerum!"
              ></Cardlist>
              <Portobutton href="#"></Portobutton>
            </li>
          </ul>
        </div>
      </section>

      {/* p-18 */}
      <section
        id="testimonial"
        className=" bg-[rgb(245,252,255)] p-18 max-lg:p-8"
      >
        <div
          id="testimonial-header"
          className="mt-5 text-center max-lg:mt-30 max-sm:mt-20"
        >
          <p className="font-semibold text-2xl">Clients Feedback</p>
          <p className="font-bold text-4xl mt-[20px]">Customer Testimonials</p>
        </div>
        <div id="testimonial-card" className="mt-[50px]">
          <ul className=" grid grid-cols-3 gap-10 max-lg:grid-cols-1">
            <li>
              <Testicard
                description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet quasi a saepe nulla dolore assumenda similique reiciendis molestias quidem."'
                name="Dianne Russel"
                company="Starbucks"
                iconURL="/assets/client1.png"
              ></Testicard>
            </li>
            <li>
              <Testicard
                description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet quasi a saepe nulla dolore assumenda similique reiciendis molestias quidem."'
                name="Kristin Watson"
                company="Louis Vuitton"
                iconURL="/assets/client2.png"
              ></Testicard>
            </li>
            <li>
              <Testicard
                description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet quasi a saepe nulla dolore assumenda similique reiciendis molestias quidem."'
                name="Kathryn Murphy"
                company="MC Donalds"
                iconURL="/assets/client3.png"
              ></Testicard>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="form"
        className="pt-20 pb-20 ml-48 mr-48 max-lg:p-8 max-lg:m-0 "
      >
        <div
          id="form-header"
          className="flex flex-col text-center max-lg:mt-30 max-sm:mt-20"
        >
          <p className="font-semibold text-2xl">Get in Touch</p>
          <p className="font-bold text-4xl mt-[20px]">Contact Me</p>
          <p className="font-normal text-xl mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            quidem!
          </p>
        </div>

        <form
          action=""
          className="mt-10  grid grid-cols-5  gap-y-5 font-normal text-xl"
        >
          <div
            id="first-name"
            className="col-span-2 flex flex-col justify-between"
          >
            <label htmlFor="first-name" className="select-none">
              First Name
            </label>
            <input
              required
              type="text"
              id="first-name"
              className="mt-4 p-3 w-full rounded-xl border-2  border-[#5E3BEE] focus:outline-1 focus:outline-[#5E3BEE] "
            />
          </div>

          <div
            id="last-name"
            className="col-start-4 col-span-2 flex flex-col justify-between  "
          >
            <label htmlFor="last-name" className="select-none">
              Last Name
            </label>
            <input
              required
              type="text"
              id="last-name"
              className="w-full rounded-xl border-2 p-3 mt-4 border-[#5E3BEE] focus:outline-1 focus:outline-[#5E3BEE] "
            />
          </div>

          <div id="phone-number" className="col-span-5 flex flex-col  ">
            <label htmlFor="last-name" className="select-none">
              Phone Number
            </label>
            <input
              required
              type="text"
              id="last-name"
              className="w-full rounded-xl border-2 p-3 mt-4 border-[#5E3BEE] focus:outline-1 focus:outline-[#5E3BEE] "
            />
          </div>

          <div id="email" className="col-span-5 flex flex-col  ">
            <label htmlFor="email" className="select-none">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              className="w-full rounded-xl border-2 p-3 mt-4 border-[#5E3BEE] focus:outline-1 focus:outline-[#5E3BEE] "
            />
          </div>

          <div id="topics" className="col-span-5 flex flex-col">
            <label htmlFor="topics" className="select-none">
              Choose Topics
            </label>
            <select
              name="topics"
              id="topics"
              className="mt-4 rounded-xl border-2 p-3 border-[#5E3BEE] focus:outline-1 focus:outline-[#5E3BEE]"
            >
              <option value="none" disabled>
                Select One...
              </option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 2</option>
              <option value="option-3">Option 3</option>
              <option value="option-4">Option 4</option>
            </select>
          </div>

          <div id="message" className=" col-span-5 flex flex-col ">
            <label htmlFor="message">Messages:</label>
            <textarea
              name="message"
              id="message"
              className="mt-4 rounded-xl border-2 p-3 border-[#5E3BEE] focus:outline-1 focus:outline-[#5E3BEE]"
            ></textarea>
          </div>

          <label htmlFor="approval" className="peer cursor-pointer col-span-5">
            <input type="checkbox" id="approval" className="peer-hidden p-2" />{" "}
            Saya bersedia dihubungi terkait pesan yang saya kirimkan
          </label>
          <Button
            title="Submit Form"
            type="submit"
            className="col-start-3 justify-center border border-[#5E3BEE] rounded-lg bg-[#5E3BEE] text-white mt-6 pt-3 pb-3 cursor-pointer h-15 max-lg:col-start-2 max-lg:col-span-3 hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block"
          ></Button>
        </form>
      </section>
    </div>
  );
}
