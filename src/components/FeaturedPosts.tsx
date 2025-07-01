
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight, Eye, Share2, Bookmark } from "lucide-react";

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Indian Tech: AI Revolution in Startups",
      excerpt: "How Indian entrepreneurs are leveraging artificial intelligence to create world-class companies and compete globally in the technology sector.",
      author: "Arjun Mehta",
      date: "December 15, 2024",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop",
      featured: true,
      views: "15.2K",
      likes: 342
    },
    {
      id: 2,
      title: "Preserving Heritage: Digital Archives of Indian Culture",
      excerpt: "Traditional artisans and cultural preservationists embrace digital technology to keep centuries-old crafts and traditions alive.",
      author: "Kavya Sharma",
      date: "December 14, 2024",
      readTime: "8 min read",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=500&fit=crop",
      views: "8.7K",
      likes: 198
    },
    {
      id: 3,
      title: "Sustainable Innovation: Green Technology in Rural India",
      excerpt: "How Indian farmers and rural communities are adopting eco-friendly practices and technology for sustainable development.",
      author: "Dr. Rajesh Kumar",
      date: "December 13, 2024",
      readTime: "15 min read",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop",
      views: "12.1K",
      likes: 267
    }
  ];

  const handleReadMore = (postId: number) => {
    console.log(`Reading post ${postId}`);
  };

  const handleShare = (postId: number) => {
    console.log(`Sharing post ${postId}`);
  };

  const handleBookmark = (postId: number) => {
    console.log(`Bookmarking post ${postId}`);
  };

  return (
    <section id="featured-posts" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <Badge className="mb-4 px-4 py-2 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          Editor's Choice
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
          Featured Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Handpicked articles that showcase the best of Indian innovation, culture, and insights from our expert writers
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Main Featured Post */}
        <div className="lg:row-span-2">
          <Card className="h-full group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src={featuredPosts[0].image} 
                alt={featuredPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Overlays */}
              <Badge className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm px-3 py-1 shadow-lg">
                Featured
              </Badge>
              <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm">
                <Clock className="h-4 w-4" />
                {featuredPosts[0].readTime}
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white text-sm">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {featuredPosts[0].views}
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {featuredPosts[0].category}
                </Badge>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-blue-600 transition-colors mb-4">
                {featuredPosts[0].title}
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed text-gray-600">
                {featuredPosts[0].excerpt}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {featuredPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{featuredPosts[0].author}</div>
                      <div className="text-sm text-gray-500">{featuredPosts[0].date}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleShare(featuredPosts[0].id)}
                    className="hover:bg-blue-50"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleBookmark(featuredPosts[0].id)}
                    className="hover:bg-blue-50"
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  onClick={() => handleReadMore(featuredPosts[0].id)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 shadow-lg"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Featured Posts */}
        <div className="space-y-8">
          {featuredPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="flex gap-6 p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="text-xs border-blue-200 text-blue-600">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleShare(post.id)}
                        className="hover:bg-blue-50"
                      >
                        <Share2 className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleReadMore(post.id)}
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xs px-3"
                      >
                        Read
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden rounded-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Button 
          size="lg"
          onClick={() => console.log("Viewing all featured posts")}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-lg"
        >
          View All Featured Articles
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedPosts;
