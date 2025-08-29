import React from 'react';
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
  Mail, 
  Linkedin, 
  ArrowRight,
  Users,
  Building2,
  Globe,
  Zap,
  CheckCircle
} from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  linkedin?: string;
  email?: string;
  image?: string;
}

interface OurTeamProps {
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

const teamMembers: TeamMember[] = [
  {
    name: "Tyler Malin",
    title: "Founder, Chief Operating Officer & General Counsel (COO/GC)",
    description: "Tyler is a serial entrepreneur with two decades of experience launching and scaling mission-driven ventures. He has founded five companies and achieved two successful exits, including growing Idea Farmer into a Top 10 company on the Inc. 500 list. At Mālama Labs, Tyler leads operations, legal strategy, and partnership growth—bringing together technical fluency, legal acumen, and startup grit to power the company's ambitious roadmap.",
    linkedin: "https://linkedin.com/in/tylermalin",
    email: "tyler@malama.earth"
  },
  {
    name: "Dominick Garey",
    title: "Founder & Chief Technology Officer",
    description: "Full-stack developer and blockchain architect. Deep Web3 expertise. Technical leader for dMRV platform and carbon marketplace. System integration & protocol development.",
    email: "dominick@malama.earth"
  },
  {
    name: "Jeffrey Wise",
    title: "Founder and Chief Communications Officer",
    description: "Jeffrey brings deep communications and operational experience to Mālama Labs. He combines hands-on agricultural knowledge with strategic leadership, drawing from his deep roots in Hawai'i's farming ecosystem.",
    email: "jeffrey@malama.earth"
  }
];

const companyValues = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "We believe in the power of diverse perspectives and collaborative problem-solving to tackle complex climate challenges."
  },
  {
    icon: Building2,
    title: "Mission-Driven",
    description: "Every decision we make is guided by our commitment to accelerate the transition to a sustainable, carbon-negative future."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We're building solutions that can scale globally, making carbon removal accessible to projects worldwide."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We continuously push the boundaries of what's possible in carbon measurement, verification, and trading."
  }
];

const teamStats = [
  { label: "Years Combined Experience", value: "40+", icon: CheckCircle },
  { label: "Successful Companies Founded", value: "5+", icon: CheckCircle },
  { label: "Countries Represented", value: "3", icon: CheckCircle },
  { label: "Carbon Projects Supported", value: "100+", icon: CheckCircle }
];

export default function OurTeam({ 
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
}: OurTeamProps) {
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
        title="Our Team"
        subtitle="Meet the passionate innovators behind Mālama Carbon, dedicated to transforming carbon markets and accelerating climate solutions."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={onStartProject}
            className={sectionStyles.button}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 mr-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onNavigateToContact}
            className={sectionStyles.button}
          >
            Get in Touch
            <Mail className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Team Stats */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Team Excellence
          </h2>
          <p className={sectionStyles.subheading}>
            Decades of combined experience in entrepreneurship, climate tech, and carbon markets
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Team Members */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Leadership Team
          </h2>
          <p className={sectionStyles.subheading}>
            Experienced entrepreneurs and climate innovators driving our mission forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                    <p className="text-lg text-muted-foreground font-medium">{member.title}</p>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {member.email && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </Button>
                    )}
                    
                    {member.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Company Values */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Our Values
          </h2>
          <p className={sectionStyles.subheading}>
            The principles that guide our mission and shape our culture
          </p>
        </motion.div>

        <ThreeColumnLayout
          columns={companyValues.map((value) => (
            <Card key={value.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Join Our Team */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Join Our Mission
          </h2>
          <p className={sectionStyles.subheading}>
            We're always looking for passionate individuals who want to make a difference in climate tech
          </p>
        </motion.div>

        <Card className={sectionStyles.card}>
          <CardContent className={sectionStyles.cardContent}>
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Open Positions</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're building a world-class team to tackle the biggest challenge of our time. 
                If you're passionate about climate solutions and want to work with cutting-edge technology, 
                we'd love to hear from you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">What we offer:</h4>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Competitive compensation and equity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Remote-first work environment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Flexible working hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Professional development opportunities</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Current openings:</h4>
                  <div className="space-y-3 text-left">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-medium text-foreground">Senior Software Engineer</h5>
                      <p className="text-sm text-muted-foreground">Full-stack development, remote</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-medium text-foreground">Climate Science Specialist</h5>
                      <p className="text-sm text-muted-foreground">Carbon removal methodologies, hybrid</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <h5 className="font-medium text-foreground">Business Development Manager</h5>
                      <p className="text-sm text-muted-foreground">Partnership growth, remote</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={onNavigateToContact}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Your Resume
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onNavigateToContact}
                  className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  General Inquiry
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        subtitle="Join us in building the future of carbon markets and climate solutions"
        primaryButton={{
          text: "Start Your Project",
          onClick: onStartProject,
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Contact Our Team",
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
