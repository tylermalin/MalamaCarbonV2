import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Footer } from '../Footer';
import { ArrowLeft, Calendar, DollarSign, Mail, Phone, Users, Linkedin, ExternalLink } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

interface OurTeamProps {
  onBackToHome: () => void;
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

const OurTeam: React.FC<OurTeamProps> = ({ 
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
  onNavigateToCookies
}) => {
  const teamMembers: TeamMember[] = [
    {
      name: "James Dawson",
      title: "Chief Executive Officer (CEO)",
      description: "James is a seasoned technology executive with over 25 years of leadership across venture-backed startups and global enterprises. As CEO of PreAct Technologies and former CRO/VP at firms like Cisco Jasper, Civil Maps, and Agero, he brings a proven track record in scaling teams, driving revenue, and delivering innovative customer solutions. A 10-year U.S. Navy veteran, James combines operational discipline with deep industry insight to lead Mālama Labs into its next phase of growth.",
      linkedin: "https://linkedin.com/in/jamesdawson",
      email: "james@malama.earth"
    },
    {
      name: "Paul Apao",
      title: "Founder, Chief Strategy Officer (CSO)",
      description: "Paul is a seasoned agricultural leader with strong community ties across Hawai'i. As the proprietor of a 500+ acre organic macadamia nut farm on Maui, he brings unmatched land-based experience to the team. Paul's strategic focus is on forging high-trust partnerships with local stakeholders, and his leadership in both agricultural practice and community development plays a pivotal role in Mālama Labs' expansion and credibility.",
      linkedin: "https://linkedin.com/in/paulapao",
      email: "paul@malama.earth"
    },
    {
      name: "Dominick Garey",
      title: "Founder, Chief Technology Officer (CTO)",
      description: "Dominick is a full-stack developer and blockchain systems architect with deep expertise in Web3 integrations and infrastructure. His technical leadership drives the design and deployment of Mālama's digital MRV platform and blockchain-based carbon marketplace. Dominick specializes in system integration, protocol development, and scalable tech architecture that bridges decentralized technologies with real-world impact.",
      linkedin: "https://linkedin.com/in/dominickgarey",
      email: "dominick@malama.earth"
    },
    {
      name: "Derrick Oatway",
      title: "Founder, Chief Product Officer (CPO)",
      description: "Derrick leads product strategy and development at Mālama Labs with a focus on user-centric software platforms that support carbon credit generation. His dual background in software engineering and construction management enables him to connect traditional industries with blockchain innovation. Derrick ensures that Mālama's technology remains intuitive, scalable, and aligned with market demands in both agriculture and climate finance.",
      linkedin: "https://linkedin.com/in/derrickoatway",
      email: "derrick@malama.earth"
    },
    {
      name: "Tyler Malin",
      title: "Founder, Chief Operating Officer & General Counsel (COO/GC)",
      description: "Tyler is a serial entrepreneur with two decades of experience launching and scaling mission-driven ventures. He has founded five companies and achieved two successful exits, including growing Idea Farmer into a Top 10 company on the Inc. 500 list. At Mālama Labs, Tyler leads operations, legal strategy, and partnership growth—bringing together technical fluency, legal acumen, and startup grit to power the company's ambitious roadmap.",
      linkedin: "https://linkedin.com/in/tylermalin",
      email: "tyler@malama.earth"
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
      
      <div className="pt-20 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8" />
              <h1 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
                Meet Our Team
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate group of innovators, technologists, and sustainability champions driving 
              Mālama Carbon forward—each with a vision for a more regenerative future.
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="grid gap-12 mb-24">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-10">
                    <div className="flex flex-col md:flex-row gap-8 py-6">
                      {/* Profile Image Placeholder */}
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/20">
                          <div className="text-3xl font-bold text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {member.name}
                        </h3>
                        <div className="text-lg font-medium text-primary mb-4">
                          {member.title}
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {member.description}
                        </p>
                        
                        {/* Contact Links */}
                        <div className="flex items-center gap-4 pt-4 border-t border-border/20">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group"
                            >
                              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-sm font-medium">LinkedIn</span>
                              <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                          )}
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group"
                            >
                              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              <span className="text-sm font-medium">{member.email}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call-to-Action Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Schedule Appointment */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Schedule an Appointment</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Ready to discuss your carbon credit project? Book a consultation with our team 
                    to explore how Mālama Labs can help scale your carbon removal initiatives.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => window.open('https://www.getclockwise.com/c/tyler-malamaproject-org/quick-meeting', '_blank')}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Consultation
                    </Button>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        (808) 555-0123
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        hello@malama.earth
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Investment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <DollarSign className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Invest with Us</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Join us in scaling the future of carbon removal. We're partnering with 
                    forward-thinking investors to democratize access to high-quality carbon credits.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" size="lg">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Investment Opportunities
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      Series A fundraising now open
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Join Our Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Want to join our team?</h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who share our vision 
                  for a more sustainable future. Join us in revolutionizing carbon removal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    <Users className="w-4 h-4 mr-2" />
                    View Open Positions
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Your Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
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

export default OurTeam;
