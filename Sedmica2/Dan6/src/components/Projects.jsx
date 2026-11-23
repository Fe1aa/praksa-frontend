import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Tetris",
    tech: ["Python"],
    description:
      "A simple game of tetris made in python. It has blocks, grids, scoring and death.",
    image: "/img/Tetris.png",
    githubUrl: "https://github.com/Fe1aa/Python-Projects",
  },
  {
    id: 2,
    title: "Chess",
    tech: ["Python"],
    description:
      "Another game made in python, this time chess. It has all the chess essentials.",
    image: "/img/chess.png",
    githubUrl: "https://github.com/Fe1aa/Python-Projects",
  },
  {
    id: 3,
    title: "PC part picker",
    tech: ["HTML", "CSS", "JS", "Firebase"],
    description:
      "This website was made for a final project for Digital School course. You can look at how pretty it is.",
    image: "/img/pc_part_picker.png",
    githubUrl: "https://github.com/Fe1aa/Grupni-Projekat",
  },
  {
    id: 4,
    title: "This website",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    description: "That's right folks, I made this website it was really hard.",
    image: "/img/this_website.png",
    githubUrl: "https://github.com/Fe1aa/Web-Programiranje-Projekat",
  },
  {
    id: 5,
    title: "Veinminer",
    tech: ["Java"],
    description:
      "This is a minecraft plugin that allows you to mine a whole vein of ores at once. It's very versitile.",
    image: "/img/veinminer.jpg",
    githubUrl: "https://github.com/Fe1aa/Veinminer-Mod",
  },
  {
    id: 6,
    title: "Physics engine",
    tech: ["C++", "SDL2"],
    description:
      "A custom 2D physics engine built from scratch in C++ using SDL2 for rendering. I went through a lot of trial and error to make this.",
    image: "/img/physics_engine.png",
    githubUrl: "https://github.com/Fe1aa/Physics-Engines",
  },
];

function Projects() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.tech.some((t) => t.toLowerCase().includes(query)),
  );

  return (
    <section id="projects" className="container my-5">
      <div className="text-center">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">This is some stuff I built</p>
      </div>

      <div className="row mb-5">
        <div className="col-12 col-md-6 offset-md-3">
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control-sm search-input"
              type="search"
              placeholder="Search projects"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div className="row g-4">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <ProjectCard {...project} />
            </div>
          ))
        ) : (
          <p className="text-center">No projects match "{search}".</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
