import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { 
  Zap,
  BarChart3,
  Cpu,
  Flame,
  Coins,
  BookOpen,
  HelpCircle,
  Users,
  Building2,
  Shield,
  FileText,
  Cookie
} from 'lucide-react';
import malamaLogo from '../assets/37a47935d44775c05b14ffaa2c0ff28eb3dc4288.png';

interface FooterProps {
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
  onNavigateToHome?: () => void;
  onNavigateToFAQ?: () => void;
  onNavigateToCareers?: () => void;
}

const footerSections = [
  {
    title: "Products",
    links: [
      { name: "Platform Overview", action: 'explore-platform', icon: BarChart3 },
      { name: "Carbon Credit Studio", action: 'carbon-credit-studio', icon: Coins },
      { name: "Carbon Protocols", action: 'carbon-credit-protocols', icon: Flame },
      { name: "dMRV Engine", action: 'dmrv-engine', icon: Cpu }
    ]
  },
  {
    title: "Learn",
    links: [
      { name: "How It Works", action: 'how-it-works', icon: BookOpen },
      { name: "Documentation", action: 'documentation', icon: BookOpen },
      { name: "Blog", action: 'blog', icon: BookOpen },
      { name: "FAQ", action: 'faq', icon: HelpCircle }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", action: 'about', icon: Building2 },
      { name: "Our Team", action: 'our-team', icon: Users },
      { name: "Contact", action: 'contact', icon: Building2 },
      { name: "Careers", action: 'careers', icon: Users }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", action: 'privacy-policy', icon: Shield },
      { name: "Terms of Service", action: 'terms-of-service', icon: FileText },
      { name: "Cookie Policy", action: 'cookie-policy', icon: Cookie }
    ]
  }
];

export function Footer({
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
  onStartProject,
  onNavigateToHome,
  onNavigateToFAQ,
  onNavigateToCareers
}: FooterProps) {
  const handleNavigation = (action?: string) => {
    switch (action) {
      case 'explore-platform':
        onExplorePlatform?.();
        break;
      case 'how-it-works':
        onHowItWorks?.();
        break;
      case 'our-team':
        onNavigateToTeam?.();
        break;
      case 'pricing':
        onNavigateToPricing?.();
        break;
      case 'documentation':
        onNavigateToDocumentation?.();
        break;
      case 'blog':
        onNavigateToBlog?.();
        break;
      case 'contact':
        onNavigateToContact?.();
        break;
      case 'privacy-policy':
        onNavigateToPrivacy?.();
        break;
      case 'terms-of-service':
        onNavigateToTerms?.();
        break;
      case 'cookie-policy':
        onNavigateToCookies?.();
        break;
      case 'carbon-credit-studio':
        onNavigateToCarbonCreditStudio?.();
        break;
      case 'carbon-credit-protocols':
        onNavigateToCarbonCreditProtocols?.();
        break;
      case 'dmrv-engine':
        onNavigateToDMRVEngine?.();
        break;
      default:
        console.log('No matching action for:', action);
        break;
    }
  };

  return (
    <footer className="text-primary-foreground py-16 px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Logo, Description, and CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          {/* Logo and Description */}
          <motion.div 
            className="flex flex-col max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button
              onClick={onNavigateToHome}
              className="w-fit hover:opacity-80 transition-opacity duration-200"
            >
              <img 
                src={malamaLogo} 
                alt="Mālama Labs"
                className="w-auto object-contain mb-6"
                style={{
                  width: '250px',
                  height: '250px'
                }}
              />
            </button>
            <h3 className="text-2xl font-bold mb-4">Mālama Carbon</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering carbon project developers with AI-powered measurement, verification, and trading tools for durable carbon removal credits.
            </p>
            
            {/* CTA Button */}
            <Button
              onClick={onStartProject}
              size="lg"
              variant="secondary"
              className="w-fit bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Project
            </Button>
          </motion.div>
          
          {/* Footer Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Products</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigateToHome()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Platform Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToCarbonCreditStudio()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Carbon Credit Studio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToCarbonCreditProtocols()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Carbon Protocols
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToDMRVEngine()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    dMRV Engine
                  </button>
                </li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Learn</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onHowItWorks()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToDocumentation()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Documentation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToBlog()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToFAQ()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Company</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigateToHome()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToTeam()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToContact()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToCareers()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => onNavigateToPrivacy()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToTerms()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToCookies()}
                    className="text-primary-foreground/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Cookie Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Copyright Only */}
        <motion.div 
          className="pt-8 border-t border-primary-foreground/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Mālama Labs. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1">
              Building the future of carbon markets
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}