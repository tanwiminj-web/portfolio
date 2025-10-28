import { useState, useEffect } from 'react';
import { Menu, X, Code, Database, Globe, Award, Briefcase, Mail, Linkedin, Github, Sparkles, Star, Trophy, GraduationCap } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Java', level: 100 },
    { name: 'Python', level: 95 },
    { name: 'MySQL', level: 90 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 80 },
  ];

  const achievements = [
    { icon: '🏀', title: '1st Place', desc: 'Inter-House Basketball Competition (Class 11)' },
    { icon: '🧮', title: '1st Place', desc: 'Maths Project, Science Exhibition' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Tanwi Minj
            </h1>

            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-sky-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md px-4 py-4 space-y-3">
            {['About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-50 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-cyan-400/20 to-emerald-400/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 animate-bounce">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-semibold text-sky-700">Welcome to my portfolio</span>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-700 bg-clip-text text-transparent drop-shadow-sm">
            Hi, I'm Tanwi Minj 👋
          </h1>

          <p className="text-2xl md:text-3xl mb-4 text-gray-700 font-medium">
            ✨ Dream. Code. Create. Repeat.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate learner and aspiring software developer who loves turning ideas into reality through code.
          </p>

          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🌸 Explore My Journey
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
            🙋‍♀️ About Me
          </h2>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex justify-center gap-6 mb-10">
              <Code className="w-10 h-10 text-sky-500" />
              <Database className="w-10 h-10 text-cyan-500" />
              <Globe className="w-10 h-10 text-emerald-500" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p className="text-center">
                Hey there! I'm <span className="font-bold text-sky-600">Tanwi Minj</span> — a 12th-grade student passionate about technology, coding, and creating digital solutions that make an impact.
              </p>

              <p className="text-center">
                I'm mastering <span className="font-bold text-sky-500">Java</span>, <span className="font-bold text-cyan-500">Python</span>, and <span className="font-bold text-emerald-500">MySQL</span>, while exploring <span className="font-semibold text-sky-600">HTML</span>, <span className="font-semibold text-cyan-600">CSS</span>, and <span className="font-semibold text-sky-500">JavaScript</span> — skills learned during the YIIC sessions.
              </p>

              <p className="text-center font-medium">
                Every project I build takes me one step closer to becoming a <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent font-bold">future software developer</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
            💡 My Skills
          </h2>

          <button
            onClick={() => setIsSkillsModalOpen(true)}
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            ✨ View My Skills
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
            🦖 My Projects
          </h2>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-emerald-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Build Your Own Dino 🦖</h3>
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Created an interactive dinosaur game during YIIC session with Mrinal Bhattacharyya Sir. A fun project that combines creativity with coding skills!
            </p>

            <a
              href="https://tanwiminj-web.github.io/DinoSkyRunner/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Project ↗
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
            🏅 My Certificates
          </h2>

          <button
            onClick={() => setIsCertModalOpen(true)}
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:ring-4 hover:ring-sky-300"
          >
            🎓 View Certificate
          </button>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
            🏆 My Achievements
          </h2>

          <button
            onClick={() => setIsAchievementsModalOpen(true)}
            className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🏆 Show Achievements
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
            📞 Let's Connect!
          </h2>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:tanwiminz@gmail.com"
                className="flex items-center gap-3 text-lg bg-sky-100/70 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-md hover:shadow-lg hover:bg-sky-200/70 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-sky-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sky-600">tanwiminz@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tanwi-minj-6b1553367"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg bg-sky-100/70 backdrop-blur-sm px-6 py-4 rounded-3xl shadow-md hover:shadow-lg hover:bg-sky-200/70 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-sky-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sky-600">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-100 to-emerald-100 py-8 text-center">
        <p className="text-gray-600 text-lg">
          © 2025 Tanwi Minj | Built during YIIC Program 💻
        </p>
      </footer>

      {/* Skills Modal */}
      {isSkillsModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsSkillsModalOpen(false)}>
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">My Skills</h3>
              <button onClick={() => setIsSkillsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700 text-lg">{skill.name}</span>
                    <span className="text-sky-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full animate-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {isCertModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsCertModalOpen(false)}>
          <div className="bg-white rounded-3xl p-4 md:p-8 max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">My Certificate</h3>
              <button onClick={() => setIsCertModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/certificate-dino.png.jpg"
                alt="Build Your Own Dino Certificate"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* Achievements Modal */}
      {isAchievementsModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsAchievementsModalOpen(false)}>
          <div className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">My Achievements</h3>
              <button onClick={() => setIsAchievementsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{achievement.icon}</span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{achievement.title}</h4>
                      <p className="text-gray-700">{achievement.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
