import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { CoreModules } from './components/CoreModules';
import { PartnerLogos } from './components/PartnerLogos';
import { ImpactHighlight } from './components/ImpactHighlight';
import { HowItWorks } from './components/HowItWorks';
import { AudienceEngagement } from './components/AudienceEngagement';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { DMRVDashboard } from './components/dMRVDashboard';
import { RealTimeDataFeeds } from './components/RealTimeDataFeeds';
import { AuthModal } from './components/AuthModal';
import { ProjectDashboard } from './components/ProjectDashboard';
import MalamaOnboardingFlow from './components/MalamaOnboardingFlow';
import { ExplorePlatform } from './components/pages/ExplorePlatform';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { DMRVEngine } from './components/pages/DMRVEngine';
import { BiocharProtocols } from './components/pages/BiocharProtocols';
import { CarbonCreditStudio } from './components/pages/CarbonCreditStudio';
import { CarbonCreditProtocols } from './components/pages/CarbonCreditProtocols';
import { DashboardPrompt } from './components/DashboardPrompt';
import OurTeam from './components/pages/OurTeam';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing';
import Documentation from './components/pages/Documentation';
import Blog from './components/pages/Blog';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookiePolicy from './components/pages/CookiePolicy';
import BuyerOnboardingFlow from './components/onboarding/BuyerOnboardingFlow';
import InvestmentOnboardingFlow from './components/onboarding/InvestmentOnboardingFlow';
import { Button } from './components/ui/button';
import { authHelpers } from './utils/supabase/client';
import { LogIn, LogOut, User, BarChart3, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

type PageView = 'home' | 'dashboard' | 'onboarding' | 'buyer-onboarding' | 'investment-onboarding' | 'explore-platform' | 'how-it-works' | 'dmrv-engine' | 'biochar-protocols' | 'carbon-credit-studio' | 'carbon-credit-protocols' | 'dashboard-prompt' | 'our-team' | 'contact' | 'pricing' | 'documentation' | 'blog' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy';

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check for existing session on load
  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const { session, error } = await authHelpers.getCurrentSession();
      
      if (!error && session?.access_token) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || 'User',
          accessToken: session.access_token
        });
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleAuthSuccess = (userData: AuthUser) => {
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await authHelpers.signOut();
      setUser(null);
      setCurrentPage('home');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const navigateToPage = (page: PageView) => {
    if (page === 'dashboard' && !user) {
      setCurrentPage('dashboard-prompt');
      // Scroll to top when navigating to dashboard prompt
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPage(page);
    // Scroll to top when navigating to any page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setCurrentPage('onboarding');
    // Scroll to top when starting project
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToDashboard = () => {
    navigateToPage('dashboard');
  };

  const handleNavigateToModule = (module: string) => {
    switch (module) {
      case 'dmrv-engine':
        setCurrentPage('dmrv-engine');
        break;
      case 'biochar-protocols':
        setCurrentPage('biochar-protocols');
        break;
      case 'carbon-credit-studio':
        setCurrentPage('carbon-credit-studio');
        break;
    }
    // Scroll to top when navigating to module
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Fixed Navigation Bar */}
      <motion.div 
        className="fixed top-0 right-0 z-50 p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-border/50">
          {user ? (
            <>
              <div className="flex items-center gap-2 px-3">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{user.name}</span>
              </div>
              
              <Button
                variant={currentPage === 'onboarding' ? "default" : "outline"}
                size="sm"
                onClick={() => currentPage === 'onboarding' ? setCurrentPage('home') : handleStartProject()}
                className="hover:scale-105 transition-transform duration-200"
              >
                <Plus className="w-4 h-4 mr-1" />
                {currentPage === 'onboarding' ? 'View Homepage' : 'New Project'}
              </Button>

              <Button
                variant={currentPage === 'dashboard' ? "default" : "outline"}
                size="sm"
                onClick={() => currentPage === 'dashboard' ? setCurrentPage('home') : navigateToPage('dashboard')}
                className="hover:scale-105 transition-transform duration-200"
              >
                <BarChart3 className="w-4 h-4 mr-1" />
                {currentPage === 'dashboard' ? 'View Homepage' : 'Dashboard'}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="hover:scale-105 transition-transform duration-200"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => currentPage === 'onboarding' ? setCurrentPage('home') : handleStartProject()}
                className="hover:scale-105 transition-transform duration-200"
              >
                <Plus className="w-4 h-4 mr-1" />
                {currentPage === 'onboarding' ? 'View Homepage' : 'Start Project'}
              </Button>
              
              <Button
                onClick={() => setIsAuthModalOpen(true)}
                size="sm"
                className="hover:scale-105 transition-transform duration-200"
              >
                <LogIn className="w-4 h-4 mr-1" />
                Sign In
              </Button>
            </>
          )}
        </div>
      </motion.div>

      {/* Main Content */}
      {currentPage === 'dashboard' && user ? (
        <ProjectDashboard user={user} />
      ) : currentPage === 'dashboard-prompt' ? (
        <DashboardPrompt 
          onSignUp={() => setIsAuthModalOpen(true)}
          onClose={() => setCurrentPage('home')}
        />
      ) : currentPage === 'onboarding' ? (
        <MalamaOnboardingFlow onGoToDashboard={handleGoToDashboard} />
      ) : currentPage === 'explore-platform' ? (
        <ExplorePlatform 
          onNavigateToModule={handleNavigateToModule}
          onStartProject={handleStartProject}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'how-it-works' ? (
        <HowItWorksPage 
          onStartProject={handleStartProject}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'dmrv-engine' ? (
        <DMRVEngine 
          onStartProject={handleStartProject}
          onBackToPlatform={() => setCurrentPage('explore-platform')}
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
          onNavigateToCarbonCreditStudio={() => setCurrentPage('carbon-credit-studio')}
          onNavigateToCarbonCreditProtocols={() => setCurrentPage('carbon-credit-protocols')}
        />
      ) : currentPage === 'biochar-protocols' ? (
        <BiocharProtocols 
          onStartProject={handleStartProject}
          onBackToPlatform={() => setCurrentPage('explore-platform')}
          onBackToHome={() => setCurrentPage('home')}
        />
      ) : currentPage === 'carbon-credit-studio' ? (
        <CarbonCreditStudio 
          onStartProject={handleStartProject}
          onBackToPlatform={() => setCurrentPage('explore-platform')}
          onBackToHome={() => setCurrentPage('home')}
        />
      ) : currentPage === 'carbon-credit-protocols' ? (
        <CarbonCreditProtocols 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
          onNavigateToCarbonCreditStudio={() => setCurrentPage('carbon-credit-studio')}
        />
      ) : currentPage === 'our-team' ? (
        <OurTeam 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'contact' ? (
        <Contact 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'pricing' ? (
        <Pricing 
          onBackToHome={() => setCurrentPage('home')}
          onStartProject={handleStartProject}
          onBuyerOnboarding={() => setCurrentPage('buyer-onboarding')}
          onInvestmentOnboarding={() => setCurrentPage('investment-onboarding')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'documentation' ? (
        <Documentation 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'blog' ? (
        <Blog 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
          onNavigateToCarbonCreditStudio={() => setCurrentPage('carbon-credit-studio')}
          onNavigateToCarbonCreditProtocols={() => setCurrentPage('carbon-credit-protocols')}
        />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicy 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'terms-of-service' ? (
        <TermsOfService 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'cookie-policy' ? (
        <CookiePolicy 
          onBackToHome={() => setCurrentPage('home')}
          onNavigateToTeam={() => setCurrentPage('our-team')}
          onExplorePlatform={() => setCurrentPage('explore-platform')}
          onHowItWorks={() => setCurrentPage('how-it-works')}
          onNavigateToPricing={() => setCurrentPage('pricing')}
          onNavigateToDocumentation={() => setCurrentPage('documentation')}
          onNavigateToBlog={() => setCurrentPage('blog')}
          onNavigateToContact={() => setCurrentPage('contact')}
          onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
          onNavigateToTerms={() => setCurrentPage('terms-of-service')}
          onNavigateToCookies={() => setCurrentPage('cookie-policy')}
        />
      ) : currentPage === 'buyer-onboarding' ? (
        <BuyerOnboardingFlow 
          onComplete={handleGoToDashboard}
          onCancel={() => setCurrentPage('home')}
        />
      ) : currentPage === 'investment-onboarding' ? (
        <InvestmentOnboardingFlow 
          onComplete={handleGoToDashboard}
          onCancel={() => setCurrentPage('home')}
        />
      ) : (
        <>
          <HeroSection 
            onExplorePlatform={() => setCurrentPage('explore-platform')}
            onHowItWorks={() => setCurrentPage('how-it-works')}
          />
          <ValueProposition onHowItWorks={() => setCurrentPage('how-it-works')} />
          <CoreModules onNavigateToModule={handleNavigateToModule} />
          <PartnerLogos />
          <ImpactHighlight />
          <DMRVDashboard />
          <RealTimeDataFeeds />
          <HowItWorks 
            onStartProject={handleStartProject}
            onViewDetails={() => setCurrentPage('how-it-works')}
          />
          <AudienceEngagement onSignUp={() => setIsAuthModalOpen(true)} />
          <ClosingCTA 
            onStartProject={handleStartProject}
            onPurchaseCredits={() => setCurrentPage('buyer-onboarding')}
            onInvestInCredits={() => setCurrentPage('investment-onboarding')}
            onPartnerWithUs={() => setCurrentPage('contact')}
          />
          <Footer 
            onNavigateToTeam={() => setCurrentPage('our-team')}
            onExplorePlatform={() => setCurrentPage('explore-platform')}
            onHowItWorks={() => setCurrentPage('how-it-works')}
            onNavigateToPricing={() => setCurrentPage('pricing')}
            onNavigateToDocumentation={() => setCurrentPage('documentation')}
            onNavigateToBlog={() => setCurrentPage('blog')}
            onNavigateToContact={() => setCurrentPage('contact')}
            onNavigateToPrivacy={() => setCurrentPage('privacy-policy')}
            onNavigateToTerms={() => setCurrentPage('terms-of-service')}
            onNavigateToCookies={() => setCurrentPage('cookie-policy')}
          />
        </>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </main>
  );
}