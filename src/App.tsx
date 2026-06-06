import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, Briefcase, 
  Menu, X, Target, Star, CheckCircle2, ChevronDown, Sparkles, ShieldCheck
} from 'lucide-react';

const profileData = {
  name: "Yousef Mohammed",
  title: "مساعد افتراضي",
  contact: {
    phone: "+201090757194",
    email: "ayattahdia@gmail.com",
    address: "مصر"
  },
  about: "أنا مساعد افتراضي متعدد المهام، أمتلك مهارات تنظيم وإدارة الأعمال اليومية بكفاءة. أستطيع تنسيق المواعيد وإدارة الجداول الزمنية، حجز الاجتماعات والمواعيد، متابعة البريد الإلكتروني، إدخال البيانات، إعداد التقارير، والتواصل مع العملاء باحترافية. كما أجيد استخدام Canva لتصميم المحتوى البصري والعروض التقديمية والمنشورات التسويقية. أحرص على الدقة في العمل، حسن التنظيم، سرعة الإنجاز، وتقديم الدعم الإداري الذي يساعد على توفير الوقت وزيادة الإنتاجية.",
  experience: [
    {
      title: "مساعد إداري",
      company: "شركة Infinity Free",
      period: "",
      duties: [
        "تقديم الدعم الإداري وتنظيم المهام اليومية.",
        "متابعة الأعمال وإدارة المواعيد والجداول الزمنية.",
        "المساعدة في تنسيق البيانات وإعداد التقارير."
      ]
    },
    {
      title: "مساعد افتراضي",
      company: "شركة STC",
      period: "",
      duties: [
        "تقديم خدمات المساعدة الافتراضية ودعم العملاء.",
        "تنظيم الاجتماعات ومتابعة المراسلات.",
        "إدارة المهام الإدارية وضمان تنفيذها في الوقت المحدد."
      ]
    },
    {
      title: "مساعد إداري",
      company: "شركة وسيط",
      period: "",
      duties: [
        "إدارة وتنسيق المواعيد والمهام اليومية.",
        "متابعة العملاء وتقديم الدعم الإداري.",
        "المساعدة في تنظيم البيانات وإعداد المستندات اللازمة للعمل."
      ]
    }
  ],
  expertiseText: "خبرة في تقديم خدمات المساعدة الافتراضية وإدارة المهام اليومية، بما في ذلك تنظيم الجداول والمواعيد، حجز الاجتماعات، متابعة البريد الإلكتروني، إدخال البيانات، وإعداد التقارير. أجيد استخدام Canva لتصميم المنشورات التسويقية والعروض التقديمية والمحتوى البصري لمواقع التواصل الاجتماعي. كما أمتلك مهارات جيدة في التواصل مع العملاء، إدارة الوقت، وتنفيذ المهام بدقة واحترافية مع الالتزام بالمواعيد المحددة.",
  tasks: [
    "إدارة وتنظيم المواعيد والجداول الزمنية.",
    "حجز الاجتماعات والمواعيد ومتابعتها.",
    "إدارة البريد الإلكتروني والرد على الرسائل.",
    "إدخال البيانات وتنظيم الملفات والمستندات.",
    "إعداد العروض التقديمية باستخدام Canva.",
    "تصميم منشورات السوشيال ميديا والبنرات الإعلانية.",
    "متابعة المهام اليومية والتذكير بالمواعيد المهمة.",
    "البحث وجمع المعلومات من الإنترنت.",
    "إعداد التقارير وتنسيق المستندات.",
    "تقديم الدعم الإداري وخدمة العملاء عن بُعد.",
    "تنسيق وتنظيم الأعمال اليومية لزيادة الإنتاجية.",
    "تنفيذ المهام المطلوبة بدقة والالتزام بالمواعيد النهائية."
  ],
  languages: [
    "العربية: إجادة تامة (تحدثًا وكتابةً وقراءةً)",
    "الإنجليزية: إجادة جيدة جدًا (تحدثًا وكتابةً وقراءةً)"
  ],
  certificates: [
    "https://i.ibb.co/gMbVCyTB/image.png",
    "https://i.ibb.co/XfH6MHGL/image.jpg",
    "https://i.ibb.co/9kH6Vdp8/image.jpg",
    "https://i.ibb.co/qMtz4sn5/image.jpg",
    "https://i.ibb.co/Mqqqq9X/image.jpg",
    "https://i.ibb.co/Mx4rZtdN/image.jpg"
  ]
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'نبذة', href: '#about' },
    { name: 'الخبرات', href: '#experience' },
    { name: 'المهام', href: '#tasks' },
    { name: 'أعمالي', href: '#certificates' },
    { name: 'تواصل معي', href: '#contact' },
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="font-sans text-slate-300 bg-slate-950 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 pb-10" dir="rtl">
      
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <img 
                src="https://i.ibb.co/8nSZcwrm/1000185701.jpg" 
                onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=Yousef+Mohammed&background=06b6d4&color=fff&size=100'} 
                alt="يوسف محمد" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-sans tracking-wider">Yousef</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full font-medium transition-all shadow-lg shadow-cyan-500/25 border border-cyan-400/20">
              وظفني الآن
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col px-6 py-4 gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-300 font-medium py-3 border-b border-slate-800/50 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpVariant}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium mb-10 backdrop-blur-sm z-10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          متاح لفرص عمل جديدة
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mb-8 z-10"
        >
          <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.2)] relative z-10 bg-slate-900">
            <img 
              src="https://i.ibb.co/8nSZcwrm/1000185701.jpg" 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith('.jpg')) {
                  target.src = 'https://i.ibb.co/8nSZcwrm/1000185701.png';
                } else {
                  target.src = 'https://ui-avatars.com/api/?name=Yousef+Mohammed&background=06b6d4&color=fff&size=300';
                }
              }}
              alt="Yousef Mohammed"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(6,182,212,0.4)] pointer-events-none z-0"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 z-10"
        >
          مرحباً، أنا <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500 font-sans tracking-wide">{profileData.name}</span>
          <br className="hidden md:block"/>
          <span className="text-3xl lg:text-5xl text-slate-400 font-bold mt-4 block">{profileData.title}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed z-10"
        >
          {profileData.about}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 z-10"
        >
          <a href="#tasks" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 border border-cyan-400/20">
            استكشف المهام
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800/50 text-white border border-slate-700 font-semibold hover:bg-slate-800 transition-all backdrop-blur-sm">
            تواصل معي
          </a>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="absolute bottom-10 z-10 text-slate-500 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900 border-y border-slate-800 relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">نبذة <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">عني</span></h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                {profileData.about}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors group">
                  <div className="text-4xl font-black text-cyan-400 mb-2 flex items-center justify-center h-10 group-hover:scale-110 transition-transform"><CheckCircle2 size={32}/></div>
                  <div className="text-slate-300 font-medium text-center">احترافية ودقة</div>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors group">
                  <div className="text-4xl font-black text-cyan-400 mb-2 flex items-center justify-center h-10 group-hover:scale-110 transition-transform"><Star size={32}/></div>
                  <div className="text-slate-300 font-medium text-center">موثوقية وسرعة</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="bg-slate-800/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden ring-1 ring-white/10 backdrop-blur-md"
            >
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
               
               <div className="relative z-10">
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                   <Target className="text-cyan-400" />
                   اللغات
                 </h3>
                 <ul className="space-y-4">
                   {profileData.languages.map((lang, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors">
                        <CheckCircle2 size={20} className="text-cyan-400 shrink-0" />
                        <span className="font-medium">{lang}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-slate-950 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">الخبرات <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">العملية</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="space-y-12">
            {profileData.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariant}
                className="relative pl-0 md:pl-0 md:pr-12 group"
              >
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[2px] bg-slate-800 group-last:bg-transparent -mr-[1px] mt-10"></div>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute top-1 right-0 w-5 h-5 -mr-2.5 rounded-full bg-slate-950 border-2 border-cyan-500 items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl p-6 lg:p-8 border border-slate-800 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all relative overflow-hidden backdrop-blur-sm group-hover:bg-slate-800/50">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-medium">
                          <Briefcase size={18} />
                          {exp.company}
                        </div>
                      </div>
                      {exp.period && (
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-bold text-sm shadow-inner">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3 relative z-10">
                      {exp.duties.map((duty, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                          <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                          <span className="leading-relaxed">{duty}</span>
                        </li>
                      ))}
                    </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks Section */}
      <section id="tasks" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">المهام <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">والمهارات</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 text-lg leading-relaxed">{profileData.expertiseText}</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {profileData.tasks.map((task, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="bg-slate-950/50 p-6 rounded-2xl shadow-sm border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex items-start gap-4 group backdrop-blur-sm"
              >
                <div className="mt-1 w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">{task.replace("• ", "")}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Gallery */}
      <section id="certificates" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">الأعمال <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">والشهادات</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {profileData.certificates.map((certUrl, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUpVariant}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800 relative">
                    <img 
                      src={certUrl} 
                      alt={`شهادة معتمدة ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="py-24 bg-black border-t border-slate-800 text-white select-text relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               variants={fadeUpVariant}
            >
              <h2 className="text-4xl font-bold mb-6">لنبنِ شيئاً <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500">رائعاً معاً!</span></h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                أبحث حالياً عن فرص جديدة لتقديم أفضل ما لدي من خبرات في مجال المساعدة الافتراضية. لا تتردد في التواصل معي لأي استفسارات أو عروض عمل.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Mail size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">البريد الإلكتروني</p>
                    <p className="font-semibold text-lg lg:text-xl text-slate-300 group-hover:text-white transition-colors">{profileData.contact.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${profileData.contact.phone.replace(/\s+/g,'')}`} className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    <Phone size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">رقم الهاتف</p>
                    <p dir="ltr" className="font-semibold text-lg lg:text-xl text-slate-300 group-hover:text-white transition-colors text-right">{profileData.contact.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">الموقع</p>
                    <p className="font-semibold text-lg lg:text-xl text-slate-300">{profileData.contact.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               variants={fadeUpVariant}
               className="bg-slate-900/50 rounded-3xl p-8 lg:p-12 border border-slate-800 text-center flex flex-col items-center justify-center h-full relative overflow-hidden group hover:border-cyan-500/20 transition-colors backdrop-blur-sm"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-500/20 transition-colors"></div>
               
               <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-full flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-cyan-500/30 transition-colors">
                 <ShieldCheck className="text-cyan-400 w-10 h-10" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white relative z-10">جاهز للبدء فوراً</h3>
               <p className="text-slate-400 mb-8 max-w-sm relative z-10 leading-relaxed">
                 متحمس جداً لمناقشة كيف يمكنني إضافة قيمة لفريقكم في إدارة المهام وتنظيم الأعمال بفعالية.
               </p>
               <a href={`mailto:${profileData.contact.email}`} className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-200 rounded-full font-bold transition-all w-full md:w-auto shadow-lg relative z-10">
                 أرسل رسالة الآن
               </a>
            </motion.div>
          </div>

          <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 flex flex-col items-center gap-2 relative z-10">
            <span className="text-2xl font-bold tracking-wider text-slate-600 font-sans">Yousef Mohammed</span>
            <p>© {new Date().getFullYear()} Yousef Mohammed. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
