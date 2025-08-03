import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Atom, Heart, Shield, TrendingUp, Brain, Zap, Microscope, Lock, Calculator } from "lucide-react";
const ExpertiseSection = () => {
  const expertiseAreas = [{
    icon: <Plane className="w-8 h-8" />,
    title: "Aerospace + AI",
    description: "Developing intelligent systems for aerospace applications, combining cutting-edge AI with aviation technology.",
    tags: ["Machine Learning", "Aerospace Engineering", "Autonomous Systems"]
  }, {
    icon: <Microscope className="w-8 h-8" />,
    title: "Advanced Materials Discovery + AI",
    description: "Leveraging AI to accelerate the discovery and development of next-generation materials.",
    tags: ["Material Science", "Deep Learning", "Research"]
  }, {
    icon: <Heart className="w-8 h-8" />,
    title: "Predictive Health Maintenance + AI",
    description: "Creating predictive models for health maintenance using artificial intelligence algorithms.",
    tags: ["Healthcare AI", "Predictive Analytics", "Biomedical"]
  }, {
    icon: <Lock className="w-8 h-8" />,
    title: "Cybersecurity + AI",
    description: "Developing AI-powered security solutions to protect against modern cyber threats.",
    tags: ["Cybersecurity", "Threat Detection", "ML Security"]
  }, {
    icon: <Calculator className="w-8 h-8" />,
    title: "Financial Science + AI",
    description: "Applying artificial intelligence to solve complex problems in financial markets and analysis.",
    tags: ["FinTech", "Algorithmic Trading", "Risk Analysis"]
  }, {
    icon: <Atom className="w-8 h-8" />,
    title: "Quantum Computing",
    description: "Exploring the intersection of quantum computing and artificial intelligence for breakthrough solutions.",
    tags: ["Quantum AI", "Quantum Algorithms", "Research"]
  }];
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Ultra-premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-luxury/4 via-platinum/2 to-background"></div>
      <div className="absolute top-16 left-16 w-[450px] h-[450px] bg-luxury/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-[380px] h-[380px] bg-platinum/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-diamond/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Floating luxury elements */}
      <div className="absolute top-20 right-20 w-28 h-28 border border-luxury/20 rounded-[2rem] rotate-12 opacity-50"></div>
      <div className="absolute bottom-24 left-24 w-20 h-20 border border-platinum/25 rounded-xl -rotate-12 opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-8 leading-tight glass-text">
            Areas of <span className="gradient-diamond-glass">Expertise</span>
          </h2>
          <div className="w-36 h-1 bg-ultra-luxury mx-auto opacity-70 rounded-full"></div>
          <p className="text-xl glass-text opacity-70 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Pioneering innovation across cutting-edge technological frontiers
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group relative">
              <div className="glass-card-premium p-10 relative overflow-hidden rounded-[2.5rem] hover-glow transition-ultra border border-luxury/15">
                {/* Multi-layer background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury/12 via-platinum/8 to-diamond/6 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/6 to-transparent opacity-40"></div>
                
                {/* Premium accent elements */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-luxury/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-platinum/40 rounded-full animate-pulse delay-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-3xl font-playfair font-bold gradient-platinum-glass mb-6 tracking-tight">
                      {area.title}
                    </h3>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-luxury to-transparent opacity-60 mb-6"></div>
                    <p className="glass-text opacity-85 leading-relaxed text-lg font-light">
                      {area.description}
                    </p>
                  </div>
                </div>
                
                {/* Premium border glow */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-luxury/20 via-platinum/15 to-diamond/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExpertiseSection;