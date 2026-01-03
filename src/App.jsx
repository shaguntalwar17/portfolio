import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, Award, BookOpen, Code, Briefcase, Star, Heart, Download, ExternalLink, ChevronRight, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'connect', label: 'Let\'s Connect' },
    { id: 'philosophy', label: 'My Philosophy' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-pink-50 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-pink-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circuit Board Pattern */}
        <svg className="absolute opacity-10" style={{ top: '5%', left: '3%', animation: 'float 8s ease-in-out infinite' }} width="200" height="200" viewBox="0 0 200 200">
          <path d="M50 50 L150 50 L150 150 L50 150 Z" stroke="#ec4899" strokeWidth="3" fill="none"/>
          <circle cx="50" cy="50" r="8" fill="#ec4899"/>
          <circle cx="150" cy="50" r="8" fill="#ec4899"/>
          <circle cx="150" cy="150" r="8" fill="#ec4899"/>
          <circle cx="50" cy="150" r="8" fill="#ec4899"/>
          <path d="M100 50 L100 150" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5"/>
          <path d="M50 100 L150 100" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5"/>
        </svg>

        {/* Code Brackets */}
        <svg className="absolute opacity-10" style={{ top: '15%', right: '8%', animation: 'float 10s ease-in-out infinite 1s' }} width="150" height="150" viewBox="0 0 150 150">
          <path d="M40 30 L20 75 L40 120" stroke="#ec4899" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M110 30 L130 75 L110 120" stroke="#ec4899" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M60 50 L90 100" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round"/>
        </svg>

        {/* Data Flow Lines */}
        <svg className="absolute opacity-10" style={{ bottom: '20%', left: '10%', animation: 'float 7s ease-in-out infinite 2s' }} width="250" height="180" viewBox="0 0 250 180">
          <path d="M20 90 Q70 30, 120 90 T220 90" stroke="#ec4899" strokeWidth="3" fill="none"/>
          <circle cx="20" cy="90" r="6" fill="#f43f5e"/>
          <circle cx="120" cy="90" r="6" fill="#f43f5e"/>
          <circle cx="220" cy="90" r="6" fill="#f43f5e"/>
        </svg>

        {/* Network Nodes */}
        <svg className="absolute opacity-10" style={{ top: '45%', right: '5%', animation: 'float 9s ease-in-out infinite 1.5s' }} width="180" height="180" viewBox="0 0 180 180">
          <circle cx="90" cy="40" r="15" fill="none" stroke="#ec4899" strokeWidth="3"/>
          <circle cx="40" cy="120" r="15" fill="none" stroke="#ec4899" strokeWidth="3"/>
          <circle cx="140" cy="120" r="15" fill="none" stroke="#ec4899" strokeWidth="3"/>
          <line x1="90" y1="55" x2="50" y2="110" stroke="#f43f5e" strokeWidth="2"/>
          <line x1="90" y1="55" x2="130" y2="110" stroke="#f43f5e" strokeWidth="2"/>
          <line x1="55" y1="120" x2="125" y2="120" stroke="#f43f5e" strokeWidth="2"/>
        </svg>

        {/* Geometric Tech Shape */}
        <svg className="absolute opacity-10" style={{ bottom: '35%', right: '18%', animation: 'float 6.5s ease-in-out infinite 0.5s' }} width="160" height="160" viewBox="0 0 160 160">
          <polygon points="80,20 140,60 140,120 80,160 20,120 20,60" stroke="#ec4899" strokeWidth="3" fill="none"/>
          <polygon points="80,50 110,70 110,110 80,130 50,110 50,70" stroke="#f43f5e" strokeWidth="2" fill="none"/>
        </svg>

        {/* Binary Code Stream */}
        <svg className="absolute opacity-10" style={{ top: '65%', left: '20%', animation: 'float 8.5s ease-in-out infinite 2.5s' }} width="200" height="150" viewBox="0 0 200 150">
          <text x="10" y="30" fill="#ec4899" fontSize="24" fontFamily="monospace">1010</text>
          <text x="10" y="70" fill="#f43f5e" fontSize="24" fontFamily="monospace">0101</text>
          <text x="10" y="110" fill="#ec4899" fontSize="24" fontFamily="monospace">1100</text>
        </svg>
        
        {/* Mouse Follower Gradient */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-300/30 to-purple-300/30 blur-3xl transition-all duration-300"
          style={{ 
            left: mousePosition.x - 192, 
            top: mousePosition.y - 192,
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
      </div>

      {/* Navigation Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 left-6 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Download Resume Button */}
      <a
        href="https://drive.google.com/file/d/1S-KgJ_uhbBrLE3krf5IcocMklvWkfKEm/view?usp=drivesdk"
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2 font-semibold"
      >
        <Download size={20} />
        Resume
      </a>

      {/* Sidebar Navigation */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white/95 backdrop-blur-md shadow-2xl z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 pt-24">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-8">Navigation</h2>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg' 
                    : 'hover:bg-pink-100 text-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center animate-fade-in max-w-4xl">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-pink-400 to-rose-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-7xl overflow-hidden">
                  <img
      src="/me.jpeg"
      alt="Shagun Talwar"
      className="w-full h-full object-cover rounded-full"
    />
                </div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 animate-gradient">
              नमस्कार! 
            </h1>
            <p className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 animate-slide-up">
              I'm Shagun Talwar
            </p>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up animation-delay-200">
              Aspiring Data Scientist | Software & Analytics Enthusiast | Full-Stack Problem Solver
            </p>
            <div className="flex justify-center gap-4 animate-slide-up animation-delay-400">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2"
              >
                View Projects <ChevronRight />
              </button>
              <button 
                onClick={() => scrollToSection('connect')}
                className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-pink-500"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                {/* <div className="text-4xl mb-4">🎯</div> */}
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Who I Am</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am Shagun Talwar, a curious and driven B.Tech Computer Science student specializing in Data Science who believes that learning is most powerful when it creates real impact. I enjoy transforming ideas and data into clean, logical and meaningful solutions through code. Rather than limiting myself to theory, I focus on building real-world projects that strengthen my fundamentals and help me grow into an industry-ready professional.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                {/* <div className="text-4xl mb-4">💼</div> */}
                <h3 className="text-2xl font-bold mb-4 text-rose-600">What I Do</h3>
                <p className="text-gray-700 leading-relaxed">
                  I build data-driven and software solutions by combining clean logic, code and real-world problem solving. I enjoy working with data, exploring patterns and turning insights into meaningful solutions while continuously strengthening my fundamentals through hands-on projects. My focus is on building practical, impact-oriented work that helps me grow into an industry-ready professional.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                {/* <div className="text-4xl mb-4">🚀</div> */}
                <h3 className="text-2xl font-bold mb-4 text-purple-600">My Goals</h3>
                <p className="text-gray-700 leading-relaxed">
                 My goal is to create meaningful impact through my work by building solutions that contribute positively to society. I aspire to use my skills in technology, data and problem-solving not just for personal growth but to create value that benefits people and communities. I believe that true success lies in using knowledge and resources responsibly with a long-term vision of giving back and making a difference through purposeful work.                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                {/* <div className="text-4xl mb-4">📊</div> */}
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Key Metrics</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between"><span>Projects Completed:</span><strong>3+</strong></div>
                  <div className="flex justify-between"><span>GitHub Contributions:</span><strong>50+</strong></div>
                                    <div className="flex justify-between"><span>GitHub Streak:</span><strong>200+</strong></div>

                  <div className="flex justify-between"><span>Problem Solving:</span><strong>300+ DSA</strong></div>
                  <div className="flex justify-between"><span>Certifications:</span><strong>5+</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id="connect" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Let's Connect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a href="https://www.linkedin.com/in/shagun-talwar" target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group">
                <Linkedin size={64} className="mx-auto mb-4 text-blue-600 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
                <p className="text-gray-600 mb-4">Professional Network</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p> 400+ Connections</p>
                  <p> Open to Opportunities</p>
                </div>
              </a>
              
              <a href="https://github.com/shaguntalwar17" target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group">
                <Github size={64} className="mx-auto mb-4 text-gray-800 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">GitHub</h3>
                <p className="text-gray-600 mb-4">Code Repository</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p> 5+ Repositories</p>
                  <p> 50+ Contributions</p>
                </div>
              </a>
              
              <a href="mailto:shaguntalwar1707@gmail.com" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group">
                <Mail size={64} className="mx-auto mb-4 text-red-500 group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Direct Contact</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p> Quick Response</p>
                  <p> Available 24/7</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Learning Philosophy Section */}
        <section id="philosophy" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">My Learning Philosophy</h2>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="bg-white/80 p-6 rounded-xl border-l-4 border-pink-500">
                  <h3 className="text-2xl font-bold mb-3 text-pink-600 flex items-center gap-3">
                    <TrendingUp /> Consistency Over Outcomes
                  </h3>
                  <p className="text-gray-700">I believe in showing up every day and doing the work without chasing immediate results. Consistent effort, done with honesty and patience, eventually leads to meaningful outcomes in its own time.</p>
                </div>
                
                <div className="bg-white/80 p-6 rounded-xl border-l-4 border-rose-500">
                  <h3 className="text-2xl font-bold mb-3 text-rose-600 flex items-center gap-3">
                    <Code /> Purpose-Driven Curiosity
                  </h3>
                  <p className="text-gray-700">I learn and build because curiosity drives me. I enjoy the learning process itself and believe that meaningful, purpose-driven work naturally leads to growth and innovation.I see learning as a way to create positive impact. When work is done with intention, it not only builds skills but also uplifts others — and somewhere along the journey, it helps you discover yourself too.</p>
                </div>
                
                <div className="bg-white/80 p-6 rounded-xl border-l-4 border-purple-500">
                  <h3 className="text-2xl font-bold mb-3 text-purple-600 flex items-center gap-3">
                    <Star /> Quality Over Quantity
                  </h3>
                  <p className="text-gray-700">I focus on deep understanding rather than surface-level knowledge. Whether it's mastering data structures, design patterns, or system architecture, I prioritize building strong fundamentals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Education</h2>
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-pink-600">B.Tech CSE</h3>
                    <p className="text-xl text-gray-700 mb-2 font-semibold">with Specialization in Data Science</p>
                    <p className="text-lg text-gray-600 mb-4">University of Petroleum and Energy Studies, Dehradun, Uttarakhand</p>
                    <p className="text-gray-600 font-semibold">July 2023 – July 2027 | CGPA: 8.0/10</p>
                  </div>
                  {/* <div className="text-6xl">🎓</div> */}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-700 mb-3">Key Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'DBMS', 'COA','DAA','Operating Systems', 'Computer Networks', 'Software Engineering'].map((course, idx) => (
                      <span key={idx} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border-l-4 border-rose-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-rose-600">Senior Secondary (12th)</h3>
                    <p className="text-xl text-gray-700 mb-2 font-semibold"></p>
                    <p className="text-lg text-gray-600 mb-4">The Vivekanand School , Narela, Delhi</p>
                    <p className="text-gray-600 font-semibold"> Percentage: 71.4%</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-rose-600">Secondary (10th)</h3>
                    <p className="text-xl text-gray-700 mb-2 font-semibold"></p>
                    <p className="text-lg text-gray-600 mb-4">Springfields Public School, Yamuna Nagar, Haryana</p>
                    <p className="text-gray-600 font-semibold"> Percentage: 93.3%</p>
                  </div>
                  {/* <div className="text-6xl">📚</div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Technical Skills</h2>
            
            <div className="space-y-8">
              {/* Programming Languages */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                  <Code size={28} /> Languages & Core
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'Python', 'Java', 'SQL'].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-pink-500 to-rose-500 px-5 py-2.5 rounded-full shadow-lg text-white font-semibold transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-pop-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                  <Code size={28} /> Data Science & AI
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['GenAI', 'LLMs', 'Deep Learning', 'Machine Learning','Pandas','NumPy','Matplotlib','Seaborn'].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-pink-500 to-rose-500 px-5 py-2.5 rounded-full shadow-lg text-white font-semibold transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-pop-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                  <Code size={28} /> Databases
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['MongoDB','MySQL','PostgreSQL'].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-pink-500 to-rose-500 px-5 py-2.5 rounded-full shadow-lg text-white font-semibold transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-pop-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
                  <BookOpen size={28} /> Web Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS', 'HTML5','CSS3','Bootstrap', 'EJS'].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-purple-500 to-pink-500 px-5 py-2.5 rounded-full shadow-lg text-white font-semibold transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-pop-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-600 flex items-center gap-2">
                  <Briefcase size={28} /> Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'GitHub','Bash','PowerBI','Tableau','Advanced Excel', 'Docker', 'Latex', 'VS Code', 'Linux'].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-br from-purple-500 to-pink-500 px-5 py-2.5 rounded-full shadow-lg text-white font-semibold transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-pop-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-pink-600 flex items-center gap-2">
                  <Star size={28} /> Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Leadership','Public Speaking','Problem Solving','Creativity','Critical Thinking','Analytical Mindset','Time Management','Social Impact Mindset','Presentation Skills','Logical Reasoning','Adaptability','Ownership Mindset','Clear Communication','Attention to Detail','Team Collaboration','Curiosity','Continous Learner','Stage Presence','Decision Making','Resilience','Growth Mindset','Storytelling','Confidence','Self Motivation','Management Skills','Perfection Oriented'].map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border-2 border-pink-500 px-5 py-2.5 rounded-full shadow-lg font-semibold text-gray-800 transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 animate-pop-in"
                      style={{ animationDelay: `${idx * 0.08}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Crime Against Women',
                  desc: 'Behind every statistic is an unheard voice. A data-driven Power BI analysis uncovering national, state and district-level patterns of crimes against women in India. This project highlights hotspots, emerging trends and structural vulnerabilities . The goal is not just visualization but accountability, awareness and data-informed action.',
                  tech: ['Power BI Desktop ','Power Query ','DAX','Latex','Data Analysis','Analytical Storytelling','VS Code','Canva','Microsoft PowerPoint'],
                  link: 'https://github.com/shaguntalwar17/crimes-against-women-india-powerbi',
                  demo: 'https://yourproject.com',
                  highlights: ['End-to-End Crime Data Analysis', 'Technology for Social Impact & Women Safety', 'Visual Storytelling']
                },
                { 
                  title: 'Yamuna Canal Rejuvenation', 
                  desc: 'Rivers in India are regarded as life-givers, sustaining communities and ecosystems. This Power BI project analyzes the Yamuna Canal’s water quality using CPCB data. By studying key indicators such as DO, BOD, and Total Coliform, it identifies pollution hotspots and supports evidence-based rejuvenation and responsible environmental stewardship.',
                  tech: ['Power BI Desktop ','Power Query ','DAX','Latex','Environmental Data Analytics','VS Code','Canva'],
                  link: 'https://github.com/shaguntalwar17/yamuna-canal-rejuvenation-powerbi',
                  demo: 'https://yourproject2.com',
                  highlights: ['Environmental Analytics', 'Water Quality Assessment', 'Pollution Hotspot Detection','Interactive Dashboards','Actionable Insights','Sustainability-Focused Analysis']
                },
                { 
                  title: 'Global Military Power Analysis', 
                  desc: 'A comparative Power BI analysis of global military power, examining manpower strength, defense budgets, air and naval capabilities and strategic resources. This project transforms complex defense data into clear visual insights to understand global power distribution, capability gaps and strategic dominance across regions.',
                  tech: ['Power BI Desktop ','Power Query ','DAX','Latex','Comparative Data Analysis','VS Code'],
                  link: 'https://github.com/shaguntalwar17/global-military-power-analysis-powerbi',
                  demo: 'https://yourproject3.com',
                  highlights: ['Global Defense Intelligence', 'Strategic Readiness Assessment', 'Military Strength Benchmarking','Data-Backed Geopolitical Insights']
                },
                { 
                  title: 'Personal Portfolio Website', 
                  desc: 'Designed and developed a responsive personal portfolio website using React and Tailwind CSS to showcase projects, skills and achievements. Implemented smooth navigation, dynamic UI components and deployed the application for public access.',
                  tech: ['React', 'JavaScript', 'TailwindCSS', 'GitHub','Vercel'],
                  link: 'https://github.com/yourusername/project4',
                  demo: 'https://yourproject4.com',
                  highlights: ['responsive personal portfolio', 'component-based architecture', 'Vercel with GitHub CI/CD']
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white text-6xl group-hover:scale-110 transition-all duration-300">
                    🚀
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-pink-600">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.desc}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>✓ {highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Github size={18} /> Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border-2 border-pink-500 text-pink-600 px-4 py-2 rounded-lg font-semibold text-center hover:bg-pink-50 transition-all flex items-center justify-center gap-2">
                        <ExternalLink size={18} /> Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="https://github.com/shaguntalwar17" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Github size={24} />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Professional Experience</h2>
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-l-4 border-pink-500">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-pink-600">Graduate Engineering Trainee</h3>
                    <p className="text-xl text-gray-700 mb-2 font-semibold">TIAA Deals</p>
                    <p className="text-gray-600 font-medium">June 2025 – July 2025 | On-Site</p>
                  </div>
                  <Briefcase className="text-pink-600" size={48} />
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>•  Developed Python scripts using Pandas to automate the cleaning and formatting of weekly deal datasets, reducing
manual data entry time by 40%</li>
                  <li>• Analyzed customer engagement metrics and deal success rates using SQL and Advanced Excel, providing actionable
insights to the marketing team.</li>
                  <li>• Assisted in designing dynamic dashboards to track Key Performance Indicators (KPIs) like daily traffic and conversion
rates, improving data visibility for stakeholders.</li>
                  {/* <li>• Implemented RESTful APIs and integrated third-party services</li>
                  <li>• Conducted code reviews and maintained documentation</li> */}
                </ul>
                {/* <div className="mt-4 flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Git', 'Agile'].map((tech, i) => (
                    <span key={i} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech} */}
                    {/* </span>
                  ))} */}
                {/* </div> */}
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-l-4 border-rose-500">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-rose-600">Machine Learning Engineer</h3>
                    <p className="text-xl text-gray-700 mb-2 font-semibold">IBM Summer Internship</p>
                    <p className="text-gray-600 font-medium"> Feb 2025 – May 2025</p>
                  </div>
                  <Briefcase className="text-pink-600" size={48} />
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assisted the team in cleaning and preprocessing raw datasets using Pandas and NumPy to prepare them for
model training.</li>
                  <li>• Collaborated in testing machine learning models (Regression/Classification) and documented performance metrics
like Accuracy and Precision.</li>
                  <li>• Performed basic EDA on sample datasets to identify trends and visualized data distributions using Matplotlib.</li>
                  <li>• Created technical documentation for code modules, helping streamline the knowledge transfer process for new
interns.</li>
                </ul>
                {/* <div className="mt-4 flex flex-wrap gap-2">
                  {['Leadership', 'Teaching', 'Project Management', 'Web Development'].map((skill, i) => (
                    <span key={i} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 border-l-4 border-purple-500">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4"> */}
                  {/* <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 text-purple-600">Open Source Contributor</h3>
                    <p className="text-xl text-gray-700 mb-2 font-semibold">Various Projects on GitHub</p>
                    <p className="text-gray-600 font-medium">2022 - Present</p>
                  </div> */}
                  {/* <Github className="text-purple-600" size={48} /> */}
                </div>
                {/* <ul className="space-y-2 text-gray-700">
                  <li>• Contributed to 10+ open source projects with 50+ merged PRs</li>
                  <li>• Fixed bugs and added features to popular libraries</li>
                  <li>• Active participant in Hacktoberfest 2023</li>
                  <li>• Maintained personal open source projects with 200+ stars</li>
                </ul> */}
                {/* <div className="mt-4 flex flex-wrap gap-2">
                  {['Open Source', 'Git', 'Collaboration', 'Code Review'].map((skill, i) => (
                    <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div> */}
              {/* </div>
            </div> */}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Achievements & Certifications</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Miss Sparkle – Freshers UPES', org: 'Winner', color: 'yellow' },
                { title: 'LeetCode 500+ Problems', org: 'LeetCode Achiever', color: 'orange' },
                { title: '1st Position – Samvad ∼ Abhivyakti 4.0', org: 'NSS, UPES', color: 'blue' },
                { title: 'Hackathon 4.0 Participant', org: 'UPES Cloud Security Alliance', color: 'green' },
                { title: 'Best Performer – Solo Dance', org: 'HYPERVISION, UPES', color: 'amber' },
                { title: 'Runner-Up – UURJA ’23', org: 'Inter-University Competition', color: 'green' }
                
              ].map((achievement, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-50 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300`}>
                  <div className="text-6xl mb-4">{achievement.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-700 font-medium">{achievement.org}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold mb-8 text-center text-pink-600">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Data Science Professional', platform: 'Oracle', year: '2025', link: '#' },
                  { name: 'Generative AI Professional', platform: 'Oracle', year: '2025', link: '#' },
                  { name: 'Oracle Data Platform', platform: 'Oracle', year: '2025', link: '#' },
                  { name: 'AI Foundations Associate', platform: 'Oracle', year: '2025', link: '#' }
                ].map((cert, idx) => (
                  <a 
                    key={idx} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl hover:shadow-lg transition-all group border-2 border-pink-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Award className="text-pink-600 flex-shrink-0" size={32} />
                      <ExternalLink className="text-gray-400 group-hover:text-pink-600 transition-colors" size={20} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.platform} • {cert.year}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        

        {/* Contact/Goodbye Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* <div className="text-8xl mb-8 animate-bounce">🚀</div> */}
            <h2 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Let's Build Something Amazing!</h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              If my work doesn’t create change, I’m not done yet. Thank you for taking the time to explore my portfolio. I'm actively seeking opportunities where I can contribute, learn and grow. If you're looking for a passionate developer who brings both technical expertise and creative problem-solving to the table, let's connect!
            </p>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-pink-600">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Mail className="text-pink-600" size={24} />
                  <a href="mailto:your.email@example.com" className="hover:text-pink-600 transition-colors font-medium">
                    mailto:shaguntalwar1707@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Linkedin className="text-blue-600" size={24} />
                  <a href="https://linkedin.com/in/shagun-talwar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-medium">
                    linkedin.com/in/shagun-talwar
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Github className="text-gray-800" size={24} />
                  <a href="https://github.com/shaguntalwar17" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors font-medium">
                    github.com/shaguntalwar17
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mb-8">
              <Heart className="text-pink-500 animate-pulse" size={48} />
              <Heart className="text-rose-500 animate-pulse animation-delay-200" size={48} />
              <Heart className="text-pink-500 animate-pulse animation-delay-400" size={48} />
            </div>
            
            <p className="text-lg text-gray-600 italic">
              "The best way to predict the future is to invent it." - Alan Kay
            </p>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes popIn {
          0% { 
            opacity: 0; 
            transform: scale(0.5) rotate(-10deg); 
          }
          60% { 
            opacity: 1; 
            transform: scale(1.1) rotate(5deg); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
        }
        .animate-pop-in {
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}