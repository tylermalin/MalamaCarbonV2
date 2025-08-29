import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
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
  onNavigateToCookies
}: ExplorePlatformProps) {
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
              Explore the Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive tools for measuring, verifying, and trading durable carbon removal credits
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
                onClick={() => document.getElementById('platform-modules')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:scale-105 transition-transform duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Modules */}
      <section id="platform-modules" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Platform Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each module is designed to work seamlessly together, providing end-to-end carbon credit lifecycle management
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-none bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${platform.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <platform.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {platform.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {platform.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-primary">Key Features:</h4>
                        <ul className="space-y-2">
                          {platform.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-primary/5 rounded-lg mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Leaf className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-primary">Impact</span>
                        </div>
                        <p className="text-foreground/80">{platform.benefits}</p>
                      </div>
                      
                      <Button 
                        onClick={() => onNavigateToModule?.(platform.title.toLowerCase().replace(/ /g, '-'))}
                        className="w-full hover:scale-105 transition-transform duration-300"
                      >
                        Explore {platform.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <motion.div 
                    className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center border border-primary/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <platform.icon className="w-24 h-24 text-primary/30" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Carbon Markets?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading carbon project developers who are scaling durable carbon removal with our platform
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

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">70% Faster</div>
                <div className="text-sm text-muted-foreground">Time to market compared to traditional verification</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">50% Lower Costs</div>
                <div className="text-sm text-muted-foreground">Reduced verification and compliance expenses</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">99.9% Accuracy</div>
                <div className="text-sm text-muted-foreground">AI-powered measurement and validation</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Real-time</div>
                <div className="text-sm text-muted-foreground">Continuous monitoring and instant reporting</div>
              </CardContent>
            </Card>
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
