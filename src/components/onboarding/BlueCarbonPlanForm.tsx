import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface BlueCarbonPlanData {
  ecosystemType: string;
  restorationMethod: string;
  targetSpecies: string[];
  waterDepth: string;
  salinity: string;
  tidalInfluence: string;
  seedlingSource: string;
  plantingDensity: number;
  maintenancePlan: string;
  stakeholderEngagement: string;
  permits: string[];
}

interface BlueCarbonPlanFormProps {
  data: BlueCarbonPlanData;
  onNext: (data: BlueCarbonPlanData) => void;
  onPrevious: () => void;
}

const speciesOptions = [
  { id: 'mangroves_red', label: 'Red Mangroves' },
  { id: 'mangroves_black', label: 'Black Mangroves' },
  { id: 'mangroves_white', label: 'White Mangroves' },
  { id: 'seagrass_turtle', label: 'Turtle Grass' },
  { id: 'seagrass_manatee', label: 'Manatee Grass' },
  { id: 'seagrass_shoal', label: 'Shoal Grass' },
  { id: 'salt_marsh_cordgrass', label: 'Salt Marsh Cordgrass' },
  { id: 'salt_marsh_needle', label: 'Needle Rush' },
  { id: 'kelp_giant', label: 'Giant Kelp' },
  { id: 'kelp_bull', label: 'Bull Kelp' },
];

const permitOptions = [
  { id: 'coastal_zone', label: 'Coastal Zone Management Permit' },
  { id: 'wetland_permit', label: 'Wetland Development Permit' },
  { id: 'environmental_impact', label: 'Environmental Impact Assessment' },
  { id: 'water_quality', label: 'Water Quality Certification' },
  { id: 'marine_protected', label: 'Marine Protected Area Authorization' },
  { id: 'fishing_restrictions', label: 'Fishing Restriction Permits' },
];

