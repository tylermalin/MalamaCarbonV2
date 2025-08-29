import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
import { 
  HeroSection,
  ContentSection,
  ThreeColumnLayout,
  FourColumnLayout,
  CTASection,
  sectionStyles
} from '../ui/page-layout';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  ExternalLink,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Globe,
  Zap
} from 'lucide-react';

interface BlogProps {
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
  onNavigateToCarbonCreditStudio?: () => void;
  onNavigateToCarbonCreditProtocols?: () => void;
  onNavigateToDMRVEngine?: () => void;
  onStartProject?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Carbon Markets: AI-Powered Verification",
    excerpt: "Discover how artificial intelligence is revolutionizing carbon credit verification, making the process faster, more accurate, and more accessible than ever before.",
    author: "Tyler Malin",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Carbon Markets", "Verification", "Innovation"],
    featured: true
  },
  {
    id: "2",
    title: "Biochar: The Carbon Removal Solution That's Changing Agriculture",
    excerpt: "Explore how biochar production is not only removing carbon from the atmosphere but also improving soil health and agricultural productivity worldwide.",
    author: "Jeffrey Wise",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "Agriculture",
    tags: ["Biochar", "Agriculture", "Soil Health", "Carbon Removal"]
  },
  {
    id: "3",
    title: "Scaling Carbon Removal: From Pilot Projects to Global Impact",
    excerpt: "Learn the strategies and best practices for scaling carbon removal projects from small pilots to large-scale operations that can make a real difference.",
    author: "Mālama Team",
    publishDate: "2024-01-10",
    readTime: "10 min read",
    category: "Strategy",
    tags: ["Scaling", "Best Practices", "Project Management", "Impact"]
  },
  {
    id: "4",
    title: "Enhanced Rock Weathering: Nature's Carbon Removal Accelerator",
    excerpt: "Understanding how enhanced rock weathering can permanently store carbon while improving soil fertility and crop yields.",
    author: "Climate Science Team",
    publishDate: "2024-01-08",
    readTime: "7 min read",
    category: "Science",
    tags: ["Rock Weathering", "Geology", "Carbon Storage", "Soil Science"]
  },
  {
    id: "5",
    title: "Blockchain in Carbon Markets: Transparency and Trust",
    excerpt: "How blockchain technology is creating unprecedented transparency in carbon credit trading and verification.",
    author: "Tech Team",
    publishDate: "2024-01-05",
    readTime: "5 min read",
    category: "Technology",
    tags: ["Blockchain", "Transparency", "Carbon Credits", "Trust"]
  },
  {
    id: "6",
    title: "The Economics of Carbon Removal: Making Climate Action Profitable",
    excerpt: "Explore the business case for carbon removal and how projects can generate both environmental and financial returns.",
    author: "Finance Team",
    publishDate: "2024-01-03",
    readTime: "9 min read",
    category: "Finance",
    tags: ["Economics", "ROI", "Climate Finance", "Business Case"]
  }
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Technology", count: blogPosts.filter(post => post.category === "Technology").length },
  { name: "Agriculture", count: blogPosts.filter(post => post.category === "Agriculture").length },
  { name: "Strategy", count: blogPosts.filter(post => post.category === "Strategy").length },
  { name: "Science", count: blogPosts.filter(post => post.category === "Science").length },
  { name: "Finance", count: blogPosts.filter(post => post.category === "Finance").length }
];

const featuredTopics = [
  { title: "Carbon Markets", description: "Understanding the evolving landscape of carbon trading", icon: TrendingUp },
  { title: "Climate Tech", description: "Innovations driving climate solutions forward", icon: Lightbulb },
  { title: "Sustainability", description: "Building a more sustainable future", icon: Globe },
  { title: "Innovation", description: "Cutting-edge approaches to carbon removal", icon: Zap }
];

