import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, Briefcase, GraduationCap, 
  MessageSquare, Headphones, Award, Star, 
  Menu, X, Target, Users, Laptop, Heart, ChevronDown, CheckCircle2
} from 'lucide-react';

const profileData = {
  name: "يوسف محمد",
  title: "خبير خدمة العملاء والدعم الفني",
  contact: {
    phone: "+201090757194",
    email: "ayattahdia@gmail.com",
    address: "الفيوم، مصر - شارع قطر"
  },
  about: "متخصص محترف في خدمة العملاء بخبرة تتجاوز 5 سنوات في بناء علاقات إيجابية مع العملاء، وحل المشكلات بفعالية، وتقديم تجارب استثنائية. أمتلك مهارة عالية في استخدام أنظمة CRM، والتعامل مع ضغوط العمل لضمان تحقيق أعلى مستويات رضا العملاء والولاء للعلامة التجارية.",
  experience: [
    {
      title: "ممثل خدمة عملاء",
      company: "شركة التنمية",
      period: "2022 - 2026",
      duties: [
        "الرد على استفسارات العملاء عبر الهاتف والبريد الإلكتروني بمهنية واحترافية.",
        "تقديم حلول فعالة وفورية لمشاكل العملاء بما يتوافق مع السياسات الداخلية.",
        "تسجيل تفاصيل الشكاوى بدقة وتحليلها لاقتراح مبادرات تحسين مستوى الخدمة."
      ]
    },
    {
      title: "موظف دعم العملاء",
      company: "شركة رسالة",
      period: "2020 - 2022",
      duties: [
        "إدارة ومعالجة شكاوى العملاء المتعلقة بالشحن، المرتجعات، والاستبدال.",
        "التعاون وتنسيق الجهود مع فرق اللوجستيات لضمان توصيل الطلبات في أوقاتها المحددة.",
        "تحليل بيانات وتوجهات العملاء لتحديد المشكلات المتكررة وتقديم استراتيجيات للحل.",
        "إعداد وتقديم تقارير دورية للإدارة حول مؤشرات أداء الخدمة وجودة الدعم الفني."
      ]
    },
    {
      title: "موظف خدمة العملاء",
      company: "شركة التطوير",
      period: "2018 - 2020",
      duties: [
        "التواصل المباشر مع العملاء عبر الهاتف والدردشة الحية لتقديم المساعدة المطلوبة.",
        "تسجيل وتوثيق تفاصيل المحادثات والطلبات في أنظمة إدارة علاقات العملاء (CRM).",
        "معالجة مشكلات الفواتير والخدمات الفنية بسرعة وكفاءة عالية لتقليل وقت الانتظار.",
        "متابعة مدى رضا العملاء بعد تقديم الحلول لضمان استمرارية جودة الخدمة المقدمة."
      ]
    }
  ],
  skills: [
    { name: "حل المشكلات المعقدة", icon: <Target className="w-7 h-7 text-indigo-600 mb-4" /> },
    { name: "التواصل الفعال والإقناع", icon: <MessageSquare className="w-7 h-7 text-indigo-600 mb-4" /> },
    { name: "إجادة أنظمة CRM", icon: <Laptop className="w-7 h-7 text-indigo-600 mb-4" /> },
    { name: "بناء علاقات مع العملاء", icon: <Users className="w-7 h-7 text-indigo-600 mb-4" /> },
    { name: "إدارة الوقت والضغوط", icon: <Star className="w-7 h-7 text-indigo-600 mb-4" /> },
    { name: "الطلاقة (عربي / إنجليزي)", icon: <Headphones className="w-7 h-7 text-indigo-600 mb-4" /> }
  ],
  hobbies: [
    "قراءة الكتب والمقالات",
    "تطوير الذات المستمر",
    "متابعة التطورات التقنية",
    "كتابة المحتوى والمقالات"
  ],
  courses: [
    "دورة خدمة العملاء الاحترافية المتقدمة",
    "دورة فن التعامل مع العملاء وبناء الولاء",
    "شهادة أساسيات التقنية واستخدام الأنظمة (2019-2021)"
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
    { name: 'من أنا', href: '#about' },
    { name: 'مهاراتي', href: '#skills' },
    { name: 'الخبرات', href: '#experience' },
    { name: 'الشهادات', href: '#certificates' },
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
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-indigo-500 selection:text-white pb-10">
      
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tight text-indigo-950 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-600">
              <img 
                src="https://i.ibb.co/8nSZcwrm/1000185701.jpg" 
                onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=يوسف+محمد&background=4f46e5&color=fff&size=100'} 
                alt="يوسف محمد" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span>يوسف</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors shadow-md shadow-indigo-200">
              وظفني الآن
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-700 p-2"
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
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-700 font-medium py-2 border-b border-slate-50"
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
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mb-8"
        >
          <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-indigo-50">
            <img 
              src="https://i.ibb.co/8nSZcwrm/1000185701.jpg" 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith('.jpg')) {
                  target.src = 'https://i.ibb.co/8nSZcwrm/1000185701.png';
                } else {
                  target.src = 'https://ui-avatars.com/api/?name=يوسف+محمد&background=4f46e5&color=fff&size=300';
                }
              }}
              alt="يوسف محمد"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(79,70,229,0.3)] pointer-events-none z-0"></div>
        </motion.div>

        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpVariant}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
          </span>
          متاح لفرص عمل جديدة
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
        >
          مرحباً، أنا <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-600 to-blue-500">يوسف محمد</span>
          <br className="hidden md:block"/>
          <span className="text-3xl lg:text-5xl text-slate-600 font-bold mt-4 block">خبير في إسعاد العملاء.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          أقدم تجارب استثنائية تبني الثقة والولاء. مع أكثر من 5 سنوات من الخبرة، أحول التحديات إلى فرص والشكاوى إلى قصص نجاح للعلامة التجارية.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#experience" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            اكتشف خبراتي
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold hover:bg-slate-50 transition">
            تواصل معي
          </a>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-20 text-slate-400 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">نبذة <span className="text-indigo-600">عني</span></h2>
              <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {profileData.about}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-4xl font-black text-indigo-600 mb-2">+5</div>
                  <div className="text-slate-600 font-medium">سنوات خبرة</div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-4xl font-black text-indigo-600 mb-2">10K+</div>
                  <div className="text-slate-600 font-medium">عميل سعيد</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="bg-indigo-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl -ml-20 -mb-20"></div>
               
               <div className="relative z-10">
                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                   <Target className="text-indigo-600" />
                   الاهتمامات الشخصية
                 </h3>
                 <ul className="space-y-4">
                   {profileData.hobbies.map((hobby, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-slate-700 bg-white/60 p-4 rounded-xl backdrop-blur-sm border border-white">
                        <CheckCircle2 size={20} className="text-indigo-500 shrink-0" />
                        <span className="font-medium">{hobby}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Skills / Core Competencies */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">المهارات <span className="text-indigo-600">والكفاءات</span></h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">أدواتي الأساسية لتقديم دعـم فني متميز ومستوى خدمة يرتقي لتوقعات العملاء.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {profileData.skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-100 transition-all group"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-600">
                  {React.cloneElement(skill.icon, { className: "w-7 h-7 mb-0" })}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">رحلتي <span className="text-indigo-600">المهنية</span></h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-auto mb-6"></div>
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
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-0.5 bg-slate-200 group-last:bg-transparent -mr-[1px] mt-10"></div>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute top-1 right-0 w-5 h-5 -mr-2.5 rounded-full bg-indigo-100 border-2 border-indigo-600 items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all relative">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-slate-600 font-medium">
                          <Briefcase size={18} className="text-indigo-500" />
                          {exp.company}
                        </div>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.duties.map((duty, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600">
                          <span className="mt-2 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
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

      {/* Education & Courses */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">التطوير <span className="text-indigo-600">والدورات</span></h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-auto mb-6"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
             {profileData.courses.map((course, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUpVariant}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-snug">{course}</h4>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Gallery */}
      <section id="certificates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">الشهادات <span className="text-indigo-600">المعتمدة</span></h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-auto mb-6"></div>
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
                  className="group relative bg-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={certUrl} 
                      alt={`شهادة معتمدة ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300 pointer-events-none"></div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="py-24 bg-slate-900 text-white select-text">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               variants={fadeUpVariant}
            >
              <h2 className="text-4xl font-bold mb-6">لنبنِ شيئاً <span className="text-indigo-400">رائعاً معاً!</span></h2>
              <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
                أبحث حالياً عن فرص جديدة لتقديم أفضل ما لدي من خبرات في مجال خدمة العملاء. لا تتردد في التواصل معي لأي استفسارات أو عروض عمل.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Mail size={24} className="text-indigo-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">البريد الإلكتروني</p>
                    <p className="font-medium text-lg lg:text-xl group-hover:text-indigo-300 transition-colors">{profileData.contact.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${profileData.contact.phone.replace(/\s+/g,'')}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Phone size={24} className="text-indigo-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">رقم الهاتف</p>
                    <p dir="ltr" className="font-medium text-lg lg:text-xl text-right group-hover:text-indigo-300 transition-colors">{profileData.contact.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">الموقع</p>
                    <p className="font-medium text-lg lg:text-xl">{profileData.contact.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
               variants={fadeUpVariant}
               className="bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10 text-center flex flex-col items-center justify-center h-full"
            >
               <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6">
                 <Headphones size={48} className="text-indigo-400" />
               </div>
               <h3 className="text-2xl font-bold mb-4">جاهز للبدء فوراً</h3>
               <p className="text-slate-300 mb-8 max-w-sm">
                 متحمس جداً لمناقشة كيف يمكنني إضافة قيمة لفريق خدمة العملاء في شركتكم الموقرة.
               </p>
               <a href={`mailto:${profileData.contact.email}`} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all w-full md:w-auto shadow-lg shadow-indigo-500/20">
                 أرسل رسالة الآن
               </a>
            </motion.div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 text-center text-slate-500">
            <p>© {new Date().getFullYear()} يوسف محمد. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
