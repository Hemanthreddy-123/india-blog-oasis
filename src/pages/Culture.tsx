
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Heart, MessageCircle, Share2, Clock, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Culture = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const cultureArticles = [
    {
      id: 1,
      title: "Traditional Arts in Modern Times",
      excerpt: "How traditional art forms are adapting to contemporary digital platforms and reaching new audiences.",
      author: "Sarah Johnson",
      date: "January 20, 2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      category: "Culture",
      likes: 234,
      comments: 28,
      readTime: "7 min read"
    },
    {
      id: 2,
      title: "Global Music Fusion Trends",
      excerpt: "Exploring how world music genres are blending to create new sounds and cultural expressions.",
      author: "Michael Chen",
      date: "January 18, 2024",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      category: "Culture",
      likes: 189,
      comments: 31,
      readTime: "9 min read"
    },
    {
      id: 3,
      title: "Cultural Heritage Preservation",
      excerpt: "Digital initiatives to preserve and share cultural heritage for future generations.",
      author: "Emma Rodriguez",
      date: "January 16, 2024",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
      category: "Culture",
      likes: 167,
      comments: 22,
      readTime: "6 min read"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching culture articles for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-slate-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Culture & Arts</h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Discover the richness of cultural expressions, artistic innovations, and traditional heritage from around the world.
          </p>
          
          {/* Search */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search culture articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-slate-300 bg-white text-slate-800"
              />
            </div>
            <Button type="submit" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Latest Culture Articles</h2>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultureArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {article.category}
                </Badge>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-2 group-hover:text-slate-800 transition-colors text-xl">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-base text-slate-600">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>{article.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{article.comments}</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="hover:bg-slate-100">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-slate-800 hover:bg-slate-900 text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;
