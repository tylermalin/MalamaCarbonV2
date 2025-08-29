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
  BookOpen, 
  FileText, 
  Video, 
  Code, 
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Globe,
  Zap,
  Cpu,
  Flame,
  Coins,
  BarChart3,
  Shield,
  HelpCircle
} from 'lucide-react';

interface DocumentationProps {
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

interface DocSection {
  title: string;
  description: string;
  type: "guide" | "api" | "tutorial" | "reference";
  icon: React.ElementType;
  color: string;
  articles: Array<{
    title: string;
    description: string;
    readTime: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
  }>;
}

const documentationSections: DocSection[] = [
  {
    title: "Getting Started",
    description: "Essential guides to get your carbon removal project up and running",
    type: "guide",
    icon: BookOpen,
    color: "bg-primary",
    articles: [
      { title: "Quick Start Guide", description: "Set up your first project in under 10 minutes", readTime: "10 min", difficulty: "Beginner" },
      { title: "Project Onboarding", description: "Complete step-by-step project setup process", readTime: "30 min", difficulty: "Beginner" },
      { title: "First Carbon Credits", description: "Generate and verify your first carbon credits", readTime: "45 min", difficulty: "Beginner" }
    ]
  },
  {
    title: "dMRV Engine",
    description: "Learn how to use our AI-powered measurement and verification tools",
    type: "tutorial",
    icon: Cpu,
    color: "bg-secondary",
    articles: [
      { title: "Sensor Deployment", description: "Install and configure monitoring sensors", readTime: "20 min", difficulty: "Intermediate" },
      { title: "Data Validation", description: "Set up automated data quality checks", readTime: "25 min", difficulty: "Intermediate" },
      { title: "Verification Workflows", description: "Configure custom verification processes", readTime: "40 min", difficulty: "Advanced" }
    ]
  },
  {
    title: "Carbon Credit Protocols",
    description: "Implement various carbon removal methodologies on our platform",
    type: "guide",
    icon: Flame,
    color: "bg-accent",
    articles: [
      { title: "Biochar Production", description: "Complete biochar carbon removal guide", readTime: "35 min", difficulty: "Intermediate" },
      { title: "Rock Weathering", description: "Enhanced weathering implementation", readTime: "40 min", difficulty: "Advanced" },
      { title: "Afforestation", description: "Tree planting and forest management", readTime: "30 min", difficulty: "Intermediate" }
    ]
  },
  {
    title: "Carbon Credit Studio",
    description: "Issue, trade, and manage your carbon credits on the blockchain",
    type: "tutorial",
    icon: Coins,
    color: "bg-primary",
    articles: [
      { title: "Credit Issuance", description: "Mint your first carbon credits", readTime: "25 min", difficulty: "Intermediate" },
      { title: "Marketplace Trading", description: "List and trade credits on our exchange", readTime: "30 min", difficulty: "Intermediate" },
      { title: "Portfolio Management", description: "Track and optimize your credit portfolio", readTime: "35 min", difficulty: "Advanced" }
    ]
  },
  {
    title: "API Reference",
    description: "Integrate our platform with your existing systems and workflows",
    type: "api",
    icon: Code,
    color: "bg-secondary",
    articles: [
      { title: "Authentication", description: "Set up API keys and authentication", readTime: "15 min", difficulty: "Intermediate" },
      { title: "Data Endpoints", description: "Access real-time project data via API", readTime: "25 min", difficulty: "Intermediate" },
      { title: "Webhook Integration", description: "Set up automated notifications", readTime: "30 min", difficulty: "Advanced" }
    ]
  },
  {
    title: "Best Practices",
    description: "Learn from our experts and optimize your carbon removal projects",
    type: "guide",
    icon: Shield,
    color: "bg-accent",
    articles: [
      { title: "Quality Assurance", description: "Ensure your credits meet market standards", readTime: "20 min", difficulty: "Intermediate" },
      { title: "Cost Optimization", description: "Reduce verification and compliance costs", readTime: "25 min", difficulty: "Intermediate" },
      { title: "Scaling Strategies", description: "Grow your project from pilot to production", readTime: "35 min", difficulty: "Advanced" }
    ]
  }
];

const quickActions = [
  { title: "Dashboard Navigation", description: "Navigating the platform interface", type: "guide" },
  { title: "Project Setup", description: "Creating and configuring projects", type: "guide" },
  { title: "Credit Verification", description: "Understanding the verification process", type: "tutorial" },
  { title: "API Integration", description: "Connecting external systems", type: "api" }
];

const supportResources = [
  { title: "Video Tutorials", description: "Step-by-step video guides", icon: Video, href: "#" },
  { title: "Community Forum", description: "Connect with other developers", icon: Users, href: "#" },
  { title: "Live Chat Support", description: "Get help in real-time", icon: HelpCircle, href: "#" },
  { title: "Email Support", description: "Detailed technical assistance", icon: ExternalLink, href: "#" }
];

export default function Documentation({ 
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
}: DocumentationProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredSections = documentationSections.filter(section => 
    selectedType === 'all' || section.type === selectedType
  );

  const searchResults = documentationSections.flatMap(section =>
    section.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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
        title="Documentation"
        subtitle="Comprehensive guides, tutorials, and API references to help you succeed with carbon removal projects"
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
            Get Support
            <HelpCircle className="w-5 h-5 mr-2" />
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
            Find What You Need
          </h2>
          <p className={sectionStyles.subheading}>
            Search our documentation or browse by category to find the information you need
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-14 text-lg border-2 border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'guide', 'tutorial', 'api', 'reference'].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="capitalize"
            >
              {type === 'all' ? 'All Types' : type}
            </Button>
          ))}
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Search Results for "{searchQuery}"
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-2 text-primary">{article.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{article.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.readTime}</span>
                        <span className={`px-2 py-1 rounded ${
                          article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {article.difficulty}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </ContentSection>

      {/* Documentation Sections */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Browse by Category
          </h2>
          <p className={sectionStyles.subheading}>
            Organized documentation to help you find the right information quickly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${section.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-primary text-center">{section.title}</h3>
                  <p className="text-muted-foreground text-center mb-6">{section.description}</p>
                  
                  <div className="space-y-3">
                    {section.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200">
                        <h4 className="font-semibold text-foreground mb-1">{article.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{article.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{article.readTime}</span>
                          <span className={`px-2 py-1 rounded ${
                            article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                            article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full mt-6"
                    onClick={() => {}}
                  >
                    View All {section.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Quick Actions */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Quick Actions
          </h2>
          <p className={sectionStyles.subheading}>
            Get started quickly with these essential guides
          </p>
        </motion.div>

        <FourColumnLayout
          columns={quickActions.map((action) => (
            <Card key={action.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{action.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {}}
                >
                  Read Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Support Resources */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Need Help?
          </h2>
          <p className={sectionStyles.subheading}>
            Multiple ways to get support and learn from our team
          </p>
        </motion.div>

        <ThreeColumnLayout
          columns={supportResources.map((resource) => (
            <Card key={resource.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <resource.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{resource.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{resource.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {}}
                >
                  Access {resource.title}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Something Amazing?"
        subtitle="Start your carbon removal project today with our comprehensive platform and documentation"
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject,
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Get Support",
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
