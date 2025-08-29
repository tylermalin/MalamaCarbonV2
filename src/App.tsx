import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { CoreModules } from './components/CoreModules';
import { PartnerLogos } from './components/PartnerLogos';
import { ImpactHighlight } from './components/ImpactHighlight';
import { HowItWorks } from './components/HowItWorks';
import { AudienceEngagement } from './components/AudienceEngagement';
import { AudienceSpecificCTA } from './components/AudienceSpecificCTA';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { Navigation } from './components/ui/navigation';
import { DMRVDashboard } from './components/dMRVDashboard';
import { RealTimeDataFeeds } from './components/RealTimeDataFeeds';
import { AuthModal } from './components/AuthModal';
import { ProjectDashboard } from './components/ProjectDashboard';
import MalamaOnboardingFlow from './components/MalamaOnboardingFlow';
import { ExplorePlatform } from './components/pages/ExplorePlatform';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import DMRVEngine from './components/pages/DMRVEngine';
import FAQ from './components/pages/FAQ';
import Careers from './components/pages/Careers';
import About from './components/pages/About';
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

type PageView = 'home' | 'dashboard' | 'onboarding' | 'buyer-onboarding' | 'investment-onboarding' | 'explore-platform' | 'how-it-works' | 'dmrv-engine' | 'biochar-protocols' | 'carbon-credit-studio' | 'carbon-credit-protocols' | 'dashboard-prompt' | 'our-team' | 'contact' | 'pricing' | 'documentation' | 'blog' | 'privacy-policy' | 'terms-of-service' | 'cookie-policy' | 'faq' | 'careers' | 'about';

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Debug current page changes
  useEffect(() => {
    console.log('Current page changed to:', currentPage);
  }, [currentPage]);

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
    // Scroll to top when navigating to new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartProject = () => {
    if (user) {
      setCurrentPage('onboarding');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleSignIn = () => {
    setIsAuthModalOpen(true);
  };

  const handleRegister = () => {
    setIsAuthModalOpen(true);
  };

  const handleGoToDashboard = () => {
    navigateToPage('dashboard');
  };

  const handleNavigateToModule = (module: string) => {
    switch (module) {
      case 'dmrv-engine':
        setCurrentPage('dmrv-engine');
        break;
      case 'carbon-credit-protocols':
        setCurrentPage('carbon-credit-protocols');
        break;
      case 'carbon-credit-studio':
        setCurrentPage('carbon-credit-studio');
        break;
    }
    // Scroll to top when navigating to module
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
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
    <main className="min-h-screen">
      {/* Main Navigation */}
      <Navigation
        onNavigateToPage={navigateToPage}
        onStartProject={handleStartProject}
        onSignIn={handleSignIn}
        onRegister={handleRegister}
        currentPage={currentPage}
        user={user}
        onSignOut={handleSignOut}
      />

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
          onNavigateToCarbonCreditStudio={() => setCurrentPage('carbon-credit-studio')}
          onNavigateToCarbonCreditProtocols={() => setCurrentPage('carbon-credit-protocols')}
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onNavigateToHome={handleNavigateToHome}
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
          onNavigateToCarbonCreditStudio={() => setCurrentPage('carbon-credit-studio')}
          onNavigateToCarbonCreditProtocols={() => setCurrentPage('carbon-credit-protocols')}
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'dmrv-engine' ? (
        <DMRVEngine 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'faq' ? (
        <FAQ 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
              ) : currentPage === 'careers' ? (
          <Careers 
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
            onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
            onStartProject={handleStartProject}
            onNavigateToHome={handleNavigateToHome}
          />
        ) : currentPage === 'about' ? (
          <About 
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
            onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
            onStartProject={handleStartProject}
            onNavigateToHome={handleNavigateToHome}
            onNavigateToFAQ={() => setCurrentPage('faq')}
            onNavigateToCareers={() => setCurrentPage('careers')}
          />
        ) : currentPage === 'biochar-protocols' ? (
        <BiocharProtocols 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'carbon-credit-studio' ? (
        <CarbonCreditStudio 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'carbon-credit-protocols' ? (
        <CarbonCreditProtocols 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'our-team' ? (
        <OurTeam 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'contact' ? (
        <Contact 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'pricing' ? (
        <Pricing 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'documentation' ? (
        <Documentation 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'blog' ? (
        <Blog 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicy 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'terms-of-service' ? (
        <TermsOfService 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'cookie-policy' ? (
        <CookiePolicy 
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
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
        />
      ) : currentPage === 'buyer-onboarding' ? (
        <BuyerOnboardingFlow 
          onGoToDashboard={handleGoToDashboard}
        />
      ) : currentPage === 'investment-onboarding' ? (
        <InvestmentOnboardingFlow 
          onGoToDashboard={handleGoToDashboard}
        />
      ) : (
        // Default Home Page
        <>
          <HeroSection 
            onExplorePlatform={() => setCurrentPage('explore-platform')}
            onHowItWorks={() => setCurrentPage('how-it-works')}
          />
          <ValueProposition onExplorePlatform={() => setCurrentPage('explore-platform')} />
          <CoreModules onNavigateToModule={handleNavigateToModule} />
          <PartnerLogos />
          <ImpactHighlight />
          <HowItWorks 
            onStartProject={handleStartProject}
            onViewDetails={() => setCurrentPage('how-it-works')}
          />
          <AudienceEngagement />
          <AudienceSpecificCTA 
            onStartProject={handleStartProject}
            onPurchaseCredits={() => setCurrentPage('explore-platform')}
            onPartnerWithUs={() => setCurrentPage('contact')}
          />
          <ClosingCTA 
            onStartProject={handleStartProject}
            onPurchaseCredits={() => setCurrentPage('explore-platform')}
            onInvestInCredits={() => setCurrentPage('explore-platform')}
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
          onNavigateToCarbonCreditStudio={() => setCurrentPage('carbon-credit-studio')}
          onNavigateToCarbonCreditProtocols={() => setCurrentPage('carbon-credit-protocols')}
          onNavigateToDMRVEngine={() => setCurrentPage('dmrv-engine')}
          onStartProject={handleStartProject}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToFAQ={() => setCurrentPage('faq')}
          onNavigateToCareers={() => setCurrentPage('careers')}
          onNavigateToAbout={() => setCurrentPage('about')}
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