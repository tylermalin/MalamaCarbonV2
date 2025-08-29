import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Code, ShoppingCart, Handshake } from 'lucide-react';

interface AudienceSpecificCTAProps {
  onStartProject?: () => void;
  onPurchaseCredits?: () => void;
  onPartnerWithUs?: () => void;
}

export function AudienceSpecificCTA({ 
  onStartProject, 
  onPurchaseCredits, 
  onPartnerWithUs 
}: AudienceSpecificCTAProps) {
  const audiences = [
    {
      title: "Developers",
      subtitle: "Build tools on our APIs",
      description: "Access comprehensive APIs for carbon measurement, verification, and trading. Create innovative climate solutions with our developer-friendly platform.",
      icon: Code,
      color: "bg-green-800",
      action: onStartProject,
      buttonText: "Get Started"
    },
    {
      title: "Buyers",
      subtitle: "Purchase LC02 with transparency",
      description: "Buy high-quality, verified carbon removal credits with complete traceability and blockchain-verified provenance.",
      icon: ShoppingCart,
      color: "bg-green-800",
      action: onPurchaseCredits,
      buttonText: "Get Started"
    },
    {
      title: "Partners",
      subtitle: "Help us scale",
      description: "Join our network of technology partners, research institutions, and climate organizations to accelerate global carbon removal.",
      icon: Handshake,
      color: "bg-green-800",
      action: onPartnerWithUs,
      buttonText: "Get Started"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-primary font-bold">
            Choose Your Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're building, buying, or partnering, we have the tools and support you need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${audience.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {audience.title}
                  </h3>
                  
                  <p className="text-lg font-medium text-secondary mb-4">
                    {audience.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {audience.description}
                  </p>
                  
                  <Button
                    onClick={audience.action}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {audience.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
