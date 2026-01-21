import { useEffect, useState } from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled ? "backdrop-blur-md bg-black/60 shadow-lg" : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="hidden md:flex gap-10 text-sm text-muted border py-2 px-4 rounded-xl">
          <li
            className="cursor-pointer hover:text-(--color-primary) relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => {
              scrollTo("home");
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-(--color-primary) relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => {
              scrollTo("about");
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-(--color-primary) relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => {
              scrollTo("projects");
            }}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-(--color-primary) relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => {
              scrollTo("skills");
            }}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-(--color-primary) relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-(--color-primary) after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => {
              scrollTo("contact");
            }}
          >
            Contact
          </li>
        </ul>

        <button
          className="relative bg-(--color-primary) px-4 text-sm py-2 rounded-xl cursor-pointer
            hover:bg-black transition-colors duration-500 delay-[100ms ]  hover:border hover:border-(--color-muted) group overflow-hidden"
            onClick={()=>scrollTo("contact")}
        >
          <span className="relative z-10">Hire Me</span>

          <span
            className="absolute inset-0 rounded-xl pointer-events-none
                opacity-100"
          ></span>
        </button>
      </div>
    </nav>
  );
}
