import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Footer } from '../Footer';
import { ArrowLeft, Book, Search, ExternalLink, Code, Zap, Shield, Database, Globe, FileText, Download, ArrowRight, PlayCircle, Users } from 'lucide-react';

interface DocumentationProps {
  onBackToHome: () => void;
  onNavigateToTeam?: () => void;
  onExplorePlatform?: () => void;
  onHowItWorks?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToDocumentation?: () => void;
  onNavigateToBlog?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
  onNavigateToCookies?: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ 
  onBackToHome,
  onNavigateToTeam,
  onExplorePlatform,
  onHowItWorks,
  onNavigateToPricing,
  onNavigateToDocumentation,
  onNavigateToBlog,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToTerms,
  onNavigateToCookies
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const documentationSections = [
    {
      title: "Getting Started",
      icon: Zap,
      description: "Quick start guides and platform overview",
      items: [
        { title: "Platform Overview", description: "Understanding Mālama Labs ecosystem", type: "guide" },
        { title: "Account Setup", description: "Creating and configuring your account", type: "guide" },
        { title: "First Project", description: "Step-by-step project creation", type: "tutorial" },
        { title: "Dashboard Navigation", description: "Navigating the platform interface", type: "guide" }
      ]
    },
    {
      title: "dMRV Engine",
      icon: Database,
      description: "Digital Measurement, Reporting & Verification system",
      items: [
        { title: "IoT Sensor Deployment", description: "Installing and configuring monitoring sensors", type: "guide" },
        { title: "Data Collection", description: "Understanding automated data collection", type: "reference" },
        { title: "AI Validation", description: "How AI systems verify your data", type: "reference" },
        { title: "Real-time Monitoring", description: "Accessing live project data", type: "tutorial" }
      ]
    },
    {
      title: "API Documentation",
      icon: Code,
      description: "Technical integration guides and API references",
      items: [
        { title: "REST API Reference", description: "Complete API endpoint documentation", type: "reference" },
        { title: "Authentication", description: "API keys and authentication methods", type: "guide" },
        { title: "Webhooks", description: "Real-time event notifications", type: "reference" },
        { title: "SDKs & Libraries", description: "Official SDKs for popular languages", type: "reference" }
      ]
    },
    {
      title: "Carbon Credit Protocols",
      icon: FileText,
      description: "Methodology guides and compliance requirements",
      items: [
        { title: "Biochar Protocol", description: "LC02 credit generation methodology", type: "protocol" },
        { title: "Enhanced Rock Weathering", description: "ERW verification standards", type: "protocol" },
        { title: "Agroforestry Standards", description: "Tree-based sequestration protocols", type: "protocol" },
        { title: "Blue Carbon Guidelines", description: "Coastal restoration methodologies", type: "protocol" }
      ]
    },
    {
      title: "Verification & Compliance",
      icon: Shield,
      description: "Understanding verification processes and standards",
      items: [
        { title: "Verification Process", description: "How projects get verified", type: "guide" },
        { title: "Compliance Standards", description: "Meeting international standards", type: "reference" },
        { title: "Third-party Audits", description: "External verification requirements", type: "guide" },
        { title: "Blockchain Provenance", description: "Immutable credit tracking", type: "reference" }
      ]
    },
    {
      title: "Marketplace & Trading",
      icon: Globe,
      description: "Buying and selling carbon credits",
      items: [
        { title: "Listing Credits", description: "How to list credits for sale", type: "guide" },
        { title: "Buyer Onboarding", description: "Setting up a buyer account", type: "guide" },
        { title: "Trading Interface", description: "Using the marketplace platform", type: "tutorial" },
        { title: "Settlement & Delivery", description: "Credit transfer and delivery", type: "guide" }
      ]
    }
  ];

  const quickLinks = [
    { title: "API Status", url: "#", icon: ExternalLink },
    { title: "Release Notes", url: "#", icon: FileText },
    { title: "Developer Forum", url: "#", icon: ExternalLink },
    { title: "SDK Downloads", url: "#", icon: Download }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return Book;
      case 'tutorial': return Zap;
      case 'reference': return Database;
      case 'protocol': return Shield;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-500';
      case 'tutorial': return 'bg-green-500';
      case 'reference': return 'bg-purple-500';
      case 'protocol': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredSections = documentationSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={onBackToHome}
            className="flex items-center gap-3 hover:bg-accent/50 text-base font-medium px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Spacer to ensure content doesn't overlap with fixed nav */}
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive guides, API references, and technical documentation to help you build, integrate, and scale with Mālama Labs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Book className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                API Reference
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">100+ Guides</div>
                <div className="text-sm text-muted-foreground">Comprehensive documentation library</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">REST API</div>
                <div className="text-sm text-muted-foreground">Complete API reference and examples</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <PlayCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Tutorials</div>
                <div className="text-sm text-muted-foreground">Step-by-step implementation guides</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Community</div>
                <div className="text-sm text-muted-foreground">Developer support and forums</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-8">

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sidebar - Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                  <div className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
                      >
                        <link.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm">{link.title}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-3">Need Help?</h3>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Contact Support
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Book className="w-4 h-4 mr-2" />
                        Schedule Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-1">
              <div className="space-y-12">
                {(searchQuery ? filteredSections : documentationSections).map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                        <p className="text-muted-foreground">{section.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIndex) => {
                        const TypeIcon = getTypeIcon(item.type);
                        return (
                          <motion.div
                            key={itemIndex}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Card className="h-full hover:shadow-md transition-all duration-300 cursor-pointer">
                              <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                  <div className={`p-2 rounded-lg ${getTypeColor(item.type)} text-white`}>
                                    <TypeIcon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                      {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs px-2 py-1 bg-secondary/50 rounded-full capitalize">
                                        {item.type}
                                      </span>
                                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {searchQuery && filteredSections.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse our categories above.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
      </div>

      {/* Footer */}
      <Footer 
        onNavigateToTeam={onNavigateToTeam}
        onExplorePlatform={onExplorePlatform}
        onHowItWorks={onHowItWorks}
        onNavigateToPricing={onNavigateToPricing}
        onNavigateToDocumentation={onNavigateToDocumentation}
        onNavigateToBlog={onNavigateToBlog}
        onNavigateToContact={onNavigateToContact}
        onNavigateToPrivacy={onNavigateToPrivacy}
        onNavigateToTerms={onNavigateToTerms}
        onNavigateToCookies={onNavigateToCookies}
      />
    </div>
  );
};

export default Documentation;
