import profileImage from '../assets/profile.jpg';
import {
  GraduationCap,
  Code2,
  Cloud,
  Lightbulb,
  Award,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';

function About() {
  const interests = [
    {
      icon: <Code2 size={25} />,
      title: 'Web Development',
      description:
        'Building responsive and interactive websites using HTML, CSS, JavaScript and React.',
    },
    {
      icon: <Cloud size={25} />,
      title: 'Cloud Computing',
      description:
        'Exploring Microsoft Azure and cloud technologies to understand modern IT infrastructure.',
    },
    {
      icon: <Lightbulb size={25} />,
      title: 'Problem Solving',
      description:
        'Enjoying challenges, learning new technologies and creating practical solutions.',
    },
  ];

  return (
    <section  id="about"
  className="min-h-screen bg-slate-50 px-6 py-20 scroll-mt-24">

      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Get to know me
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            About <span className="text-blue-600">Me</span>
          </h1>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-7">
            My journey, education, interests and passion for technology.
          </p>
        </div>

        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* Profile Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-200 rounded-3xl rotate-3"></div>

            <div className="relative bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-10 text-white min-h-[350px] flex flex-col justify-center items-center text-center shadow-xl">

              <div className="w-32 h-32 rounded-full bg-white/15 border-4 border-white/30 flex items-center justify-center text-4xl font-bold mb-6">
                <img
  src={profileImage}
  alt="My professional profile"
  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
/>
              </div>

              <h2 className="text-2xl font-bold">
                IT Student & Aspiring Developer
              </h2>

              <p className="text-blue-100 mt-3">
                Learning. Building. Growing.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                <span className="bg-white/15 px-4 py-2 rounded-full text-sm">
                  Web Development
                </span>

                <span className="bg-white/15 px-4 py-2 rounded-full text-sm">
                  Microsoft Azure
                </span>
              </div>

            </div>
          </div>

          {/* About Text */}
          <div>
            <p className="text-blue-600 font-semibold mb-3">
              My Story
            </p>

            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Turning my passion for technology into practical skills.
            </h2>

            <p className="text-slate-600 mt-6 leading-8">
              I am an Information Technology student at Garissa University
              with a strong interest in web development and cloud computing.
              My journey in technology is driven by curiosity, creativity
              and a desire to solve real-world problems.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              I have been developing my skills in HTML, CSS, JavaScript
              and React through practical projects and continuous learning.
              I have also earned the Microsoft Azure Fundamentals (AZ-900)
              certification, which strengthened my understanding of cloud
              computing.
            </p>

            <p className="text-slate-600 mt-4 leading-8">
              I believe in continuous learning, teamwork and using
              technology to create meaningful solutions. I am excited
              to keep growing and take on new challenges in the IT field.
            </p>

          </div>
        </div>

        {/* Education and Certification */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition duration-300">

            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <GraduationCap size={26} />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Education
            </h3>

            <p className="text-blue-600 font-semibold mt-3">
              Garissa University
            </p>

            <p className="text-slate-500 mt-2 leading-7">
              Pursuing Information Technology, developing knowledge
              and practical skills in the technology field.
            </p>

          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition duration-300">

            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-5">
              <Award size={26} />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Certification
            </h3>

            <p className="text-blue-600 font-semibold mt-3">
              Microsoft Azure Fundamentals
            </p>

            <p className="text-slate-500 mt-2 leading-7">
              AZ-900 certified, with foundational knowledge of cloud
              concepts, Azure services and cloud governance.
            </p>

          </div>

        </div>

        {/* Interests and Skills */}
        <div>

          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              What drives me
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-3">
              My Interests
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  {interest.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {interest.title}
                </h3>

                <p className="text-slate-500 leading-7 mt-3">
                  {interest.description}
                </p>

                <div className="mt-5 text-blue-600">
                  <ArrowUpRight size={22} />
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl p-10 md:p-14 text-center text-white">

          <BookOpen size={35} className="mx-auto mb-5" />

          <h2 className="text-3xl font-bold">
            Always Learning, Always Growing
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto mt-4 leading-7">
            Every project is an opportunity to learn something new.
            I am committed to developing my skills and making a
            positive impact through technology.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
