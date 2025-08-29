import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
import { 
  HeroSection,
  ContentSection,
  CTASection,
  sectionStyles
} from '../ui/page-layout';
import { 
  Search, 
  Plus, 
  Minus, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  Users,
  Mail
} from 'lucide-react';

interface FAQProps {
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
  onNavigateToHome?: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    question: "What is Mālama Carbon?",
    answer: "Mālama Carbon is a comprehensive platform that empowers carbon project developers with AI-powered measurement, verification, and trading tools for durable carbon removal credits. We combine cutting-edge technology with traditional knowledge to accelerate climate solutions.",
    category: "General"
  },
  {
    question: "How does carbon removal work?",
    answer: "Carbon removal involves capturing CO2 from the atmosphere and storing it permanently. Our platform supports multiple methodologies including biochar production, enhanced rock weathering, afforestation, and blue carbon restoration. Each method has different permanence, scalability, and cost characteristics.",
    category: "General"
  },
  {
    question: "What makes Mālama different from other platforms?",
    answer: "Mālama combines AI-powered dMRV technology, blockchain verification, and deep expertise in carbon removal methodologies. We focus on durable carbon removal (100+ year storage) and provide end-to-end support from project development to credit trading.",
    category: "General"
  },

  // Technical Questions
  {
    question: "What is dMRV technology?",
    answer: "Digital Measurement, Reporting, and Verification (dMRV) uses IoT sensors, artificial intelligence, and blockchain to automate carbon project monitoring. This reduces verification time by 70%, cuts costs by 50%, and ensures 99.9% data accuracy compared to traditional manual methods.",
    category: "Technical"
  },
  {
    question: "How accurate are your measurements?",
    answer: "Our AI-powered platform achieves 99.9% accuracy through continuous monitoring, automated validation, and multiple data sources. We combine ground-based sensors, satellite imagery, and machine learning algorithms to ensure reliable carbon sequestration measurements.",
    category: "Technical"
  },
  {
    question: "What technologies do you use?",
    answer: "Our platform uses edge computing, cloud infrastructure, IoT sensors, satellite monitoring, and blockchain verification. We leverage machine learning for data validation and automated reporting, ensuring real-time insights and transparent verification trails.",
    category: "Technical"
  },

  // Project Development
  {
    question: "How do I start a carbon removal project?",
    answer: "Starting a project is simple: 1) Contact our team for initial consultation, 2) We'll assess your land and goals, 3) Choose the best carbon removal methodology, 4) Deploy our monitoring technology, 5) Begin generating verified carbon credits. Our team guides you through every step.",
    category: "Projects"
  },
  {
    question: "What types of projects do you support?",
    answer: "We support all major carbon removal methodologies: biochar production, enhanced rock weathering, afforestation, regenerative agriculture, and blue carbon restoration. Each project is customized based on your land type, climate, and goals.",
    category: "Projects"
  },
  {
    question: "How long does it take to start generating credits?",
    answer: "Project setup typically takes 2-4 weeks. Credit generation begins immediately after deployment, with first verification occurring within 3-6 months depending on methodology. Our dMRV technology provides real-time monitoring from day one.",
    category: "Projects"
  },

  // Carbon Credits
  {
    question: "What are carbon credits worth?",
    answer: "Carbon credit prices vary by methodology and market conditions. Biochar credits typically range from $180-250 per ton, enhanced rock weathering from $120-180 per ton, and afforestation from $80-120 per ton. Prices are influenced by permanence, verification quality, and market demand.",
    category: "Credits"
  },
  {
    question: "How do I sell my carbon credits?",
    answer: "Credits are automatically listed on our marketplace after verification. Buyers include corporations, governments, and individuals seeking to offset emissions. Our platform handles all trading, settlement, and delivery automatically. You can also choose to hold credits for future appreciation.",
    category: "Credits"
  },
  {
    question: "Are the credits permanent?",
    answer: "Yes, we focus on durable carbon removal with 100+ year storage potential. Biochar and enhanced rock weathering provide geological permanence, while afforestation offers long-term sequestration. Our verification ensures credits represent genuine, permanent carbon removal.",
    category: "Credits"
  },

  // Pricing & Costs
  {
    question: "How much does it cost to use your platform?",
    answer: "We offer transparent, scalable pricing starting at $99/month for small projects. Professional plans at $299/month include advanced features, while enterprise solutions offer custom pricing. There are no setup fees, and you only pay for what you use.",
    category: "Pricing"
  },
  {
    question: "What's included in the platform fee?",
    answer: "Platform fees cover dMRV infrastructure, verification processing, marketplace access, blockchain transaction costs, and ongoing support. We also provide project consultation, methodology selection, and compliance assistance at no additional cost.",
    category: "Pricing"
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes, we provide volume discounts for larger projects and annual subscriptions. Projects generating over 1,000 tons of CO2 annually receive significant discounts, and annual plans include a 20% savings compared to monthly billing.",
    category: "Pricing"
  }
];

const categories = ["All", "General", "Technical", "Projects", "Credits", "Pricing"];

export default function FAQ({ 
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
  onStartProject,
  onNavigateToHome
}: FAQProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

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
        onNavigateToHome={onNavigateToHome}
      />

      {/* Hero Section */}
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about carbon removal, our platform, and services"
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
            Contact Support
            <Mail className="w-5 h-5 mr-2" />
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
            Find Your Answer
          </h2>
          <p className={sectionStyles.subheading}>
            Search our FAQ or browse by category to find the information you need
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 text-lg border-2 border-border focus:border-primary rounded-lg transition-colors duration-300"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </ContentSection>

      {/* FAQ Items */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Common Questions
          </h2>
          <p className={sectionStyles.subheading}>
            Browse our most frequently asked questions by category
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <div className="ml-4">
                      {openItems.has(index) ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                  
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-border/20">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No questions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse different categories.
            </p>
          </motion.div>
        )}
      </ContentSection>

      {/* Additional Help */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Still Need Help?
          </h2>
          <p className={sectionStyles.subheading}>
            Multiple ways to get the support you need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-primary">Documentation</h3>
              <p className="text-muted-foreground mb-6">
                Comprehensive guides, tutorials, and API references for developers and project managers.
              </p>
              <Button
                variant="outline"
                onClick={onNavigateToDocumentation}
                className="w-full"
              >
                View Documentation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-primary">Community</h3>
              <p className="text-muted-foreground mb-6">
                Connect with other carbon project developers and get answers from our community.
              </p>
              <Button
                variant="outline"
                onClick={onNavigateToContact}
                className="w-full"
              >
                Join Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4 text-primary">Contact Support</h3>
              <p className="text-muted-foreground mb-6">
                Get personalized help from our technical support team via email or live chat.
              </p>
              <Button
                variant="outline"
                onClick={onNavigateToContact}
                className="w-full"
              >
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Join leading carbon project developers who are scaling durable carbon removal"
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
        onNavigateToHome={onNavigateToHome}
      />
    </div>
  );
}
