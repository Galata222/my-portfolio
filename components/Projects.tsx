"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/volunteer.png",
    title: "Volunteer Addis",
    description:
      "Volunteer Addis is a platform that facilitates the management of volunteers for various events and activities in Ethiopia. It allows organizations to sign up, schedule, and communicate with volunteers, making it easier to manage events and ensure that volunteer commitments are fulfilled. The platform is particularly useful for administrators who want to save time and increase participation in their events",
    skills: [
      "Laravel",
      "PHP",
      "Bootstrap",
      "Typescript",
      "JavaScript",
      "Localization",
      
    ],
    link: "https://www.volunteeraddis.et/",
  },
  {
    imagePath: "/afanOromo.png",
    title: "Afan Oromo Spell Checker",
    description:
      "An Afan Oromo spell checker system is designed to automatically detect and correct spelling errors in text written in the Afan Oromo language.",
    skills: [
      "Flask",
      "Python",
      "React",
      "SQLlite",
      "Tailwind CSS",
      "Jira",
      "Figma",
    ],
    link: "https://github.com/Galata222/Afan-Oromo-Spell-Checker",
  },
  // {
  //   imagePath: "/meikopoulos.com_PC.png",
  //   title: "meikopoulos.com",
  //   description:
  //     "The portfolio webpage you are looking at right now. Based on Brittany Chiang's website (they awesome). Coded in Visual Studio Code.",
  //   skills: ["Typescript", "JavaScript", "Tailwind CSS", "Vercel"],
  //   link: "https://github.com/0xAlexander/my-website",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
