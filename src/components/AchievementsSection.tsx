const AchievementsSection = () => {
  const achievements = [
    { number: "4", title: "Patents" },
    { number: "4", title: "Trade Secrets" },
    { number: "Silver", title: "Chess Championship" }
  ];

  return (
    <section className="py-40 relative overflow-hidden min-h-screen flex items-center">
      {/* Ultra-sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-luxury/4 via-platinum/2 to-background"></div>
      <div className="absolute top-1/5 left-1/5 w-[500px] h-[500px] bg-luxury/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/5 right-1/5 w-[400px] h-[400px] bg-platinum/8 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-diamond/6 rounded-full blur-3xl animate-pulse delay-1500"></div>
      
      {/* Premium floating elements */}
      <div className="absolute top-16 right-16 w-40 h-40 border-2 border-luxury/25 rounded-[3rem] rotate-12 animate-pulse opacity-60"></div>
      <div className="absolute bottom-16 left-16 w-32 h-32 border border-platinum/30 rounded-[2rem] -rotate-12 opacity-50"></div>
      <div className="absolute top-1/3 left-1/3 w-24 h-24 border border-diamond/25 rounded-xl rotate-45 opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 leading-tight glass-text">
            Professional <span className="gradient-diamond-glass">Excellence</span>
          </h2>
          <div className="w-32 h-1 bg-ultra-luxury mx-auto opacity-80 rounded-full"></div>
          <p className="text-xl glass-text opacity-70 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Recognition and achievements that define innovation leadership
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                {/* Ultra-premium achievement card */}
                <div className="glass-card-premium p-16 text-center relative overflow-hidden rounded-[3rem] hover-glow transition-ultra">
                  
                  {/* Multi-dimensional glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/25 via-platinum/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-40"></div>
                  
                  {/* Premium accent dots */}
                  <div className="absolute top-6 right-6 w-2.5 h-2.5 bg-luxury/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-platinum/40 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-diamond/40 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Ultra-elegant number display */}
                    <div className="mb-10">
                      <div className="text-7xl md:text-8xl font-playfair font-bold gradient-platinum-glass tracking-tight leading-none">
                        {achievement.number}
                      </div>
                    </div>
                    
                    {/* Refined divider */}
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-luxury to-transparent mx-auto opacity-60 mb-8"></div>
                    
                    {/* Title with premium styling */}
                    <h3 className="text-2xl font-playfair font-semibold glass-text tracking-wide">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  {/* Premium border enhancement */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-luxury/30 via-platinum/20 to-diamond/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AchievementsSection;