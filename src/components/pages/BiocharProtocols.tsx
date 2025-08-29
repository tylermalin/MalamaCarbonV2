import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { PageHeader } from '../ui/page-header';
import { 
  Flame, 
  Leaf, 
  Beaker, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Thermometer,
  Clock,
  Target,
  TrendingUp,
  Factory,
  Recycle
} from 'lucide-react';

const protocolSteps = [
  {
    icon: Leaf,
    title: "Feedstock Preparation",
    description: "Optimal biomass selection and preparation for pyrolysis",
    details: [
      "Feedstock type classification",
      "Moisture content optimization",
      "Size reduction protocols",
      "Quality assessment standards",
      "Storage and handling procedures"
    ],
    timeframe: "1-2 days"
  },
  {
    icon: Thermometer,
    title: "Pyrolysis Process",
    description: "Controlled thermal decomposition under verified conditions",
    details: [
      "Temperature control (400-700°C)",
      "Oxygen-limited environment",
      "Residence time monitoring",
      "Gas emission capture",
      "Real-time process logging"
    ],
    timeframe: "4-8 hours"
  },
  {
    icon: Beaker,
    title: "Quality Analysis",
    description: "Comprehensive testing for carbon content and stability",
    details: [
      "Carbon content verification",
      "Stability testing (H:C ratio)",
      "Surface area measurement",
      "pH and conductivity testing",
      "Heavy metals screening"
    ],
    timeframe: "2-3 days"
  },
  {
    icon: Target,
    title: "Application & Monitoring",
    description: "Strategic deployment with continuous impact tracking",
    details: [
      "Soil application protocols",
      "Mixing and distribution",
      "Baseline soil sampling",
      "Long-term monitoring setup",
      "Impact assessment tools"
    ],
    timeframe: "Ongoing"
  }
];

const benefits = [
  {
    icon: Flame,
    title: "1,000+ years",
    description: "Carbon storage durability with properly produced biochar",
    metric: "Permanence"
  },
  {
    icon: BarChart3,
    title: "2-5 tCO2e/ton",
    description: "Carbon removal potential per ton of biochar produced",
    metric: "Impact"
  },
  {
    icon: TrendingUp,
    title: "30-50%",
    description: "Soil productivity improvement in treated areas",
    metric: "Co-benefits"
  },
  {
    icon: Factory,
    title: "95%",
    description: "Process efficiency with optimized production protocols",
    metric: "Efficiency"
  }
];

const standards = [
  {
    name: "International Biochar Initiative (IBI)",
    description: "Global standards for biochar production and quality",
    compliance: "100%"
  },
  {
    name: "Verra VCS Methodology",
    description: "Verified Carbon Standard for biochar carbon credits",
    compliance: "VM0044"
  },
  {
    name: "Climate Action Reserve",
    description: "US-based carbon offset verification protocol",
    compliance: "v1.1"
  },
  {
    name: "Gold Standard",
    description: "International certification for carbon offset projects",
    compliance: "CDM+"
  }
];

const caseStudy = {
  title: "Agricultural Biochar Program",
  location: "Midwest USA",
  scale: "10,000 acres",
  credits: "45,000 tCO2e/year",
  details: [
    "Corn stover and wheat residue feedstock",
    "20 distributed pyrolysis units deployed",
    "Real-time quality monitoring system",
    "85% reduction in verification costs",
    "300% increase in soil water retention"
  ]
};

interface BiocharProtocolsProps {
  onStartProject?: () => void;
  onBackToPlatform?: () => void;
}

export function BiocharProtocols({ onStartProject, onBackToPlatform }: BiocharProtocolsProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        onNavigateToPage={(page) => {
          // Handle navigation based on page
          if (page === 'explore-platform') onBackToPlatform?.();
          if (page === 'how-it-works') onBackToPlatform?.();
          if (page === 'our-team') onBackToPlatform?.();
          if (page === 'pricing') onBackToPlatform?.();
          if (page === 'contact') onBackToPlatform?.();
          if (page === 'blog') onBackToPlatform?.();
          if (page === 'documentation') onBackToPlatform?.();
          if (page === 'faq') onBackToPlatform?.();
          if (page === 'careers') onBackToPlatform?.();
          if (page === 'about') onBackToPlatform?.();
          if (page === 'dmrv-engine') onBackToPlatform?.();
          if (page === 'carbon-credit-studio') onBackToPlatform?.();
          if (page === 'carbon-credit-protocols') onBackToPlatform?.();
          if (page === 'onboarding') onStartProject?.();
        }}
        onStartProject={onStartProject || (() => {})}
        onSignIn={() => {}}
        onRegister={() => {}}
        showBackToHome={true}
        onNavigateToHome={onBackToPlatform}
      />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl text-primary font-bold">
                Carbon Credit Protocols
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Link any accepted methodology to any 3rd Party Validator - Biochar, Rock Weathering, Afforestation, Regenerative Ag, Blue Carbon and More
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
                onClick={() => document.getElementById('protocols')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:scale-105 transition-transform duration-300"
              >
                Learn More
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
                  <div className="text-sm font-medium text-primary mb-2">{benefit.metric}</div>
                  <div className="text-xs text-muted-foreground">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Protocol Steps */}
      <section id="protocols" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Production Protocol
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scientifically validated steps for consistent, high-quality biochar production
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {protocolSteps.map((step, index) => (
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
                          <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center">
                            <step.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-sm text-primary font-medium">Step {index + 1}</div>
                            <h3 className="text-xl font-bold text-primary">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">{step.timeframe}</span>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-3 text-primary">Protocol Details:</h4>
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

      {/* Standards & Compliance */}
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
              Standards & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our protocols meet the highest international standards for carbon credit verification
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-2">{standard.name}</h3>
                        <p className="text-muted-foreground text-sm">{standard.description}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{standard.compliance}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Fully Compliant</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
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
              Success Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Large-scale biochar deployment demonstrating protocol effectiveness
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
                        <div className="text-sm text-muted-foreground">Scale</div>
                        <div className="font-semibold text-primary">{caseStudy.scale}</div>
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
                      className="aspect-square bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl overflow-hidden border border-secondary/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src="/src/assets/biochar-project-ca.png" 
                        alt="Quality Control Dashboard - Biochar Production Monitoring"
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
              Ready to Scale Carbon Removal?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Deploy any accepted methodology with 3rd party validator integration and automated carbon credit generation
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
                <div className="text-2xl font-bold text-primary mb-1">1000+ Years</div>
                <div className="text-sm text-muted-foreground">Permanent carbon storage in biochar</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">30% Higher</div>
                <div className="text-sm text-muted-foreground">Crop yields with biochar soil amendment</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">99.9% Stable</div>
                <div className="text-sm text-muted-foreground">Carbon permanence with verified protocols</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Recycle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Zero Waste</div>
                <div className="text-sm text-muted-foreground">Convert agricultural residues to value</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
