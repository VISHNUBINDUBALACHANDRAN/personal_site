import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Award, Trophy, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background gradient only */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-luxury/5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ultra-premium name styling */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-playfair font-bold mb-8 lg:mb-16 leading-tight">
            <span className="gradient-luxury-glass">VISHNU BINDU</span><br />
            <span className="gradient-luxury-glass">BALACHANDRAN</span>
          </h1>
          
          {/* Ultra-premium credentials */}
          <div className="mx-auto mt-45 mb-12">
            <div className="group relative inline-block">
              <div className="glass-card-premium w-[370px] h-[75px] px-16 rounded-none relative overflow-hidden hover-glow transition-ultra flex items-center justify-center">
                {/* Multi-dimensional glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury/25 via-platinum/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-40"></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl font-playfair font-bold gradient-luxury-glass tracking-wider whitespace-nowrap">
                    AI Research Scientist
                  </div>
                </div>
                {/* Premium border enhancement */}
                <div className="absolute inset-0 bg-gradient-to-r from-luxury/30 via-platinum/20 to-diamond/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;