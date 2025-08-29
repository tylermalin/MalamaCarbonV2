import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
import { 
  HeroSection,
  ContentSection,
  TwoColumnLayout,
  sectionStyles
} from '../ui/page-layout';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Calendar, 
  Users, 
  Globe, 
  Cpu, 
  Flame, 
  Coins, 
  CheckCircle, 
  BarChart3, 
  Shield, 
  Zap, 
  Leaf, 
  DollarSign, 
  ExternalLink 
} from 'lucide-react';

interface ContactProps {
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
  onNavigateToFAQ?: () => void;
  onNavigateToCareers?: () => void;
  onNavigateToAbout?: () => void;
}

export default function Contact({ 
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
  onNavigateToHome,
  onNavigateToFAQ,
  onNavigateToCareers,
  onNavigateToAbout
}: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch directly via email",
      details: "hello@malama.earth",
      action: "Send Email",
      href: "mailto:hello@malama.earth"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      details: "+1 (808) 555-0123",
      action: "Call Now",
      href: "tel:+18085550123"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters in Hawai'i",
      details: "Honolulu, HI 96813",
      action: "Get Directions",
      href: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "We're here when you need us",
      details: "Mon-Fri: 9AM-6PM HST",
      action: "Schedule Meeting",
      href: "#"
    }
  ];

  const partnershipTypes = [
    { name: "Carbon Project Developer", description: "Develop and scale carbon removal projects" },
    { name: "Carbon Credit Buyer", description: "Purchase verified carbon credits" },
    { name: "Technology Partner", description: "Integrate with our platform" },
    { name: "Investment Partner", description: "Invest in carbon removal solutions" },
    { name: "Research Institution", description: "Collaborate on carbon removal research" },
    { name: "Government Agency", description: "Regulatory and policy collaboration" }
  ];

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
        onNavigateToHome={onNavigateToHome}
      />

      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Ready to transform carbon markets? Let's discuss how Mālama Carbon can help you scale your carbon removal projects."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onStartProject}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Start Your Project
            <Send className="w-5 h-5 mr-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {}}
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Schedule Demo
            <Calendar className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Contact Form & Information */}
      <ContentSection>
        <TwoColumnLayout
          left={
            <div className="space-y-8">
              <div>
                <h2 className={sectionStyles.heading3}>Send us a message</h2>
                <p className={sectionStyles.text}>
                  Tell us about your carbon removal project and how we can help you succeed.
                </p>
              </div>
              
              <Card className="border-0">
                <CardContent className="p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="mb-2 block text-base font-semibold text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="h-14 text-base bg-input-background focus:ring-0 border-0"
                          style={{ borderRadius: '0' }}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="email" className="mb-2 block text-base font-semibold text-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="h-14 text-base bg-input-background focus:ring-0 border-0"
                          style={{ borderRadius: '0' }}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="company" className="mb-2 block text-base font-semibold text-foreground">
                          Company/Organization
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Enter company name"
                          className="h-14 text-base bg-input-background focus:ring-0 border-0"
                          style={{ borderRadius: '0' }}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="projectType" className="mb-2 block text-base font-semibold text-foreground">
                          Project Type
                        </Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger className="h-14 text-base bg-input-background focus:ring-0 border-0" style={{ borderRadius: '0' }}>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="biochar">Biochar Production</SelectItem>
                            <SelectItem value="afforestation">Afforestation</SelectItem>
                            <SelectItem value="blue-carbon">Blue Carbon</SelectItem>
                            <SelectItem value="rock-weathering">Rock Weathering</SelectItem>
                            <SelectItem value="regenerative-agriculture">Regenerative Agriculture</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="mb-2 block text-base font-semibold text-foreground">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your carbon removal project, goals, and how we can help..."
                        required
                        rows={8}
                        className="text-base bg-input-background focus:ring-0 border-0 resize-none"
                        style={{ borderRadius: '0' }}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full h-16 text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300"
                      style={{ borderRadius: '0' }}
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          }
          right={
            <div className="space-y-8">
              <div>
                <h2 className={sectionStyles.heading3}>Get in touch</h2>
                <p className={sectionStyles.text}>
                  Multiple ways to connect with our team and get the support you need.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="border-0">
                    <CardContent className="p-12">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                          <p className="text-base font-medium text-foreground">{info.details}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="mt-2"
                          >
                            <a href={info.href} target="_blank" rel="noopener noreferrer">
                              {info.action}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          }
        />
      </ContentSection>

      {/* Partnership Types */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Partnership Opportunities
          </h2>
          <p className={sectionStyles.subheading}>
            Join our ecosystem of carbon removal innovators and scale your impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {}}
                    className="w-full"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Meeting Scheduling */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Schedule a Meeting
          </h2>
          <p className={sectionStyles.subheading}>
            Book a personalized consultation with our carbon removal experts
          </p>
        </motion.div>

        <Card className={sectionStyles.card}>
          <CardContent className={sectionStyles.cardContent}>
            <div className="text-center">
              <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Book Your Consultation</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a 30-minute consultation to discuss your carbon removal project, 
                explore our platform capabilities, and learn how we can accelerate your success.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">What we'll cover:</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Project assessment and requirements</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Platform demonstration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Implementation timeline</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Pricing and next steps</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Meeting details:</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">30 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">1-on-1 consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Video call or in-person</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Flexible scheduling</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={() => {}}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </ContentSection>

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
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateToCareers={onNavigateToCareers}
        onNavigateToAbout={onNavigateToAbout}
      />
    </div>
  );
}
