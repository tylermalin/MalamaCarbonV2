import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  User, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Project Analytics",
    description: "Real-time carbon removal tracking and impact metrics"
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "AI-powered pricing and marketplace strategies"
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Automated reporting and verification workflows"
  },
  {
    icon: Globe,
    title: "Global Marketplace",
    description: "Access to premium carbon credit trading platforms"
  }
];

const benefits = [
  "Track multiple carbon projects in one dashboard",
  "Automated verification and credit issuance",
  "Real-time market pricing and optimization",
  "Compliance reporting and audit trails",
  "Portfolio performance analytics",
  "Direct marketplace integration"
];

interface DashboardPromptProps {
  onSignUp?: () => void;
  onClose?: () => void;
}

export function DashboardPrompt({ onSignUp, onClose }: DashboardPromptProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <Card className="border-none bg-card/80 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-12 bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)]">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div 
                className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <User className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl mb-6 text-primary font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Create Account to Access Dashboard
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Unlock the full power of our carbon management platform with a free account
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits List */}
            <motion.div 
              className="bg-primary/5 rounded-2xl p-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                What You'll Get Access To:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button 
                  size="lg"
                  onClick={onSignUp}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Create Free Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={onClose}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  Continue Browsing
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Free forever • No credit card required • Setup in under 2 minutes
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
