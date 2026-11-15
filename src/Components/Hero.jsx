
import { ArrowRight, Cloud, Code2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">

        {/* LEFT SIDE: Introduction */}
        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
            Welcome to my portfolio
          </div>

          <p className="mb-3 text-lg font-medium text-slate-300">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Amina Ali Yussuf
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-blue-400 md:text-2xl">
            IT Student | Aspiring Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
            I am passionate about building modern web applications
            and exploring cloud technologies. I enjoy solving
            problems through technology, creating meaningful
            digital experiences, and continuously developing
            my technical skills.
          </p>

          {/* Technology interests */}
          <div className="mt-8 flex flex-wrap gap-3">

            <span className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-3 text-sm">
              <Code2 size={18} className="text-blue-400" />
              Web Development
            </span>

            <span className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-3 text-sm">
              <Cloud size={18} className="text-blue-400" />
              Cloud Computing
            </span>

          </div>

          {/* Certification */}
          <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
            <Award size={22} className="text-blue-400" />
            Microsoft Certified: Azure Fundamentals (AZ-900)
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Explore My Projects
              <ArrowRight size={18} />
            </a>

            <Link
              to="/about"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
            >
              About Me
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE: Profile photograph */}
        <div className="relative mx-auto w-full max-w-md">

          <div className="absolute -inset-4 rounded-3xl bg-blue-500/20 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-3 shadow-2xl">

            <img
              src={profileImage}
              alt="Amina Ali Yussuf"
              className="h-[420px] w-full rounded-2xl object-cover object-center"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-slate-950/85 p-4 backdrop-blur-md">

              <p className="text-lg font-bold">
                Amina Ali Yussuf
              </p>

              <p className="mt-1 text-sm text-blue-300">
                Building my future through technology
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
