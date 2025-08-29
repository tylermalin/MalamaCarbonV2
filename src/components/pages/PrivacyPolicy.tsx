import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Footer } from '../Footer';
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Globe, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
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

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ 
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
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, submit a project, purchase carbon credits, or contact us. This may include your name, email address, phone number, company information, and payment details."
        },
        {
          subtitle: "Project Data",
          text: "For carbon credit projects, we collect technical data including land use information, monitoring sensor data, verification documents, and project performance metrics necessary for carbon credit generation and verification."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about how you use our platform, including log data, device information, browser type, IP address, and interaction patterns with our services."
        },
        {
          subtitle: "Blockchain Data",
          text: "Transaction data related to carbon credit issuance, transfers, and trading activities are recorded on blockchain networks and may be publicly accessible."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our carbon credit platform, process transactions, verify projects, and facilitate carbon credit trading."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you updates about your projects, platform changes, and important notices related to our services."
        },
        {
          subtitle: "Compliance and Verification",
          text: "Your information may be used for compliance with legal requirements, fraud prevention, and third-party verification of carbon credit projects."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to improve our platform, develop new features, and enhance user experience while maintaining privacy protections."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Globe,
      content: [
        {
          subtitle: "Third-Party Verifiers",
          text: "We share necessary project information with accredited third-party verification bodies to ensure carbon credit authenticity and compliance with international standards."
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted service providers who assist in platform operations, payment processing, and technical infrastructure, under strict confidentiality agreements."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, to protect our rights, or to ensure the safety and security of our users and platform."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction, with continued privacy protection."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Technical Safeguards",
          text: "We implement industry-standard security measures including encryption, secure data transmission, access controls, and regular security audits to protect your information."
        },
        {
          subtitle: "Access Controls",
          text: "Access to personal information is restricted to authorized personnel who need the information to perform their job functions, and all access is logged and monitored."
        },
        {
          subtitle: "Data Retention",
          text: "We retain personal information only as long as necessary to provide services, comply with legal obligations, and maintain business records as required by carbon credit standards."
        },
        {
          subtitle: "Incident Response",
          text: "We have procedures in place to detect, respond to, and notify users of any data security incidents that may affect their personal information."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly."
        },
        {
          subtitle: "Data Portability",
          text: "You may request a copy of your personal data in a commonly used, machine-readable format, subject to technical and legal limitations."
        },
        {
          subtitle: "Deletion Rights",
          text: "You may request deletion of your personal information, though some data may need to be retained for legal compliance, carbon credit verification, or blockchain immutability."
        },
        {
          subtitle: "Marketing Communications",
          text: "You can opt out of marketing communications at any time through your account settings or by using unsubscribe links in our emails."
        }
      ]
    },
    {
      title: "International Transfers",
      icon: Globe,
      content: [
        {
          subtitle: "Cross-Border Data Transfers",
          text: "Your information may be transferred to and processed in countries other than your residence. We ensure appropriate safeguards are in place for international transfers."
        },
        {
          subtitle: "Adequacy Decisions",
          text: "We rely on adequacy decisions, standard contractual clauses, and other approved transfer mechanisms to ensure your data receives adequate protection during international transfers."
        }
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
      
      <div className="container mx-auto px-8 max-w-5xl py-8">

          {/* Quick Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Quick Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What we collect:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Account and contact information</li>
                      <li>• Carbon project technical data</li>
                      <li>• Platform usage analytics</li>
                      <li>• Payment and transaction details</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">How we protect it:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• End-to-end encryption</li>
                      <li>• Strict access controls</li>
                      <li>• Regular security audits</li>
                      <li>• Compliance with global standards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Sections */}
          <div className="space-y-8">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>

                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <h3 className="text-lg font-semibold mb-2">{item.subtitle}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have any questions about this Privacy Policy, our data practices, 
                  or wish to exercise your rights regarding your personal information, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.open('mailto:privacy@malama.earth')}>
                    <Shield className="w-4 h-4 mr-2" />
                    Email Privacy Team
                  </Button>
                  <Button variant="outline" onClick={() => window.open('mailto:hello@malama.earth')}>
                    <FileText className="w-4 h-4 mr-2" />
                    General Contact
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>Mālama Labs Privacy Officer</p>
                  <p>Email: privacy@malama.earth</p>
                  <p>Response time: Within 30 days</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Version History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Policy Updates</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span>Version 2.0 - Enhanced blockchain privacy provisions</span>
                    <span className="text-muted-foreground">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                    <span>Version 1.1 - International transfer updates</span>
                    <span className="text-muted-foreground">September 1, 2023</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                    <span>Version 1.0 - Initial privacy policy</span>
                    <span className="text-muted-foreground">March 1, 2023</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We will notify users of material changes to this policy via email and platform notifications.
                </p>
              </CardContent>
            </Card>
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

export default PrivacyPolicy;
