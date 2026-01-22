import heroImage from "../assets/hero.png";
import { FaGithub, FaTwitter, FaLinkedin ,FaDownload, FaPhoneAlt} from "react-icons/fa";



export default function Hero() {

  const scrollTo = (id) =>{
    document.getElementById(id)?.scrollIntoView({
      behavior:"smooth",
    });
  }
   
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-25 grid md:grid-cols-2 gap-10 items-center">
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
        </div>
        <h2 className="text-4xl font-bold mb-4">
          Hi, I’m <span className=" text-(--color-primary)">Akash Verma</span>
        </h2>
        <p className="text-muted mb-6">
          Full-Stack Developer with hands-on experience in modern web
          technologies and strong problem-solving skills in Data Structures &
          Algorithms.
        </p>

        <div className="flex gap-4">
          <a
            href="/Akash Resume.pdf"
            download
            className="relative bg-(--color-primary) px-6 py-3 rounded-xl cursor-pointer
            hover:bg-black transition-colors duration-500 delay-[50ms ]  hover:border hover:border-(--color-muted) group overflow-hidden hover:text-(--color-primary)"
          >
            <span className="relative z-10 flex gap-2 items-center"> Resume <FaDownload/></span>

            <span
              className="absolute inset-0 rounded-xl pointer-events-none
                opacity-0 group-hover:opacity-100"
            ></span>
          </a>

          <button
            className="relative px-6 py-3 rounded-xl cursor-pointer
            hover:bg-(--color-primary) hover:text-white border transition-colors duration-500 delay-[50ms ] group overflow-hidden border-(--color-primary)"
            onClick={()=>scrollTo("contact")}
          >
            <span className="relative z-10 flex gap-2 items-center"><FaPhoneAlt />Contact Me </span>

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
