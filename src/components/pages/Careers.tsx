import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Footer } from '../Footer';
import { PageHeader } from '../ui/page-header';
import { 
  HeroSection,
  ContentSection,
  TwoColumnLayout,
  ThreeColumnLayout,
  CTASection,
  sectionStyles
} from '../ui/page-layout';
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Send,
  CheckCircle,
  Star,
  Building,
  Target,
  Lightbulb
} from 'lucide-react';

interface CareersProps {
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
  onNavigateToCarbonCreditStudio?: () => void;
  onNavigateToCarbonCreditProtocols?: () => void;
  onNavigateToDMRVEngine?: () => void;
  onStartProject?: () => void;
  onNavigateToHome?: () => void;
}

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: "senior-fullstack",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote / Honolulu, HI",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead development of our dMRV platform and carbon marketplace. Build scalable, secure systems using modern web technologies and blockchain integration.",
    requirements: [
      "Expert in React, TypeScript, and Node.js",
      "Experience with blockchain and Web3 technologies",
      "Knowledge of IoT and real-time data processing",
      "Strong understanding of cloud infrastructure (AWS/Azure)",
      "Experience with PostgreSQL and Redis"
    ],
    benefits: [
      "Competitive salary with equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Professional development budget"
    ]
  },
  {
    id: "climate-scientist",
    title: "Climate Scientist / Carbon Specialist",
    department: "Science & Research",
    location: "Remote / Honolulu, HI",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead research on carbon removal methodologies and verification protocols. Develop scientific standards and ensure accuracy of our measurement systems.",
    requirements: [
      "PhD in Environmental Science, Climate Science, or related field",
      "Experience with carbon sequestration measurement",
      "Knowledge of IPCC methodologies and standards",
      "Field experience with carbon projects",
      "Strong analytical and communication skills"
    ],
    benefits: [
      "Competitive salary with equity",
      "Research publication opportunities",
      "Conference and workshop attendance",
      "Health, dental, and vision insurance",
      "Flexible work arrangements"
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote / Honolulu, HI",
    type: "Full-time",
    experience: "4+ years",
    description: "Drive product strategy and development for our carbon removal platform. Work with engineering, design, and business teams to deliver exceptional user experiences.",
    requirements: [
      "Experience in B2B SaaS product management",
      "Background in climate tech or sustainability",
      "Strong analytical and user research skills",
      "Experience with agile development methodologies",
      "Excellent communication and stakeholder management"
    ],
    benefits: [
      "Competitive salary with equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Professional development budget"
    ]
  },
  {
    id: "business-development",
    title: "Business Development Manager",
    department: "Business Development",
    location: "Remote / Honolulu, HI",
    type: "Full-time",
    experience: "3+ years",
    description: "Build strategic partnerships with carbon project developers, buyers, and ecosystem partners. Drive revenue growth and market expansion.",
    requirements: [
      "Experience in B2B sales or business development",
      "Knowledge of carbon markets or climate finance",
      "Strong relationship-building skills",
      "Experience with CRM systems",
      "Willingness to travel 25-30%"
    ],
    benefits: [
      "Competitive salary with commission",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Travel and entertainment budget"
    ]
  }
];

const companyValues = [
  {
    icon: Heart,
    title: "Mission-Driven",
    description: "Every decision we make is guided by our commitment to accelerate climate solutions and create positive environmental impact."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe the best solutions come from diverse teams working together with mutual respect and shared goals."
  },
  {
    icon: Zap,
    title: "Innovative",
    description: "We constantly push boundaries, embracing new technologies and approaches to solve complex climate challenges."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work has worldwide implications, and we approach every project with the scale of impact in mind."
  }
];

const perks = [
  "Competitive salary with equity options",
  "Remote-first culture with flexible hours",
  "Comprehensive health, dental, and vision insurance",
  "Unlimited PTO and paid parental leave",
  "Professional development and conference budgets",
  "Home office setup and technology stipend",
  "Wellness programs and mental health support",
  "Regular team retreats and social events"
];

