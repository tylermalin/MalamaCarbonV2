import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface LandUseDetailsData {
  currentLandUse: string;
  soilType: string;
  vegetation: string;
  waterSources: string[];
  accessibility: string;
  nearbyInfrastructure: string;
}

interface LandUseDetailsFormProps {
  data: LandUseDetailsData;
  onNext: (data: LandUseDetailsData) => void;
  onPrevious: () => void;
}

const waterSourceOptions = [
  { id: 'river', label: 'River/Stream' },
  { id: 'lake', label: 'Lake/Pond' },
  { id: 'groundwater', label: 'Groundwater/Wells' },
  { id: 'rainwater', label: 'Rainwater Collection' },
  { id: 'municipal', label: 'Municipal Water' },
  { id: 'irrigation', label: 'Irrigation Systems' },
];

const LandUseDetailsForm: React.FC<LandUseDetailsFormProps> = ({ data, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<LandUseDetailsData>(data);
  const [errors, setErrors] = useState<Partial<LandUseDetailsData>>({});

  const handleInputChange = (field: keyof LandUseDetailsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleWaterSourceChange = (sourceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      waterSources: checked
        ? [...prev.waterSources, sourceId]
        : prev.waterSources.filter(id => id !== sourceId)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LandUseDetailsData> = {};

    if (!formData.currentLandUse) {
      newErrors.currentLandUse = 'Current land use is required';
    }

    if (!formData.soilType) {
      newErrors.soilType = 'Soil type is required';
    }

    if (!formData.vegetation.trim()) {
      newErrors.vegetation = 'Vegetation description is required';
    }

    if (!formData.accessibility) {
      newErrors.accessibility = 'Accessibility information is required';
    }

    if (!formData.nearbyInfrastructure.trim()) {
      newErrors.nearbyInfrastructure = 'Infrastructure information is required';
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
        <CardTitle>Land Use Details</CardTitle>
        <CardDescription>
          Provide information about the current state and characteristics of your project land.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="currentLandUse">Current Land Use *</Label>
            <Select 
              value={formData.currentLandUse} 
              onValueChange={(value) => handleInputChange('currentLandUse', value)}
            >
              <SelectTrigger className={errors.currentLandUse ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select current land use" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agricultural">Agricultural/Cropland</SelectItem>
                <SelectItem value="pasture">Pasture/Grazing Land</SelectItem>
                <SelectItem value="forest">Forest/Woodland</SelectItem>
                <SelectItem value="degraded">Degraded/Abandoned Land</SelectItem>
                <SelectItem value="wetland">Wetland</SelectItem>
                <SelectItem value="grassland">Grassland/Prairie</SelectItem>
                <SelectItem value="mixed">Mixed Use</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.currentLandUse && (
              <p className="text-sm text-destructive">{errors.currentLandUse}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="soilType">Soil Type *</Label>
            <Select 
              value={formData.soilType} 
              onValueChange={(value) => handleInputChange('soilType', value)}
            >
              <SelectTrigger className={errors.soilType ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select soil type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="clay">Clay</SelectItem>
                <SelectItem value="loam">Loam</SelectItem>
                <SelectItem value="sand">Sandy</SelectItem>
                <SelectItem value="silt">Silt</SelectItem>
                <SelectItem value="clay_loam">Clay Loam</SelectItem>
                <SelectItem value="sandy_loam">Sandy Loam</SelectItem>
                <SelectItem value="silty_loam">Silty Loam</SelectItem>
                <SelectItem value="peat">Peat/Organic</SelectItem>
                <SelectItem value="rocky">Rocky/Stony</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
            {errors.soilType && (
              <p className="text-sm text-destructive">{errors.soilType}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="vegetation">Current Vegetation *</Label>
            <Textarea
              id="vegetation"
              value={formData.vegetation}
              onChange={(e) => handleInputChange('vegetation', e.target.value)}
              placeholder="Describe the current vegetation, including native species, invasive plants, coverage density, etc."
              rows={3}
              className={errors.vegetation ? 'border-destructive' : ''}
            />
            {errors.vegetation && (
              <p className="text-sm text-destructive">{errors.vegetation}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label>Available Water Sources</Label>
            <div className="grid grid-cols-2 gap-3">
              {waterSourceOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={formData.waterSources.includes(option.id)}
                    onCheckedChange={(checked) => handleWaterSourceChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="accessibility">Site Accessibility *</Label>
            <Select 
              value={formData.accessibility} 
              onValueChange={(value) => handleInputChange('accessibility', value)}
            >
              <SelectTrigger className={errors.accessibility ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select accessibility level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">Excellent - Paved road access</SelectItem>
                <SelectItem value="good">Good - Gravel/dirt road access</SelectItem>
                <SelectItem value="moderate">Moderate - ATV/4WD access required</SelectItem>
                <SelectItem value="limited">Limited - Walking access only</SelectItem>
                <SelectItem value="remote">Remote - Requires special transport</SelectItem>
              </SelectContent>
            </Select>
            {errors.accessibility && (
              <p className="text-sm text-destructive">{errors.accessibility}</p>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="nearbyInfrastructure">Nearby Infrastructure *</Label>
            <Textarea
              id="nearbyInfrastructure"
              value={formData.nearbyInfrastructure}
              onChange={(e) => handleInputChange('nearbyInfrastructure', e.target.value)}
              placeholder="Describe nearby infrastructure: power lines, storage facilities, processing plants, transportation hubs, etc."
              rows={3}
              className={errors.nearbyInfrastructure ? 'border-destructive' : ''}
            />
            {errors.nearbyInfrastructure && (
              <p className="text-sm text-destructive">{errors.nearbyInfrastructure}</p>
            )}
          </div>

          <div className="flex justify-between pt-6">
            <Button type="button" variant="outline" size="lg" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit" size="lg">
              Next: Biochar Plan
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LandUseDetailsForm;
