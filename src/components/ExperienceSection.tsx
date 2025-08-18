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
      position: "Post-graduate Intern",
      duration: "2021 - 2022"
    }
  ];

  return (
    <section className="py-40 relative overflow-hidden min-h-screen flex items-center">
      {/* Ultra-luxury background orchestration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-luxury/3 via-platinum/2 to-background"></div>
      
      {/* Geometric elements removed */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 leading-tight gradient-luxury-glass">
            <span className="gradient-luxury-glass">Career</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-luxury to-transparent mx-auto"></div>
          {/* Description text removed per request */}
          {/* <p className="text-xl gradient-luxury-glass opacity-70 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            A journey of innovation and excellence across industry-leading organizations
          </p> */}
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative">
              {/* Ultra-premium experience card */}
              <div className="glass-card-premium p-6 sm:p-10 lg:p-20 text-center relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[4rem] hover-lift transition-ultra">
                
                {/* Multi-layer background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury/15 via-platinum/10 to-diamond/8 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/8 to-transparent opacity-50"></div>
                
                {/* Floating accent elements */}
                {/* Removed animated dots */}
                
                {/* Content */}
                <div className="relative z-10 space-y-10">
                  
                  {/* Company Name - Ultra-elegant */}
                  <div className="mb-8">
                    <h3 className="text-5xl md:text-6xl font-playfair font-bold gradient-luxury-glass tracking-tight leading-none">
                      {exp.company}
                    </h3>
                  </div>
                  
                  {/* Elegant divider */}
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-luxury via-platinum to-transparent mx-auto opacity-60"></div>
                  
                  {/* Position - Refined styling */}
                  <h4 className="text-3xl md:text-4xl font-playfair font-semibold gradient-luxury-glass tracking-wide leading-relaxed">
                    {exp.position}
                  </h4>
                  
                  {/* Duration - Sophisticated */}
                  <div className="text-xl gradient-luxury-glass opacity-80 font-medium tracking-wider">
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