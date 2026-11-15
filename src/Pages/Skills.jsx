
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Terminal,
  Cloud,
  Database,
  Wrench
} from 'lucide-react';

function Skills() {

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces.',
      icon: <Code2 size={24} />,
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React']
    },
    {
      title: 'Programming & Development',
      description: 'Learning programming concepts and developing practical solutions.',
      icon: <Braces size={24} />,
      skills: ['JavaScript', 'Python', 'React', 'Git & GitHub']
    },
    {
      title: 'Cloud & Database Technologies',
      description: 'Exploring cloud computing and database management.',
      icon: <Cloud size={24} />,
      skills: ['Microsoft Azure', 'Azure Fundamentals (AZ-900)', 'MySQL', 'PostgreSQL']
    }
  ];

  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            What I Work With
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            My Technical Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            These are the technologies and tools I have been
            learning and using as I continue growing in the
            field of Information Technology.
          </p>

        </div>

        {/* Skill category cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category, index) => (

            <div
              key={category.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {category.icon}
              </div>

              {/* Category title */}
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
