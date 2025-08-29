import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface BiocharPlanData {
  feedstockType: string;
  estimatedFeedstockVolume: number;
  productionMethod: string;
  applicationPlan: string;
  storageCapacity: number;
  qualityStandards: string[];
}

interface BiocharPlanFormProps {
  data: BiocharPlanData;
  onNext: (data: BiocharPlanData) => void;
  onPrevious: () => void;
}

const qualityStandardOptions = [
  { id: 'ibi', label: 'International Biochar Initiative (IBI)' },
  { id: 'astm', label: 'ASTM Standards' },
  { id: 'ebc', label: 'European Biochar Certificate (EBC)' },
  { id: 'usda', label: 'USDA Organic Standards' },
  { id: 'iso', label: 'ISO Standards' },
  { id: 'local', label: 'Local/Regional Standards' },
];

const BiocharPlanForm: React.FC<BiocharPlanFormProps> = ({ data, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<BiocharPlanData>(data);
  const [errors, setErrors] = useState<Partial<BiocharPlanData>>({});

  const handleInputChange = (field: keyof BiocharPlanData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleQualityStandardChange = (standardId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      qualityStandards: checked
        ? [...prev.qualityStandards, standardId]
        : prev.qualityStandards.filter(id => id !== standardId)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BiocharPlanData> = {};

    if (!formData.feedstockType) {
      newErrors.feedstockType = 'Feedstock type is required';
    }

    if (!formData.estimatedFeedstockVolume || formData.estimatedFeedstockVolume <= 0) {
      newErrors.estimatedFeedstockVolume = 'Valid feedstock volume is required';
    }

    if (!formData.productionMethod) {
      newErrors.productionMethod = 'Production method is required';
    }

    if (!formData.applicationPlan.trim()) {
      newErrors.applicationPlan = 'Application plan is required';
    }

    if (!formData.storageCapacity || formData.storageCapacity <= 0) {
      newErrors.storageCapacity = 'Valid storage capacity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Biochar Production Plan</CardTitle>
        <CardDescription>
          Detail your biochar production strategy, feedstock sources, and quality management approach.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="feedstockType">Primary Feedstock Type *</Label>
            <Select 
              value={formData.feedstockType} 
              onValueChange={(value) => handleInputChange('feedstockType', value)}
            >
              <SelectTrigger className={errors.feedstockType ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select feedstock type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wood_chips">Wood Chips/Sawdust</SelectItem>
                <SelectItem value="agricultural_residue">Agricultural Residue</SelectItem>
                <SelectItem value="bamboo">Bamboo</SelectItem>
                <SelectItem value="corn_stover">Corn Stover</SelectItem>
                <SelectItem value="rice_hulls">Rice Hulls</SelectItem>
                <SelectItem value="coconut_shells">Coconut Shells</SelectItem>
                <SelectItem value="nutshells">Nut Shells</SelectItem>
                <SelectItem value="manure">Animal Manure</SelectItem>
                <SelectItem value="mixed">Mixed Sources</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.feedstockType && (
              <p className="text-sm text-destructive">{errors.feedstockType}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="estimatedFeedstockVolume">Estimated Annual Feedstock Volume (tons) *</Label>
            <Input
              id="estimatedFeedstockVolume"
              type="number"
              min="0"
              step="0.1"
              value={formData.estimatedFeedstockVolume || ''}
              onChange={(e) => handleInputChange('estimatedFeedstockVolume', parseFloat(e.target.value) || 0)}
              placeholder="Enter volume in tons"
              className={errors.estimatedFeedstockVolume ? 'border-destructive' : ''}
            />
            {errors.estimatedFeedstockVolume && (
              <p className="text-sm text-destructive">{errors.estimatedFeedstockVolume}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="productionMethod">Production Method *</Label>
            <Select 
              value={formData.productionMethod} 
              onValueChange={(value) => handleInputChange('productionMethod', value)}
            >
              <SelectTrigger className={errors.productionMethod ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select production method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slow_pyrolysis">Slow Pyrolysis</SelectItem>
                <SelectItem value="fast_pyrolysis">Fast Pyrolysis</SelectItem>
                <SelectItem value="gasification">Gasification</SelectItem>
                <SelectItem value="hydrothermal">Hydrothermal Carbonization</SelectItem>
                <SelectItem value="kiln">Traditional Kiln</SelectItem>
                <SelectItem value="retort">Retort System</SelectItem>
                <SelectItem value="mobile_unit">Mobile Production Unit</SelectItem>
                <SelectItem value="custom">Custom System</SelectItem>
              </SelectContent>
            </Select>
            {errors.productionMethod && (
              <p className="text-sm text-destructive">{errors.productionMethod}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="applicationPlan">Biochar Application Plan *</Label>
            <Textarea
              id="applicationPlan"
              value={formData.applicationPlan}
              onChange={(e) => handleInputChange('applicationPlan', e.target.value)}
              placeholder="Describe how biochar will be applied: soil amendment rates, application methods, target areas, timing, etc."
              rows={4}
              className={errors.applicationPlan ? 'border-destructive' : ''}
            />
            {errors.applicationPlan && (
              <p className="text-sm text-destructive">{errors.applicationPlan}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="storageCapacity">Storage Capacity (tons) *</Label>
            <Input
              id="storageCapacity"
              type="number"
              min="0"
              step="0.1"
              value={formData.storageCapacity || ''}
              onChange={(e) => handleInputChange('storageCapacity', parseFloat(e.target.value) || 0)}
              placeholder="Enter storage capacity in tons"
              className={errors.storageCapacity ? 'border-destructive' : ''}
            />
            {errors.storageCapacity && (
              <p className="text-sm text-destructive">{errors.storageCapacity}</p>
            )}
            <p className="text-sm text-muted-foreground">
              Consider both raw feedstock and finished biochar storage needs
            </p>
          </div>

          <div className="space-y-4">
            <Label>Quality Standards & Certifications</Label>
            <div className="space-y-3">
              {qualityStandardOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={formData.qualityStandards.includes(option.id)}
                    onCheckedChange={(checked) => handleQualityStandardChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Select applicable quality standards for your biochar production
            </p>
          </div>

          <div className="flex justify-between pt-6">
            <Button type="button" variant="outline" size="lg" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit" size="lg">
              Next: MRV Details
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BiocharPlanForm;
