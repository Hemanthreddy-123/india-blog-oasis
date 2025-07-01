
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform} page`);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white">
      {/* Wave Decoration */}
      <div className="relative">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">IB</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">India Blog</h3>
                <p className="text-sm text-blue-200">Digital Stories Hub</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your premier destination for authentic Indian stories, cutting-edge technology insights, 
              and cultural narratives. Connecting minds across the digital landscape.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: "Facebook" },
                { icon: Twitter, name: "Twitter" },
                { icon: Instagram, name: "Instagram" },
                { icon: Youtube, name: "YouTube" },
                { icon: Linkedin, name: "LinkedIn" }
              ].map(({ icon: Icon, name }) => (
                <button
                  key={name}
                  onClick={() => handleSocialClick(name)}
                  className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "All Categories", href: "/categories" },
                { name: "Write for Us", href: "/write" },
                { name: "Contact", href: "/contact" },
                { name: "Help Center", href: "/help" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-blue-200">Popular Categories</h4>
            <ul className="space-y-3">
              {[
                { name: "Technology", count: "500+ articles" },
                { name: "Culture & Tradition", count: "300+ articles" },
                { name: "Business & Startups", count: "250+ articles" },
                { name: "Travel & Places", count: "200+ articles" },
                { name: "Health & Wellness", count: "150+ articles" },
                { name: "Lifestyle", count: "180+ articles" }
              ].map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => console.log(`Filtering by ${item.name}`)}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-left group"
                  >
                    <div className="flex items-center">
                      <span className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.count}</div>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-blue-200">Stay Connected</h4>
            
            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h5 className="font-semibold">Weekly Newsletter</h5>
              <p className="text-sm text-gray-300">Get the latest articles delivered to your inbox</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h5 className="font-semibold text-blue-200">Contact Information</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">contact@indiablog.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 India Blog Digital Stories Hub. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Made with ❤️ for the Indian digital community
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-blue-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-blue-300 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-blue-300 transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-white/10 hover:bg-blue-500 backdrop-blur-sm border border-white/20"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
