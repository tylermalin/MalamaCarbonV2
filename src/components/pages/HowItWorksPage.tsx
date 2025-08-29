import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import { 
  HeroSection,
  ContentSection,
  TwoColumnLayout,
  ThreeColumnLayout,
  FourColumnLayout,
  FeatureCard,
  StatsCard,
  CTASection,
  ProcessSteps,
  sectionStyles
} from '../ui/page-layout';
import { 
  UserPlus, 
  Settings, 
  Flame, 
  CheckCircle, 
  Coins,
  ArrowRight,
  Clock,
  DollarSign,
  Zap,
  Shield
} from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Onboard",
    description: "Register your project and connect with our platform",
    step: "01",
    details: [
      "Complete project assessment",
      "Connect monitoring infrastructure",
      "Set up data feeds",
      "Configure compliance settings"
    ],
    timeframe: "1-2 weeks"
  },
  {
    icon: Settings,
    title: "Sensor Deployment",
    description: "Deploy AI-powered monitoring sensors on your land",
    step: "02",
    details: [
      "Install IoT monitoring devices",
      "Calibrate measurement systems",
      "Establish data connectivity",
      "Test automated reporting"
    ],
    timeframe: "2-3 weeks"
  },
  {
    icon: Flame,
    title: "Production & Tracking",
    description: "Deploy any accepted carbon credit protocol with real-time monitoring",
    step: "03",
    details: [
      "Support for all carbon removal methodologies",
      "Biochar, Rock Weathering, Afforestation protocols",
      "Regenerative Agriculture & Blue Carbon tracking",
      "Real-time process monitoring & validation",
      "Quality assurance across all project types"
    ],
    timeframe: "Ongoing"
  },
  {
    icon: CheckCircle,
    title: "Automated Verification",
    description: "AI-powered validation through our dMRV engine",
    step: "04",
    details: [
      "Continuous data validation",
      "Compliance verification",
      "Third-party audits",
      "Credit calculation"
    ],
    timeframe: "Real-time"
  },
  {
    icon: Coins,
    title: "Credit Issuance & Trading",
    description: "Mint and trade verified LC02/VC02 credits on blockchain",
    step: "05",
    details: [
      "Automated credit minting",
      "Marketplace listing",
      "Revenue optimization",
      "Transaction settlement"
    ],
    timeframe: "Monthly"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "70% Faster",
    description: "Time to market compared to traditional verification"
  },
  {
    icon: DollarSign,
    title: "50% Lower Costs",
    description: "Reduced verification and compliance expenses"
  },
  {
    icon: Shield,
    title: "99.9% Accuracy",
    description: "AI-powered measurement and validation"
  },
  {
    icon: Zap,
    title: "Real-time",
    description: "Continuous monitoring and instant reporting"
  }
];

interface HowItWorksPageProps {
  onStartProject?: () => void;
  onExplorePlatform?: () => void;
  onNavigateToTeam?: () => void;
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
  onNavigateToHome?: () => void;
}

export function HowItWorksPage({ 
  onStartProject, 
  onExplorePlatform,
  onNavigateToTeam,
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
  onNavigateToHome
}: HowItWorksPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="How It Works"
        subtitle="From setup to credit sales, our streamlined process makes carbon removal accessible and profitable"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={onStartProject}
            className={sectionStyles.button}
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Your Project
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('process-steps')?.scrollIntoView({ behavior: 'smooth' })}
            className={sectionStyles.button}
          >
            See Process
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Benefits Grid */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={sectionStyles.heading2}>
            Why Choose Our Platform?
          </h2>
          <p className={sectionStyles.subheading}>
            Proven advantages that accelerate your carbon removal project
          </p>
        </motion.div>

        <FourColumnLayout
          columns={benefits.map((benefit) => (
            <StatsCard
              key={benefit.title}
              icon={benefit.icon}
              value={benefit.title}
              label={benefit.description}
            />
          ))}
        />
      </ContentSection>

      {/* Process Steps */}
      <ContentSection background="alt" className="py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            The Process
          </h2>
          <p className={sectionStyles.subheading}>
            Five simple steps to transform your carbon removal project into a profitable venture
          </p>
        </motion.div>
        
        {/* Desktop Flow */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            
            <ProcessSteps steps={steps} isHorizontal={true} />
          </div>
        </div>

        {/* Mobile Flow */}
        <div className="lg:hidden">
          <ProcessSteps steps={steps} />
        </div>
      </ContentSection>

      {/* Interactive Demo & Start Project */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Ready to Get Started?
          </h2>
          <p className={sectionStyles.subheading}>
            Experience our platform firsthand and begin your carbon removal journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                <h3 className="text-2xl font-bold text-primary mb-4">Interactive Demo</h3>
                <p className="text-muted-foreground mb-6">
                  Walk through our platform with real data and see how easy it is to manage your carbon removal project.
                </p>
                <Button 
                  onClick={onExplorePlatform}
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  Explore Platform
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                <h3 className="text-2xl font-bold text-primary mb-4">Start Your Project</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to begin? Our onboarding process will guide you through setting up your first carbon removal project.
                </p>
                <Button 
                  onClick={onStartProject}
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  Begin Onboarding
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Join the future of carbon markets. Our platform makes it simple to scale verified carbon removal."
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject,
          icon: Zap
        }}
        secondaryButton={{
          text: "Schedule Demo",
          onClick: () => {}
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
        onNavigateToDMRVEngine={() => {}}
        onStartProject={onStartProject}
      />
    </div>
  );
}
