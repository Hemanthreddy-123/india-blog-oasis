
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleStartReading = () => {
    console.log("Navigating to articles section");
    document.getElementById("featured-posts")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinWriter = () => {
    console.log("Opening writer registration");
    alert("Join as Writer - Start your writing journey with us!");
  };

  const handleWatchDemo = () => {
    console.log("Playing demo video");
    alert("Demo Video - Watch how our platform works!");
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white/10"></path>
          </svg>
          <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 30 0 0 1200 0 1200 120z" className="fill-white/20"></path>
          </svg>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-slate-300/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-slate-400/30 rounded-full blur-lg animate-bounce" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-lg font-semibold shadow-lg">
            <Sparkles className="h-5 w-5 mr-3 animate-pulse" />
            Professional Digital Magazine
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Discover Amazing
          <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-slate-300 bg-clip-text text-transparent">
            Digital Stories
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed">
          From cutting-edge technology to inspiring stories, explore the complete spectrum of 
          innovation, culture, and lifestyle through expert insights and compelling narratives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={handleStartReading}
            className="bg-white text-slate-800 hover:bg-slate-100 px-10 py-5 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Reading
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleJoinWriter}
            className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-10 py-5 text-xl font-bold shadow-2xl backdrop-blur-sm"
          >
            Join as Writer
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            onClick={handleWatchDemo}
            className="text-white hover:bg-white/20 px-8 py-5 text-xl"
          >
            <Play className="mr-3 h-6 w-6" />
            Watch Demo
          </Button>
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-blue-300 mr-3" />
              <span className="text-4xl font-bold text-white">250K+</span>
            </div>
            <p className="text-white/90 font-semibold">Active Readers</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="h-8 w-8 text-blue-300 mr-3" />
              <span className="text-4xl font-bold text-white">5,000+</span>
            </div>
            <p className="text-white/90 font-semibold">Articles Published</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-8 w-8 text-blue-300 mr-3" />
              <span className="text-4xl font-bold text-white">4.9</span>
            </div>
            <p className="text-white/90 font-semibold">Reader Rating</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="h-8 w-8 text-blue-300 mr-3" />
              <span className="text-4xl font-bold text-white">100+</span>
            </div>
            <p className="text-white/90 font-semibold">Expert Writers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
