import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
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

export function CarbonCreditStudio({ 
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
}: CarbonCreditStudioProps) {
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
          if (page === 'dmrv-engine') onExplorePlatform?.();
          if (page === 'carbon-credit-studio') onNavigateToCarbonCreditStudio?.();
          if (page === 'carbon-credit-protocols') onNavigateToCarbonCreditProtocols?.();
          if (page === 'onboarding') onStartProject?.();
        }}
        onStartProject={onStartProject || (() => {})}
        onSignIn={() => {}}
        onRegister={() => {}}
        showBackToHome={true}
        onNavigateToHome={onBackToPlatform}
      />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <Coins className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold">
                Carbon Credit Studio
              </h1>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Issue & sell durable LC02/VC02 credits on-chain with automated smart contracts and marketplace optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={onStartProject}
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="p-6">
                  <benefit.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{benefit.title}</div>
                  <div className="text-sm font-medium mb-2">{benefit.metric}</div>
                  <div className="text-xs">{benefit.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-6 font-bold">
              Studio Features
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Complete platform for carbon credit lifecycle management and optimization
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Integration */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-6 font-bold">
              Marketplace Integration
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Direct access to the world's largest carbon credit marketplaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketplaces.map((marketplace, index) => (
              <div key={marketplace.name}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{marketplace.name}</h3>
                        <p className="text-sm mb-3">{marketplace.description}</p>
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="text-xs">Annual Volume</div>
                            <div className="font-semibold">{marketplace.volume}</div>
                          </div>
                          <div>
                            <div className="text-xs">Standards</div>
                            <div className="font-semibold">{marketplace.compatibility}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm font-medium">Integrated</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-6 font-bold">
              Simple, Success-Based Pricing
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Pay only when you succeed. Our fees scale with your volume and success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={tier.name}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      {tier.popular && (
                        <div className="mb-4">
                          <div className="px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </div>
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold mb-2">{tier.price}</div>
                      <div className="text-sm">of credit value</div>
                      <p className="mt-2">{tier.description}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={onStartProject}
                      className="w-full"
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-6 font-bold">
              Success Story
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              How automated trading optimization generated millions in additional revenue
            </p>
          </div>

          <div>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{caseStudy.title}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm">Coverage</div>
                        <div className="font-semibold">{caseStudy.location}</div>
                      </div>
                      <div>
                        <div className="text-sm">Credits Issued</div>
                        <div className="font-semibold">{caseStudy.credits}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-sm">Total Revenue</div>
                        <div className="font-semibold text-xl">{caseStudy.revenue}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {caseStudy.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square flex items-center justify-center">
                      <Coins className="w-24 h-24" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                        <div className="text-sm font-medium">Trading Analytics Dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-5xl md:text-7xl mb-6 font-bold">
              Ready to Maximize Revenue?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Turn your verified carbon credits into profitable assets with automated trading and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={onStartProject}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={onBackToPlatform}
              >
                Back to Platform
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">40% Higher</div>
                <div className="text-sm">Revenue optimization through automated trading</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm">Automated marketplace monitoring</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">Smart Contracts</div>
                <div className="text-sm">Blockchain-secured transactions</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Coins className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">Multiple Markets</div>
                <div className="text-sm">Access global carbon exchanges</div>
              </CardContent>
            </Card>
          </div>
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
