import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Footer } from '../Footer';
import { ArrowLeft, Check, Zap, Shield, Crown, ArrowRight, Calculator, TrendingUp, DollarSign } from 'lucide-react';

interface PricingProps {
  onBackToHome: () => void;
  onStartProject: () => void;
  onBuyerOnboarding: () => void;
  onInvestmentOnboarding: () => void;
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

const Pricing: React.FC<PricingProps> = ({ 
  onBackToHome, 
  onStartProject, 
  onBuyerOnboarding, 
  onInvestmentOnboarding,
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
}) => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small projects and testing our platform",
      icon: Zap,
      color: "bg-secondary",
      features: [
        "Up to 100 tCO2e/year project capacity",
        "Basic dMRV monitoring",
        "Community support",
        "Standard verification timeline",
        "Basic dashboard analytics",
        "Email support"
      ],
      limitations: [
        "Limited to biochar projects only",
        "No priority support",
        "Standard verification speed"
      ],
      cta: "Start Free Project",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,500",
      period: "/year",
      description: "Ideal for established projects and growing operations",
      icon: Shield,
      color: "bg-primary",
      features: [
        "Up to 5,000 tCO2e/year project capacity",
        "Advanced dMRV with IoT sensors",
        "All credit types supported",
        "Priority verification (50% faster)",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "Phone & email support",
        "Custom integration support",
        "Quarterly business reviews"
      ],
      limitations: [],
      cta: "Start Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations and institutional buyers",
      icon: Crown,
      color: "bg-gradient-to-r from-primary to-secondary",
      features: [
        "Unlimited project capacity",
        "White-label platform options",
        "Custom protocol development",
        "Priority verification (75% faster)",
        "Real-time API access",
        "Dedicated success team",
        "24/7 phone support",
        "Custom integrations & workflows",
        "SLA guarantees",
        "On-site training & support"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const buyerPricing = [
    {
      type: "Biochar Credits (LC02)",
      price: "$180-250",
      unit: "per tCO2e",
      description: "Premium biochar carbon removal with 1000+ year durability",
      features: [
        "Verified 1000+ year storage",
        "Real-time monitoring",
        "Blockchain provenance",
        "Verra VCS compliance"
      ]
    },
    {
      type: "Enhanced Rock Weathering",
      price: "$120-180",
      unit: "per tCO2e",
      description: "Natural weathering acceleration for permanent CO2 storage",
      features: [
        "Geological permanence",
        "Soil health co-benefits",
        "Measurement verification",
        "Agricultural integration"
      ]
    },
    {
      type: "Agroforestry Credits",
      price: "$80-120",
      unit: "per tCO2e",
      description: "Tree-based carbon removal with biodiversity benefits",
      features: [
        "Long-term sequestration",
        "Biodiversity impact",
        "Community co-benefits",
        "Satellite monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={onBackToHome}
            className="flex items-center gap-3 hover:bg-accent/50 text-base font-medium px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Spacer to ensure content doesn't overlap with fixed nav */}
      <div className="h-24"></div>
      
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
              Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transparent, scalable pricing for carbon credit creators and buyers. Start free and scale as your impact grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Compare Plans
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
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Pay Per Use</div>
                <div className="text-sm text-muted-foreground">Only pay for credits you generate</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">No Setup Fees</div>
                <div className="text-sm text-muted-foreground">Start immediately with free onboarding</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Scale Discounts</div>
                <div className="text-sm text-muted-foreground">Lower rates as your volume grows</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Cost Calculator</div>
                <div className="text-sm text-muted-foreground">Transparent pricing estimator</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-8">

          {/* Creator Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20 my-[120px]"
          >
            <h2 className="text-3xl font-bold text-center mb-4">For Carbon Credit Creators</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the plan that fits your project size and verification needs. 
              All plans include access to our dMRV platform and marketplace.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative"
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full ${tier.popular ? 'ring-2 ring-primary border-primary' : ''} hover:shadow-lg transition-all duration-300`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg ${tier.color} text-white`}>
                          <tier.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{tier.name}</h3>
                          <p className="text-sm text-muted-foreground">{tier.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold">{tier.price}</span>
                          {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        {tier.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        className="w-full" 
                        variant={tier.popular ? "default" : "outline"}
                        onClick={tier.name === "Enterprise" ? () => window.open('mailto:hello@malama.earth?subject=Enterprise Inquiry') : onStartProject}
                      >
                        {tier.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Buyer Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20 my-[120px]"
          >
            <h2 className="text-3xl font-bold text-center mb-4">For Carbon Credit Buyers</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              High-quality, durable carbon removal credits with full transparency and blockchain verification. 
              Prices vary based on volume, delivery timeline, and market conditions.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {buyerPricing.map((credit, index) => (
                <motion.div
                  key={credit.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold">{credit.type}</h3>
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-primary">{credit.price}</span>
                          <span className="text-sm text-muted-foreground">{credit.unit}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{credit.description}</p>
                      </div>

                      <div className="space-y-2 mb-6">
                        {credit.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={onBuyerOnboarding} className="px-8">
                  <Calculator className="w-4 h-4 mr-2" />
                  Start Buying Credits
                </Button>
                <Button size="lg" variant="outline" onClick={onInvestmentOnboarding} className="px-8">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Investment Opportunities
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Volume discounts available for purchases over 1,000 tCO2e annually
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto my-[220px]"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What's included in the platform fee?</h3>
                  <p className="text-sm text-muted-foreground">
                    Platform fees cover dMRV infrastructure, verification processing, marketplace access, 
                    blockchain transaction costs, and ongoing support.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">How do credit prices vary?</h3>
                  <p className="text-sm text-muted-foreground">
                    Prices depend on credit type, verification level, delivery timeline, purchase volume, 
                    and current market conditions. Bulk orders receive volume discounts.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I upgrade or downgrade plans?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, you can change plans at any time. Upgrades take effect immediately, 
                    while downgrades apply at your next billing cycle.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept major credit cards, bank transfers, and cryptocurrency payments. 
                    Enterprise customers can set up custom billing arrangements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Is there a money-back guarantee?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer a 30-day money-back guarantee for annual subscriptions. 
                    Carbon credit purchases are final but backed by our verification guarantee.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Do you offer custom enterprise solutions?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we provide white-label solutions, custom integrations, and dedicated infrastructure 
                    for large organizations and institutional buyers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
      </div>

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
};

export default Pricing;
