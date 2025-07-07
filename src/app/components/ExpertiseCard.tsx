import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function ExpertiseCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-15 gap-y-10 max-w-8xl mx-auto px-4">
      {/* Frontend Card */}
      <Card className="h-full hover:shadow-xl duration-200 ease-in-out transition-shadow">
        <CardContent className="p-6 h-full flex flex-col">
          <div
            id="skills-icon"
            className="flex flex-wrap gap-4 justify-center mb-6"
          >
            <Image
              src="/html.png"
              width={80}
              height={80}
              alt="HTML icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/css.png"
              width={80}
              height={80}
              alt="CSS icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/js.png"
              width={80}
              height={80}
              alt="JavaScript icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/typescript.png"
              width={80}
              height={80}
              alt="TypeScript icon"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div id="skills-desc" className="flex-1 flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4">
              Front End Skills
            </h3>
            <p className="text-lg lg:text-base text-muted-foreground text-justify leading-relaxed">
              Proficient in building responsive and scalable user interfaces
              using HTML, CSS, JavaScript, and TypeScript. Experienced with
              React.js and Next.js for building dynamic web applications, and
              Tailwind CSS for utility-first, efficient styling. Focused on
              performance, accessibility, and cross-device compatibility.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Backend Card */}
      <Card className="h-full hover:shadow-xl duration-200 ease-in-out transition-shadow">
        <CardContent className="p-6 h-full flex flex-col">
          <div
            id="skills-icon"
            className="flex flex-wrap gap-4 justify-center mb-6"
          >
            <Image
              src="/nodejs.svg"
              width={80}
              height={80}
              alt="Node.js icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/MySQL.svg"
              width={80}
              height={80}
              alt="MySQL icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/Express.svg"
              width={80}
              height={80}
              alt="Express icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/Postman.svg"
              width={80}
              height={80}
              alt="Postman icon"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div id="skills-desc" className="flex-1 flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4">
              Back End Skills
            </h3>
            <p className="text-lg lg:text-base text-muted-foreground text-justify leading-relaxed">
              Basic experience in backend development using Node.js and
              Express.js for building RESTful APIs. Familiar with MySQL for
              database design and data management. Able to integrate backend
              services with front-end applications to create full-stack
              solutions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* DevOps Card */}
      <Card className="h-full hover:shadow-xl duration-200 ease-in-out transition-shadow">
        <CardContent className="p-6 h-full flex flex-col">
          <div
            id="skills-icon"
            className="flex flex-wrap gap-4 justify-center mb-6"
          >
            <Image
              src="/Jest.svg"
              width={80}
              height={80}
              alt="Jest icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/Docker.svg"
              width={80}
              height={80}
              alt="Docker icon"
              className="w-16 h-16 object-contain"
            />
            <Image
              src="/Git.svg"
              width={80}
              height={80}
              alt="Git icon"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div id="skills-desc" className="flex-1 flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-4">
              DevOps Skills
            </h3>
            <p className="text-lg lg:text-base text-muted-foreground text-justify leading-relaxed">
              Experience with containerization using Docker for creating
              consistent development environments and simplifying deployment.
              Familiar with basic CI/CD workflows and environment setup. Skilled
              in software testing using Jest for unit and integration testing,
              with knowledge of additional testing tools to ensure application
              reliability and code quality.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ExpertiseCard;
