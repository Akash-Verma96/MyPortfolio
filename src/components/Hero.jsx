import heroImage from "../assets/hero.png";
import LeetCodeIcon from "../assets/leetcode.svg";
import TufLogo from "../assets/TUFLogo.png"


import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDownload,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-25 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <div className="flex gap-5 mb-2 text-2xl">
          <a
            className="text-white hover:text-orange-400 transition-colors"
            href="https://github.com/Akash-Verma96"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="text-white hover:text-sky-400 transition-colors"
            href="https://x.com/AkashVerma55548"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="text-white hover:text-blue-400 transition-colors"
            href="https://www.linkedin.com/in/akash-verma-0675b2225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        
          <a
            className="text-white  transition-colors"
            href="https://leetcode.com/u/Akash_Verma96/"
            target="_blank"
          >
            <img src={LeetCodeIcon} alt="LeetCode" className="w-6 h-6 bg-white rounded p-1 hover:bg-[#FFA116]" />
          </a>
          <a
            className="text-white  transition-colors"
            href="https://takeuforward.org/profile/av3764909@gmail.com"
            target="_blank"
          >
            <img src={TufLogo} alt="LeetCode" className="w-6 h-6 bg-white rounded p-1 hover:bg-[#EA763F]" />
          </a>
        </div>
        <h2 className="text-4xl font-bold mb-4">
          Hi, I’m <span className=" text-(--color-primary)">Akash Verma</span>
        </h2>
        <p className="text-muted mb-6">
          Full-Stack Developer with hands-on experience in modern web
          technologies and strong problem-solving skills in Data Structures &
          Algorithms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="/Akash-Resume.pdf"
            download
            className="relative bg-(--color-primary) px-6 py-3 rounded-xl cursor-pointer
    hover:bg-black transition-colors duration-500 delay-[50ms ] hover:border hover:border-(--color-muted) group overflow-hidden hover:text-(--color-primary)
    w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex gap-2 items-center justify-center">
              Resume <FaDownload />
            </span>

            <span
              className="absolute inset-0 rounded-xl pointer-events-none
        opacity-0 group-hover:opacity-100"
            ></span>
          </a>

          <button
            className="relative px-6 py-3 rounded-xl cursor-pointer
    hover:bg-(--color-primary) hover:text-white border transition-colors duration-500 delay-[50ms ] group overflow-hidden border-(--color-primary)
    w-full sm:w-auto"
            onClick={() => scrollTo("contact")}
          >
            <span className="relative z-10 flex gap-2 items-center justify-center">
              <FaPhoneAlt /> Contact Me
            </span>

            <span
              className="absolute inset-0 rounded-xl pointer-events-none
         opacity-100"
            ></span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl h-150 flex items-center justify-center ">
        <img className="" src={heroImage} alt="" />
      </div>
    </section>
  );
}
