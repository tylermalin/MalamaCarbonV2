import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { ArrowLeft, TrendingUp, DollarSign, CheckCircle, Leaf } from 'lucide-react';

interface InvestmentData {
  fullName: string;
  email: string;
  organization: string;
  investmentAmount: string;
  investmentGoals: string;
  preferredCreditType: string;
  investmentTimeline: string;
  additionalInfo: string;
}

interface InvestmentOnboardingFlowProps {
  onComplete: () => void;
  onCancel: () => void;
}

const InvestmentOnboardingFlow: React.FC<InvestmentOnboardingFlowProps> = ({ onComplete, onCancel }) => {
  const [formData, setFormData] = useState<InvestmentData>({
    fullName: '',
    email: '',
    organization: '',
    investmentAmount: '$10,000',
    investmentGoals: '',
    preferredCreditType: '',
    investmentTimeline: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof InvestmentData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Investment interest submitted:', formData);
    setIsSubmitting(false);
    onComplete();
  };

  const investmentAmounts = [
    '$10,000',
    '$25,000',
    '$50,000',
    '$100,000',
    '$250,000',
    '$500,000',
    '$1,000,000+',
    'Custom Amount'
  ];

  const creditTypes = [
    'Biochar (LC02) - Premium Durability',
    'Enhanced Rock Weathering - Geological Permanence',
    'Agroforestry - Biodiversity Co-benefits',
    'Blue Carbon - Coastal Restoration',
    'Mixed Portfolio - Diversified Risk',
    'Highest ROI Available'
  ];

  const timelines = [
    'Immediate (spot purchase)',
    '3-6 months',
    '6-12 months', 
    '1-2 years',
    '2-5 years',
    'Long-term (5+ years)'
  ];

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
                <h1 className="text-2xl font-bold">Premium Carbon Credit Investment</h1>
                <p className="text-sm text-muted-foreground">High-quality carbon removal with institutional returns</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Industry-leading returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <DollarSign className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">Invest in Premium Carbon Credits</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access the highest‑quality carbon‑removal credits with industry‑leading returns.
            </p>
          </motion.div>

          {/* Investment Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">High Returns</h3>
                <p className="text-sm text-muted-foreground">15-25% annual appreciation potential</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Verified Quality</h3>
                <p className="text-sm text-muted-foreground">Third-party verified permanence</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Impact Investing</h3>
                <p className="text-sm text-muted-foreground">Measurable environmental returns</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Investment Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Investment Interest Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
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
                    <Label htmlFor="organization">Organization (optional)</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      placeholder="Your company or investment firm"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="investmentAmount">Investment Amount (USD) *</Label>
                      <Select onValueChange={(value) => handleInputChange('investmentAmount', value)} value={formData.investmentAmount}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment amount" />
                        </SelectTrigger>
                        <SelectContent>
                          {investmentAmounts.map((amount) => (
                            <SelectItem key={amount} value={amount}>
                              {amount}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="investmentTimeline">Investment Timeline *</Label>
                      <Select onValueChange={(value) => handleInputChange('investmentTimeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="investmentGoals">Investment Goals *</Label>
                    <Textarea
                      id="investmentGoals"
                      value={formData.investmentGoals}
                      onChange={(e) => handleInputChange('investmentGoals', e.target.value)}
                      placeholder="Describe your investment objectives, risk tolerance, and expected returns..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredCreditType">Preferred Credit Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredCreditType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred credit type" />
                      </SelectTrigger>
                      <SelectContent>
                        {creditTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Anything else you'd like to share?</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      placeholder="ESG requirements, reporting needs, co-investment opportunities, etc..."
                      rows={3}
                    />
                  </div>

                  <div className="bg-secondary/20 p-6 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      We'll review your information and reach out with a tailored plan — including a chance to meet our team.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <DollarSign className="w-4 h-4 mr-2" />
                        Submit Investment Interest
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Invest in Carbon Credits?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Market Growth</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• $2B market growing to $100B by 2030</li>
                      <li>• Increasing corporate net-zero commitments</li>
                      <li>• Regulatory carbon pricing expansion</li>
                      <li>• Supply shortage driving price appreciation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Portfolio Benefits</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Low correlation with traditional assets</li>
                      <li>• Inflation hedge through commodity exposure</li>
                      <li>• ESG compliance and impact measurement</li>
                      <li>• Tax advantages for qualified investments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOnboardingFlow;
