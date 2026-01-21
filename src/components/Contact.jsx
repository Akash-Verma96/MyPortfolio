import { useRef } from "react";
import ContactImage from "../assets/contact.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_c9vj0iv",
        "template_75wt5mn",
        form.current,
        "p_-LdD3M9s6Db_rHI"
      )
      .then(
        () => alert("Thank you for reaching out! I’ve received your message and will get back to you soon. 🚀"),
        (error) => alert(error.text),
      );
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-white">
          Get In <span className="text-(--color-primary)">Touch</span>
        </h3>
        <p className="text-gray-400 mt-2">
          Have a project or internship opportunity? Let’s talk.
        </p>
      </div>

      {/* Contact Card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
        <div className="flex flex-col justify-center">
          <h4 className="text-xl text-center font-semibold text-white mb-1">
            Let’s build something together
          </h4>
          <p className="text-slate-400 text-center mb-6">
            I’m open to internships, freelance projects, and collaboration
            opportunities. Feel free to reach out anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Left Side (Info / Visual) */}
          <div className="">
            <img
              className="width-full h-100 rounded-xl"
              src={ContactImage}
              alt="Contact Image"
            />

            {/* Optional placeholders */}
            <div className="space-y-3 flex gap-5 text-gray-400 text-sm">
              <p>📍 India</p>
              <p>📧 av3764909@email.com</p>
              <p>💼 Open to opportunities</p>
            </div>
          </div>

          {/* Right Side (Form) */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-lg bg-dark border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded-lg bg-dark border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              className="w-full rounded-lg bg-dark border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />

            <button
              type="submit"
              className="relative px-6 py-3 rounded-xl cursor-pointer
            hover:bg-black border border-(--color-muted) group overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>

              <span
                className="absolute inset-0 rounded-xl pointer-events-none
                 opacity-100"
              ></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
