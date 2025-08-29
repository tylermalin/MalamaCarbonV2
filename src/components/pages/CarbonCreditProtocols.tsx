import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Footer } from '../Footer';
import { ArrowLeft, CheckCircle, Shield, Award, Globe, Users, Database, Zap, TreePine, Factory, Leaf, Recycle } from 'lucide-react';

const carbonStandards = [
  {
    id: 'vcs',
    name: 'Verified Carbon Standard (VCS)',
    organization: 'Verra',
    logo: '🌿',
    description: 'The most widely adopted voluntary GHG crediting standard globally.',
    focusArea: 'Broad project types; largest issuance scale',
    details: 'Supports diverse project types including forestry, energy, and agricultural initiatives. Over one billion tonnes of CO₂ reductions or removals have been verified under VCS.',
    features: [
      'Global reach and recognition',
      'Comprehensive methodology library',
      'Rigorous validation and verification',
      'Real-time registry tracking'
    ],
    icon: Globe
  },
  {
    id: 'gold-standard',
    name: 'Gold Standard (GS)',
    organization: 'Gold Standard Foundation',
    logo: '🏆',
    description: 'Designed to deliver sustainable development along with emission reductions.',
    focusArea: 'Emission reduction with SDG-aligned social/environmental impact',
    details: 'Emphasizes social and environmental co-benefits and aligns with the UN Sustainable Development Goals (SDGs).',
    features: [
      'SDG alignment and impact measurement',
      'Community development focus',
      'Premium pricing for quality',
      'Stakeholder consultation requirements'
    ],
    icon: Award
  },
  {
    id: 'acr',
    name: 'American Carbon Registry (ACR)',
    organization: 'Winrock International',
    logo: '🇺🇸',
    description: 'A robust North American standard with rigorous protocols.',
    focusArea: 'North American-focused, methodologically sound',
    details: 'Develops methodical guidelines and validates emission reduction projects with rigorous protocols.',
    features: [
      'Scientifically rigorous methodologies',
      'North American market focus',
      'Real-time transaction tracking',
      'Buffer pool management'
    ],
    icon: Shield
  },
  {
    id: 'car',
    name: 'Climate Action Reserve (CAR)',
    organization: 'Climate Action Reserve',
    logo: '🔄',
    description: 'Focused on projects in North America with verified permanence.',
    focusArea: 'U.S.-centric, ensures permanence and verification',
    details: 'Ensures real, permanent, and verifiable emission reductions with strong governance.',
    features: [
      'Permanence guarantee mechanisms',
      'Quarterly verification reporting',
      'Standardized project protocols',
      'Public registry transparency'
    ],
    icon: Database
  },
  {
    id: 'puro',
    name: 'Puro.earth',
    organization: 'Puro.earth',
    logo: '♻️',
    description: 'Specializes in engineered, durable carbon removal methods.',
    focusArea: 'Engineered carbon removal, high permanence (CORCs)',
    details: 'Certificates issued under this standard are known as CO₂ Removal Certificates (CORCs). Focus on biochar, enhanced rock weathering, and DACCS.',
    features: [
      'Engineered carbon removal focus',
      '1000+ year permanence guarantee',
      'Science-based methodologies',
      'Real-time monitoring requirements'
    ],
    icon: Recycle
  },
  {
    id: 'plan-vivo',
    name: 'Plan Vivo',
    organization: 'Plan Vivo Foundation',
    logo: '🌱',
    description: 'Geared toward community-based land-use and forestry projects.',
    focusArea: 'Community-led forestry and land projects',
    details: 'Emphasizes local social and environmental benefits with community ownership.',
    features: [
      'Community ownership model',
      'Participatory monitoring',
      'Livelihood benefits tracking',
      'Adaptive management approach'
    ],
    icon: Users
  },
  {
    id: 'woodland',
    name: 'Woodland Carbon Code (UK)',
    organization: 'Forestry Commission',
    logo: '🌲',
    description: 'A standard tailored for woodland creation projects in the UK.',
    focusArea: 'UK woodland creation, strong governance',
    details: 'Pairs robust governance with mandatory long-term management and validation.',
    features: [
      'UK-specific regulations compliance',
      'Long-term management plans',
      'Independent validation',
      'Biodiversity co-benefits'
    ],
    icon: TreePine
  },
  {
    id: 'nfs',
    name: 'Natural Forest Standard (NFS)',
    organization: 'Natural Forest Standard',
    logo: '🏞️',
    description: 'Focuses on medium-to-large-scale REDD+ projects.',
    focusArea: 'REDD+ with biodiversity and social integration',
    details: 'Combined emphasis on biodiversity, social benefits, and carbon integrity. Annual third-party verification is required.',
    features: [
      'REDD+ specialization',
      'Biodiversity monitoring',
      'Social impact assessment',
      'Annual verification cycles'
    ],
    icon: Leaf
  }
];

