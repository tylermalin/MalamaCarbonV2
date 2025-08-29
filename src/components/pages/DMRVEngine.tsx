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
  Cpu, 
  BarChart3, 
  Shield, 
  Zap, 
  ArrowRight,
  Globe,
  Database,
  Cloud,
  Smartphone,
  Satellite,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Target,
  PieChart
} from 'lucide-react';

interface DMRVEngineProps {
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

const dMRVFeatures = [
  {
    icon: Database,
    title: "Real-time Data Collection",
    description: "Continuous monitoring from IoT sensors, satellites, and ground-based measurements"
  },
  {
    icon: Shield,
    title: "AI-Powered Verification",
    description: "Advanced algorithms that automatically validate data quality and detect anomalies"
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Generate compliance reports and carbon credit documentation automatically"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Monitor projects anywhere in the world with satellite and IoT integration"
  }
];

const technologyStack = [
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Process data locally for faster response times and reduced bandwidth"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud platform for data storage and processing"
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Field teams can access data and reports from anywhere"
  },
  {
    icon: Satellite,
    title: "Satellite Monitoring",
    description: "Remote sensing for large-scale project verification"
  }
];

const benefits = [
  { metric: "70%", label: "Faster Verification", icon: Clock },
  { metric: "50%", label: "Cost Reduction", icon: TrendingUp },
  { metric: "99.9%", label: "Data Accuracy", icon: Target },
  { metric: "24/7", label: "Continuous Monitoring", icon: Users }
];

const useCases = [
  {
    title: "Biochar Production",
    description: "Monitor pyrolysis temperatures, feedstock composition, and carbon content in real-time"
  },
  {
    title: "Afforestation Projects",
    description: "Track tree growth, soil carbon changes, and biodiversity metrics"
  },
  {
    title: "Enhanced Rock Weathering",
    description: "Measure soil pH changes, carbon sequestration rates, and agricultural benefits"
  },
  {
    title: "Blue Carbon Restoration",
    description: "Monitor coastal ecosystem health and carbon storage in marine environments"
  }
];

export default function DMRVEngine({ 
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
}: DMRVEngineProps) {
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
        title="dMRV Engine"
        subtitle="AI-powered digital measurement, reporting, and verification platform for carbon removal projects"
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
            onClick={onNavigateToDocumentation}
            className={sectionStyles.button}
          >
            View Documentation
            <BarChart3 className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* What is dMRV */}
      <ContentSection>
        <TwoColumnLayout
          left={
            <div className="space-y-8">
              <div>
                <h2 className={sectionStyles.heading2}>
                  What is Digital MRV?
                </h2>
                <p className={sectionStyles.subheading}>
                  Digital Measurement, Reporting, and Verification (dMRV) is the next generation of carbon project monitoring, 
                  combining IoT sensors, artificial intelligence, and blockchain technology to create transparent, 
                  verifiable carbon removal credits.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Automated Data Collection</h3>
                    <p className="text-muted-foreground">Continuous monitoring from multiple sources eliminates manual data entry and reduces human error.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Validation</h3>
                    <p className="text-muted-foreground">Machine learning algorithms automatically detect anomalies and ensure data quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Blockchain Verification</h3>
                    <p className="text-muted-foreground">Immutable records create trust and transparency in carbon credit markets.</p>
                  </div>
                </div>
              </div>
            </div>
          }
          right={
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Cpu className="w-24 h-24 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Platform Architecture</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm">IoT Sensor Network</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-sm">Edge Computing Nodes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <span className="text-sm">Cloud Processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm">Blockchain Verification</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />
      </ContentSection>

      {/* Key Features */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Key Features
          </h2>
          <p className={sectionStyles.subheading}>
            Advanced capabilities that make carbon project monitoring efficient and reliable
          </p>
        </motion.div>

        <FourColumnLayout
          columns={dMRVFeatures.map((feature) => (
            <Card key={feature.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <feature.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Technology Stack */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Technology Stack
          </h2>
          <p className={sectionStyles.subheading}>
            Built with cutting-edge technologies for maximum performance and reliability
          </p>
        </motion.div>

        <ThreeColumnLayout
          columns={technologyStack.map((tech) => (
            <Card key={tech.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <tech.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Benefits */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Platform Benefits
          </h2>
          <p className={sectionStyles.subheading}>
            Transform your carbon removal projects with our advanced monitoring capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">{benefit.metric}</div>
                  <div className="text-sm text-muted-foreground">{benefit.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Use Cases
          </h2>
          <p className={sectionStyles.subheading}>
            Our platform supports all major carbon removal methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Deploy dMRV?"
        subtitle="Start monitoring your carbon removal project with our advanced platform"
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject,
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Schedule Demo",
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
