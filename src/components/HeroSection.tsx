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
          <div className="mx-auto -mt-100 space-y-4"> {/* Negative margin to move up, adjust the number to move more/less */}
            {/* Box container commented out */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold gradient-luxury-glass tracking-wider whitespace-nowrap">
              AI Research Scientist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;