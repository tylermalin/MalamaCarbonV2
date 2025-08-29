import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
import { 
  HeroSection,
  ContentSection,
  TwoColumnLayout,
  ThreeColumnLayout,
  FourColumnLayout,
  CTASection,
  sectionStyles
} from '../ui/page-layout';
import { 
  Heart, 
  Users, 
  Zap, 
  Globe, 
  ArrowRight,
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
  Award,
  CheckCircle,
  Star,
  Building,
  Leaf,
  Mountain,
  Waves,
  Flame,
  Trees
} from 'lucide-react';

interface AboutProps {
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

const companyValues = [
  {
    icon: Heart,
    title: "Mission-Driven",
    description: "Every decision we make is guided by our commitment to accelerate climate solutions and create positive environmental impact."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe the best solutions come from diverse teams working together with mutual respect and shared goals."
  },
  {
    icon: Zap,
    title: "Innovative",
    description: "We constantly push boundaries, embracing new technologies and approaches to solve complex climate challenges."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work has worldwide implications, and we approach every project with the scale of impact in mind."
  }
];

const milestones = [
  {
    year: "2024",
    title: "Platform Launch",
    description: "Launched comprehensive carbon removal platform with dMRV technology"
  },
  {
    year: "2023",
    title: "Company Founded",
    description: "Mālama Labs established with mission to scale carbon removal"
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanding to support projects across multiple continents"
  }
];

const impactMetrics = [
  { metric: "50K+", label: "Tons CO2 Removed", icon: Leaf },
  { metric: "25+", label: "Active Projects", icon: Mountain },
  { metric: "8", label: "Countries", icon: Globe },
  { metric: "99.9%", label: "Verification Accuracy", icon: Shield }
];

const methodologies = [
  {
    title: "Biochar Production",
    description: "Converting organic waste into stable carbon through pyrolysis",
    icon: Flame
  },
  {
    title: "Enhanced Rock Weathering",
    description: "Accelerating natural carbon sequestration in soils",
    icon: Mountain
  },
  {
    title: "Afforestation",
    description: "Strategic tree planting for long-term carbon storage",
    icon: Trees
  },
  {
    title: "Blue Carbon",
    description: "Protecting and restoring coastal ecosystems",
    icon: Waves
  }
];

export default function About({ 
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
}: AboutProps) {
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
          if (page === 'faq') onNavigateToFAQ?.();
          if (page === 'careers') onNavigateToCareers?.();
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
        title="About Mālama Carbon"
        subtitle="Building the infrastructure to scale carbon removal from millions to billions of tons annually"
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
            onClick={onNavigateToTeam}
            className={sectionStyles.button}
          >
            Meet Our Team
            <Users className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Our Story */}
      <ContentSection>
        <TwoColumnLayout
          left={
            <div className="space-y-8">
              <div>
                <h2 className={sectionStyles.heading2}>
                  Our Story
                </h2>
                <p className={sectionStyles.subheading}>
                  Mālama Carbon was born from a simple but urgent realization: we need to scale carbon removal 
                  from millions to billions of tons annually to address the climate crisis.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2023 by a team of climate scientists, engineers, and entrepreneurs, we recognized 
                  that while carbon removal technologies exist, the infrastructure to verify, trade, and scale 
                  them was missing.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform combines cutting-edge dMRV technology with deep expertise in carbon removal 
                  methodologies to create a comprehensive solution that accelerates climate action.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to support projects across 8 countries, helping remove over 50,000 tons 
                  of CO2 annually while building the foundation for gigaton-scale carbon removal.
                </p>
              </div>
            </div>
          }
          right={
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Building className="w-24 h-24 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Company Overview</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Founded</span>
                        <span className="font-semibold">2023</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Headquarters</span>
                        <span className="font-semibold">Honolulu, HI</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Team Size</span>
                        <span className="font-semibold">25+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Global Reach</span>
                        <span className="font-semibold">8 Countries</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />
      </ContentSection>

      {/* Mission & Vision */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Mission & Vision
          </h2>
          <p className={sectionStyles.subheading}>
            Our commitment to creating a sustainable future through innovative carbon removal solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To accelerate climate solutions by providing the infrastructure, technology, and expertise 
                  needed to scale carbon removal projects globally. We're building the foundation for a 
                  sustainable future where carbon removal is accessible, verifiable, and impactful.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  A world where carbon removal is scaled to gigaton levels, creating a sustainable balance 
                  between human activity and the environment. We envision a future where every organization 
                  can easily participate in climate solutions through our platform.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </ContentSection>

      {/* Company Values */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Our Values
          </h2>
          <p className={sectionStyles.subheading}>
            The principles that guide everything we do
          </p>
        </motion.div>

        <FourColumnLayout
          columns={companyValues.map((value) => (
            <Card key={value.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Impact Metrics */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Our Impact
          </h2>
          <p className={sectionStyles.subheading}>
            Real results from our carbon removal platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <metric.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.metric}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Carbon Removal Methodologies */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Carbon Removal Methodologies
          </h2>
          <p className={sectionStyles.subheading}>
            We support all major carbon removal approaches for maximum impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {methodologies.map((methodology, index) => (
            <motion.div
              key={methodology.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <methodology.icon className="w-12 h-12 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary">{methodology.title}</h3>
                      <p className="text-muted-foreground">{methodology.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Company Timeline */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Our Journey
          </h2>
          <p className={sectionStyles.subheading}>
            Key milestones in our mission to scale carbon removal
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Join Us in Building the Future"
        subtitle="Be part of the solution to climate change with our carbon removal platform"
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject || (() => {}),
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Learn More",
          onClick: onHowItWorks || (() => {})
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
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateToCareers={onNavigateToCareers}
        onNavigateToAbout={onNavigateToAbout}
      />
    </div>
  );
}
