
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <Card className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 border-0 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <CardContent className="relative p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with India's Stories
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get the latest articles, cultural insights, and trending stories delivered to your inbox every week.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-gray-900 hover:bg-gray-100 h-12 px-8 font-semibold"
                >
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-white">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-semibold">Thank you for subscribing!</span>
              </div>
            )}
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 text-sm">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <span>Weekly newsletter</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Newsletter;