export default function Blog({ 
  onNavigateToTeam,
  onExplorePlatform,
  onHowItWorks,
  onNavigateToPricing,
  onNavigateToDocumentation,
  onNavigateToBlog,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToTerms,
  onNavigateToCookies,
  onNavigateToCarbonCreditStudio,
  onNavigateToCarbonCreditProtocols,
  onNavigateToDMRVEngine,
  onStartProject
}: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        onNavigateToPage={(page) => {
          // Handle navigation based on page
          if (page === 'explore-platform') onExplorePlatform?.();
          if (page === 'how-it-works') onHowItWorks?.();
          if (page === 'our-team') onNavigateToTeam?.();
          if (page === 'pricing') onNavigateToPricing?.();
          if (page === 'contact') onNavigateToContact?.();
          if (page === 'blog') onNavigateToBlog?.();
          if (page === 'documentation') onNavigateToDocumentation?.();
          if (page === 'faq') onNavigateToContact?.();
          if (page === 'careers') onNavigateToContact?.();
          if (page === 'about') onExplorePlatform?.();
          if (page === 'dmrv-engine') onNavigateToDMRVEngine?.();
          if (page === 'carbon-credit-studio') onNavigateToCarbonCreditStudio?.();
          if (page === 'carbon-credit-protocols') onNavigateToCarbonCreditProtocols?.();
          if (page === 'onboarding') onStartProject?.();
        }}
        onStartProject={onStartProject || (() => {})}
        onSignIn={() => {}}
        onRegister={() => {}}
        showBackToHome={true}
        onNavigateToHome={() => {}}
      />

      {/* Hero Section */}
      <HeroSection
        title="Carbon Removal Insights"
        subtitle="Stay updated with the latest trends, research, and innovations in carbon removal technology and climate solutions"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onStartProject}
            className={sectionStyles.button}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onNavigateToContact}
            className={sectionStyles.button}
          >
            Subscribe to Updates
            <BookOpen className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Search and Filters */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Discover Insights
          </h2>
          <p className={sectionStyles.subheading}>
            Search our articles or browse by category to find the information you need
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search articles, topics, or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-14 text-lg border-2 border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className="capitalize"
            >
              {category.name}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </ContentSection>

      {/* Featured Post */}
      {featuredPost && (
        <ContentSection background="gradient">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={sectionStyles.heading2}>
              Featured Article
            </h2>
            <p className={sectionStyles.subheading}>
              Our latest insights on carbon removal innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                    Featured
                  </span>
                  <h3 className="text-3xl font-bold mb-4 text-primary">{featuredPost.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{featuredPost.category}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={() => {}}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ContentSection>
      )}

      {/* Regular Blog Posts */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Latest Articles
          </h2>
          <p className={sectionStyles.subheading}>
            Stay informed with our latest research, insights, and industry updates
          </p>
        </motion.div>

        <ThreeColumnLayout
          columns={regularPosts.slice(0, 3).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-primary line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {}}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        />
      </ContentSection>

      {/* Featured Topics */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Explore Topics
          </h2>
          <p className={sectionStyles.subheading}>
            Deep dive into key areas of carbon removal and climate technology
          </p>
        </motion.div>

        <FourColumnLayout
          columns={featuredTopics.map((topic) => (
            <Card key={topic.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <topic.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-primary">{topic.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {}}
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Newsletter Signup */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Stay Updated
          </h2>
          <p className={sectionStyles.subheading}>
            Get the latest carbon removal insights delivered to your inbox
          </p>
        </motion.div>

        <Card className={sectionStyles.card}>
          <CardContent className={sectionStyles.cardContent}>
            <div className="text-center">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Subscribe to Our Newsletter</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of climate innovators and carbon project developers who get our weekly insights, 
                research updates, and industry news delivered directly to their inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button
                  size="lg"
                  onClick={() => {}}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </CardContent>
        </Card>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Make an Impact?"
        subtitle="Join the carbon removal revolution and start building climate solutions today"
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject,
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Contact Our Team",
          onClick: onNavigateToContact
        }}
      />

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
        onNavigateToCarbonCreditStudio={onNavigateToCarbonCreditStudio}
        onNavigateToCarbonCreditProtocols={onNavigateToCarbonCreditProtocols}
        onNavigateToDMRVEngine={onNavigateToDMRVEngine}
        onStartProject={onStartProject}
      />
    </div>
  );
}
