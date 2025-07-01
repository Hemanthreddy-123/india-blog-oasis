
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, CheckCircle, Gift, Zap, Star } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail("");
        setIsLoading(false);
        
        // Reset after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
      }, 1500);
    }
  };

  const benefits = [
    { icon: Zap, text: "Weekly curated content" },
    { icon: Star, text: "Exclusive subscriber content" },
    { icon: Gift, text: "Early access to new features" }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <Card className="relative overflow-hidden border-0 shadow-2xl">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
          <div className="absolute inset-0">
            {/* Wave Animation */}
            <svg className="absolute bottom-0 w-full h-32 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white animate-pulse"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-24 opacity-30" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 30 0 0 1200 0 1200 120z" className="fill-white"></path>
            </svg>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-300/30 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-300/40 rounded-full blur-lg animate-bounce" />
        
        <CardContent className="relative p-8 md:p-16 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Badge className="mb-4 px-4 py-2 text-lg bg-white/20 backdrop-blur-sm text-white border-white/30">
                Join 50,000+ Readers
              </Badge>
              
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 group">
                <Mail className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stay Updated with India's
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Digital Stories
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
                Get the latest articles, cultural insights, and trending stories delivered directly to your inbox every week.
              </p>
            </div>
            
            {/* Subscription Form */}
            {!isSubscribed ? (
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-14 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 text-lg"
                    required
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8 font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    ) : (
                      <>
                        Subscribe Free
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  {benefits.map(({ icon: Icon, text }, index) => (
                    <div key={index} className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <Icon className="h-5 w-5 text-yellow-300" />
                      <span className="font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-white text-2xl font-bold">
                  <CheckCircle className="h-8 w-8 text-green-300" />
                  <span>Welcome to our community!</span>
                </div>
                <p className="text-white/90 text-lg">
                  Check your email for a confirmation message. Your first newsletter is on its way!
                </p>
              </div>
            )}
            
            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-white/80 text-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>50,000+ subscribers</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200" />
                <span>Weekly newsletter</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-600" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/80 text-lg mb-4">
                "The best source for Indian digital stories and technology insights!"
              </p>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-current" />
                ))}
                <span className="ml-2 text-white/90 font-semibold">4.9/5 from 2,500+ reviews</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Newsletter;
