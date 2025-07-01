
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Rise of Indian Startups: A Silicon Valley Alternative",
      excerpt: "How Indian entrepreneurs are creating world-class companies and challenging global tech giants with innovative solutions.",
      author: "Arjun Mehta",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Business",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Preserving Ancient Crafts in Digital India",
      excerpt: "Traditional artisans embrace technology to keep centuries-old crafts alive in the modern world.",
      author: "Kavya Sharma",
      date: "December 14, 2024",
      readTime: "6 min read",
      category: "Culture",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Green Revolution 2.0: Sustainable Agriculture",
      excerpt: "How Indian farmers are adopting eco-friendly practices and technology for sustainable farming.",
      author: "Dr. Rajesh Kumar",
      date: "December 13, 2024",
      readTime: "10 min read",
      category: "Environment",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handpicked articles that showcase the best of Indian innovation, culture, and insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Featured Post */}
        <div className="lg:row-span-2">
          <Card className="h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                Featured
              </Badge>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs">
                  {featuredPosts[0].category}
                </Badge>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl leading-tight group-hover:text-orange-600 transition-colors">
                {featuredPosts[0].title}
              </CardTitle>
              
              <CardDescription className="text-base leading-relaxed">
                {featuredPosts[0].excerpt}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPosts[0].date}</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="group-hover:bg-orange-50 group-hover:text-orange-600">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Featured Posts */}
        <div className="space-y-6">
          {featuredPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md">
              <div className="flex gap-4 p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex-shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
