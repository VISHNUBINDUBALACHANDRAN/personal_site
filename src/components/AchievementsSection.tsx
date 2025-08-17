const AchievementsSection = () => {
  const achievements = [
    { number: "4", title: "Patents", isText: false },
    { number: "4", title: "Trade Secrets", isText: false },
    { number: "Silver", title: "Chess Championship", isText: true }
  ];

  return (
    <section className="py-40 relative overflow-hidden min-h-screen flex items-center">
      {/* Ultra-sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-luxury/4 via-platinum/2 to-background"></div>
      
      {/* Premium floating elements removed */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 leading-tight gradient-luxury-glass">
            Professional <span className="gradient-luxury-glass">Excellence</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-luxury to-transparent mx-auto"></div>
          {/* Description text removed per request */}
          {/* <p className="text-xl gradient-luxury-glass opacity-70 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Recognition and achievements that define innovation leadership
          </p> */}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                {/* Ultra-premium achievement card */}
                <div className="glass-card-premium h-[320px] flex flex-col items-center justify-center text-center relative overflow-hidden rounded-[3rem] hover-glow transition-ultra">
                  
                  {/* Multi-dimensional glow effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury/25 via-platinum/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-40"></div>
                  
                  {/* Premium accent dots */}
                  {/* Removed animated dots */}
                  
                  {/* Content */}
                  <div className="relative z-10 px-8 py-12 flex flex-col items-center justify-between h-full">
                    {/* Ultra-elegant number/text display */}
                    <div className="flex-1 flex items-center justify-center min-h-[120px]">
                      <div className={`text-7xl md:text-8xl font-playfair font-bold gradient-luxury-glass tracking-tight leading-none ${achievement.isText ? 'text-6xl md:text-7xl' : ''}`}>
                        {achievement.number}
                      </div>
                    </div>
                    
                    {/* Refined divider */}
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-luxury to-transparent mx-auto"></div>
                    
                    {/* Title with premium styling */}
                    <div className="flex-1 flex items-center justify-center min-h-[80px]">
                      <h3 className="text-2xl font-playfair font-semibold gradient-luxury-glass tracking-wide">
                        {achievement.title}
                      </h3>
                    </div>
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