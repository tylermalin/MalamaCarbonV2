import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
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
  onNavigateToCookies
}: HowItWorksPageProps) {
  return (
    <div className="min-h-screen bg-background">
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
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From setup to credit sales, our streamlined process makes carbon removal accessible and profitable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onStartProject}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('process-steps')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:scale-105 transition-transform duration-300"
              >
                See Process
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
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{benefit.title}</div>
                  <div className="text-sm text-muted-foreground">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process-steps" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              The Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Five simple steps to transform your carbon removal project into a profitable venture
            </p>
          </motion.div>
          
          {/* Desktop Flow */}
          <div className="hidden lg:block mb-16">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
              
              <div className="grid grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      {/* Step Number */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium z-10">
                        {step.step}
                      </div>
                      
                      {/* Icon Circle */}
                      <div className="w-20 h-20 bg-background border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <h3 className="text-lg mb-2 text-primary font-semibold">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        {step.description}
                      </p>
                      
                      <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-2 py-1">
                        {step.timeframe}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-primary">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{step.timeframe}</span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-3 text-primary">What Happens:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground/80">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience our platform through interactive demos and real project case studies
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-white font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of carbon markets. Our platform makes it simple to scale verified carbon removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={onStartProject}
                className="hover:scale-105 transition-transform duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
}
