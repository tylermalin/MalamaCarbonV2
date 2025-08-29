import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Cpu, 
  Wifi, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Clock,
  Brain,
  Link,
  Eye,
  DollarSign
} from 'lucide-react';
import { Footer } from '../Footer';

const features = [
  {
    icon: Wifi,
    title: "IoT Sensor Network",
    description: "Real-time environmental monitoring with advanced sensor arrays",
    details: [
      "Soil carbon monitoring sensors",
      "Temperature & humidity tracking",
      "Biomass measurement systems",
      "Air quality monitoring",
      "Precipitation & weather data"
    ]
  },
  {
    icon: Brain,
    title: "AI Validation Engine",
    description: "Machine learning algorithms for data verification and analysis",
    details: [
      "Anomaly detection systems",
      "Data quality validation",
      "Predictive carbon modeling",
      "Pattern recognition algorithms",
      "Automated reporting generation"
    ]
  },
  {
    icon: Link,
    title: "Blockchain Integration",
    description: "Immutable data storage and transparent verification trails",
    details: [
      "Tamper-proof data logging",
      "Smart contract automation",
      "Transparent audit trails",
      "Decentralized verification",
      "Cross-chain compatibility"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights and real-time monitoring capabilities",
    details: [
      "Real-time data visualization",
      "Custom reporting tools",
      "Performance metrics tracking",
      "Compliance monitoring",
      "ROI analysis and projections"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description: "Continuous data collection and instant alerts for any irregularities",
    metric: "24/7"
  },
  {
    icon: Shield,
    title: "Data Integrity",
    description: "Blockchain-secured measurements ensure tamper-proof verification",
    metric: "100%"
  },
  {
    icon: Zap,
    title: "Automated Verification",
    description: "AI-powered validation reduces manual auditing by significant margins",
    metric: "90%"
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Compliance with international carbon credit verification standards",
    metric: "ISO+"
  }
];

const caseStudy = {
  title: "Biochar Project in California",
  location: "Central Valley, CA",
  area: "500 acres",
  credits: "12,500 tCO2e/year",
  details: [
    "Deployed 50+ IoT sensors across farmland",
    "Real-time monitoring of biochar application",
    "Automated soil carbon measurement",
    "95% reduction in verification time",
    "40% cost savings on compliance"
  ]
};

interface DMRVEngineProps {
  onStartProject?: () => void;
  onBackToPlatform?: () => void;
  onBackToHome?: () => void;
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

export function DMRVEngine({ 
  onStartProject, 
  onBackToPlatform,
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
}: DMRVEngineProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl text-primary font-bold">
                dMRV Engine
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI + blockchain-powered measurement tools for transparent, automated carbon verification
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
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:scale-105 transition-transform duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center border-none bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{benefit.metric}</div>
                  <div className="text-sm font-medium text-primary mb-2">{benefit.title}</div>
                  <div className="text-xs text-muted-foreground">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology stack for comprehensive carbon monitoring and verification
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 h-full border-none bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-10 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
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
              Success Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our dMRV Engine transformed carbon verification for a leading biochar project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4">{caseStudy.title}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-semibold text-primary">{caseStudy.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Area</div>
                        <div className="font-semibold text-primary">{caseStudy.area}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-muted-foreground">Annual Credits</div>
                        <div className="font-semibold text-primary text-xl">{caseStudy.credits}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {caseStudy.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <motion.div 
                      className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden border border-primary/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="/src/assets/biochar-project-ca.png" 
                        alt="Biochar Project in California - Real-time Monitoring Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure built for scale and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Processing Power</h3>
                  <p className="text-sm text-muted-foreground mb-4">High-performance computing for real-time data analysis</p>
                  <div className="space-y-2 text-xs">
                    <div>• 99.9% uptime guarantee</div>
                    <div>• Edge computing capabilities</div>
                    <div>• Scalable cloud infrastructure</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Security</h3>
                  <p className="text-sm text-muted-foreground mb-4">Bank-level security with blockchain verification</p>
                  <div className="space-y-2 text-xs">
                    <div>• End-to-end encryption</div>
                    <div>• Multi-signature verification</div>
                    <div>• SOC 2 Type II compliant</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground mb-4">Worldwide deployment with local compliance</p>
                  <div className="space-y-2 text-xs">
                    <div>• Multi-region deployment</div>
                    <div>• Local regulatory compliance</div>
                    <div>• 24/7 global support</div>
                  </div>
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
              Ready to Deploy dMRV?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your carbon project with automated measurement, reporting, and verification
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
                onClick={onBackToPlatform}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Back to Platform
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
        onNavigateToCarbonCreditStudio={onNavigateToCarbonCreditStudio}
        onNavigateToCarbonCreditProtocols={onNavigateToCarbonCreditProtocols}
      />
    </div>
  );
}
