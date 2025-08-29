import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Leaf, Code, ShoppingCart, Handshake, ArrowRight } from 'lucide-react';

const audiences = [
  {
    title: "Land Stewards",
    description: "Earn from regenerative practices",
    detail: "Transform your agricultural waste into valuable carbon credits while improving soil health and generating additional revenue streams.",
    icon: Leaf,
    color: "bg-primary",
    delay: 0.1
  },
  {
    title: "Developers",
    description: "Build tools on our APIs",
    detail: "Access comprehensive APIs for carbon measurement, verification, and trading. Create innovative climate solutions with our developer-friendly platform.",
    icon: Code,
    color: "bg-secondary",
    delay: 0.2
  },
  {
    title: "Buyers",
    description: "Purchase LC02 with transparency",
    detail: "Buy high-quality, verified carbon removal credits with complete traceability and blockchain-verified provenance.",
    icon: ShoppingCart,
    color: "bg-accent-foreground",
    delay: 0.3
  },
  {
    title: "Partners",
    description: "Help us scale",
    detail: "Join our network of technology partners, research institutions, and climate organizations to accelerate global carbon removal.",
    icon: Handshake,
    color: "bg-primary",
    delay: 0.4
  }
];

interface AudienceEngagementProps {
  onSignUp?: () => void;
}

export function AudienceEngagement({ onSignUp }: AudienceEngagementProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">
            Join the Carbon Removal Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're creating, building, buying, or partnering, we have a place for you in our ecosystem
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: audience.delay }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-14 h-14 ${audience.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <audience.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl mb-2 text-center text-primary group-hover:text-secondary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  
                  <p className="text-center text-muted-foreground mb-4 font-medium">
                    {audience.description}
                  </p>
                  
                  <p className="text-sm text-center text-muted-foreground mb-6 flex-1">
                    {audience.detail}
                  </p>
                  
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={onSignUp}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group-hover:gap-3"
                    >
                      <span className="text-sm font-medium">Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            onClick={onSignUp}
            className="hover:scale-105 transition-transform duration-300"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}