export default function Careers({ 
  onNavigateToTeam,
  onExplorePlatform,
  onHowItWorks,
  onNavigateToPricing,
  onNavigateToDocumentation,
  onNavigateToBlog,
  onNavigateToContact,
  onNavigateToPrivacy,
  onNavigateToTerms,
  onNavigateToCookies,
  onNavigateToCarbonCreditStudio,
  onNavigateToCarbonCreditProtocols,
  onNavigateToDMRVEngine,
  onStartProject,
  onNavigateToHome
}: CareersProps) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setApplicationForm(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationForm(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', applicationForm);
    // Reset form
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <PageHeader
        onNavigateToPage={(page) => {
          // Handle navigation based on page
          if (page === 'explore-platform') onExplorePlatform?.();
          if (page === 'how-it-works') onHowItWorks?.();
          if (page === 'our-team') onNavigateToTeam?.();
          if (page === 'pricing') onNavigateToPricing?.();
          if (page === 'contact') onNavigateToContact?.();
          if (page === 'blog') onNavigateToBlog?.();
          if (page === 'documentation') onNavigateToDocumentation?.();
          if (page === 'faq') onNavigateToContact?.();
          if (page === 'careers') onNavigateToContact?.();
          if (page === 'about') onExplorePlatform?.();
          if (page === 'dmrv-engine') onNavigateToDMRVEngine?.();
          if (page === 'carbon-credit-studio') onNavigateToCarbonCreditStudio?.();
          if (page === 'carbon-credit-protocols') onNavigateToCarbonCreditProtocols?.();
          if (page === 'onboarding') onStartProject?.();
        }}
        onStartProject={onStartProject || (() => {})}
        onSignIn={() => {}}
        onRegister={() => {}}
        showBackToHome={true}
        onNavigateToHome={onNavigateToHome}
      />

      {/* Hero Section */}
      <HeroSection
        title="Join Our Mission"
        subtitle="Help us accelerate climate solutions and build the future of carbon markets"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
            className={sectionStyles.button}
          >
            View Open Positions
            <Briefcase className="w-5 h-5 mr-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={onNavigateToContact}
            className={sectionStyles.button}
          >
            Contact HR
            <Mail className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </HeroSection>

      {/* Company Culture */}
      <ContentSection>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Why Work at Mālama?
          </h2>
          <p className={sectionStyles.subheading}>
            Join a team that's making a real difference in the fight against climate change
          </p>
        </motion.div>

        <TwoColumnLayout
          left={
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're building the infrastructure to scale carbon removal from millions to billions of tons annually. 
                  Every line of code, every partnership, every decision moves us closer to a sustainable future.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Culture</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We foster a culture of innovation, collaboration, and impact. Our team members are passionate about 
                  climate solutions and committed to excellence in everything we do.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {perks.slice(0, 4).map((perk, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          right={
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Building className="w-24 h-24 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Company Stats</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Team Size</span>
                        <span className="font-semibold">25+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Countries</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Remote First</span>
                        <span className="font-semibold">100%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Carbon Removed</span>
                        <span className="font-semibold">50K+ tons</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          }
        />
      </ContentSection>

      {/* Company Values */}
      <ContentSection background="alt">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Our Values
          </h2>
          <p className={sectionStyles.subheading}>
            The principles that guide everything we do
          </p>
        </motion.div>

        <FourColumnLayout
          columns={companyValues.map((value) => (
            <Card key={value.title} className="h-full hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        />
      </ContentSection>

      {/* Open Positions */}
      <ContentSection id="open-positions">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Open Positions
          </h2>
          <p className={sectionStyles.subheading}>
            Join our team and help build the future of carbon markets
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {jobPositions.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{job.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Competitive</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <span key={reqIndex} className="px-2 py-1 bg-muted text-xs rounded">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-xs rounded">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                        variant="outline"
                        size="sm"
                      >
                        {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                      </Button>
                      <Button
                        onClick={() => setApplicationForm(prev => ({ ...prev, position: job.title }))}
                        size="sm"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-6 border-t border-border/20"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-primary">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2">
                                <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* Application Form */}
      <ContentSection background="gradient">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={sectionStyles.heading2}>
            Apply Now
          </h2>
          <p className={sectionStyles.subheading}>
            Ready to join our mission? Submit your application below
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={applicationForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={applicationForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position *</Label>
                    <Input
                      id="position"
                      value={applicationForm.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="Enter position title"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select value={applicationForm.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-8">6-8 years</SelectItem>
                      <SelectItem value="9+">9+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    value={applicationForm.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    placeholder="Tell us why you're interested in this position and how you can contribute to our mission..."
                    rows={6}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV *</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Make an Impact?"
        subtitle="Join our team and help accelerate climate solutions at scale"
        primaryButton={{
          text: "View All Positions",
          onClick: () => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' }),
          icon: Briefcase
        }}
        secondaryButton={{
          text: "Contact HR Team",
          onClick: onNavigateToContact
        }}
      />

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
        onNavigateToCarbonCreditStudio={onNavigateToCarbonCreditStudio}
        onNavigateToCarbonCreditProtocols={onNavigateToCarbonCreditProtocols}
        onNavigateToDMRVEngine={onNavigateToDMRVEngine}
        onStartProject={onStartProject}
        onNavigateToHome={onNavigateToHome}
      />
    </div>
  );
}
