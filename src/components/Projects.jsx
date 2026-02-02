const projects = [
  {
    name: "DevTinder App",
    description:
      "A full-stack Devloper community App where many Devloper can Connect and Grow together.",
    image:
      "https://i.pinimg.com/1200x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg",
    type: "Full Stack",
    isActive: false,
    liveLink: "13.60.174.91",
  },
  {
    name: "To-Do Application",
    description: "A modern responsive To-Do where we can Manage your day..",
    image:
      "https://i.pinimg.com/1200x/dc/a9/18/dca918c2d20bc4c784dfd1b92ae2930a.jpg",
    type: "Frontend",
    isActive: true,
    liveLink: "https://todo-application-amber-one.vercel.app/",
  },
  {
    name: "Music Website",
    description: "A modern responsive music website where we can enjoy..",
    image:
      "https://i.pinimg.com/1200x/77/f3/2d/77f32d5f63795088ec4159d885ef85c2.jpg",
    type: "Frontend",
    isActive: false,
    liveLink: "#",
  },
  {
    name: "Netflix Clone",
    description: "A responsive complete Netflix Clone",
    image:
      "https://i.pinimg.com/1200x/81/3c/d6/813cd6c3ba5b10c038198a993833c12e.jpg",
    type: "Frontend",
    isActive: true,
    liveLink: "https://netflix-clone-fullstack-project-kejv9es36.vercel.app/",
  },
  {
    name: "Solar System",
    description: "A 3D solar system symulation app.",
    image:
      "https://i.pinimg.com/1200x/46/d4/2a/46d42a69a3e27fbc30801107907b6445.jpg",
    type: "3js Project",
    isActive: true,
    liveLink: "https://solar-system-website-dun.vercel.app/",
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
            shadow-lg shadow-orange-500/30  overflow-x-auto scrollbar-hide 
            "
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-cover "
              />
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
            {project.isActive && (
              <button
                className="relative px-6 py-3 rounded-xl cursor-pointer
            hover:bg-black border border-(--color-muted) group overflow-hidden border-x-(--color-primary)"
              >
                <a
                  className="relative z-10"
                  href={project.liveLink}
                  target="_blank"
                >
                  Live Preview
                </a>

                <span
                  className="absolute inset-0 rounded-xl pointer-events-none
                 opacity-100"
                ></span>
              </button>
            )}
            {!project.isActive && (
              <p className="text-slate-500 text-sm sm:text-base md:text-base ">
                Live demo coming soon 🚀
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
