import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Cpu, Flame, Coins, ArrowRight } from 'lucide-react';

const modules = [
  {
    title: "dMRV Engine",
    description: "AI + blockchain-powered measurement tools",
    icon: Cpu,
    color: "bg-primary",
    delay: 0.1,
    id: "dmrv-engine"
  },
  {
    title: "Carbon Credit Protocols",
    description: "Link any accepted methodology to any 3rd Party Validator",
    icon: Flame,
    color: "bg-secondary",
    delay: 0.2,
    id: "biochar-protocols"
  },
  {
    title: "Carbon Credit Studio",
    description: "Issue & sell durable LC02/VC02 credits on-chain",
    icon: Coins,
    color: "bg-accent-foreground",
    delay: 0.3,
    id: "carbon-credit-studio"
  }
];

interface CoreModulesProps {
  onNavigateToModule?: (moduleId: string) => void;
}

export function CoreModules({ onNavigateToModule }: CoreModulesProps) {
  return (
    <section className="py-40 px-8 bg-muted/30 my-[120px]">
      <div className="max-w-7xl mx-auto pb-16">
        <motion.div 
          className="text-center mb-20 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
            Core Platform Modules
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools for measuring, verifying, and trading durable carbon removal credits
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: module.delay }}
              viewport={{ once: true }}
              className="my-[50px]"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-28 px-12 pb-20 relative overflow-hidden bg-gradient-to-br from-[rgba(27,67,50,0.08)] via-[rgba(10,61,63,0.05)] to-[rgba(236,230,218,0.12)] backdrop-blur-md border border-[rgba(27,67,50,0.15)] shadow-[0_8px_32px_rgba(27,67,50,0.1)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.05)] before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                  <div className="relative z-10 flex items-center justify-center mb-6 mt-16">
                    <div className={`w-16 h-16 ${module.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="relative z-10 text-xl mb-4 text-center text-primary group-hover:text-secondary transition-colors duration-300 font-medium">
                    {module.title}
                  </h3>
                  
                  <p className="relative z-10 text-center text-foreground/80 mb-6 line-height-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <button 
                      onClick={() => onNavigateToModule?.(module.id)}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 group-hover:gap-3 font-medium"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}