const BlueCarbonPlanForm: React.FC<BlueCarbonPlanFormProps> = ({ data, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<BlueCarbonPlanData>(data);
  const [errors, setErrors] = useState<Partial<BlueCarbonPlanData>>({});

  const handleInputChange = (field: keyof BlueCarbonPlanData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleArrayChange = (field: 'targetSpecies' | 'permits', itemId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], itemId]
        : prev[field].filter(id => id !== itemId)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BlueCarbonPlanData> = {};

    if (!formData.ecosystemType) {
      newErrors.ecosystemType = 'Ecosystem type is required';
    }

    if (!formData.restorationMethod) {
      newErrors.restorationMethod = 'Restoration method is required';
    }

    if (formData.targetSpecies.length === 0) {
      newErrors.targetSpecies = 'At least one target species is required';
    }

    if (!formData.waterDepth) {
      newErrors.waterDepth = 'Water depth information is required';
    }

    if (!formData.salinity) {
      newErrors.salinity = 'Salinity level is required';
    }

    if (!formData.tidalInfluence) {
      newErrors.tidalInfluence = 'Tidal influence is required';
    }

    if (!formData.seedlingSource.trim()) {
      newErrors.seedlingSource = 'Seedling source information is required';
    }

    if (!formData.plantingDensity || formData.plantingDensity <= 0) {
      newErrors.plantingDensity = 'Valid planting density is required';
    }

    if (!formData.maintenancePlan.trim()) {
      newErrors.maintenancePlan = 'Maintenance plan is required';
    }

    if (!formData.stakeholderEngagement.trim()) {
      newErrors.stakeholderEngagement = 'Stakeholder engagement plan is required';
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
        <h2 className="text-2xl font-bold mb-2">Blue Carbon Restoration Plan</h2>
        <p className="text-muted-foreground">
          Detail your coastal ecosystem restoration strategy including species selection, site preparation, and long-term management.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="ecosystemType">Ecosystem Type *</Label>
          <Select 
            value={formData.ecosystemType} 
            onValueChange={(value) => handleInputChange('ecosystemType', value)}
          >
            <SelectTrigger className={errors.ecosystemType ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select ecosystem type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mangrove_forest">Mangrove Forest</SelectItem>
              <SelectItem value="seagrass_meadows">Seagrass Meadows</SelectItem>
              <SelectItem value="salt_marshes">Salt Marshes</SelectItem>
              <SelectItem value="kelp_forests">Kelp Forests</SelectItem>
              <SelectItem value="coastal_wetlands">Coastal Wetlands</SelectItem>
              <SelectItem value="estuarine_habitats">Estuarine Habitats</SelectItem>
            </SelectContent>
          </Select>
          {errors.ecosystemType && (
            <p className="text-sm text-red-600">{errors.ecosystemType}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="restorationMethod">Restoration Method *</Label>
          <Select 
            value={formData.restorationMethod} 
            onValueChange={(value) => handleInputChange('restorationMethod', value)}
          >
            <SelectTrigger className={errors.restorationMethod ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select restoration method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active_restoration">Active Restoration (planting)</SelectItem>
              <SelectItem value="passive_restoration">Passive Restoration (natural recovery)</SelectItem>
              <SelectItem value="hybrid_approach">Hybrid Approach</SelectItem>
              <SelectItem value="assisted_migration">Assisted Migration</SelectItem>
              <SelectItem value="sediment_management">Sediment Management</SelectItem>
              <SelectItem value="hydrological_restoration">Hydrological Restoration</SelectItem>
            </SelectContent>
          </Select>
          {errors.restorationMethod && (
            <p className="text-sm text-red-600">{errors.restorationMethod}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Target Species *</Label>
          <div className="grid grid-cols-1 gap-3 max-h-48 overflow-y-auto">
            {speciesOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.targetSpecies.includes(option.id)}
                  onCheckedChange={(checked) => handleArrayChange('targetSpecies', option.id, checked as boolean)}
                />
                <Label htmlFor={option.id} className="text-sm font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          {errors.targetSpecies && (
            <p className="text-sm text-red-600">{errors.targetSpecies}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="waterDepth">Water Depth Range *</Label>
          <Select 
            value={formData.waterDepth} 
            onValueChange={(value) => handleInputChange('waterDepth', value)}
          >
            <SelectTrigger className={errors.waterDepth ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select water depth range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="intertidal">Intertidal Zone</SelectItem>
              <SelectItem value="0-1m">0-1 meter</SelectItem>
              <SelectItem value="1-3m">1-3 meters</SelectItem>
              <SelectItem value="3-5m">3-5 meters</SelectItem>
              <SelectItem value="5-10m">5-10 meters</SelectItem>
              <SelectItem value="10m+">10+ meters</SelectItem>
              <SelectItem value="variable">Variable depths</SelectItem>
            </SelectContent>
          </Select>
          {errors.waterDepth && (
            <p className="text-sm text-red-600">{errors.waterDepth}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="salinity">Salinity Level *</Label>
          <Select 
            value={formData.salinity} 
            onValueChange={(value) => handleInputChange('salinity', value)}
          >
            <SelectTrigger className={errors.salinity ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select salinity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="freshwater">Freshwater (0-0.5 ppt)</SelectItem>
              <SelectItem value="oligohaline">Oligohaline (0.5-5 ppt)</SelectItem>
              <SelectItem value="mesohaline">Mesohaline (5-18 ppt)</SelectItem>
              <SelectItem value="polyhaline">Polyhaline (18-30 ppt)</SelectItem>
              <SelectItem value="euhaline">Euhaline (30-40 ppt)</SelectItem>
              <SelectItem value="hypersaline">Hypersaline (40+ ppt)</SelectItem>
            </SelectContent>
          </Select>
          {errors.salinity && (
            <p className="text-sm text-red-600">{errors.salinity}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="tidalInfluence">Tidal Influence *</Label>
          <Select 
            value={formData.tidalInfluence} 
            onValueChange={(value) => handleInputChange('tidalInfluence', value)}
          >
            <SelectTrigger className={errors.tidalInfluence ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select tidal influence" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="micro_tidal">Micro-tidal (0-2m range)</SelectItem>
              <SelectItem value="meso_tidal">Meso-tidal (2-4m range)</SelectItem>
              <SelectItem value="macro_tidal">Macro-tidal (4m+ range)</SelectItem>
              <SelectItem value="non_tidal">Non-tidal</SelectItem>
            </SelectContent>
          </Select>
          {errors.tidalInfluence && (
            <p className="text-sm text-red-600">{errors.tidalInfluence}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="seedlingSource">Seedling/Propagule Source *</Label>
          <Textarea
            id="seedlingSource"
            value={formData.seedlingSource}
            onChange={(e) => handleInputChange('seedlingSource', e.target.value)}
            placeholder="Describe nursery sources, collection methods, and genetic diversity considerations"
            rows={3}
            className={errors.seedlingSource ? 'border-red-500' : ''}
          />
          {errors.seedlingSource && (
            <p className="text-sm text-red-600">{errors.seedlingSource}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="plantingDensity">Planting Density (individuals per m²) *</Label>
          <Input
            id="plantingDensity"
            type="number"
            min="0"
            step="0.1"
            value={formData.plantingDensity || ''}
            onChange={(e) => handleInputChange('plantingDensity', parseFloat(e.target.value) || 0)}
            placeholder="Enter planting density"
            className={errors.plantingDensity ? 'border-red-500' : ''}
          />
          {errors.plantingDensity && (
            <p className="text-sm text-red-600">{errors.plantingDensity}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="maintenancePlan">Maintenance Plan *</Label>
          <Textarea
            id="maintenancePlan"
            value={formData.maintenancePlan}
            onChange={(e) => handleInputChange('maintenancePlan', e.target.value)}
            placeholder="Describe ongoing maintenance, monitoring, and adaptive management strategies"
            rows={3}
            className={errors.maintenancePlan ? 'border-red-500' : ''}
          />
          {errors.maintenancePlan && (
            <p className="text-sm text-red-600">{errors.maintenancePlan}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="stakeholderEngagement">Stakeholder Engagement *</Label>
          <Textarea
            id="stakeholderEngagement"
            value={formData.stakeholderEngagement}
            onChange={(e) => handleInputChange('stakeholderEngagement', e.target.value)}
            placeholder="Describe community involvement, local partnerships, and benefit-sharing arrangements"
            rows={3}
            className={errors.stakeholderEngagement ? 'border-red-500' : ''}
          />
          {errors.stakeholderEngagement && (
            <p className="text-sm text-red-600">{errors.stakeholderEngagement}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Required Permits & Approvals</Label>
          <div className="space-y-3">
            {permitOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.permits.includes(option.id)}
                  onCheckedChange={(checked) => handleArrayChange('permits', option.id, checked as boolean)}
                />
                <Label htmlFor={option.id} className="text-sm font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Select applicable permits and regulatory approvals needed
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

export default BlueCarbonPlanForm;
