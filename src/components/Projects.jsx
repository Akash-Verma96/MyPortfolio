import solarVideo from '../assets/Solar.mp4'
import netflixVideo from '../assets/Netflix.mp4'

const projects = [
  {
    name: "DevTinder App",
    description:
      "A full-stack Devloper community App where many Devloper can Connect and Grow together.",
    videoUrl:solarVideo,
    type: "Full Stack",
    liveLink: "#",
  },
  {
    name: "Music Website",
    description: "A modern responsive music website where we can enjoy..",
    videoUrl: solarVideo,
    type: "Frontend",
    liveLink: "#",
  },
  {
    name: "Netflix Clone",
    description: "A responsive complete Netflix Clone",
    videoUrl:netflixVideo,
    type: "Frontend",
    liveLink: "#",
  },
  {
    name: "Solar System",
    description: "A 3D solar system symulation app.",
    videoUrl:solarVideo,
    type: "3js Project",
    liveLink: "https://solar-system-website-dun.vercel.app/",
  },
  {
    name: "Music Website2",
    description: "A modern responsive music website where we can enjoy..",
    videoUrl:netflixVideo,
    type: "Frontend",
    liveLink: "#",
  },
  {
    name: "Netflix Clone2",
    description: "A responsive complete Netflix Clone",
    videoUrl:netflixVideo,
    type: "Frontend",
    liveLink: "#",
  },
  {
    name: "DevTinder App2",
    description:
      "A full-stack Devloper community App where many Devloper can Connect and Grow together.",
    videoUrl:solarVideo,
    type: "Full Stack",
    liveLink: "#",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white">
          My <span className="text-(--color-primary)">Projects</span>
        </h3>
        <p className="text-gray-400 mt-2">Some things I’ve built recently</p>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div
        className="flex gap-6 overflow-x-auto pb-6
        snap-x snap-mandatory
        scrollbar-hide"
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="min-w-70 sm:min-w-[320px] lg:min-w-90
            snap-center
            rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-xl p-5
            hover:-translate-y-1 transition-all duration-300
            shadow-lg shadow-orange-500/30  overflow-x-auto scrollbar-hide "
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4">
              {/* <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover"
              /> */}
              <div className="rounded-xl overflow-hidden mb-4">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-44 object-cover"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Tag */}
            <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
              {project.type}
            </span>

            {/* Title */}
            <h4 className="text-lg font-semibold text-white mb-2">
              {project.name}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            {/* Button */}
            <button
              href="https://solar-system-website-dun.vercel.app/"
              target="_blank"
              className="relative px-6 py-3 rounded-xl cursor-pointer
            hover:bg-black border border-(--color-muted) group overflow-hidden border-x-(--color-primary)"
            >
              <span className="relative z-10">Live Preview</span>

              <span
                className="absolute inset-0 rounded-xl pointer-events-none
                 opacity-100"
              ></span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
