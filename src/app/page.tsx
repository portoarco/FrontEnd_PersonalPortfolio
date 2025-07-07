import Button from "@/components/ui/Button";
import Cardlist from "@/components/ui/Cardlist";
import Contactbtn from "@/components/ui/Contactbutton";
import Portobutton from "@/components/ui/Portfoliobutton";
import Testicard from "@/components/ui/Testicard";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import AccordionNavbar from "@/components/ui/Accordion-navbar";
import Image from "next/image";
import ExpertiseCard from "./components/ExpertiseCard";

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

          <Image
            src="/bannerarco-webp.webp"
            width={100}
            height={50}
            className="lg:hidden w-full"
            alt="banner"
          ></Image>

          <p className="font-bold text-7xl max-lg:text-center  max-lg:mt-10">
            {" "}
            <span className="text-[#5E3BEE]">Full Stack</span> Web Developer
          </p>
          <p className="font-normal text-xl mt-[21px] text-justify max-lg:text-center max-lg:mt-10">
            I specialize in building scalable and high-performance web
            applications using modern front-end technologies such as React.js,
            Next.js, and Tailwind CSS. My goal is to create seamless,
            responsive, and user-friendly digital experiences that help
            businesses grow and engage their audiences effectively. With a solid
            understanding of both front-end and basic backend development, I
            deliver complete solutions tailored to meet your specific needs and
            ensure optimal performance across all devices.
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
          <Image
            src="/bannerarco.svg"
            alt="banner photo"
            width={100}
            height={50}
            className="w-2xl max-lg:hidden 2xl:w-5xl"
          ></Image>
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

        <div id="exp-list" className="mt-[50px] items-center flex max-sm:flex-col justify-center gap-x-10">
          <ExpertiseCard></ExpertiseCard>

          {/* <ul
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
          </ul> */}
        </div>
      </section>

      {/* p-18 */}
      <section
        id="about-me"
        className="flex justify-center gap-x-15 gap-y-10  items-center pt-15 max-lg:flex max-lg:flex-col max-lg:p-8 p-18  "
      >
        <div id="photo-profile" className="w-100 relative h-100  ">
          <Image
            src="/photo.webp"
            alt="banner"
            // width={100}
            // height={50}
            fill
            className="object-cover"
          ></Image>
        </div>
        <div id="about-me-story" className="w-[1100px] max-lg:w-full">
          <p className="font-semibold text-2xl max-lg:hidden">About</p>
          <p className="font-bold text-4xl mt-[20px] max-lg:mt-0 max-lg:text-center ">
            About Me
          </p>
          <p className="mt-[25px] text-justify select-none md:text-xl">
            {" "}
            I am a front-end developer focused on creating attractive,
            responsive, and user-friendly web interfaces. I have experience
            working with HTML, CSS, JavaScript, TypeScript, React.js, and
            Next.js to build web applications that are not only visually
            appealing but also fast and accessible to a wide range of users.
            Additionally, I have a basic understanding of backend development
            using MySQL as a database and am familiar with frameworks like
            Express.js to support server-side programming.
          </p>
          <p className="mt-[15px] text-justify select-none md:text-xl">
            My core skills include proficiency in front-end languages and
            frameworks such as React.js and Next.js, along with Tailwind CSS for
            efficient styling. On the backend, I have foundational knowledge of
            MySQL and Express.js. I prioritize delivering work on time with
            great attention to detail to ensure high-quality results. Clear and
            effective communication is important to me to maintain smooth
            collaboration within teams. I am also committed to continuous
            learning and improving my skills to provide the best solutions
            possible.{" "}
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
                iconUrl="/github.png"
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
                iconUrl="/porto1.png"
                title="Website Redesign Project"
                description="I redesigned the front-end of a logistics website using React, Tailwind CSS, and ShadCN UI to create a clean, responsive, and scalable interface. Key components like service cards, contact sections, and navigation menus were rebuilt to improve usability, mobile experience, and visual clarity across devices.

"
              ></Cardlist>
              <Portobutton href="https://front-end-redesign-project.vercel.app/"></Portobutton>
            </li>
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/porto2.png"
                title="Blog Website Application"
                description="This blog application was developed with React and Redux Toolkit to manage articles dynamically. It features a validated submission form, category-based filtering, and an admin dashboard. The layout is fully responsive, styled with Tailwind CSS and ShadCN UI components."
              ></Cardlist>
              <Portobutton href="https://front-end-blog-app-steel.vercel.app/"></Portobutton>
            </li>
            <li className="p-5 rounded-md bg-[#F5FCFF] shadow-md shadow-[#6183ff] ">
              <Cardlist
                iconUrl="/porto3.png"
                title="Personal Portfolio Website"
                description="Built with React, Tailwind CSS, and Framer Motion, this one-page portfolio showcases my profile, skills, and projects with smooth animations and responsive design. It integrates EmailJS for direct messaging, providing a clean and interactive personal web presence"
              ></Cardlist>
              <Portobutton href="https://front-end-personal-portfolio.vercel.app/"></Portobutton>
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
                iconURL="/client1.png"
              ></Testicard>
            </li>
            <li>
              <Testicard
                description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet quasi a saepe nulla dolore assumenda similique reiciendis molestias quidem."'
                name="Kristin Watson"
                company="Louis Vuitton"
                iconURL="/client2.png"
              ></Testicard>
            </li>
            <li>
              <Testicard
                description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque amet quasi a saepe nulla dolore assumenda similique reiciendis molestias quidem."'
                name="Kathryn Murphy"
                company="MC Donalds"
                iconURL="/client3.png"
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
            Please kindly completing this form 
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
