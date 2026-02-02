export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-(--color-primary) text-4xl font-bold  text-center">About Me</h3>
      <div className="bg-card rounded-xl p-8 grid md:grid-cols-2 gap-8">
        <div className=" overflow-hidden h-100 bg-dark rounded-xl flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/6b/0f/c9/6b0fc9e8c767f29909f6fc3bc55480be.jpg"
            alt="about-image"
            className=" w-full h-180 object-contain -scale-x-100"
          />
        </div>
        <div className="bg-slate-900 p-5 rounded-lg" >
          <div>
          <h3 className="text-white text-3xl font-bold mb-4">Full Stack Developer</h3>
          <p className="text-muted mb-4 text-slate-500">
            I’m a passionate fresher developer focused on building clean,
            responsive user interfaces and scalable web applications.<br/> I enjoy
            turning ideas into functional designs using modern frontend
            technologies. I write maintainable, performance-oriented code and
            follow best development practices. <br/> I’m always eager to learn,
            improve, and contribute to real-world projects and collaborative
            teams.
          </p>

          <div className="flex gap-6">
            <div>
              <h4 className="text-(--color-primary) font-bold text-xl">5+</h4>
              <p className="text-sm font-semibold text-muted">Projects</p>
            </div>
            <div>
              <h4 className="text-(--color-primary) font-bold text-xl">100+</h4>
              <p className="text-sm font-semibold text-muted">Hours Coding</p>
            </div>
          </div>
          <div className="my-4" >
            <button
            className="relative px-6 py-2 rounded-xl cursor-pointer
            hover:bg-black border  group overflow-hidden border-x-(--color-primary)"
          >
            <span className="relative z-10 ">Learn More</span>

            <span
              className="absolute inset-0 rounded-xl pointer-events-none
                 opacity-100"
            ></span>
          </button>
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
}
