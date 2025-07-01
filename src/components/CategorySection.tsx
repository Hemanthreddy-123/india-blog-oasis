
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Palette, Briefcase, Plane, Heart, Users, Zap, Globe } from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      name: "Technology",
      icon: Smartphone,
      description: "AI, blockchain, and digital innovation trends",
      count: 156,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      posts: [
        "AI Revolution in Indian Industries",
        "5G Implementation Success Stories",
        "Cryptocurrency Regulations Update"
      ]
    },
    {
      name: "Culture & Heritage",
      icon: Palette,
      description: "Traditions, festivals, and cultural preservation",
      count: 128,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      posts: [
        "Modern Festival Celebrations",
        "Digital Art and Tradition",
        "Cultural Heritage Projects"
      ]
    },
    {
      name: "Business & Startups",
      icon: Briefcase,
      description: "Entrepreneurship, funding, and market insights",
      count: 94,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      posts: [
        "Unicorn Startup Success Stories",
        "Investment Trends 2024",
        "SME Digital Transformation"
      ]
    },
    {
      name: "Travel & Exploration",
      icon: Plane,
      description: "Hidden destinations and travel experiences",
      count: 87,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      posts: [
        "Unexplored Hill Stations",
        "Sustainable Tourism Practices",
        "Cultural Travel Experiences"
      ]
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      description: "Modern medicine meets traditional healing",
      count: 73,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      posts: [
        "Yoga and Mental Health",
        "Ayurveda in Modern Times",
        "Digital Health Solutions"
      ]
    },
    {
      name: "Society & Education",
      icon: Users,
      description: "Social impact, education, and community development",
      count: 65,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      posts: [
        "Education Technology Revolution",
        "Rural Development Programs",
        "Women Empowerment Initiatives"
      ]
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    console.log(`Exploring ${categoryName} category`);
  };

  const handleExploreAll = () => {
    console.log("Exploring all categories");
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
          Explore by Category
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dive deep into topics that matter most to you. From cutting-edge technology to timeless traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={category.name} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              {/* Category Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 font-semibold">
                  {category.count} articles
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Popular Topics:</h4>
                  {category.posts.map((post, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group/item cursor-pointer">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover/item:scale-125 transition-transform" />
                      <span className="line-clamp-1">{post}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCategoryClick(category.name);
                  }}
                >
                  Explore {category.name}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
          <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">
            Explore All Categories
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover thousands of articles across all categories. Find your passion and dive deep into topics you love.
          </p>
          <Button 
            size="lg"
            onClick={handleExploreAll}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
          >
            <Zap className="mr-2 h-5 w-5" />
            Browse All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
