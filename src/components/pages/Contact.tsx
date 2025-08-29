import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Footer } from '../Footer';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, Globe } from 'lucide-react';

interface ContactProps {
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

const Contact: React.FC<ContactProps> = ({ 
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Show success message or redirect
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to partner with us or have questions? We'd love to hear from you. Reach out to explore partnerships, technical integrations, or general inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Schedule Call
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">24 Hours</div>
                <div className="text-sm text-muted-foreground">Average response time to inquiries</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Expert Team</div>
                <div className="text-sm text-muted-foreground">Direct access to technical specialists</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Global Support</div>
                <div className="text-sm text-muted-foreground">Available across all time zones</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">Multiple Channels</div>
                <div className="text-sm text-muted-foreground">Email, phone, video calls available</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-8">

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="mb-2 block">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2 block">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="mb-2 block">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="inquiryType" className="mb-2 block">Inquiry Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="investment">Investment Inquiries</SelectItem>
                            <SelectItem value="integration">Technical Integration</SelectItem>
                            <SelectItem value="buyer">Become a Buyer</SelectItem>
                            <SelectItem value="supplier">Become a Supplier</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject" className="mb-2 block">Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          placeholder="Brief subject line"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="mb-2 block">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, partnership idea, or how we can help..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">hello@malama.earth</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">(808) 555-0123</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM HST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Headquarters</h3>
                        <p className="text-muted-foreground">Maui, Hawaii</p>
                        <p className="text-sm text-muted-foreground">Remote-first with island roots</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Meeting */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold">Schedule a Meeting</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    For partnership discussions, technical demos, or strategic planning sessions.
                  </p>
                  <div className="w-full">
                    <iframe
                      src="https://www.getclockwise.com/c/tyler-malamaproject-org/quick-meeting"
                      width="100%"
                      height="600"
                      style={{
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: 'var(--background)',
                        minHeight: '600px'
                      }}
                      title="Schedule a Meeting with Mālama Carbon"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold">Partnership Types</h2>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <span className="font-medium">Technology Partners</span>
                      <span className="text-sm text-muted-foreground">API & Integration</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <span className="font-medium">Research Institutions</span>
                      <span className="text-sm text-muted-foreground">Academic Collaboration</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <span className="font-medium">Climate Organizations</span>
                      <span className="text-sm text-muted-foreground">Mission Alignment</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <span className="font-medium">Investors</span>
                      <span className="text-sm text-muted-foreground">Growth Capital</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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

export default Contact;
