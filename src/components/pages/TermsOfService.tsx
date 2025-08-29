import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Footer } from '../Footer';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

interface TermsOfServiceProps {
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

const TermsOfService: React.FC<TermsOfServiceProps> = ({ 
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
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        {
          text: "By accessing or using the Mālama Labs platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform."
        },
        {
          text: "These terms apply to all users of the platform, including but not limited to carbon credit creators, buyers, verifiers, and partners. Different user types may have additional specific terms applicable to their use case."
        }
      ]
    },
    {
      title: "Platform Services",
      icon: FileText,
      content: [
        {
          subtitle: "Carbon Credit Creation",
          text: "Our platform provides tools for measuring, reporting, and verifying carbon removal projects. We facilitate the creation of carbon credits through our digital MRV (dMRV) system, but do not guarantee credit generation or market acceptance."
        },
        {
          subtitle: "Marketplace Services",
          text: "We operate a marketplace for trading verified carbon credits. All transactions are subject to verification requirements, compliance standards, and market conditions. We reserve the right to suspend or terminate trading activities that violate our standards."
        },
        {
          subtitle: "Technical Infrastructure",
          text: "We provide blockchain-based infrastructure, IoT monitoring systems, and API access for carbon credit management. Service availability and performance are subject to maintenance schedules and technical limitations."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Accurate Information",
          text: "You must provide accurate, complete, and current information when creating projects, submitting data, or engaging in transactions. False or misleading information may result in account suspension or termination."
        },
        {
          subtitle: "Compliance",
          text: "You must comply with all applicable laws, regulations, and industry standards related to carbon credits, environmental reporting, and financial transactions in your jurisdiction."
        },
        {
          subtitle: "Project Integrity",
          text: "For carbon credit creators, you must ensure your projects meet all stated methodological requirements, maintain accurate records, and provide access for verification activities."
        }
      ]
    },
    {
      title: "Platform Rules",
      icon: Scale,
      content: [
        {
          subtitle: "Prohibited Activities",
          text: "Users may not engage in fraud, manipulation, double-counting of credits, unauthorized access to systems, or any activity that compromises platform integrity or other users' interests."
        },
        {
          subtitle: "Content Standards",
          text: "All content uploaded to the platform must be accurate, relevant, and comply with our content guidelines. We reserve the right to remove content that violates these standards."
        },
        {
          subtitle: "Trading Rules",
          text: "All carbon credit transactions must comply with applicable regulations and our marketplace rules. Market manipulation, false reporting, or fraudulent transactions are strictly prohibited."
        }
      ]
    },
    {
      title: "Verification and Compliance",
      icon: Shield,
      content: [
        {
          subtitle: "Third-Party Verification",
          text: "Carbon credits generated through our platform are subject to third-party verification by accredited verification bodies. We do not guarantee verification outcomes or timeline."
        },
        {
          subtitle: "Compliance Monitoring",
          text: "We monitor platform activity for compliance with terms, applicable regulations, and industry standards. Users consent to such monitoring as a condition of platform use."
        },
        {
          subtitle: "Regulatory Changes",
          text: "Carbon credit regulations are evolving. Users are responsible for staying informed of regulatory changes that may affect their activities on the platform."
        }
      ]
    },
    {
      title: "Financial Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Platform Fees",
          text: "Use of our platform is subject to fees as outlined in our pricing schedule. Fees may change with notice. Unpaid fees may result in service suspension."
        },
        {
          subtitle: "Transaction Processing",
          text: "We facilitate transactions but are not a party to contracts between buyers and sellers. Transaction fees, payment processing, and settlement terms apply as specified in our marketplace rules."
        },
        {
          subtitle: "Refunds and Disputes",
          text: "Refund policies vary by service type. Disputes regarding transactions will be handled according to our dispute resolution procedures. Carbon credit sales are generally final once verified and delivered."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: [
        {
          subtitle: "Platform Rights",
          text: "All intellectual property rights in the platform, including software, algorithms, and methodologies, remain our property or that of our licensors. Users receive limited rights to use the platform as specified herein."
        },
        {
          subtitle: "User Content",
          text: "Users retain ownership of their project data and content but grant us necessary rights to operate the platform, perform verification activities, and comply with regulatory requirements."
        },
        {
          subtitle: "Feedback and Improvements",
          text: "Feedback and suggestions provided to us may be used for platform improvement without compensation or attribution, unless otherwise agreed in writing."
        }
      ]
    },
    {
      title: "Disclaimers and Limitations",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Availability",
          text: "We provide the platform 'as is' without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or specific outcomes from platform use."
        },
        {
          subtitle: "Market Risks",
          text: "Carbon credit values may fluctuate. We do not guarantee market prices, demand, or liquidity for carbon credits generated or traded through our platform."
        },
        {
          subtitle: "Limitation of Liability",
          text: "Our liability to users is limited to the greatest extent permitted by law. We are not liable for indirect, consequential, or punitive damages arising from platform use."
        },
        {
          subtitle: "Third-Party Services",
          text: "The platform may integrate with third-party services. We are not responsible for third-party service performance, availability, or compliance with these terms."
        }
      ]
    },
    {
      title: "Termination",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Termination Rights",
          text: "Either party may terminate the agreement with notice. We may immediately suspend or terminate accounts for violations of these terms, illegal activity, or platform security reasons."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use the platform ceases. Data retention and deletion will be handled according to our privacy policy and applicable legal requirements."
        },
        {
          subtitle: "Survival",
          text: "Certain provisions, including intellectual property rights, liability limitations, and dispute resolution procedures, survive termination of the agreement."
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800 shadow-lg">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4">
                      Important Legal Notice
                    </h3>
                    <p className="text-lg text-orange-800 dark:text-orange-200 leading-relaxed">
                      These terms constitute a legally binding agreement. By using our platform, you agree to these terms 
                      and our Privacy Policy. If you disagree with any part of these terms, please do not use our services. 
                      For questions about specific terms, please consult with legal counsel or contact our legal team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                  <CardContent className="p-10 md:p-12">
                    <div className="flex items-center gap-6 mb-10">
                      <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl">
                        <section.icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="border-l-4 border-primary/20 pl-8">
                          {item.subtitle && (
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                              {item.subtitle}
                            </h3>
                          )}
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Governing Law and Dispute Resolution</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Governing Law</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      These terms are governed by the laws of the State of Hawaii, United States, 
                      without regard to conflict of law principles.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Dispute Resolution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Any disputes arising from these terms or platform use will be resolved through 
                      binding arbitration in accordance with the rules of the American Arbitration Association. 
                      The arbitration will be conducted in Maui, Hawaii, or virtually at the parties' agreement.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Class Action Waiver</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to resolve disputes individually and waive any right to participate in 
                      class action lawsuits or class-wide arbitrations against Mālama Labs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Legal Questions?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have questions about these terms, need clarification on specific provisions, 
                  or require legal documentation for your organization, please contact our legal team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.open('mailto:legal@malama.earth')}>
                    <Scale className="w-4 h-4 mr-2" />
                    Contact Legal Team
                  </Button>
                  <Button variant="outline" onClick={() => window.open('mailto:hello@malama.earth')}>
                    <FileText className="w-4 h-4 mr-2" />
                    General Contact
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>Mālama Labs Legal Department</p>
                  <p>Email: legal@malama.earth</p>
                  <p>Response time: Within 5 business days</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Changes to Terms</h3>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time. Material changes will be 
                  communicated to users via email and platform notifications at least 30 days before 
                  taking effect. Continued use of the platform after changes constitutes acceptance 
                  of the new terms.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded-lg">
                    <span>Version 2.1 - Enhanced marketplace terms</span>
                    <span className="text-muted-foreground">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                    <span>Version 2.0 - Blockchain integration updates</span>
                    <span className="text-muted-foreground">September 1, 2023</span>
                  </div>
                </div>
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

export default TermsOfService;
