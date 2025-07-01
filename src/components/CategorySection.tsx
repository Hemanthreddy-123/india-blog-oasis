
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Palette, Briefcase, Plane, Heart, Users } from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      name: "Technology",
      icon: Smartphone,
      description: "Latest tech trends, AI, and digital innovation",
      count: 156,
      color: "from-blue-500 to-cyan-500",
      posts: [
        "AI Revolution in Indian Industries",
        "5G Implementation Across India",
        "Digital Payment Success Stories"
      ]
    },
    {
      name: "Culture",
      icon: Palette,
      description: "Traditions, festivals, and cultural heritage",
      count: 128,
      color: "from-purple-500 to-pink-500",
      posts: [
        "Modern Diwali Celebrations",
        "Regional Dance Forms Revival",
        "Contemporary Indian Art"
      ]
    },
    {
      name: "Business",
      icon: Briefcase,
      description: "Entrepreneurship, startups, and market insights",
      count: 94,
      color: "from-green-500 to-emerald-500",
      posts: [
        "Unicorn Startups from India",
        "Small Business Success Stories",
        "Investment Opportunities"
      ]
    },
    {
      name: "Travel",
      icon: Plane,
      description: "Hidden gems and travel experiences",
      count: 87,
      color: "from-orange-500 to-red-500",
      posts: [
        "Offbeat Destinations in Himachal",
        "Kerala Backwater Adventures",
        "Rajasthan Desert Expeditions"
      ]
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      description: "Ayurveda, fitness, and mental health",
      count: 73,
      color: "from-red-500 to-pink-500",
      posts: [
        "Yoga and Modern Lifestyle",
        "Ayurvedic Healing Practices",
        "Mental Health Awareness"
      ]
    },
    {
      name: "Society",
      icon: Users,
      description: "Social issues, education, and community",
      count: 65,
      color: "from-indigo-500 to-purple-500",
      posts: [
        "Education Revolution in Rural India",
        "Women Empowerment Stories",
        "Youth Social Movements"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Explore by Category
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dive deep into topics that matter most to you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card key={category.name} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${category.color}`} />
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {category.count} articles
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Popular Topics:</h4>
                  {category.posts.map((post, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors cursor-pointer">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                      <span>{post}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