const complianceSchemes = [
  {
    name: 'Clean Development Mechanism (CDM)',
    organization: 'UNFCCC',
    description: 'Under the Kyoto Protocol, CDM issued Certified Emission Reductions (CERs) for projects in developing countries.',
    type: 'Compliance/Legacy'
  },
  {
    name: 'Core Carbon Principles (CCPs)',
    organization: 'ICVCM',
    description: 'Not a standard per se, but a set of science-based integrity criteria setting a benchmark for high-quality carbon credits.',
    type: 'Integrity Framework'
  }
];

interface CarbonCreditProtocolsProps {
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
}

export function CarbonCreditProtocols({
  onBackToHome,
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
  onNavigateToCarbonCreditStudio
}: CarbonCreditProtocolsProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBackToHome}
              className="flex items-center gap-2 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="text-sm text-muted-foreground">
              Carbon Credit Protocols
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed nav */}
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
              Carbon Credit Protocols
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              A comprehensive reference guide to leading voluntary carbon standards, compliance schemes, and integrity frameworks shaping the global carbon credit landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Award className="w-5 h-5 mr-2" />
                Explore Standards
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
                onClick={onNavigateToCarbonCreditStudio}
              >
                Carbon Credit Studio
                <Factory className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">8+ Standards</div>
                <div className="text-sm text-muted-foreground">Leading certification bodies</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">1B+ Tonnes</div>
                <div className="text-sm text-muted-foreground">CO₂ verified under VCS alone</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Global Reach</div>
                <div className="text-sm text-muted-foreground">Worldwide coverage and recognition</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">High Integrity</div>
                <div className="text-sm text-muted-foreground">Rigorous validation and verification</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Standards Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary font-bold">
              Leading Voluntary Carbon Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive overview of the major carbon credit certification bodies and their unique approaches to environmental integrity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {carbonStandards.map((standard, index) => (
              <motion.div
                key={standard.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                        {standard.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {standard.name}
                        </h3>
                        <Badge variant="secondary" className="mb-2">
                          {standard.organization}
                        </Badge>
                        <p className="text-muted-foreground text-sm">
                          {standard.focusArea}
                        </p>
                      </div>
                      <standard.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    
                    <p className="text-foreground/80 mb-4">
                      {standard.description}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-6">
                      {standard.details}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2">
                        {standard.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Schemes Section */}
      <section className="py-16 px-6 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary font-bold">
              Compliance & Global Schemes
            </h2>
            <p className="text-xl text-muted-foreground">
              International frameworks and integrity benchmarks for carbon market governance.
            </p>
          </motion.div>

          <div className="space-y-6">
            {complianceSchemes.map((scheme, index) => (
              <motion.div
                key={scheme.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold">{scheme.name}</h3>
                          <Badge variant="outline">{scheme.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{scheme.organization}</p>
                        <p className="text-foreground/80">{scheme.description}</p>
                      </div>
                      <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Insights Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-primary font-bold">
              Strategic Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Key takeaways for navigating the carbon credit landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">Coverage Spectrum</h3>
                  <p className="text-sm text-muted-foreground">
                    VCS and Gold Standard serve as broad-stroke voluntary standards, while Puro.earth, Plan Vivo, and NFS provide specialized frameworks for distinct removal or conservation approaches.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">Verification Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Most programs utilize independent third-party validation (ISO 14064 frameworks), with CCPs adding an overarching layer of credibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3">Market Influence</h3>
                  <p className="text-sm text-muted-foreground">
                    VCS leads in volume, Gold Standard stands out for community benefits, Puro.earth establishes robust removals standards, and CCP-backed systems ensure governance integrity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
      />
    </div>
  );
}
