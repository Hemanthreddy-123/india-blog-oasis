
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award, Globe, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Readers", value: "50,000+" },
    { icon: Globe, label: "Cities Reached", value: "500+" },
    { icon: Award, label: "Awards Won", value: "12" },
    { icon: Zap, label: "Articles Published", value: "1,200+" }
  ];

  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & Editor-in-Chief",
      bio: "Former journalist with 15 years of experience covering Indian culture and technology.",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Patel",
      role: "Content Director",
      bio: "Passionate storyteller specializing in Indian traditions and modern lifestyle.",
      image: "/placeholder.svg"
    },
    {
      name: "Vikram Singh",
      role: "Technology Editor",
      bio: "Tech entrepreneur turned writer, focusing on India's digital transformation.",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Stories",
      description: "We believe in sharing genuine, unfiltered stories that represent the real India."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our readers and writers are at the heart of everything we do."
    },
    {
      icon: Target,
      title: "Quality Content",
      description: "Every article is carefully crafted and fact-checked to ensure excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About India Blog Oasis
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90">
            We're on a mission to showcase the incredible diversity, innovation, and spirit of India 
            through authentic storytelling and meaningful connections.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              India Blog Oasis was founded with a simple yet powerful vision: to create a platform 
              where authentic Indian voices can be heard, celebrated, and shared with the world.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe that India's true strength lies in its diversity – from the bustling tech 
              hubs of Bangalore to the serene villages of Rajasthan, every corner of our nation 
              has a story worth telling.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our platform, we aim to bridge the gap between traditional wisdom and modern 
              innovation, showcasing how India is evolving while staying true to its roots.
            </p>
          </div>
          <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl" />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Join Our Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Whether you're a reader looking for inspiring stories or a writer ready to share your voice, 
          we welcome you to be part of our growing community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
            Start Writing
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
            Join Community
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
