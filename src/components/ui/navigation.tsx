import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Cpu,
  Flame,
  Coins,
  BarChart3,
  BookOpen,
  HelpCircle,
  Users,
  Building2,
  Zap,
  LogIn,
  UserPlus
} from 'lucide-react';

interface NavigationProps {
  onNavigateToPage: (page: PageView) => void;
  onStartProject: () => void;
  onSignIn: () => void;
  onRegister: () => void;
  currentPage?: PageView;
  user?: any;
  onSignOut?: () => void;
}

type PageView = 'home' | 'dashboard' | 'onboarding' | 'buyer-onboarding' | 'investment-onboarding' | 'explore-platform' | 'how-it-works' | 'dmrv-engine' | 'biochar-protocols' | 'carbon-credit-studio' | 'carbon-credit-protocols' | 'dashboard-prompt' | 'our-team' | 'contact' | 'pricing' | 'documentation' | 'blog' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy' | 'faq' | 'careers' | 'about';

interface NavItem {
  label: string;
  href?: string;
  action?: PageView;
  icon?: React.ElementType;
  children?: NavItem[];
}

const mainNavItems: NavItem[] = [
  {
    label: "Platform",
    action: "explore-platform" as PageView,
    children: [
      { label: "Overview", action: "explore-platform" as PageView, icon: BarChart3 },
      { label: "dMRV Engine", action: "dmrv-engine" as PageView, icon: Cpu },
      { label: "Carbon Credit Studio", action: "carbon-credit-studio" as PageView, icon: Coins },
    ]
  },
  {
    label: "How It Works",
    action: "how-it-works" as PageView
  },
  {
    label: "For Projects",
    action: "explore-platform" as PageView,
    children: [
      { label: "Carbon Credit Protocols", action: "carbon-credit-protocols" as PageView, icon: Flame },
      { label: "Start a Project", action: "onboarding" as PageView, icon: Zap },
    ]
  },
  {
    label: "For Buyers",
    action: "explore-platform" as PageView,
    children: [
      { label: "Explore Credits", action: "explore-platform" as PageView, icon: Coins },
      { label: "LC02/VC02 Marketplace", action: "explore-platform" as PageView, icon: BarChart3 },
    ]
  },
  {
    label: "Resources",
    action: "explore-platform" as PageView,
    children: [
      { label: "Blog", action: "blog" as PageView, icon: BookOpen },
      { label: "Documentation", action: "documentation" as PageView, icon: BookOpen },
      { label: "FAQ", action: "faq" as PageView, icon: HelpCircle },
    ]
  },
  {
    label: "Company",
    action: "explore-platform" as PageView,
    children: [
      { label: "About Us", action: "about" as PageView, icon: Building2 },
      { label: "Team", action: "our-team" as PageView, icon: Users },
      { label: "Partners", action: "explore-platform" as PageView, icon: Building2 },
      { label: "Careers", action: "careers" as PageView, icon: Users },
    ]
  }
];

export function Navigation({ 
  onNavigateToPage, 
  onStartProject, 
  onSignIn, 
  onRegister,
  currentPage,
  user,
  onSignOut
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleNavAction = (action: PageView) => {
    onNavigateToPage(action);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  const isDropdownOpen = (label: string) => openDropdown === label;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between w-full px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
        {/* Left: Main Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Mālama</span>
          </div>

          {/* Main Nav Items */}
          <div className="flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen(item.label) ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={() => item.action && handleNavAction(item.action)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      currentPage === item.action 
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {isDropdownOpen(item.label) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <button
                              key={child.label}
                              onClick={() => child.action && handleNavAction(child.action)}
                              className="w-full flex items-center space-x-3 px-4 py-3 text-left text-sm text-foreground hover:bg-muted/50 hover:text-primary transition-colors duration-200"
                            >
                              {child.icon && <child.icon className="w-4 h-4" />}
                              <span>{child.label}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: User & CTA */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigateToPage('pricing')}
            className="text-foreground hover:text-primary"
          >
            Pricing
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigateToPage('contact')}
            className="text-foreground hover:text-primary"
          >
            Contact
          </Button>

          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-foreground">{user.name}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={onSignOut}
                className="text-foreground hover:text-primary"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onSignIn}
                className="text-foreground hover:text-primary"
              >
                Sign In
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onRegister}
                className="text-foreground hover:text-primary"
              >
                Register
              </Button>
            </div>
          )}

          {/* Persistent CTA Button */}
          <Button
            onClick={onStartProject}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-4 h-4 mr-2" />
            Start Project
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Mālama</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border/50"
            >
              <div className="px-4 py-4 space-y-4">
                {mainNavItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                            <button
                              onClick={() => handleDropdownToggle(item.label)}
                              className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                            >
                              <span>{item.label}</span>
                              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen(item.label) ? 'rotate-90' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {isDropdownOpen(item.label) && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 space-y-1"
                                >
                                  {item.children.map((child) => (
                                    <button
                                      key={child.label}
                                      onClick={() => child.action && handleNavAction(child.action)}
                                      className="w-full flex items-center space-x-3 px-3 py-2 text-left text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
                                    >
                                      {child.icon && <child.icon className="w-4 h-4" />}
                                      <span>{child.label}</span>
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                    ) : (
                      <button
                        onClick={() => item.action && handleNavAction(item.action)}
                        className={`w-full flex items-center px-3 py-2 text-left text-sm font-medium transition-colors duration-200 ${
                          currentPage === item.action 
                            ? 'text-primary' 
                            : 'text-foreground hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="pt-4 border-t border-border/50 space-y-3">
                  <Button
                    onClick={onStartProject}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Start Project
                  </Button>
                  
                  {!user && (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        onClick={onSignIn}
                        className="flex-1"
                      >
                        Sign In
                      </Button>
                      <Button
                        variant="outline"
                        onClick={onRegister}
                        className="flex-1"
                      >
                        Register
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sticky Bottom CTA Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border/50 p-3 z-40">
        <div className="flex items-center justify-between">
          <Button
            onClick={onStartProject}
            className="flex-1 bg-primary hover:bg-primary/90 text-white mr-3"
          >
            <Zap className="w-4 h-4 mr-2" />
            Start Project
          </Button>
          
          {!user && (
            <Button
              variant="outline"
              onClick={onSignIn}
              size="sm"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
