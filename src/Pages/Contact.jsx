
import {
  Mail,
  MapPin,
  Send,
  Code2
} from 'lucide-react';

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-24 text-white scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I am open to internship opportunities, mentorship,
            collaborations and professional connections.
            Feel free to reach out.
          </p>

        </div>

        {/* Contact cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">

          {/* Contact information */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

            <h3 className="mb-8 text-2xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-7">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email Address
                  </p>

                  <a
                    href="mailto:asbahan22@gmail.com"
                    className="font-medium transition hover:text-blue-400"
                  >
                    asbahan22@gmail.com
                  </a>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-600/20 p-3 text-blue-400">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="font-medium">
                    Kenya
                  </p>
                </div>

              </div>

            </div>

            {/* GitHub */}
            <div className="mt-10 border-t border-slate-700 pt-7">

              <p className="mb-5 font-semibold">
                Find me online
              </p>

              <a
                href="https://github.com/asbahan22-prog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-slate-800 px-5 py-3 transition hover:bg-blue-600"
              >
                <Code2 size={22} />
                GitHub Profile
              </a>

            </div>

          </div>

          {/* Email invitation */}
          <div className="flex flex-col justify-center rounded-2xl border border-slate-700 bg-slate-900 p-8">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
              <Send size={28} />
            </div>

            <h3 className="text-2xl font-bold">
              Have an opportunity?
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I would love to hear from you. Whether you have
              an internship opportunity, a project idea or
              simply want to connect, let's start a conversation.
            </p>

            <a
              href="mailto:asbahan22@gmail.com"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Send Me an Email
              <Mail size={19} />
            </a>

          </div>

        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-800 pt-8 text-center">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Amina Ali Yussuf.
            All rights reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Designed and built with React and Tailwind CSS.
          </p>

        </footer>

      </div>
    </section>
  );
}

export default Contact;
