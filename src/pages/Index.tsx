
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search, TrendingUp, Heart, MessageCircle, Share2, Clock, Star, BookOpen, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import CategorySection from "@/components/CategorySection";
import Newsletter from "@/components/Newsletter";
import AdvancedFeatures from "@/components/AdvancedFeatures";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingPosts = [
    {
      id: 1,
      title: "The Future of Technology in India: Digital Transformation",
      excerpt: "Exploring how Indian companies are leading global digital innovation and technology advancement.",
      author: "Raj Sharma",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      category: "Technology",
      likes: 245,
      comments: 32,
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Traditional Indian Culture Meets Modern Innovation",
      excerpt: "How ancient traditions adapt to contemporary celebrations and digital age requirements.",
      author: "Priya Patel",
      date: "December 14, 2024",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
      category: "Culture",
      likes: 189,
      comments: 28,
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Startup Success Stories from Emerging Cities",
      excerpt: "Innovation beyond metropolitan areas: Small cities making big impact in business world.",
      author: "Vikram Singh",
      date: "December 13, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      category: "Business",
      likes: 156,
      comments: 19,
      readTime: "10 min read"
    }
  ];

  const categories = [
    { name: "Technology", count: 45, color: "bg-gradient-to-r from-blue-500 to-cyan-500", icon: "💻" },
    { name: "Culture", count: 32, color: "bg-gradient-to-r from-purple-500 to-pink-500", icon: "🎨" },
    { name: "Business", count: 28, color: "bg-gradient-to-r from-emerald-500 to-teal-500", icon: "💼" },
    { name: "Travel", count: 24, color: "bg-gradient-to-r from-orange-500 to-red-500", icon: "✈️" },
    { name: "Health", count: 19, color: "bg-gradient-to-r from-green-500 to-emerald-500", icon: "🏥" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search functionality would be implemented here
  };

  const handlePostClick = (postId: number) => {
    console.log("Navigating to post:", postId);
    // Navigation to individual post would be implemented here
  };

  const handleCategoryClick = (categoryName: string) => {
    console.log("Filtering by category:", categoryName);
    // Category filtering would be implemented here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Header />
      
      <HeroSection />
      
      {/* Advanced Search Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="relative max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles, topics, authors, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-blue-200 focus:border-blue-500 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg"
              />
            </div>
            <Button 
              type="submit"
              className="h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-2xl shadow-lg"
            >
              Search
            </Button>
          </form>
        </div>
      </section>

      <FeaturedPosts />

      {/* Trending Posts with Working Buttons */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Trending Articles
            </h2>
            <p className="text-xl text-gray-600">Most popular stories this week</p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <TrendingUp className="h-8 w-8" />
            <Star className="h-6 w-6 fill-current" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/95 text-blue-600 font-semibold">
                  {post.category}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors text-xl leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-base text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => console.log("Sharing post:", post.id)}
                      className="hover:bg-blue-50"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handlePostClick(post.id)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={() => console.log("Loading more trending posts")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-lg"
          >
            View All Trending Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <CategorySection />

      {/* Categories Grid with Working Buttons */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-16">
          Explore Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="group block w-full"
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 ${category.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {category.count} articles
                  </p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </section>

      <AdvancedFeatures />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
