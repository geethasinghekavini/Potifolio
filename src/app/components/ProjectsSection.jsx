"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ICC Construction Official Website",
    description: "Content update using Wordpress and Elemantar",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://icc-construct.com/",
  },
  {
    id: 2,
    title: "Quantech Services Official Website",
    description: "UI designing and development using React",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/geethasinghekavini/Quantechs_Services",
    previewUrl: "https://bit.ly/QuantechSevices",
  },
  {
    id: 3,
    title: "Scalp Care Application",
    description: "ML based treatment recomanding system using uploaded scalp images using python, React and NodeJS",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DewminiRuwanpathirana/ScalpCare",
    previewUrl: "https://github.com/DewminiRuwanpathirana/ScalpCare",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "UI design using Figma",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.behance.net/gallery/166591347/Food-Ordering-App",
    previewUrl: "https://www.behance.net/gallery/166591347/Food-Ordering-App",
  },
  {
    id: 5,
    title: "Growers Paradise ",
    description: "UI Design using Figma",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.behance.net/gallery/166596475/Growers-Paradise",
    previewUrl: "https://www.behance.net/gallery/166596475/Growers-Paradise",
  },
  {
    id: 6,
    title: "Zig-Zag Clothing",
    description: "UI Design using Figma",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.behance.net/gallery/166594101/ZIG-ZAG-Clothing",
    previewUrl: "https://www.behance.net/gallery/166594101/ZIG-ZAG-Clothing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
