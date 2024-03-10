"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>NextJS</li>
        <li>MYSQL</li>
        <li>Azure</li>
        <li>Git</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>.NET MVC</li>
        <li>.NET core</li>
        <li>Node.js</li>
        <li>HTML </li>
        <li>CSS and TailWindSS</li>
        <li>Java</li>
        <li>Python</li>
        <li>Bootstrap</li>
        <li>PHP</li>
        <li>Wordpress and Elemantar</li>
        <li>Figma</li>
      </ul>   
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BEng(Hons) Software Engineering - Reading</li>
        <li>University of Weminster affliated with Informatics Institute of Technology</li>
        <li>Holy Family Balika Kurunegala - Bio Science Stream</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in C# - Alison </li>
        <li>Linked in certifications</li>
        <li>UI/UX - Great Learning Academy</li>
        <li>Introduction to .NET core - Coursera</li>
        <li>IT Tecnician - NVQ L4</li>
        <li>Certificate in Computer Science</li>
      </ul>
      
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack software developer with a passion for creating
            interactive and responsive software applications. I have experience
            working with JavaScript, React, C#, .NET MVC, .NET core, Node.js, NextJS, MYSQL,
            Azure, HTML, CSS, Java, Python, Bootstrap, PHP, Wordpress, Elemantar, Figma and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;