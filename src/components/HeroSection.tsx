
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            India's Premier Blog Platform
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Discover India's
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Untold Stories
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          From ancient traditions to modern innovations, explore the rich tapestry of Indian culture, 
          technology, and lifestyle through authentic voices and compelling narratives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Reading
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
            Join as Writer
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-yellow-300 mr-2" />
              <span className="text-3xl font-bold text-white">50K+</span>
            </div>
            <p className="text-white/80">Active Readers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="h-6 w-6 text-yellow-300 mr-2" />
              <span className="text-3xl font-bold text-white">1200+</span>
            </div>
            <p className="text-white/80">Articles Published</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 text-yellow-300 mr-2" />
              <span className="text-3xl font-bold text-white">4.9</span>
            </div>
            <p className="text-white/80">Reader Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
