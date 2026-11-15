import { Wallet, Code2, ExternalLink } from 'lucide-react';


import spendwiseImage from '../assets/projects/spendwise.png';
import ageCheckerImage from '../assets/projects/age-checker.png';
import calculatorImage from '../assets/projects/calculator.png';
import hospitalImage from '../assets/projects/digital hospital.png';
import formsImage from '../assets/projects/html form.png';

function Projects() {

  const projects = [
    {
      title: 'SpendWise',
      subtitle: 'Personal Budget Tracker',
      image: spendwiseImage,
      description:
        'A responsive personal finance dashboard designed to help users organize financial information, view spending categories and monitor recent transactions.',
      technologies: [
        'HTML5',
        'CSS3',
        'CSS Grid',
        'Flexbox',
        'Responsive Design'
      ],
      github:
        'https://github.com/asbahan22-prog/My-Budget-Tracker'
    },
    {
  title: 'Age Checker',
  subtitle: 'Age Verification Application',
  image: ageCheckerImage,
  description: 'A web application that checks a user’s age and provides feedback based on the entered date of birth.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/asbahan22-prog/Age-Checker'
},
{
  title: 'Grade Calculator',
  subtitle: 'Student Grade Management',
  image: calculatorImage,
  description: 'A simple interactive application that calculates student grades based on entered marks and displays the corresponding results.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/asbahan22-prog/grade-calculator'
},
{
  title: 'Digital Hospital Management System',
  subtitle: 'Hospital Management Application',
  image: hospitalImage,
  description: 'A hospital management application designed to organize patient records, appointments, doctors and other hospital information.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/asbahan22-prog/Digital-Hospital-Management-System'
},
{
  title: 'HTML Forms Practice',
  subtitle: 'HTML Forms and Input Elements',
  image: formsImage,
  description: 'A practical HTML project demonstrating form creation, input fields, labels, dropdowns, buttons and different form elements.',
  technologies: ['HTML5', 'HTML Forms', 'CSS'],
  github: 'https://github.com/asbahan22-prog/HTML-Forms-Practice'
}
  ];

  return (
    <section
      id="projects"
      className="bg-slate-50 px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Here are some of the practical projects I have
            worked on while developing my technical skills.
          </p>

        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Project icon */}
            {/* Project image */}
<div className="mb-6 overflow-hidden rounded-xl">
  <img
    src={project.image}
    alt={`${project.title} screenshot`}
    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
  />
</div>
              {/* Project title */}
              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-1 font-medium text-blue-600">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((technology) => (

                  <span
                    key={technology}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>

                ))}

              </div>

              {/* GitHub link */}
              <div className="mt-8 border-t border-slate-100 pt-6">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  <Code2 size={19}  />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
