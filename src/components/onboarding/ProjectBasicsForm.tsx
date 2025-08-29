import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProjectBasicsData {
  projectName: string;
  projectDescription: string;
  location: string;
  estimatedAcreage: number | string;
  projectType: string;
  timeline: string;
}

interface ProjectBasicsFormProps {
  data: ProjectBasicsData;
  onNext: (data: ProjectBasicsData) => void;
}

const ProjectBasicsForm: React.FC<ProjectBasicsFormProps> = ({ data, onNext }) => {
  const [formData, setFormData] = useState<ProjectBasicsData>(data);
  const [errors, setErrors] = useState<Partial<ProjectBasicsData>>({});

  const handleInputChange = (field: keyof ProjectBasicsData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProjectBasicsData> = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.estimatedAcreage || formData.estimatedAcreage <= 0) {
      newErrors.estimatedAcreage = 'Valid acreage is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Project type is required';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Timeline is required';
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
        <h2 className="text-2xl font-bold mb-2">Project Basics</h2>
        <p className="text-muted-foreground">
          Tell us about your carbon credit project and its key characteristics.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="projectName">Project Name *</Label>
          <Input
            id="projectName"
            value={formData.projectName}
            onChange={(e) => handleInputChange('projectName', e.target.value)}
            placeholder="Enter your project name"
            className={errors.projectName ? 'border-red-500' : ''}
          />
          {errors.projectName && (
            <p className="text-sm text-red-600">{errors.projectName}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="projectDescription">Project Description *</Label>
          <Textarea
            id="projectDescription"
            value={formData.projectDescription}
            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
            placeholder="Describe your project goals, methods, and expected outcomes"
            rows={4}
            className={errors.projectDescription ? 'border-red-500' : ''}
          />
          {errors.projectDescription && (
            <p className="text-sm text-red-600">{errors.projectDescription}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="location">Project Location *</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="City, State/Province, Country"
            className={errors.location ? 'border-red-500' : ''}
          />
          {errors.location && (
            <p className="text-sm text-red-600">{errors.location}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="estimatedAcreage">Estimated Acreage *</Label>
          <Input
            id="estimatedAcreage"
            type="number"
            min="0"
            step="0.1"
            value={formData.estimatedAcreage || ''}
            onChange={(e) => handleInputChange('estimatedAcreage', parseFloat(e.target.value) || 0)}
            placeholder="Enter acreage"
            className={errors.estimatedAcreage ? 'border-red-500' : ''}
          />
          {errors.estimatedAcreage && (
            <p className="text-sm text-red-600">{errors.estimatedAcreage}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="projectType">Project Type *</Label>
          <Select 
            value={formData.projectType} 
            onValueChange={(value) => handleInputChange('projectType', value)}
          >
            <SelectTrigger className={errors.projectType ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reforestation">Reforestation</SelectItem>
              <SelectItem value="afforestation">Afforestation</SelectItem>
              <SelectItem value="agroforestry">Agroforestry</SelectItem>
              <SelectItem value="soil_carbon">Soil Carbon Enhancement</SelectItem>
              <SelectItem value="biochar">Biochar Production</SelectItem>
              <SelectItem value="enhanced_rock_weathering">Enhanced Rock Weathering</SelectItem>
              <SelectItem value="blue_carbon">Blue Carbon (Coastal Restoration)</SelectItem>
              <SelectItem value="wetland_restoration">Wetland Restoration</SelectItem>
              <SelectItem value="grassland_management">Grassland Management</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="text-sm text-red-600">{errors.projectType}</p>
          )}
        </div>

        <div className="space-y-4">
          <Label htmlFor="timeline">Expected Timeline *</Label>
          <Select 
            value={formData.timeline} 
            onValueChange={(value) => handleInputChange('timeline', value)}
          >
            <SelectTrigger className={errors.timeline ? 'border-red-500' : ''}>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2_years">1-2 years</SelectItem>
              <SelectItem value="2-5_years">2-5 years</SelectItem>
              <SelectItem value="5-10_years">5-10 years</SelectItem>
              <SelectItem value="10+_years">10+ years</SelectItem>
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="text-sm text-red-600">{errors.timeline}</p>
          )}
        </div>

        <div className="flex justify-end pt-6">
          <Button type="submit" size="lg">
            Next: Land Use Details
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ProjectBasicsForm;
