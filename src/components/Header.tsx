
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, Bell, Bookmark, Settings, PenTool } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "/category/technology" },
    { name: "Culture", href: "/category/culture" },
    { name: "Business", href: "/category/business" },
    { name: "Travel", href: "/category/travel" },
    { name: "Health", href: "/category/health" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
  };

  const handleNotifications = () => {
    console.log("Opening notifications");
    // Add toast notification or navigate to notifications page
    alert("Notifications feature - You have 3 new notifications!");
  };

  const handleBookmarks = () => {
    console.log("Opening bookmarks");
    // Navigate to bookmarks page or show bookmarked articles
    alert("Bookmarks feature - View your saved articles!");
  };

  const handleSettings = () => {
    console.log("Opening settings");
    // Navigate to settings page
    alert("Settings feature - Customize your experience!");
  };

  const handleWrite = () => {
    console.log("Opening writer dashboard");
    // Navigate to writer dashboard
    alert("Writer Dashboard - Start creating your article!");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">DB</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Digital Blog
              </h1>
              <p className="text-xs text-slate-500 font-medium">Professional Stories Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-800 to-slate-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Toggle */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-slate-100 text-slate-700 hover:text-slate-900"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleNotifications}
              className="hover:bg-slate-100 text-slate-700 hover:text-slate-900 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>

            {/* Bookmarks */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleBookmarks}
              className="hover:bg-slate-100 text-slate-700 hover:text-slate-900"
            >
              <Bookmark className="h-5 w-5" />
            </Button>

            {/* Settings */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleSettings}
              className="hover:bg-slate-100 text-slate-700 hover:text-slate-900"
            >
              <Settings className="h-5 w-5" />
            </Button>

            {/* Write Article */}
            <Button 
              onClick={handleWrite}
              className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 text-white shadow-lg"
            >
              <PenTool className="h-4 w-4 mr-2" />
              Write Article
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar (Expandable) */}
        {isSearchOpen && (
          <div className="pb-4 border-t border-slate-200 pt-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3">
              <Input
                placeholder="Search articles, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-slate-300 focus:border-slate-500"
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 text-white"
              >
                Search
              </Button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
                <Button 
                  className="justify-start bg-gradient-to-r from-slate-800 to-slate-600 hover:from-slate-900 hover:to-slate-700 text-white"
                  onClick={handleWrite}
                >
                  <PenTool className="h-4 w-4 mr-3" />
                  Write Article
                </Button>
                <Button 
                  variant="outline"
                  className="justify-start border-slate-300 text-slate-700 hover:bg-slate-100"
                  onClick={handleNotifications}
                >
                  <Bell className="h-4 w-4 mr-3" />
                  Notifications
                </Button>
                <Button 
                  variant="outline"
                  className="justify-start border-slate-300 text-slate-700 hover:bg-slate-100"
                  onClick={handleBookmarks}
                >
                  <Bookmark className="h-4 w-4 mr-3" />
                  Bookmarks
                </Button>
                <Button 
                  variant="outline"
                  className="justify-start border-slate-300 text-slate-700 hover:bg-slate-100"
                  onClick={handleSettings}
                >
                  <Settings className="h-4 w-4 mr-3" />
                  Settings
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
