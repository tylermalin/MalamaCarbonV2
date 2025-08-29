import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Footer } from '../Footer';
import { ArrowLeft, Cookie, Settings, Shield, BarChart3, Target, Globe } from 'lucide-react';

interface CookiePolicyProps {
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

const CookiePolicy: React.FC<CookiePolicyProps> = ({ 
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
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    functional: true,
    analytics: false,
    advertising: false
  });

  const cookieTypes = [
    {
      type: "Essential Cookies",
      icon: Shield,
      required: true,
      description: "These cookies are necessary for the platform to function and cannot be disabled.",
      purpose: "Authentication, security, basic functionality",
      examples: [
        "User session management",
        "Security tokens",
        "Platform functionality",
        "Load balancing"
      ],
      retention: "Session or up to 1 year",
      thirdParty: false
    },
    {
      type: "Functional Cookies",
      icon: Settings,
      required: false,
      description: "These cookies enhance your experience by remembering your preferences and settings.",
      purpose: "User preferences, customization, convenience features",
      examples: [
        "Language preferences",
        "Theme settings",
        "Dashboard layout",
        "Notification preferences"
      ],
      retention: "Up to 2 years",
      thirdParty: false
    },
    {
      type: "Analytics Cookies",
      icon: BarChart3,
      required: false,
      description: "These cookies help us understand how users interact with our platform to improve services.",
      purpose: "Usage analytics, performance monitoring, feature optimization",
      examples: [
        "Page views and navigation",
        "Feature usage statistics",
        "Performance metrics",
        "Error tracking"
      ],
      retention: "Up to 26 months",
      thirdParty: true
    },
    {
      type: "Advertising Cookies",
      icon: Target,
      required: false,
      description: "These cookies are used to deliver relevant advertisements and measure campaign effectiveness.",
      purpose: "Targeted advertising, campaign measurement, remarketing",
      examples: [
        "Ad preferences",
        "Campaign tracking",
        "Conversion measurement",
        "Remarketing lists"
      ],
      retention: "Up to 13 months",
      thirdParty: true
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and user behavior tracking",
      type: "Analytics",
      privacy: "https://policies.google.com/privacy"
    },
    {
      name: "Mixpanel",
      purpose: "Product analytics and user journey tracking", 
      type: "Analytics",
      privacy: "https://mixpanel.com/legal/privacy-policy"
    },
    {
      name: "Stripe",
      purpose: "Payment processing and fraud prevention",
      type: "Essential",
      privacy: "https://stripe.com/privacy"
    },
    {
      name: "Supabase",
      purpose: "Authentication and database services",
      type: "Essential", 
      privacy: "https://supabase.com/privacy"
    }
  ];

  const handleCookiePreferenceChange = (type: string, enabled: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: enabled
    }));
  };

  const savePreferences = () => {
    // Save preferences to localStorage or API
    localStorage.setItem('cookie_preferences', JSON.stringify(cookiePreferences));
    // Show success message or redirect
    console.log('Cookie preferences saved:', cookiePreferences);
  };

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

          {/* Cookie Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Manage Your Cookie Preferences</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Control which types of cookies we can use. You can change these preferences at any time, 
                  though disabling some cookies may affect platform functionality.
                </p>
                
                <div className="space-y-4">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                      <div className="flex items-start gap-3 flex-1">
                        <cookie.icon className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold">{cookie.type}</h3>
                          <p className="text-sm text-muted-foreground">{cookie.description}</p>
                        </div>
                      </div>
                      <Switch
                        checked={cookiePreferences[cookie.type.toLowerCase().split(' ')[0] as keyof typeof cookiePreferences]}
                        onCheckedChange={(checked) => handleCookiePreferenceChange(
                          cookie.type.toLowerCase().split(' ')[0], 
                          checked
                        )}
                        disabled={cookie.required}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <Button onClick={savePreferences}>
                    Save Preferences
                  </Button>
                  <Button variant="outline" onClick={() => setCookiePreferences({
                    essential: true,
                    functional: false,
                    analytics: false,
                    advertising: false
                  })}>
                    Reject All (Except Essential)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* What Are Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our platform. 
                    They help us provide you with a better user experience by remembering your preferences, 
                    keeping you logged in, and helping us understand how you use our services.
                  </p>
                  <p>
                    We also use similar technologies such as web beacons, pixels, and local storage to 
                    collect information about your interactions with our platform and improve our services.
                  </p>
                  <p>
                    Some cookies are set by us (first-party cookies) while others are set by third-party 
                    services we use (third-party cookies). You have control over both types through your 
                    browser settings and our preference center above.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Cookie Information */}
          <div className="space-y-8 mb-12">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <cookie.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cookie.type}</h3>
                        {cookie.required && (
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Purpose</h4>
                        <p className="text-sm text-muted-foreground mb-4">{cookie.purpose}</p>
                        
                        <h4 className="font-semibold mb-2">Examples</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Retention Period</h4>
                        <p className="text-sm text-muted-foreground mb-4">{cookie.retention}</p>
                        
                        <h4 className="font-semibold mb-2">Third-Party Cookies</h4>
                        <p className="text-sm text-muted-foreground">
                          {cookie.thirdParty ? 'Yes - includes third-party services' : 'No - only first-party cookies'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Third-Party Services</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  We use trusted third-party services to provide certain platform features. 
                  These services may set their own cookies according to their privacy policies.
                </p>
                
                <div className="grid gap-4">
                  {thirdPartyServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.purpose}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full mb-2 block">
                          {service.type}
                        </span>
                        <Button variant="ghost" size="sm" onClick={() => window.open(service.privacy, '_blank')}>
                          Privacy Policy
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Browser Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Browser Controls</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Most web browsers allow you to control cookies through their settings. You can usually 
                    find these options in the "Privacy" or "Security" section of your browser settings.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Browser Cookie Settings:</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Block all cookies</li>
                        <li>• Block third-party cookies only</li>
                        <li>• Delete cookies when closing browser</li>
                        <li>• Allow/block specific websites</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Note:</h3>
                      <p className="text-sm">
                        Blocking or deleting cookies may affect your ability to use certain platform features. 
                        Essential cookies are required for core functionality and cannot be disabled without 
                        affecting platform operation.
                      </p>
                    </div>
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
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Cookie className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have questions about our use of cookies, need help configuring your preferences, 
                  or want to learn more about our data practices, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.open('mailto:privacy@malama.earth')}>
                    <Shield className="w-4 h-4 mr-2" />
                    Email Privacy Team
                  </Button>
                  <Button variant="outline" onClick={() => window.open('mailto:hello@malama.earth')}>
                    <Cookie className="w-4 h-4 mr-2" />
                    General Contact
                  </Button>
                </div>
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>You can update your cookie preferences at any time by visiting this page.</p>
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

export default CookiePolicy;
