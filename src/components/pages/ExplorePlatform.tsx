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
  sectionStyles
} from '../ui/page-layout';
import { 
  Cpu, 
  Flame, 
  Coins, 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Globe, 
  Shield,
  Zap,
  Leaf,
  Clock,
  DollarSign
} from 'lucide-react';

const platforms = [
  {
    title: "dMRV Engine",
    description: "AI + blockchain-powered measurement tools",
    icon: Cpu,
    color: "bg-primary",
    features: [
      "Real-time IoT sensor monitoring",
      "AI-powered data validation",
      "Blockchain-secured measurements",
      "Automated reporting systems"
    ],
    benefits: "Reduce verification costs by 70% while increasing accuracy"
  },
  {
    title: "Carbon Credit Protocols",
    description: "Link any accepted methodology to any 3rd Party Validator",
    icon: Flame,
    color: "bg-secondary",
    features: [
      "Biochar & Rock Weathering protocols",
      "Afforestation & Regenerative Agriculture",
      "Blue Carbon & ecosystem restoration",
      "3rd party validator integration",
      "Multi-standard compliance support"
    ],
    benefits: "Support all carbon removal methodologies with verified impact"
  },
  {
    title: "Carbon Credit Studio",
    description: "Issue & sell durable LC02/VC02 credits on-chain",
    icon: Coins,
    color: "bg-accent-foreground",
    features: [
      "Automated credit issuance",
      "Smart contract compliance",
      "Marketplace integration",
      "Revenue optimization"
    ],
    benefits: "Access premium markets for durable carbon removal credits"
  }
];

const stats = [
  { label: "Carbon Credits Issued", value: "2.3M", icon: CheckCircle },
  { label: "Projects Tracked", value: "450+", icon: BarChart3 },
  { label: "Countries Active", value: "25", icon: Globe },
  { label: "Cost Reduction", value: "70%", icon: Shield }
];

interface ExplorePlatformProps {
  onNavigateToModule?: (module: string) => void;
  onStartProject?: () => void;
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
}

export function ExplorePlatform({ 
  onNavigateToModule, 
  onStartProject,
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
  onNavigateToCarbonCreditProtocols
}: ExplorePlatformProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Explore Our Platform"
        subtitle="Discover the comprehensive tools and technologies that power Mālama Carbon's carbon removal platform"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onStartProject}
            className={sectionStyles.button}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onHowItWorks}
            className={sectionStyles.button}
          >
            How It Works
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Platform Overview Section */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Platform Overview
          </h2>
          <p className={sectionStyles.subheading}>
            Three core modules working together to create a comprehensive carbon removal solution
          </p>
        </motion.div>

        <ThreeColumnLayout
          columns={platforms.map((platform) => (
            <Card key={platform.title} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-28 px-12 pb-20 relative overflow-hidden bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)] backdrop-blur-md border border-[rgba(27,67,50,0.15)] shadow-[0_8px_32px_rgba(27,67,50,0.1)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.05)] before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                <div className="relative z-10 flex items-center justify-center mb-6 mt-16">
                  <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="relative z-10 text-xl mb-4 text-center text-primary group-hover:text-secondary transition-colors duration-300 font-medium">
                  {platform.title}
                </h3>
                
                <p className="relative z-10 text-center text-foreground/80 mb-6 line-height-relaxed">
                  {platform.description}
                </p>
                
                <div className="relative z-10 flex items-center justify-center">
                  <button 
                    onClick={() => onNavigateToModule?.(platform.title.toLowerCase().replace(/ /g, '-'))}
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group-hover:gap-3 font-medium"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Key Features Section */}
      <ContentSection>
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
            Advanced capabilities that set our platform apart in the carbon removal industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">{platform.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground text-center font-medium">
                    {platform.benefits}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Impact Stats Section */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Platform Impact
          </h2>
          <p className={sectionStyles.subheading}>
            Real results from our comprehensive carbon removal platform
          </p>
        </motion.div>

        <FourColumnLayout
          columns={stats.map((stat) => (
            <StatsCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Carbon Markets?"
        subtitle="Join leading carbon project developers who are scaling durable carbon removal with our platform"
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject,
          icon: ArrowRight
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
