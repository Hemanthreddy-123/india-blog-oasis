
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search, User, Bell, Bookmark, Settings, LogIn, UserPlus } from "lucide-react";

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
    { name: "About", href: "/about" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
  };

  const handleLogin = () => {
    console.log("Opening login modal");
  };

  const handleSignup = () => {
    console.log("Opening signup modal");
  };

  const handleNotifications = () => {
    console.log("Opening notifications");
  };

  const handleBookmarks = () => {
    console.log("Opening bookmarks");
  };

  const handleSettings = () => {
    console.log("Opening settings");
  };

  const handleWrite = () => {
    console.log("Opening writer dashboard");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">IB</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                India Blog
              </h1>
              <p className="text-xs text-gray-500 font-medium">Digital Stories Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
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
              className="hover:bg-blue-50"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleNotifications}
              className="hover:bg-blue-50 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>

            {/* Bookmarks */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleBookmarks}
              className="hover:bg-blue-50"
            >
              <Bookmark className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleSettings}
              className="hover:bg-blue-50"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Auth Buttons */}
            <Button 
              variant="outline"
              onClick={handleLogin}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>

            <Button 
              onClick={handleWrite}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg"
            >
              Write Article
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar (Expandable) */}
        {isSearchOpen && (
          <div className="pb-4 border-t border-blue-100 pt-4">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3">
              <Input
                placeholder="Search articles, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-blue-200 focus:border-blue-500"
                autoFocus
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                Search
              </Button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-blue-100">
                <Button 
                  variant="outline" 
                  className="justify-start border-blue-200 text-blue-600 hover:bg-blue-50"
                  onClick={handleLogin}
                >
                  <LogIn className="h-4 w-4 mr-3" />
                  Login
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start border-green-200 text-green-600 hover:bg-green-50"
                  onClick={handleSignup}
                >
                  <UserPlus className="h-4 w-4 mr-3" />
                  Sign Up
                </Button>
                <Button 
                  className="justify-start bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={handleWrite}
                >
                  Write Article
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
