/* eslint-disable react-hooks/refs */
"use client";

import { DisplayItem } from "@/types/portfolio/display_item";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import AnchorItem from "./AnchorItem";
import TechStack from "./TechStack";
import { useEffect, useRef } from "react";
import ProjectMainComponent from "./projects/main";
import MainExperienceComponent from "./experiences/main";

export default function MainComponent() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const techStackRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const displayItems: DisplayItem[] = [
    {
      id: "about-me",
      title: "About Me",
      ref: aboutMeRef,
      component: <AboutMe />,
    },
    {
      id: "tech-stack",
      title: "Tech Stack",
      ref: techStackRef,
      component: <TechStack />,
    },
    {
      id: "experience",
      title: "Experience",
      ref: experienceRef,
      component: <MainExperienceComponent />,
    },
    {
      id: "projects",
      title: "Projects",
      ref: projectRef,
      component: <ProjectMainComponent />,
    },
    {
      id: "contact-me",
      title: "Contact Me",
      ref: contactMeRef,
      component: <ContactMe />,
    },
  ];

  useEffect(() => {});

  return (
    <div className="flex py-20 gap-10 w-full h-full">
      <div className="w-72 order-2 ps-5">
        <div className="w-full h-full flex flex-col p-3 relative">
          {displayItems.map((item) => (
            <div id={item.id} key={item.id} className="w-fit">
              <AnchorItem displayItem={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col overflow-x-hidden overflow-y-auto flex-1 order-1 ps-40 hide-browser-scollbar">
        {displayItems.map((item) => (
          <section
            id={item.id}
            key={item.id}
            ref={item.ref}
            className="w-full min-h-full"
          >
            {item.component}
          </section>
        ))}
      </div>
    </div>
  );
}
