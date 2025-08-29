import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Coins, 
  Link2, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Clock,
  Wallet,
  DollarSign,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Link2,
    title: "Smart Contract Automation",
    description: "Automated credit issuance and trading with blockchain security",
    details: [
      "Automated verification triggers",
      "Instant credit minting",
      "Multi-chain compatibility",
      "Programmable compliance rules",
      "Transparent audit trails"
    ]
  },
  {
    icon: TrendingUp,
    title: "Marketplace Integration",
    description: "Direct access to premium carbon credit trading platforms",
    details: [
      "Real-time price optimization",
      "Buyer matching algorithms",
      "Automated market making",
      "Portfolio management tools",
      "Revenue forecasting"
    ]
  },
  {
    icon: Wallet,
    title: "Revenue Optimization",
    description: "AI-powered pricing and timing strategies for maximum returns",
    details: [
      "Dynamic pricing algorithms",
      "Market timing optimization",
      "Portfolio diversification",
      "Risk management tools",
      "Performance analytics"
    ]
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Automated compliance with international carbon standards",
    details: [
      "Multi-standard certification",
      "Regulatory reporting",
      "Audit trail management",
      "Quality assurance protocols",
      "Legal framework adherence"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Minutes",
    description: "Time to market from verification to tradeable credits",
    metric: "Speed"
  },
  {
    icon: DollarSign,
    title: "15-30%",
    description: "Premium pricing achieved through quality verification",
    metric: "Premium"
  },
  {
    icon: Globe,
    title: "Global",
    description: "Access to international carbon credit marketplaces",
    metric: "Reach"
  },
  {
    icon: Target,
    title: "Zero",
    description: "Manual processes required for credit issuance and trading",
    metric: "Automation"
  }
];

const marketplaces = [
  {
    name: "Verra Registry",
    description: "World's leading carbon credit registry for VCS credits",
    volume: "$2.1B",
    compatibility: "VCS/VCU"
  },
  {
    name: "Gold Standard Registry",
    description: "Premium certified emission reductions marketplace",
    volume: "$850M",
    compatibility: "GS/CER"
  },
  {
    name: "Climate Action Reserve",
    description: "North American carbon offset registry",
    volume: "$650M",
    compatibility: "CRT"
  },
  {
    name: "Toucan Protocol",
    description: "On-chain carbon credit tokenization platform",
    volume: "$120M",
    compatibility: "TCO2/BCT"
  }
];

const caseStudy = {
  title: "Regenerative Agriculture Portfolio",
  location: "Global Network",
  credits: "150,000 tCO2e",
  revenue: "$3.2M",
  details: [
    "Portfolio of 25 diverse carbon projects",
    "Automated issuance across 4 registries",
    "Real-time pricing optimization",
    "95% reduction in administrative costs",
    "40% increase in average credit prices"
  ]
};

const pricingTiers = [
  {
    name: "Starter",
    price: "2.5%",
    description: "Perfect for small projects getting started",
    features: [
      "Up to 10,000 credits/year",
      "Basic marketplace access",
      "Standard compliance support",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "2.0%",
    description: "Ideal for growing carbon credit portfolios",
    features: [
      "Up to 100,000 credits/year",
      "Premium marketplace access",
      "Advanced analytics",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "1.5%",
    description: "For large-scale carbon credit operations",
    features: [
      "Unlimited credits",
      "White-label solutions",
      "Custom integrations",
      "Dedicated account manager"
    ]
  }
];

interface CarbonCreditStudioProps {
  onStartProject?: () => void;
  onBackToPlatform?: () => void;
}

export function CarbonCreditStudio({ onStartProject, onBackToPlatform }: CarbonCreditStudioProps) {
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-accent-foreground rounded-2xl flex items-center justify-center">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl text-primary font-bold">
                Carbon Credit Studio
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Issue & sell durable LC02/VC02 credits on-chain with automated smart contracts and marketplace optimization
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

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Studio Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete platform for carbon credit lifecycle management and optimization
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 h-full border-none bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent-foreground rounded-xl flex items-center justify-center">
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

      {/* Marketplace Integration */}
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
              Marketplace Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Direct access to the world's largest carbon credit marketplaces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketplaces.map((marketplace, index) => (
              <motion.div
                key={marketplace.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-2">{marketplace.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{marketplace.description}</p>
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="text-xs text-muted-foreground">Annual Volume</div>
                            <div className="font-semibold text-primary">{marketplace.volume}</div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Standards</div>
                            <div className="font-semibold text-primary">{marketplace.compatibility}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1">
                        <Globe className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Integrated</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
              Simple, Success-Based Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pay only when you succeed. Our fees scale with your volume and success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full border-none bg-card/80 backdrop-blur-sm ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-8 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)] relative">
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                      <div className="text-sm text-muted-foreground">of credit value</div>
                      <p className="text-muted-foreground mt-2">{tier.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={onStartProject}
                      className={`w-full hover:scale-105 transition-transform duration-300 ${tier.popular ? '' : 'variant-outline'}`}
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
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
              How automated trading optimization generated millions in additional revenue
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
                        <div className="text-sm text-muted-foreground">Coverage</div>
                        <div className="font-semibold text-primary">{caseStudy.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Credits Issued</div>
                        <div className="font-semibold text-primary">{caseStudy.credits}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm text-muted-foreground">Total Revenue</div>
                        <div className="font-semibold text-primary text-xl">{caseStudy.revenue}</div>
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
                      className="aspect-square bg-gradient-to-br from-accent-foreground/10 to-primary/10 rounded-2xl flex items-center justify-center border border-accent-foreground/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Coins className="w-24 h-24 text-accent-foreground/30" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-foreground/5 to-primary/5 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-accent-foreground/60">
                        <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                        <div className="text-sm font-medium">Trading Analytics Dashboard</div>
                      </div>
                    </div>
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
              Ready to Maximize Revenue?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Turn your verified carbon credits into profitable assets with automated trading and optimization
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
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">40% Higher</div>
                <div className="text-sm text-muted-foreground">Revenue optimization through automated trading</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Automated marketplace monitoring</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Smart Contracts</div>
                <div className="text-sm text-muted-foreground">Blockchain-secured transactions</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Coins className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Multiple Markets</div>
                <div className="text-sm text-muted-foreground">Access global carbon exchanges</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
