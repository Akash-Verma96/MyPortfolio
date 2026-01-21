const skills = [
  {
    name: "DSA",
    logo: "📊", // dummy logo (replace later)
    progress: 95,
    description:
      "Strong problem-solving using arrays, strings, trees, and graphs",
    color:
      "#f7df1e",
  },
  {
    name: "React",
    logo: "⚛️",
    progress: 75,
    description: "Component-based UI, hooks, props, and state management",
    color: "#61dafb",
  },
  {
    name: "Tailwind CSS",
    logo: "🎨",
    progress: 85,
    description: "Utility-first styling with responsive and clean UI design",
    color: "orange",
  },
  {
    name: "JavaScript",
    logo: "🟨",
    progress: 90,
    description: "ES6+, async/await, DOM manipulation, and logic building",
    color: "green",
  },
  {
    name: "Python",
    logo: "🐍",
    progress: 50,
    description: "Basic scripting, problem-solving, and data handling",
    color: "#38bdf8",
  },
  {
    name: "Git",
    logo: "🔧",
    progress: 70,
    description: "Version control, GitHub workflow, and collaboration",
    color:
      "#3776ab",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold ">
          My <span className="text-(--color-primary)">Skills</span>
        </h3>
        <p className="text-slate-500 mt-1">
          Technologies and tools I work with
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-black border rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Top Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 text-2xl">
                {skill.logo}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {skill.progress}% proficiency
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">{skill.description}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-full {color} rounded-full transition-all duration-500"
                style={{
                  width: `${skill.progress}%`,
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
