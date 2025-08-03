import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ultra-luxury background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-luxury/4 via-platinum/2 to-background"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-luxury/8 via-platinum/4 to-transparent"></div>
      <div className="absolute top-16 left-16 w-[400px] h-[400px] bg-luxury/12 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-[350px] h-[350px] bg-platinum/8 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-diamond/6 rounded-full blur-3xl animate-pulse delay-1200"></div>
      
      {/* Floating luxury elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-luxury/25 rounded-[1.5rem] rotate-12 opacity-50"></div>
      <div className="absolute bottom-24 left-24 w-16 h-16 border border-platinum/30 rounded-xl -rotate-12 opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 leading-tight glass-text">
            <span className="gradient-diamond-glass">Connect</span>
          </h2>
          <div className="w-28 h-1 bg-ultra-luxury mx-auto opacity-70 rounded-full mb-16"></div>
          <p className="text-xl glass-text opacity-70 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Let's collaborate on the next breakthrough innovation
          </p>
          
          <div className="flex justify-center gap-10">
            <a 
              href="https://www.linkedin.com/in/vishnu-bindu-balachandran-6882811a2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-24 h-24 rounded-[2rem] flex items-center justify-center glass-card-premium border-2 border-luxury/25 hover:border-luxury/50 transition-ultra hover-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-luxury/25 via-platinum/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2rem] blur-xl"></div>
              <Linkedin className="w-12 h-12 text-luxury relative z-10 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-luxury/40 rounded-full animate-pulse"></div>
            </a>
            <a 
              href="mailto:contact@example.com"
              className="group relative w-24 h-24 rounded-[2rem] flex items-center justify-center glass-card-premium border-2 border-platinum/25 hover:border-platinum/50 transition-ultra hover-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-platinum/25 via-luxury/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2rem] blur-xl"></div>
              <Mail className="w-12 h-12 text-platinum relative z-10 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-platinum/40 rounded-full animate-pulse delay-200"></div>
            </a>
            <a 
              href="https://twitter.com/your-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-24 h-24 rounded-[2rem] flex items-center justify-center glass-card-premium border-2 border-diamond/25 hover:border-diamond/50 transition-ultra hover-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-diamond/25 via-platinum/15 to-luxury/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2rem] blur-xl"></div>
              <svg className="w-12 h-12 text-diamond relative z-10 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-diamond/40 rounded-full animate-pulse delay-400"></div>
            </a>
            <a 
              href="https://instagram.com/your-handle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-24 h-24 rounded-[2rem] flex items-center justify-center glass-card-premium border-2 border-primary/25 hover:border-primary/50 transition-ultra hover-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-luxury/15 to-platinum/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[2rem] blur-xl"></div>
              <svg className="w-12 h-12 text-primary relative z-10 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-600"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;