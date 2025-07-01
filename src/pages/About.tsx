
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Award, Globe, Zap, TrendingUp, BookOpen } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Readers", value: "150,000+" },
    { icon: Globe, label: "Cities Reached", value: "1,000+" },
    { icon: Award, label: "Industry Awards", value: "25+" },
    { icon: BookOpen, label: "Articles Published", value: "5,000+" }
  ];

  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & Editor-in-Chief",  
      bio: "Former tech journalist with 15+ years covering Indian innovation and digital transformation.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face",
      expertise: ["Technology", "Innovation", "Digital Strategy"]
    },
    {
      name: "Priya Patel",
      role: "Content Director",
      bio: "Cultural storyteller specializing in Indian traditions meeting modern technology.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
      expertise: ["Culture", "Heritage", "Modern Lifestyle"]
    },
    {
      name: "Vikram Singh",
      role: "Technology Editor",
      bio: "Former startup founder turned tech writer, focusing on India's digital ecosystem.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&crop=face",
      expertise: ["Startups", "Business", "Tech Trends"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Storytelling",
      description: "We believe in sharing genuine, unfiltered stories that represent the real spirit of modern India."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our readers and writers are at the heart of everything we create and every decision we make."
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description: "Every article is meticulously researched, fact-checked, and crafted to meet the highest editorial standards."
    }
  ];

  const handleJoinTeam = () => {
    console.log("Opening careers page");
  };

  const handleStartWriting = () => {
    console.log("Opening writer application");
  };

  const handleJoinCommunity = () => {
    console.log("Opening community platform");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500">
          <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
          </svg>
        </div>
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <Badge className="mb-6 px-4 py-2 text-lg bg-white/20 backdrop-blur-sm border-white/30">
            About India Blog
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Telling India's
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Digital Story
            </span>
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed opacity-95 max-w-4xl mx-auto">
            We're on a mission to showcase the incredible diversity, innovation, and spirit of modern India 
            through authentic storytelling and meaningful digital connections.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-600">Our Mission</Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
              Bridging Tradition with Innovation
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                India Blog was founded with a simple yet powerful vision: to create a platform 
                where authentic Indian voices can be heard, celebrated, and shared with the global community.
              </p>
              <p>
                We believe that India's true strength lies in its diversity – from the bustling tech 
                hubs of Bangalore to the traditional villages of Rajasthan, every corner of our nation 
                has a story worth telling in the digital age.
              </p>
              <p>
                Through our platform, we aim to bridge the gap between traditional wisdom and modern 
                innovation, showcasing how India is evolving while staying true to its rich heritage.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleJoinTeam}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4"
              >
                Join Our Team
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleStartWriting}
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4"
              >
                Start Writing
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop" 
                alt="Digital India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-600">Our Values</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            What Drives Us Forward
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <Card key={value.title} className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-600">Our Team</Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Meet the Storytellers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4 text-blue-600">{member.role}</Badge>
                <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-blue-200 text-blue-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 text-center text-white">
            <TrendingUp className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Join Our Growing Community
            </h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 max-w-3xl mx-auto">
              Whether you're a reader looking for inspiring stories or a writer ready to share your voice, 
              we welcome you to be part of our thriving digital community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={handleStartWriting}
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Writing Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleJoinCommunity}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-xl font-bold backdrop-blur-sm"
              >
                Join Community
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default About;
