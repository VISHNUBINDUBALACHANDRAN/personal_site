import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Award, Trophy, Brain } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-luxury/5"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-luxury/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Ultra-luxury Profile Image */}
          <div className="relative inline-block mb-20">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-diamond ring-4 ring-luxury/30 relative group">
              <img src={profileImage} alt="Vishnu Bindu Balachandran" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury/15 via-platinum/5 to-transparent"></div>
              <div className="absolute inset-0 ring-2 ring-inset ring-diamond/20 rounded-full"></div>
            </div>
            {/* Floating glow effect */}
            <div className="absolute inset-0 bg-luxury/20 rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Ultra-premium name styling */}
          <h1 className="text-7xl md:text-9xl font-playfair font-bold mb-12 leading-tight">
            <span className="glass-text">VISHNU BINDU</span><br />
            <span className="gradient-diamond-glass">BALACHANDRAN</span>
          </h1>
          
          {/* Ultra-premium credentials */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card-premium px-12 py-8 rounded-[2rem] relative overflow-hidden hover-glow transition-ultra">
              {/* Background shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-luxury/10 via-platinum/8 to-diamond/6 opacity-50"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="text-2xl md:text-3xl font-playfair font-bold gradient-platinum-glass tracking-wide">
                  AI Research Scientist
                </div>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-luxury to-transparent mx-auto opacity-60"></div>
                <div className="text-xl md:text-2xl font-playfair font-semibold gradient-luxury-glass tracking-wide">
                  4 Patents • 4 Trade Secrets
                </div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-luxury/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-platinum/40 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-diamond/40 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>

          

          


          {/* Social Links */}
          
        </div>
      </div>
    </section>;
};
export default HeroSection;