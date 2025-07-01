
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search, TrendingUp, Heart, MessageCircle, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import CategorySection from "@/components/CategorySection";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingPosts = [
    {
      id: 1,
      title: "भारत में डिजिटल क्रांति: एक नया युग",
      excerpt: "भारत में तकनीकी प्रगति और डिजिटल परिवर्तन की कहानी",
      author: "राज शर्मा",
      date: "15 दिसंबर, 2024",
      image: "/placeholder.svg",
      category: "तकनीक",
      likes: 245,
      comments: 32
    },
    {
      id: 2,
      title: "Traditional Indian Festivals in Modern Times",
      excerpt: "How ancient traditions adapt to contemporary celebrations",
      author: "Priya Patel",
      date: "December 14, 2024",
      image: "/placeholder.svg",
      category: "Culture",
      likes: 189,
      comments: 28
    },
    {
      id: 3,
      title: "Startup Success Stories from Tier-2 Cities",
      excerpt: "Innovation beyond metros: Small cities making big impact",
      author: "Vikram Singh",
      date: "December 13, 2024",
      image: "/placeholder.svg",
      category: "Business",
      likes: 156,
      comments: 19
    }
  ];

  const categories = [
    { name: "तकनीक", count: 45, color: "bg-blue-500" },
    { name: "संस्कृति", count: 32, color: "bg-green-500" },
    { name: "व्यापार", count: 28, color: "bg-orange-500" },
    { name: "यात्रा", count: 24, color: "bg-purple-500" },
    { name: "स्वास्थ्य", count: 19, color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header />
      
      <HeroSection />
      
      {/* Search Section */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles, topics, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base border-2 border-orange-200 focus:border-orange-400 rounded-xl"
          />
        </div>
      </section>

      <FeaturedPosts />

      {/* Trending Posts */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Now</h2>
            <p className="text-gray-600">Most popular articles this week</p>
          </div>
          <TrendingUp className="h-8 w-8 text-orange-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-green-100 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:bg-orange-50">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
            View All Trending Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <CategorySection />

      {/* Categories Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name}`}
              className="group block"
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-orange-200">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-xl">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} articles
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
