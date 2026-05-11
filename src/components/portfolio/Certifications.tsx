import { Award } from "lucide-react";

const certs = [
  {
    title: "Diploma in ICT — Applications Development",
    issuer: "Cape Peninsula University of Technology",
    year: "2025",
    color: "bg-pastel-pink",
  },
  {
    title: "Higher Certificate in ICT",
    issuer: "Cape Peninsula University of Technology",
    year: "2022",
    color: "bg-pastel-lavender",
  },
  {
    title: "Web Application Developer Internship",
    issuer: "Plum Systems Pty Ltd",
    year: "2025",
    color: "bg-pastel-blue",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-heading">My <span className="text-gradient">Certifications</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <article
              key={c.title}
              className="glass-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${c.color} rounded-2xl flex items-center justify-center mb-4`}>
                <Award className="w-6 h-6 text-foreground/70" />
              </div>
              <h3 className="text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
              <p className="text-xs text-muted-foreground mt-2 font-semibold">{c.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
