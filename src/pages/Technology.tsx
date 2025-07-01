
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Heart, MessageCircle, Share2, Clock, TrendingUp } from "lucide-react";

const Technology = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2024",
      excerpt: "Exploring the latest developments in AI technology and their impact on various industries.",
      author: "Sarah Johnson",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      likes: 324,
      comments: 45,
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Blockchain Beyond Cryptocurrency",
      excerpt: "How blockchain technology is revolutionizing supply chains, healthcare, and digital identity.",
      author: "Mike Chen",
      date: "January 12, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      likes: 256,
      comments: 32,
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Computing Trends for Modern Businesses",
      excerpt: "Understanding the shift to cloud-first strategies and their benefits for scalability.",
      author: "Emily Rodriguez",
      date: "January 10, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      likes: 189,
      comments: 28,
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices for Remote Teams",
      excerpt: "Essential security measures every remote team should implement to protect sensitive data.",
      author: "David Park",
      date: "January 8, 2024",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      likes: 198,
      comments: 24,
      readTime: "9 min read",
      featured: false
    }
  ];

  const handleReadMore = (articleId: number) => {
    console.log("Reading article:", articleId);
  };

  const handleShare = (articleId: number) => {
    console.log("Sharing article:", articleId);
  };

  const handleLike = (articleId: number) => {
    console.log("Liking article:", articleId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <Badge className="mb-6 px-4 py-2 text-lg bg-white/20 backdrop-blur-sm border-white/30">
            Technology
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Latest in
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95 max-w-3xl mx-auto">
            Stay updated with the latest technological innovations, trends, and breakthroughs
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Technology Articles</h2>
            <p className="text-lg text-gray-600">Discover the latest in tech innovation</p>
          </div>
          <TrendingUp className="h-8 w-8 text-purple-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {article.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">
                    Featured
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-2 group-hover:text-purple-600 transition-colors text-xl leading-tight">
                  {article.title}
                </CardTitle>
                <p className="line-clamp-3 text-base text-gray-600">
                  {article.excerpt}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
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
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <button 
                      onClick={() => handleLike(article.id)}
                      className="flex items-center gap-2 hover:text-red-500 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                      <span>{article.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{article.comments}</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleShare(article.id)}
                      className="hover:bg-purple-50"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleReadMore(article.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={() => console.log("Loading more articles")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg"
          >
            Load More Articles
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;
