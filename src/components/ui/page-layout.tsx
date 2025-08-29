import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './card';
import { Button } from './button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Consistent section spacing and styling
export const sectionStyles = {
  container: "container mx-auto px-6 py-20",
  section: "py-20 px-6",
  sectionAlt: "py-20 px-6 bg-muted/30",
  sectionGradient: "py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5",
  maxWidth: "max-w-7xl mx-auto",
  grid: "grid lg:grid-cols-2 gap-20",
  grid3Col: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
  grid4Col: "grid grid-cols-2 md:grid-cols-4 gap-6",
  card: "shadow-xl border-2 border-primary/10 hover:border-primary/20 transition-all duration-300",
  cardContent: "p-12",
  heading: "text-5xl md:text-7xl mb-6 text-primary font-bold",
  heading2: "text-4xl md:text-5xl mb-6 text-primary font-bold",
  heading3: "text-3xl font-bold mb-8 text-primary",
  subheading: "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8",
  text: "text-lg text-muted-foreground leading-relaxed",
  button: "hover:scale-105 transition-transform duration-300",
  icon: "w-16 h-16 text-primary mx-auto mb-6",
  iconSmall: "w-8 h-8 text-primary",
  iconLarge: "w-24 h-24 text-primary/30"
};

// Hero Section Component
export function HeroSection({ 
  title, 
  subtitle, 
  children, 
  className = "" 
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${sectionStyles.sectionGradient} ${className}`}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles.maxWidth}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={sectionStyles.heading}>
              {title}
            </h1>
            <p className={sectionStyles.subheading}>
              {subtitle}
            </p>
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Content Section Component
export function ContentSection({ 
  children, 
  className = "", 
  background = "default" 
}: {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "alt" | "gradient";
}) {
  const bgClass = background === "alt" ? sectionStyles.sectionAlt : 
                  background === "gradient" ? sectionStyles.sectionGradient : 
                  sectionStyles.section;
  
  return (
    <section className={`${bgClass} ${className}`}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles.maxWidth}>
          {children}
        </div>
      </div>
    </section>
  );
}

// Two Column Layout Component
export function TwoColumnLayout({ 
  left, 
  right, 
  reverse = false,
  className = "" 
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`${sectionStyles.grid} ${className} ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-8"
      >
        {left}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-8"
      >
        {right}
      </motion.div>
    </div>
  );
}

// Three Column Layout Component
export function ThreeColumnLayout({ 
  columns, 
  className = "" 
}: {
  columns: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={`${sectionStyles.grid3Col} ${className}`}>
      {columns.map((column, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {column}
        </motion.div>
      ))}
    </div>
  );
}

// Four Column Layout Component
export function FourColumnLayout({ 
  columns, 
  className = "" 
}: {
  columns: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={`${sectionStyles.grid4Col} ${className}`}>
      {columns.map((column, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {column}
        </motion.div>
      ))}
    </div>
  );
}

// Feature Card Component
export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  className = "" 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card className={`${sectionStyles.card} ${className}`}>
      <CardContent className={sectionStyles.cardContent}>
        <div className="text-center">
          <Icon className={sectionStyles.icon} />
          <h3 className={sectionStyles.heading3}>{title}</h3>
          <p className={sectionStyles.text}>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Stats Card Component
export function StatsCard({ 
  icon: Icon, 
  value, 
  label, 
  className = "" 
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <Card className={`text-center border-none bg-card/50 backdrop-blur-sm ${className}`}>
      <CardContent className="p-6">
        <Icon className={sectionStyles.iconSmall} />
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

// CTA Section Component
export function CTASection({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton,
  className = "" 
}: {
  title: string;
  subtitle: string;
  primaryButton?: { text: string; onClick: () => void; icon?: React.ElementType };
  secondaryButton?: { text: string; onClick: () => void; icon?: React.ElementType };
  className?: string;
}) {
  return (
    <section className={`py-20 px-6 bg-gradient-to-br from-primary via-secondary to-primary ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-white font-bold">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <Button 
                size="lg"
                variant="secondary"
                onClick={primaryButton.onClick}
                className={sectionStyles.button}
              >
                {primaryButton.text}
                {primaryButton.icon && <primaryButton.icon className="w-5 h-5 ml-2" />}
              </Button>
            )}
            {secondaryButton && (
              <Button 
                size="lg"
                variant="outline"
                onClick={secondaryButton.onClick}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                {secondaryButton.text}
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Process Steps Component
export function ProcessSteps({ 
  steps, 
  className = "",
  isHorizontal = false
}: {
  steps: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
    step: string;
    details?: string[];
    timeframe: string;
  }>;
  className?: string;
  isHorizontal?: boolean;
}) {
  if (isHorizontal) {
    return (
      <div className={`grid grid-cols-5 gap-4 ${className}`}>
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            {/* Step Number */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium z-10">
              {step.step}
            </div>
            
            {/* Icon Circle */}
            <div className="w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-sm mb-2 text-primary font-semibold">
              {step.title}
            </h3>
            
            <p className="text-xs text-muted-foreground mb-2">
              {step.description}
            </p>
            
            {step.details && (
              <div className="mt-3 space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                    {detail}
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-xs text-primary font-medium mt-2">
              {step.timeframe}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-16 ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center">
            {/* Step Number */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium z-10">
              {step.step}
            </div>
            
            {/* Icon Circle */}
            <div className="w-20 h-20 bg-background border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-lg mb-2 text-primary font-semibold">
              {step.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-2">
              {step.description}
            </p>
            
            {step.details && (
              <div className="mt-4 space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded">
                    {detail}
                  </div>
                ))}
              </div>
            )}
            
            <div className="text-xs text-primary font-medium mt-3">
              {step.timeframe}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
