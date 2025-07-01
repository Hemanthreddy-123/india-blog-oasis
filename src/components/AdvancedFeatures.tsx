
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  MessageCircle, 
  Search, 
  BookOpen, 
  Share2, 
  Bell, 
  Heart, 
  TrendingUp,
  Users,
  Calendar,
  Filter,
  Download,
  Bookmark,
  Globe,
  Zap,
  Shield,
  Headphones,
  Video,
  Camera,
  Mic,
  Palette,
  Code,
  BarChart3,
  Clock
} from "lucide-react";

const AdvancedFeatures = () => {
  const features = [
    {
      title: "AI-Powered Search",
      description: "Smart search with natural language processing and content recommendations",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      category: "Search & Discovery"
    },
    {
      title: "Real-time Comments",
      description: "Live discussion threads with instant notifications and moderation",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      category: "Community"
    },
    {
      title: "Progressive Web App",
      description: "Install as mobile app with offline reading and push notifications",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      category: "Mobile Experience"
    },
    {
      title: "Personalized Feed",
      description: "AI curated content based on reading history and preferences",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      category: "Personalization"
    },
    {
      title: "Social Sharing",
      description: "Share articles across all platforms with custom preview cards",
      icon: Share2,
      color: "from-teal-500 to-blue-500",
      category: "Social"
    },
    {
      title: "Smart Notifications",
      description: "Customizable alerts for new articles, comments, and trending content",
      icon: Bell,
      color: "from-yellow-500 to-orange-500",
      category: "Notifications"
    },
    {
      title: "Reading Lists",
      description: "Save articles for later with organized collections and tags",
      icon: Bookmark,
      color: "from-indigo-500 to-purple-500",
      category: "Organization"
    },
    {
      title: "Author Profiles",
      description: "Detailed writer profiles with follower system and expertise badges",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      category: "Authors"
    },
    {
      title: "Advanced Filtering",
      description: "Filter by date, category, author, reading time, and popularity",
      icon: Filter,
      color: "from-cyan-500 to-teal-500",
      category: "Navigation"
    },
    {
      title: "Reading Analytics",
      description: "Track reading progress, time spent, and reading streak rewards",
      icon: BarChart3,
      color: "from-green-500 to-cyan-500",
      category: "Analytics"
    },
    {
      title: "Offline Reading",
      description: "Download articles for offline access with automatic sync",
      icon: Download,
      color: "from-blue-500 to-purple-500",
      category: "Offline"
    },
    {
      title: "Multi-language Support",
      description: "Content in multiple Indian languages with translation features",
      icon: Globe,
      color: "from-emerald-500 to-teal-500",
      category: "Localization"
    },
    {
      title: "Dark Mode",
      description: "Eye-friendly dark theme with customizable color schemes",
      icon: Palette,
      color: "from-gray-600 to-gray-800",
      category: "Accessibility"
    },
    {
      title: "Voice Reading",
      description: "Text-to-speech with natural Indian voices and speed control",
      icon: Headphones,
      color: "from-violet-500 to-purple-500",
      category: "Accessibility"
    },
    {
      title: "Video Content",
      description: "Embedded videos, interviews, and multimedia storytelling",
      icon: Video,
      color: "from-red-500 to-pink-500",
      category: "Media"
    },
    {
      title: "Photo Stories",
      description: "Visual storytelling with interactive image galleries",
      icon: Camera,
      color: "from-orange-500 to-yellow-500",
      category: "Media"
    },
    {
      title: "Podcast Integration",
      description: "Audio articles and podcast episodes with playlist support",
      icon: Mic,
      color: "from-indigo-500 to-blue-500",
      category: "Audio"
    },
    {
      title: "Writer Dashboard",
      description: "Comprehensive analytics and content management for authors",
      icon: Code,
      color: "from-teal-500 to-green-500",
      category: "Creator Tools"
    },
    {
      title: "Content Calendar",
      description: "Editorial calendar with scheduled publishing and reminders",
      icon: Calendar,
      color: "from-purple-500 to-indigo-500",
      category: "Publishing"
    },
    {
      title: "Security Features",
      description: "Two-factor authentication and secure user data protection",
      icon: Shield,
      color: "from-green-600 to-emerald-600",
      category: "Security"
    },
    {
      title: "Fast Loading",
      description: "Optimized performance with CDN and image compression",
      icon: Zap,
      color: "from-yellow-500 to-red-500",
      category: "Performance"
    },
    {
      title: "Reading Time Tracker",
      description: "Estimate and track reading time with progress indicators",
      icon: Clock,
      color: "from-blue-500 to-teal-500",
      category: "Reading Experience"
    },
    {
      title: "Engagement Metrics",
      description: "Like, comment, and share analytics with engagement scoring",
      icon: Heart,
      color: "from-pink-500 to-red-500",
      category: "Engagement"
    },
    {
      title: "Content Recommendations",
      description: "Machine learning powered article suggestions and related content",
      icon: BookOpen,
      color: "from-cyan-500 to-blue-500",
      category: "Discovery"
    }
  ];

  const categories = [...new Set(features.map(f => f.category))];

  const handleFeatureClick = (featureTitle: string) => {
    console.log("Exploring feature:", featureTitle);
    // Feature demo or detailed view would open here
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 px-4 py-2 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          24 Advanced Features
        </Badge>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
          Powerful Features for Modern Readers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Experience the future of digital reading with our comprehensive suite of advanced features 
          designed for the modern Indian audience.
        </p>
      </div>

      {/* Feature Categories */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit text-xs">
                  {feature.category}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience All Features?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of readers who are already enjoying our advanced platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => console.log("Starting free trial")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => console.log("Viewing pricing")}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
