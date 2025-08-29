import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Activity, Award } from 'lucide-react';

export function ImpactHighlight() {
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
          <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
            Real Impact, Verified Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our platform is already creating measurable climate impact across Hawaiʻi
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Macadamia Biochar Project */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1720170723453-dd9de7397bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWNhZGFtaWElMjBudXRzJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzU2MjcyOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Macadamia biochar production"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Award className="w-3 h-3 mr-1" />
                    LC02 Certified
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4 text-primary">
                  Hawaiʻi Macadamia Biochar Project
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Feedstock</p>
                    <p className="font-medium">Macadamia shells</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Volume</p>
                    <p className="font-medium">250 tons CO₂e</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Reactor Partner</p>
                    <p className="font-medium">Local Farm Co-op</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Certification</p>
                    <p className="font-medium">Puro.earth verified</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-primary text-primary">LC02</Badge>
                  <Badge variant="outline" className="border-secondary text-secondary">Puro-certified</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Climate Intelligence Network */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-card/80 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663784294206-9b508132baf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3JzJTIwZW52aXJvbm1lbnRhbCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzU2MjcyOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Climate sensors and dashboard"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white">
                    <Activity className="w-3 h-3 mr-1" />
                    Live Data
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4 text-primary">
                  Climate Intelligence Network
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Real-time monitoring network with AI-powered sensors tracking soil carbon, 
                  biochar stability, and environmental conditions across multiple Hawaiian islands.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Sensors</p>
                    <p className="font-medium">127 devices</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data Points</p>
                    <p className="font-medium">2.3M+ collected</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Coverage</p>
                    <p className="font-medium">5 Hawaiian islands</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                    <p className="font-medium">99.7% validated</p>
                  </div>
                </div>
                
                <p className="text-sm text-primary">
                  On-chain traceability • Blockchain verified • Real-time dashboard
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}