import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface MRVDetailsData {
  monitoringFrequency: string;
  measurementMethods: string[];
  reportingSchedule: string;
  verificationThirdParty: string;
  dataManagementSystem: string;
  complianceStandards: string[];
}

interface MRVDetailsFormProps {
  data: MRVDetailsData;
  onNext: (data: MRVDetailsData) => void;
  onPrevious: () => void;
}

const measurementMethodOptions = [
  { id: 'soil_sampling', label: 'Soil Sampling & Analysis' },
  { id: 'biomass_measurement', label: 'Biomass Measurement' },
  { id: 'remote_sensing', label: 'Remote Sensing/Satellite' },
  { id: 'ground_surveys', label: 'Ground-based Surveys' },
  { id: 'iot_sensors', label: 'IoT/Smart Sensors' },
  { id: 'drone_monitoring', label: 'Drone Monitoring' },
  { id: 'lab_analysis', label: 'Laboratory Analysis' },
  { id: 'direct_measurement', label: 'Direct CO2 Measurement' },
];

const complianceStandardOptions = [
  { id: 'vcs', label: 'Verified Carbon Standard (VCS)' },
  { id: 'gold_standard', label: 'Gold Standard' },
  { id: 'cdm', label: 'Clean Development Mechanism (CDM)' },
  { id: 'car', label: 'Climate Action Reserve (CAR)' },
  { id: 'aces', label: 'American Carbon Exchange Standard (ACES)' },
  { id: 'plan_vivo', label: 'Plan Vivo' },
  { id: 'ccb', label: 'Climate, Community & Biodiversity (CCB)' },
  { id: 'iso14064', label: 'ISO 14064' },
];

const MRVDetailsForm: React.FC<MRVDetailsFormProps> = ({ data, onNext, onPrevious }) => {
  const [formData, setFormData] = useState<MRVDetailsData>(data);
  const [errors, setErrors] = useState<Partial<MRVDetailsData>>({});

  const handleInputChange = (field: keyof MRVDetailsData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleArrayChange = (field: 'measurementMethods' | 'complianceStandards', itemId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], itemId]
        : prev[field].filter(id => id !== itemId)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<MRVDetailsData> = {};

    if (!formData.monitoringFrequency) {
      newErrors.monitoringFrequency = 'Monitoring frequency is required';
    }

    if (formData.measurementMethods.length === 0) {
      newErrors.measurementMethods = 'At least one measurement method is required';
    }

    if (!formData.reportingSchedule) {
      newErrors.reportingSchedule = 'Reporting schedule is required';
    }

    if (!formData.verificationThirdParty) {
      newErrors.verificationThirdParty = 'Third-party verification selection is required';
    }

    if (!formData.dataManagementSystem) {
      newErrors.dataManagementSystem = 'Data management system is required';
    }

    if (formData.complianceStandards.length === 0) {
      newErrors.complianceStandards = 'At least one compliance standard is required';
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
        <CardTitle>MRV (Monitoring, Reporting & Verification) Details</CardTitle>
        <CardDescription>
          Define your approach to measuring, tracking, and verifying carbon credit outcomes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="monitoringFrequency">Monitoring Frequency *</Label>
            <Select 
              value={formData.monitoringFrequency} 
              onValueChange={(value) => handleInputChange('monitoringFrequency', value)}
            >
              <SelectTrigger className={errors.monitoringFrequency ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select monitoring frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="continuous">Continuous (Real-time)</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="biannual">Bi-annual</SelectItem>
                <SelectItem value="annual">Annual</SelectItem>
              </SelectContent>
            </Select>
            {errors.monitoringFrequency && (
              <p className="text-sm text-destructive">{errors.monitoringFrequency}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Measurement Methods *</Label>
            <div className="grid grid-cols-1 gap-3">
              {measurementMethodOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={formData.measurementMethods.includes(option.id)}
                    onCheckedChange={(checked) => handleArrayChange('measurementMethods', option.id, checked as boolean)}
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
            {errors.measurementMethods && (
              <p className="text-sm text-destructive">{errors.measurementMethods}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="reportingSchedule">Reporting Schedule *</Label>
            <Select 
              value={formData.reportingSchedule} 
              onValueChange={(value) => handleInputChange('reportingSchedule', value)}
            >
              <SelectTrigger className={errors.reportingSchedule ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select reporting schedule" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly Reports</SelectItem>
                <SelectItem value="quarterly">Quarterly Reports</SelectItem>
                <SelectItem value="biannual">Bi-annual Reports</SelectItem>
                <SelectItem value="annual">Annual Reports</SelectItem>
                <SelectItem value="milestone">Milestone-based</SelectItem>
                <SelectItem value="custom">Custom Schedule</SelectItem>
              </SelectContent>
            </Select>
            {errors.reportingSchedule && (
              <p className="text-sm text-destructive">{errors.reportingSchedule}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="verificationThirdParty">Third-Party Verification *</Label>
            <Select 
              value={formData.verificationThirdParty} 
              onValueChange={(value) => handleInputChange('verificationThirdParty', value)}
            >
              <SelectTrigger className={errors.verificationThirdParty ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select verification approach" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accredited_verifier">Accredited Third-Party Verifier</SelectItem>
                <SelectItem value="independent_auditor">Independent Auditor</SelectItem>
                <SelectItem value="standard_body">Standard Body Verification</SelectItem>
                <SelectItem value="registry_verification">Registry Verification</SelectItem>
                <SelectItem value="self_certification">Self-Certification</SelectItem>
                <SelectItem value="tbd">To Be Determined</SelectItem>
              </SelectContent>
            </Select>
            {errors.verificationThirdParty && (
              <p className="text-sm text-destructive">{errors.verificationThirdParty}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dataManagementSystem">Data Management System *</Label>
            <Select 
              value={formData.dataManagementSystem} 
              onValueChange={(value) => handleInputChange('dataManagementSystem', value)}
            >
              <SelectTrigger className={errors.dataManagementSystem ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select data management approach" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cloud_platform">Cloud-based Platform</SelectItem>
                <SelectItem value="blockchain">Blockchain/DLT System</SelectItem>
                <SelectItem value="database">Traditional Database</SelectItem>
                <SelectItem value="spreadsheet">Spreadsheet/Manual</SelectItem>
                <SelectItem value="registry_system">Registry System</SelectItem>
                <SelectItem value="custom_software">Custom Software</SelectItem>
                <SelectItem value="third_party_service">Third-Party Service</SelectItem>
              </SelectContent>
            </Select>
            {errors.dataManagementSystem && (
              <p className="text-sm text-destructive">{errors.dataManagementSystem}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Compliance Standards *</Label>
            <div className="grid grid-cols-1 gap-3">
              {complianceStandardOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={formData.complianceStandards.includes(option.id)}
                    onCheckedChange={(checked) => handleArrayChange('complianceStandards', option.id, checked as boolean)}
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
            {errors.complianceStandards && (
              <p className="text-sm text-destructive">{errors.complianceStandards}</p>
            )}
            <p className="text-sm text-muted-foreground">
              Select all applicable carbon credit standards for your project
            </p>
          </div>

          <div className="flex justify-between pt-6">
            <Button type="button" variant="outline" size="lg" onClick={onPrevious}>
              Previous
            </Button>
            <Button type="submit" size="lg">
              Next: Review & Confirm
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MRVDetailsForm;
