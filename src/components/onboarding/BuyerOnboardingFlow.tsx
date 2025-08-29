import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Progress } from '../ui/progress';
import { ArrowLeft, ArrowRight, ShoppingCart, Building2, CreditCard, CheckCircle, User, Mail, Phone, Globe } from 'lucide-react';

interface BuyerData {
  companyInfo: {
    companyName: string;
    industry: string;
    companySize: string;
    website: string;
    description: string;
  };
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    jobTitle: string;
  };
  purchaseRequirements: {
    creditType: string;
    annualVolume: string;
    priceRange: string;
    deliveryTimeline: string;
    certificationRequirements: string[];
    offsetGoals: string;
  };
  compliance: {
    kycVerified: boolean;
    termsAccepted: boolean;
    complianceDocuments: boolean;
  };
}

interface BuyerOnboardingFlowProps {
  onComplete: () => void;
  onCancel: () => void;
}

const BuyerOnboardingFlow: React.FC<BuyerOnboardingFlowProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BuyerData>({
    companyInfo: {
      companyName: '',
      industry: '',
      companySize: '',
      website: '',
      description: ''
    },
    contactInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: ''
    },
    purchaseRequirements: {
      creditType: '',
      annualVolume: '',
      priceRange: '',
      deliveryTimeline: '',
      certificationRequirements: [],
      offsetGoals: ''
    },
    compliance: {
      kycVerified: false,
      termsAccepted: false,
      complianceDocuments: false
    }
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (section: keyof BuyerData, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-bold">Company Information</h3>
                <p className="text-muted-foreground">Tell us about your organization</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={formData.companyInfo.companyName}
                  onChange={(e) => updateFormData('companyInfo', 'companyName', e.target.value)}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => updateFormData('companyInfo', 'industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="energy">Energy & Utilities</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="transportation">Transportation & Logistics</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select onValueChange={(value) => updateFormData('companyInfo', 'companySize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                      <SelectItem value="small">Small (11-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.companyInfo.website}
                  onChange={(e) => updateFormData('companyInfo', 'website', e.target.value)}
                  placeholder="https://yourcompany.com"
                />
              </div>

              <div>
                <Label htmlFor="description">Company Description</Label>
                <Textarea
                  id="description"
                  value={formData.companyInfo.description}
                  onChange={(e) => updateFormData('companyInfo', 'description', e.target.value)}
                  placeholder="Brief description of your company and sustainability goals"
                  rows={3}
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Primary contact for carbon credit purchases</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.contactInfo.firstName}
                    onChange={(e) => updateFormData('contactInfo', 'firstName', e.target.value)}
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.contactInfo.lastName}
                    onChange={(e) => updateFormData('contactInfo', 'lastName', e.target.value)}
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Business Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => updateFormData('contactInfo', 'email', e.target.value)}
                  placeholder="email@company.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.contactInfo.phone}
                    onChange={(e) => updateFormData('contactInfo', 'phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    value={formData.contactInfo.jobTitle}
                    onChange={(e) => updateFormData('contactInfo', 'jobTitle', e.target.value)}
                    placeholder="e.g., Sustainability Manager"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-bold">Purchase Requirements</h3>
                <p className="text-muted-foreground">Define your carbon credit needs</p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="creditType">Preferred Credit Type *</Label>
                  <Select onValueChange={(value) => updateFormData('purchaseRequirements', 'creditType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select credit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="biochar">Biochar (LC02)</SelectItem>
                      <SelectItem value="rock-weathering">Enhanced Rock Weathering</SelectItem>
                      <SelectItem value="agroforestry">Agroforestry</SelectItem>
                      <SelectItem value="blue-carbon">Blue Carbon</SelectItem>
                      <SelectItem value="mixed">Mixed Portfolio</SelectItem>
                      <SelectItem value="any">Any Durable Removal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="annualVolume">Annual Volume (tCO2e) *</Label>
                  <Select onValueChange={(value) => updateFormData('purchaseRequirements', 'annualVolume', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-500">100 - 500 tCO2e</SelectItem>
                      <SelectItem value="500-1000">500 - 1,000 tCO2e</SelectItem>
                      <SelectItem value="1000-5000">1,000 - 5,000 tCO2e</SelectItem>
                      <SelectItem value="5000-10000">5,000 - 10,000 tCO2e</SelectItem>
                      <SelectItem value="10000+">10,000+ tCO2e</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="priceRange">Price Range (per tCO2e)</Label>
                  <Select onValueChange={(value) => updateFormData('purchaseRequirements', 'priceRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100">Under $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="200-300">$200 - $300</SelectItem>
                      <SelectItem value="300-500">$300 - $500</SelectItem>
                      <SelectItem value="500+">$500+</SelectItem>
                      <SelectItem value="market">Market Rate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="deliveryTimeline">Delivery Timeline *</Label>
                  <Select onValueChange={(value) => updateFormData('purchaseRequirements', 'deliveryTimeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (spot purchase)</SelectItem>
                      <SelectItem value="quarterly">Quarterly delivery</SelectItem>
                      <SelectItem value="annual">Annual delivery</SelectItem>
                      <SelectItem value="multi-year">Multi-year contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="offsetGoals">Offset Goals & Use Case</Label>
                <Textarea
                  id="offsetGoals"
                  value={formData.purchaseRequirements.offsetGoals}
                  onChange={(e) => updateFormData('purchaseRequirements', 'offsetGoals', e.target.value)}
                  placeholder="Describe your carbon neutrality goals, reporting requirements, or specific use cases"
                  rows={3}
                />
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8" />
              <div>
                <h3 className="text-2xl font-bold">Compliance & Verification</h3>
                <p className="text-muted-foreground">Complete your buyer verification</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="kycVerified"
                    checked={formData.compliance.kycVerified}
                    onCheckedChange={(checked) => updateFormData('compliance', 'kycVerified', checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="kycVerified" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I agree to complete KYC (Know Your Customer) verification
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Required for compliance with financial regulations and carbon credit trading standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="complianceDocuments"
                    checked={formData.compliance.complianceDocuments}
                    onCheckedChange={(checked) => updateFormData('compliance', 'complianceDocuments', checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="complianceDocuments" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I will provide necessary compliance documentation
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Including corporate registration, authorization letters, and sustainability reporting requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termsAccepted"
                    checked={formData.compliance.termsAccepted}
                    onCheckedChange={(checked) => updateFormData('compliance', 'termsAccepted', checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="termsAccepted" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I accept the Terms of Service and Carbon Credit Purchase Agreement *
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      By checking this box, you agree to our terms of service, privacy policy, and carbon credit purchase agreement
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Next Steps</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Our team will review your application within 2 business days</li>
                  <li>• You'll receive an email with your buyer account credentials</li>
                  <li>• Complete KYC verification through our secure portal</li>
                  <li>• Access the carbon credit marketplace and start purchasing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b border-border/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onCancel} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Carbon Credit Buyer Account</h1>
                <p className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{Math.round(progress)}% Complete</div>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              {renderStep()}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                <Button
                  onClick={handleNext}
                  className="flex items-center gap-2"
                  disabled={currentStep === 4 && !formData.compliance.termsAccepted}
                >
                  {currentStep === totalSteps ? (
                    <>
                      Complete Setup
                      <CheckCircle className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BuyerOnboardingFlow;
