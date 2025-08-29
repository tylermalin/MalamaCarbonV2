import { motion } from 'motion/react';
import amazonLogo from 'figma:asset/675556d2960dda62dc84f0f624aa9eb001db0b07.png';
import companyLogo from 'figma:asset/7d9a3a1de1d454b6c8beb57925e1dc639356a6a8.png';

const partners = [
  {
    name: "Amazon",
    logo: amazonLogo,
    width: "w-12 h-12"
  },
  {
    name: "Shopify", 
    logo: companyLogo,
    width: "w-12 h-12"
  },
  {
    name: "Puro.earth",
    logo: null,
    width: "w-auto h-8"
  },
  {
    name: "Microsoft",
    logo: null,
    width: "w-auto h-8"
  },
  {
    name: "Meta",
    logo: null,
    width: "w-auto h-8"
  }
];

export function PartnerLogos() {
  return (
    <section className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-primary mb-3 font-medium">Trusted by Industry Leaders</h3>
          <p className="text-muted-foreground text-lg">
            Partnering with global organizations to scale durable carbon removal
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            className="flex gap-20 items-center justify-center"
            animate={{ x: [-30, 30, -30] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative h-20 flex items-center justify-center min-w-[140px] px-8 rounded-2xl bg-gradient-to-br from-[rgba(27,67,50,0.05)] via-[rgba(10,61,63,0.03)] to-[rgba(236,230,218,0.08)] backdrop-blur-sm border border-[rgba(27,67,50,0.1)] shadow-[0_4px_16px_rgba(27,67,50,0.05)] group-hover:shadow-[0_8px_24px_rgba(27,67,50,0.1)] transition-all duration-300 overflow-hidden">
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.03)] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className={`${partner.width} object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10`}
                    />
                  ) : (
                    <span className="text-xl font-medium text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300 whitespace-nowrap relative z-10">
                      {partner.name}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Bottom accent */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse"></div>
            <span className="text-sm text-primary/70 font-medium">
              Building the future of verified carbon removal
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}