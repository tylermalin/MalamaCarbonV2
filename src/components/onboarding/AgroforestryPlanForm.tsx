import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface AgroforestryPlanData {
  treeCropSpecies: string[];
  plantingDensity: number;
  managementSystem: string;
  intercroppingPlans: string;
  harvestSchedule: string;
  soilPreparation: string;
  irrigationPlan: string;
  certifications: string[];
}

interface AgroforestryPlanFormProps {
  data: AgroforestryPlanData;
  onNext: (data: AgroforestryPlanData) => void;
  onPrevious: () => void;
}

const treeCropOptions = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'cacao', label: 'Cacao' },
  { id: 'coconut', label: 'Coconut Palm' },
  { id: 'fruit_trees', label: 'Fruit Trees' },
  { id: 'nut_trees', label: 'Nut Trees' },
  { id: 'timber_trees', label: 'Timber Trees' },
  { id: 'bamboo', label: 'Bamboo' },
  { id: 'shade_trees', label: 'Shade Trees' },
];

const certificationOptions = [
  { id: 'organic', label: 'Organic Certification' },
  { id: 'rainforest_alliance', label: 'Rainforest Alliance' },
  { id: 'fair_trade', label: 'Fair Trade' },
  { id: 'fsc', label: 'Forest Stewardship Council (FSC)' },
  { id: 'vcs', label: 'Verified Carbon Standard (VCS)' },
  { id: 'gold_standard', label: 'Gold Standard' },
];

const AgroforestryPlanForm: React.FC<AgroforestryPlanFormProps> = ({ data, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<AgroforestryPlanData>(data);
  const [errors, setErrors] = useState<Partial<AgroforestryPlanData>>({});

  const handleInputChange = (field: keyof AgroforestryPlanData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleArrayChange = (field: 'treeCropSpecies' | 'certifications', itemId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], itemId]
        : prev[field].filter(id => id !== itemId)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<AgroforestryPlanData> = {};

    if (formData.treeCropSpecies.length === 0) {
      newErrors.treeCropSpecies = 'At least one tree/crop species is required';
    }

    if (!formData.plantingDensity || formData.plantingDensity <= 0) {
      newErrors.plantingDensity = 'Valid planting density is required';
    }

    if (!formData.managementSystem) {
      newErrors.managementSystem = 'Management system is required';
    }

    if (!formData.intercroppingPlans.trim()) {
      newErrors.intercroppingPlans = 'Intercropping plans are required';
    }

    if (!formData.harvestSchedule) {
      newErrors.harvestSchedule = 'Harvest schedule is required';
    }

    if (!formData.soilPreparation.trim()) {
      newErrors.soilPreparation = 'Soil preparation details are required';
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
    <Card className="max-w-2xl mx-auto p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Agroforestry Plan</h2>
        <p className="text-muted-foreground">
          Detail your agroforestry system design, management practices, and expected outcomes.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label>Tree/Crop Species *</Label>
          <div className="grid grid-cols-2 gap-3">
            {treeCropOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.treeCropSpecies.includes(option.id)}
                  onCheckedChange={(checked) => handleArrayChange('treeCropSpecies', option.id, checked as boolean)}
                />
                <Label htmlFor={option.id} className="text-sm font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.treeCropSpecies && (
            <p className="text-sm text-red-600">{errors.treeCropSpecies}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="plantingDensity">Planting Density (trees per hectare) *</Label>
          <Input
            id="plantingDensity"
            type="number"
            min="0"
            step="1"
            value={formData.plantingDensity || ''}
            onChange={(e) => handleInputChange('plantingDensity', parseInt(e.target.value) || 0)}
            placeholder="Enter planting density"
            className={errors.plantingDensity ? 'border-red-500' : ''}
          />
          {errors.plantingDensity && (
            <p className="text-sm text-red-600">{errors.plantingDensity}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="managementSystem">Management System *</Label>
          <Select 
            value={formData.managementSystem} 
            onValueChange={(value) => handleInputChange('managementSystem', value)}
          >
            <SelectTrigger className={errors.managementSystem ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select management system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="silvopasture">Silvopasture</SelectItem>
              <SelectItem value="alley_cropping">Alley Cropping</SelectItem>
              <SelectItem value="forest_farming">Forest Farming</SelectItem>
              <SelectItem value="windbreaks">Windbreaks/Shelterbelts</SelectItem>
              <SelectItem value="riparian_buffers">Riparian Buffers</SelectItem>
              <SelectItem value="multistory">Multistory Agroforestry</SelectItem>
              <SelectItem value="homegardens">Homegardens</SelectItem>
            </SelectContent>
          </Select>
          {errors.managementSystem && (
            <p className="text-sm text-red-600">{errors.managementSystem}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="intercroppingPlans">Intercropping Plans *</Label>
          <Textarea
            id="intercroppingPlans"
            value={formData.intercroppingPlans}
            onChange={(e) => handleInputChange('intercroppingPlans', e.target.value)}
            placeholder="Describe your intercropping strategy, crop rotation, and companion planting plans"
            rows={3}
            className={errors.intercroppingPlans ? 'border-red-500' : ''}
          />
          {errors.intercroppingPlans && (
            <p className="text-sm text-red-600">{errors.intercroppingPlans}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="harvestSchedule">Harvest Schedule *</Label>
          <Select 
            value={formData.harvestSchedule} 
            onValueChange={(value) => handleInputChange('harvestSchedule', value)}
          >
            <SelectTrigger className={errors.harvestSchedule ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select harvest schedule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="continuous">Continuous Harvest</SelectItem>
              <SelectItem value="seasonal">Seasonal Harvest</SelectItem>
              <SelectItem value="annual">Annual Harvest</SelectItem>
              <SelectItem value="biannual">Bi-annual Harvest</SelectItem>
              <SelectItem value="rotational">Rotational Harvest</SelectItem>
              <SelectItem value="selective">Selective Harvest</SelectItem>
            </SelectContent>
          </Select>
          {errors.harvestSchedule && (
            <p className="text-sm text-red-600">{errors.harvestSchedule}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="soilPreparation">Soil Preparation & Management *</Label>
          <Textarea
            id="soilPreparation"
            value={formData.soilPreparation}
            onChange={(e) => handleInputChange('soilPreparation', e.target.value)}
            placeholder="Describe soil preparation methods, fertility management, and erosion control measures"
            rows={3}
            className={errors.soilPreparation ? 'border-red-500' : ''}
          />
          {errors.soilPreparation && (
            <p className="text-sm text-red-600">{errors.soilPreparation}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="irrigationPlan">Irrigation Plan</Label>
          <Textarea
            id="irrigationPlan"
            value={formData.irrigationPlan}
            onChange={(e) => handleInputChange('irrigationPlan', e.target.value)}
            placeholder="Describe irrigation systems, water management, and drought mitigation strategies"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label>Certifications & Standards</Label>
          <div className="space-y-3">
            {certificationOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.certifications.includes(option.id)}
                  onCheckedChange={(checked) => handleArrayChange('certifications', option.id, checked as boolean)}
                />
                <Label htmlFor={option.id} className="text-sm font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Select applicable certifications for your agroforestry system
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
    </Card>
  );
};

export default AgroforestryPlanForm;
