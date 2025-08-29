import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface RockWeatheringPlanData {
  rockMineralType: string;
  applicationRate: number;
  applicationMethod: string;
  particleSize: string;
  sourceLocation: string;
  transportationPlan: string;
  applicationSchedule: string;
  monitoringProtocol: string;
  safetyMeasures: string[];
}

interface RockWeatheringPlanFormProps {
  data: RockWeatheringPlanData;
  onNext: (data: RockWeatheringPlanData) => void;
  onPrevious: () => void;
}

const safetyMeasureOptions = [
  { id: 'dust_control', label: 'Dust Control Measures' },
  { id: 'ppe_requirements', label: 'Personal Protective Equipment' },
  { id: 'soil_ph_monitoring', label: 'Soil pH Monitoring' },
  { id: 'groundwater_protection', label: 'Groundwater Protection' },
  { id: 'air_quality_monitoring', label: 'Air Quality Monitoring' },
  { id: 'worker_safety_training', label: 'Worker Safety Training' },
];

const RockWeatheringPlanForm: React.FC<RockWeatheringPlanFormProps> = ({ data, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<RockWeatheringPlanData>(data);
  const [errors, setErrors] = useState<Partial<RockWeatheringPlanData>>({});

  const handleInputChange = (field: keyof RockWeatheringPlanData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSafetyMeasureChange = (itemId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      safetyMeasures: checked
        ? [...prev.safetyMeasures, itemId]
        : prev.safetyMeasures.filter(id => id !== itemId)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RockWeatheringPlanData> = {};

    if (!formData.rockMineralType) {
      newErrors.rockMineralType = 'Rock mineral type is required';
    }

    if (!formData.applicationRate || formData.applicationRate <= 0) {
      newErrors.applicationRate = 'Valid application rate is required';
    }

    if (!formData.applicationMethod) {
      newErrors.applicationMethod = 'Application method is required';
    }

    if (!formData.particleSize) {
      newErrors.particleSize = 'Particle size specification is required';
    }

    if (!formData.sourceLocation.trim()) {
      newErrors.sourceLocation = 'Source location is required';
    }

    if (!formData.transportationPlan.trim()) {
      newErrors.transportationPlan = 'Transportation plan is required';
    }

    if (!formData.applicationSchedule) {
      newErrors.applicationSchedule = 'Application schedule is required';
    }

    if (!formData.monitoringProtocol.trim()) {
      newErrors.monitoringProtocol = 'Monitoring protocol is required';
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
        <h2 className="text-2xl font-bold mb-2">Enhanced Rock Weathering Plan</h2>
        <p className="text-muted-foreground">
          Detail your rock weathering strategy including mineral selection, application methods, and monitoring protocols.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="rockMineralType">Rock/Mineral Type *</Label>
          <Select 
            value={formData.rockMineralType} 
            onValueChange={(value) => handleInputChange('rockMineralType', value)}
          >
            <SelectTrigger className={errors.rockMineralType ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select rock/mineral type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basalt">Basalt</SelectItem>
              <SelectItem value="olivine">Olivine</SelectItem>
              <SelectItem value="wollastonite">Wollastonite</SelectItem>
              <SelectItem value="dunite">Dunite</SelectItem>
              <SelectItem value="peridotite">Peridotite</SelectItem>
              <SelectItem value="serpentine">Serpentine</SelectItem>
              <SelectItem value="limestone">Limestone</SelectItem>
              <SelectItem value="dolomite">Dolomite</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.rockMineralType && (
            <p className="text-sm text-red-600">{errors.rockMineralType}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicationRate">Application Rate (tons per hectare) *</Label>
          <Input
            id="applicationRate"
            type="number"
            min="0"
            step="0.1"
            value={formData.applicationRate || ''}
            onChange={(e) => handleInputChange('applicationRate', parseFloat(e.target.value) || 0)}
            placeholder="Enter application rate"
            className={errors.applicationRate ? 'border-red-500' : ''}
          />
          {errors.applicationRate && (
            <p className="text-sm text-red-600">{errors.applicationRate}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicationMethod">Application Method *</Label>
          <Select 
            value={formData.applicationMethod} 
            onValueChange={(value) => handleInputChange('applicationMethod', value)}
          >
            <SelectTrigger className={errors.applicationMethod ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select application method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="broadcast_spreading">Broadcast Spreading</SelectItem>
              <SelectItem value="precision_application">Precision Application</SelectItem>
              <SelectItem value="incorporation_tillage">Incorporation with Tillage</SelectItem>
              <SelectItem value="no_till_application">No-Till Application</SelectItem>
              <SelectItem value="slurry_application">Slurry Application</SelectItem>
              <SelectItem value="pneumatic_spreading">Pneumatic Spreading</SelectItem>
            </SelectContent>
          </Select>
          {errors.applicationMethod && (
            <p className="text-sm text-red-600">{errors.applicationMethod}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="particleSize">Particle Size Range *</Label>
          <Select 
            value={formData.particleSize} 
            onValueChange={(value) => handleInputChange('particleSize', value)}
          >
            <SelectTrigger className={errors.particleSize ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select particle size range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50_microns">0-50 microns (ultrafine)</SelectItem>
              <SelectItem value="50-250_microns">50-250 microns (fine)</SelectItem>
              <SelectItem value="250-1000_microns">250-1000 microns (medium)</SelectItem>
              <SelectItem value="1-5_mm">1-5 mm (coarse)</SelectItem>
              <SelectItem value="mixed_sizes">Mixed particle sizes</SelectItem>
              <SelectItem value="custom">Custom size range</SelectItem>
            </SelectContent>
          </Select>
          {errors.particleSize && (
            <p className="text-sm text-red-600">{errors.particleSize}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="sourceLocation">Mineral Source Location *</Label>
          <Input
            id="sourceLocation"
            value={formData.sourceLocation}
            onChange={(e) => handleInputChange('sourceLocation', e.target.value)}
            placeholder="Quarry/mine location and supplier details"
            className={errors.sourceLocation ? 'border-red-500' : ''}
          />
          {errors.sourceLocation && (
            <p className="text-sm text-red-600">{errors.sourceLocation}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="transportationPlan">Transportation Plan *</Label>
          <Textarea
            id="transportationPlan"
            value={formData.transportationPlan}
            onChange={(e) => handleInputChange('transportationPlan', e.target.value)}
            placeholder="Describe transportation methods, logistics, and cost considerations from source to application site"
            rows={3}
            className={errors.transportationPlan ? 'border-red-500' : ''}
          />
          {errors.transportationPlan && (
            <p className="text-sm text-red-600">{errors.transportationPlan}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="applicationSchedule">Application Schedule *</Label>
          <Select 
            value={formData.applicationSchedule} 
            onValueChange={(value) => handleInputChange('applicationSchedule', value)}
          >
            <SelectTrigger className={errors.applicationSchedule ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select application schedule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single_application">Single Application</SelectItem>
              <SelectItem value="split_applications">Split Applications</SelectItem>
              <SelectItem value="seasonal_application">Seasonal Application</SelectItem>
              <SelectItem value="annual_application">Annual Application</SelectItem>
              <SelectItem value="as_needed">As Needed Basis</SelectItem>
              <SelectItem value="pre_planting">Pre-Planting</SelectItem>
              <SelectItem value="post_harvest">Post-Harvest</SelectItem>
            </SelectContent>
          </Select>
          {errors.applicationSchedule && (
            <p className="text-sm text-red-600">{errors.applicationSchedule}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="monitoringProtocol">Monitoring Protocol *</Label>
          <Textarea
            id="monitoringProtocol"
            value={formData.monitoringProtocol}
            onChange={(e) => handleInputChange('monitoringProtocol', e.target.value)}
            placeholder="Describe monitoring methods for soil chemistry, CO2 sequestration rates, and environmental impacts"
            rows={4}
            className={errors.monitoringProtocol ? 'border-red-500' : ''}
          />
          {errors.monitoringProtocol && (
            <p className="text-sm text-red-600">{errors.monitoringProtocol}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Safety Measures</Label>
          <div className="space-y-3">
            {safetyMeasureOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.safetyMeasures.includes(option.id)}
                  onCheckedChange={(checked) => handleSafetyMeasureChange(option.id, checked as boolean)}
                />
                <Label htmlFor={option.id} className="text-sm font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Select applicable safety and environmental protection measures
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

export default RockWeatheringPlanForm;
