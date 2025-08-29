import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
import { 
  HeroSection,
  ContentSection,
  ThreeColumnLayout,
  CTASection,
  sectionStyles
} from '../ui/page-layout';
import { 
  Check, 
  X, 
  ArrowRight,
  Zap,
  Cpu,
  Flame,
  Coins,
  BarChart3,
  Users,
  Globe,
  Shield,
  Star
} from 'lucide-react';

interface PricingProps {
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
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
  icon: React.ElementType;
  color: string;
  cta: string;
  ctaVariant: "default" | "outline";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small carbon removal projects getting started",
    features: [
      "Up to 100 carbon credits per month",
      "Basic dMRV monitoring",
      "Standard verification protocols",
      "Email support",
      "Basic reporting dashboard"
    ],
    notIncluded: [
      "Advanced analytics",
      "Custom protocols",
      "Priority support",
      "API access"
    ],
    icon: Zap,
    color: "bg-primary",
    cta: "Get Started",
    ctaVariant: "outline"
  },
  {
    name: "Professional",
    price: "$299",
    description: "Ideal for growing projects with advanced needs",
    features: [
      "Up to 1,000 carbon credits per month",
      "Advanced dMRV monitoring",
      "Custom verification protocols",
      "Priority support",
      "Advanced analytics dashboard",
      "API access",
      "Custom integrations"
    ],
    notIncluded: [
      "Unlimited credits",
      "Dedicated account manager",
      "White-label solutions"
    ],
    popular: true,
    icon: Cpu,
    color: "bg-secondary",
    cta: "Start Free Trial",
    ctaVariant: "default"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations requiring enterprise solutions",
    features: [
      "Unlimited carbon credits",
      "Full dMRV platform access",
      "Custom protocol development",
      "Dedicated account manager",
      "White-label solutions",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment options"
    ],
    notIncluded: [],
    icon: Coins,
    color: "bg-accent",
    cta: "Contact Sales",
    ctaVariant: "outline"
  }
];

const pricingFeatures = [
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees. Pay only for what you use with clear, predictable costs."
  },
  {
    icon: Users,
    title: "Scalable Plans",
    description: "Start small and grow with flexible plans that adapt to your project size."
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "24/7 support across all time zones to help you succeed anywhere in the world."
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Enterprise-grade infrastructure and security for mission-critical operations."
  }
];

export default function Pricing({ 
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
  onStartProject
}: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const getPrice = (basePrice: string) => {
    if (basePrice === 'Custom') return 'Custom';
    const price = parseInt(basePrice.replace('$', ''));
    if (billingCycle === 'annual') {
      const annualPrice = Math.round(price * 12 * 0.8); // 20% discount
      return `$${annualPrice}`;
    }
    return basePrice;
  };

  const getBillingText = (basePrice: string) => {
    if (basePrice === 'Custom') return '';
    if (billingCycle === 'annual') {
      return '/year (save 20%)';
    }
    return '/month';
  };

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
        onNavigateToHome={() => {}}
      />

      {/* Hero Section */}
      <HeroSection
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your carbon removal project. Scale up as you grow with no hidden fees."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onStartProject}
            className={sectionStyles.button}
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onNavigateToContact}
            className={sectionStyles.button}
          >
            Contact Sales
            <Users className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Billing Toggle */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Choose Your Plan
          </h2>
          <p className={sectionStyles.subheading}>
            Flexible billing options to match your project timeline and budget
          </p>
          
          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ backgroundColor: billingCycle === 'annual' ? 'var(--primary)' : 'var(--muted)' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual
              <span className="ml-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <ThreeColumnLayout
          columns={pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-primary' : ''
              }`}>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground mb-4">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">
                        {getPrice(tier.price)}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {getBillingText(tier.price)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Not Included */}
                  {tier.notIncluded.length > 0 && (
                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-foreground">Not included:</h4>
                      <ul className="space-y-3">
                        {tier.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* CTA Button */}
                  <Button
                    variant={tier.ctaVariant}
                    className="w-full"
                    size="lg"
                    onClick={tier.name === 'Enterprise' ? onNavigateToContact : onStartProject}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        />
      </ContentSection>

      {/* Pricing Features */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Why Choose Our Platform?
          </h2>
          <p className={sectionStyles.subheading}>
            Built for carbon removal projects of all sizes with enterprise-grade reliability
          </p>
        </motion.div>

        <ThreeColumnLayout
          columns={pricingFeatures.map((feature) => (
            <Card key={feature.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <feature.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Frequently Asked Questions
          </h2>
          <p className={sectionStyles.subheading}>
            Common questions about our pricing and platform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "Can I change my plan at any time?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
            },
            {
              question: "Is there a setup fee?",
              answer: "No setup fees. You only pay for the features and carbon credits you use. We believe in transparent, fair pricing."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms for larger customers."
            },
            {
              question: "Do you offer custom pricing for large projects?",
              answer: "Absolutely! For enterprise customers and large-scale projects, we offer custom pricing and dedicated support. Contact our sales team to discuss your needs."
            },
            {
              question: "Is there a free trial available?",
              answer: "Yes, we offer a 14-day free trial for Professional plans so you can test our platform before committing."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Join leading carbon project developers who are scaling durable carbon removal with our platform"
        primaryButton={{
          text: "Start Free Trial",
          onClick: onStartProject,
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Contact Sales",
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
      />
    </div>
  );
}
