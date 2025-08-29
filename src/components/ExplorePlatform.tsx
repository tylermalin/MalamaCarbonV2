import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Brain, Shield, Zap, Database, Globe, Users, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ExplorePlatformProps {
  onCreateAccount?: () => void;
  onGoToDashboard?: () => void;
  user?: any;
}

export const ExplorePlatform: React.FC<ExplorePlatformProps> = ({ 
  onCreateAccount, 
  onGoToDashboard, 
  user 
}) => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze satellite data, IoT sensors, and field measurements to provide real-time carbon monitoring.",
      capabilities: ["Satellite imagery analysis", "Predictive modeling", "Anomaly detection", "Automated reporting"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Blockchain Verification",
      description: "Immutable verification and tokenization of carbon credits using cutting-edge blockchain technology for maximum transparency.",
      capabilities: ["Smart contract validation", "Immutable records", "Automated compliance", "Cross-chain compatibility"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of carbon sequestration projects with instant alerts and automated quality assurance.",
      capabilities: ["Live data feeds", "Instant notifications", "Quality control", "Performance tracking"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Comprehensive MRV",
      description: "Complete Measurement, Reporting, and Verification suite that exceeds international standards for carbon credit markets.",
      capabilities: ["ISO 14064 compliance", "Verra VCS standards", "Gold Standard protocols", "Custom methodologies"]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Coverage",
      description: "Deploy carbon projects anywhere in the world with our universal platform supporting diverse ecosystems and methodologies.",
      capabilities: ["Multi-region support", "Local compliance", "Cultural adaptation", "Regulatory alignment"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Stakeholder Portal",
      description: "Collaborative workspace for project developers, verifiers, buyers, and communities with role-based access controls.",
      capabilities: ["Multi-user access", "Permission management", "Collaborative tools", "Stakeholder dashboards"]
    }
  ];

  const platformStats = [
    { label: "Projects Monitored", value: "500+", description: "Active carbon projects worldwide" },
    { label: "Carbon Tracked", value: "2.5M tCO₂", description: "Total carbon credits verified" },
    { label: "Data Points", value: "10B+", description: "Environmental measurements processed" },
    { label: "Countries", value: "35+", description: "Global deployment coverage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Next-Generation Carbon Platform
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Explore the 
              <span className="text-primary"> Mālama</span> Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how our AI-powered, blockchain-verified platform is revolutionizing carbon credit 
              development with unprecedented accuracy, transparency, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Button 
                  size="lg" 
                  onClick={onGoToDashboard}
                  className="text-lg px-8 py-6"
                >
                  Access Full Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  onClick={onCreateAccount}
                  className="text-lg px-8 py-6"
                >
                  Create Account to Access Full Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and technologies that power the next generation of carbon credit development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Carbon Projects?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join leading organizations worldwide who trust Mālama to deliver verified, 
              high-quality carbon credits at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Button 
                  size="lg" 
                  onClick={onGoToDashboard}
                  className="text-lg px-8 py-6"
                >
                  Access Your Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  onClick={onCreateAccount}
                  className="text-lg px-8 py-6"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
