import { motion } from 'motion/react';
import { Separator } from './ui/separator';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

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
}

const navigationLinks = [
  { name: "Platform", action: 'explore-platform' },
  { name: "How It Works", action: 'how-it-works' },
  { name: "Carbon Credit Studio", action: 'carbon-credit-studio' },
  { name: "Explore Carbon Credit Protocols", action: 'carbon-credit-protocols' },
  { name: "Our Team", action: 'our-team' },
  { name: "Pricing", action: 'pricing' },
  { name: "Documentation", action: 'documentation' },
  { name: "Blog", action: 'blog' },
  { name: "Contact", action: 'contact' }
];

const legalLinks = [
  { name: "Privacy Policy", action: 'privacy-policy' },
  { name: "Terms of Service", action: 'terms-of-service' },
  { name: "Cookie Policy", action: 'cookie-policy' }
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Email", icon: Mail, href: "#" }
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
  onNavigateToCarbonCreditProtocols
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
      default:
        break;
    }
  };
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          {/* Logo and Company Info */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-medium">Mālama Carbon</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Automating carbon removal through innovative technology and traditional Hawaiian land stewardship practices.
            </p>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div 
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {navigationLinks.map((link) => (
              link.action ? (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.action)}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:underline text-left"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </a>
              )
            ))}
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300 group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
            ))}
          </motion.div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>© 2025 Mālama Labs Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.action)}
                className="hover:text-primary-foreground/80 transition-colors duration-300 text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}