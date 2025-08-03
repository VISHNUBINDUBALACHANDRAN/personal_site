const ExperienceSection = () => {
  const experiences = [
    {
      company: "Xerox",
      position: "AI Engineer",
      duration: "Nov 2024 - Present"
    },
    {
      company: "Collins Aerospace",
      position: "Artificial Intelligence Researcher",
      duration: "Mar 2023 - Nov 2024"
    },
    {
      company: "UST",
      position: "AI Engineer",
      duration: "2022 - 2023"
    },
    {
      company: "Broadridge Financial Solutions",
      position: "AI Engineer",
      duration: "2021 - 2022"
    }
  ];

  return (
    <section className="py-40 relative overflow-hidden min-h-screen flex items-center">
      {/* Ultra-luxury background orchestration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-luxury/3 via-platinum/2 to-background"></div>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-luxury/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-platinum/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-diamond/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Sophisticated geometric elements */}
      <div className="absolute top-20 left-20 w-48 h-48 border-2 border-luxury/20 rounded-[4rem] rotate-45 opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-36 h-36 border border-platinum/25 rounded-[3rem] -rotate-12 opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-diamond/30 rounded-2xl rotate-30 opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-primary/20 rounded-[2.5rem] -rotate-6 opacity-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 leading-tight glass-text">
            Distinguished <span className="gradient-diamond-glass">Career</span>
          </h2>
          <div className="w-40 h-1 bg-ultra-luxury mx-auto opacity-70 rounded-full"></div>
          <p className="text-xl glass-text opacity-70 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            A journey of innovation and excellence across industry-leading organizations
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Ultra-premium experience card */}
              <div className="glass-card-premium p-20 text-center relative overflow-hidden rounded-[4rem] hover-lift transition-ultra">
                
                {/* Multi-layer background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury/15 via-platinum/10 to-diamond/8 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/8 to-transparent opacity-50"></div>
                
                {/* Floating accent elements */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-luxury/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-platinum/40 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/3 left-12 w-1.5 h-1.5 bg-diamond/30 rounded-full animate-pulse delay-600"></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-10">
                  
                  {/* Company Name - Ultra-elegant */}
                  <div className="mb-8">
                    <h3 className="text-5xl md:text-6xl font-playfair font-bold gradient-platinum-glass tracking-tight leading-none">
                      {exp.company}
                    </h3>
                  </div>
                  
                  {/* Elegant divider */}
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-luxury via-platinum to-transparent mx-auto opacity-60"></div>
                  
                  {/* Position - Refined styling */}
                  <h4 className="text-3xl md:text-4xl font-playfair font-semibold glass-text tracking-wide leading-relaxed">
                    {exp.position}
                  </h4>
                  
                  {/* Duration - Sophisticated */}
                  <div className="text-xl glass-text opacity-80 font-medium tracking-wider">
                    {exp.duration}
                  </div>
                </div>
                
                {/* Premium border glow */}
                <div className="absolute inset-0 rounded-[4rem] bg-gradient-to-r from-luxury/25 via-platinum/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;