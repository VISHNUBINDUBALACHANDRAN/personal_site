import { Badge } from "@/components/ui/badge";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 border-t border-luxury/20 glass-card-premium backdrop-blur-xl relative overflow-hidden">
      {/* Ultra-luxury footer background */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury/8 via-platinum/4 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-luxury/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-platinum/4 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-6 gradient-diamond-glass tracking-tight">
              Vishnu Bindu Balachandran
            </h3>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-luxury to-transparent mx-auto opacity-60 mb-8"></div>
            <p className="text-muted-foreground max-w-4xl mx-auto text-xl font-light leading-relaxed glass-text opacity-80">
              Far More To Go, Far More To Conquer
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            {/* Premium accent elements */}
            <div className="w-2 h-2 bg-luxury/30 rounded-full animate-pulse"></div>
            <span className="text-xl glass-text opacity-70 font-medium tracking-wide">
              © {new Date().getFullYear()} All rights reserved
            </span>
            <div className="w-2 h-2 bg-platinum/30 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;