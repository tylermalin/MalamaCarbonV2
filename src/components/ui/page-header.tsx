import React from 'react';
import { Button } from './button';

interface PageHeaderProps {
  onNavigateToPage: (page: string) => void;
  onStartProject: () => void;
  onSignIn: () => void;
  onRegister: () => void;
  onSignOut?: () => void;
  currentPage?: string;
  user?: any;
  showBackToHome?: boolean;
  onNavigateToHome?: () => void;
}

export function PageHeader({ 
  onNavigateToPage, 
  onStartProject, 
  onSignIn, 
  onRegister,
  onSignOut,
  currentPage,
  user,
  showBackToHome = false,
  onNavigateToHome
}: PageHeaderProps) {
  const [showAuthModal, setShowAuthModal] = React.useState(false);

  const handleGetStarted = () => {
    if (user) {
      onStartProject();
    } else {
      setShowAuthModal(true);
    }
  };

  const handleLogoClick = () => {
    if (onNavigateToHome) {
      onNavigateToHome();
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Mālama Labs Logo */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={handleLogoClick}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&>svg]:px-2.5 text-foreground hover:text-primary"
              >
                <img 
                  src="/src/assets/malama-logo.png" 
                  alt="Mālama Labs" 
                  className="h-16 w-auto object-contain"
                />
              </button>
            </div>

            {/* Back to Home Button */}
            {showBackToHome && onNavigateToHome && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onNavigateToHome}
                className="text-foreground hover:text-primary ml-4"
              >
                ← Back to Home
              </Button>
            )}
          </div>

          {/* Right: Get Started Button */}
          <div className="flex items-center space-x-4">
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
            ) : null}

            {/* Get Started Button */}
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-6 py-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Auth Modal - Centered on page */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-8 rounded-xl shadow-2xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4 text-center">Get Started with Mālama Labs</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Choose how you'd like to begin your carbon removal journey
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={() => {
                  onSignIn();
                  setShowAuthModal(false);
                }}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Sign In
              </Button>
              
              <Button
                onClick={() => {
                  onRegister();
                  setShowAuthModal(false);
                }}
                variant="outline"
                className="w-full"
              >
                Create Account
              </Button>
              
              <Button
                onClick={() => setShowAuthModal(false)}
                variant="ghost"
                className="w-full"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
