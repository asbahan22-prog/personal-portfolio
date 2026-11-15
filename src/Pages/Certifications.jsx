
import { Award, Cloud, CheckCircle2 } from 'lucide-react';

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-white px-6 py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            My Achievements
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Professional learning and certifications that
            support my journey in Information Technology.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg md:p-12">

          <div className="flex flex-col items-center gap-8 md:flex-row">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
              <Cloud size={48} />
            </div>

            <div className="flex-1 text-center md:text-left">

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                <CheckCircle2 size={16} />
                Successfully Certified
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Microsoft Certified: Azure Fundamentals
              </h3>

              <p className="mt-2 font-semibold text-blue-600">
                Certification AZ-900
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Demonstrates foundational knowledge of cloud
                concepts, Azure architecture and services,
                and Azure management and governance.
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-700 md:justify-start">
                <Award size={20} className="text-blue-600" />
                Microsoft
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;
