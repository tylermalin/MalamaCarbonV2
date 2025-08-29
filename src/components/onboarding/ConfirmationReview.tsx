import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FormData } from '../MalamaOnboardingFlow';

interface ConfirmationReviewProps {
  formData: FormData;
  onSubmit: (data: { termsAccepted: boolean; dataProcessingConsent: boolean }) => void;
  onPrevious: () => void;
  isSubmitting: boolean;
}

const ConfirmationReview: React.FC<ConfirmationReviewProps> = ({ 
  formData, 
  onSubmit, 
  onPrevious, 
  isSubmitting 
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [dataProcessingConsent, setDataProcessingConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!termsAccepted || !dataProcessingConsent) {
      setError('Please accept the terms and conditions and data processing consent to proceed.');
      return;
    }

    onSubmit({ termsAccepted, dataProcessingConsent });
  };

  const formatArrayDisplay = (items: string[]) => {
    if (items.length === 0) return 'None selected';
    return items.map((item, index) => (
      <Badge key={index} variant="secondary" className="mr-1 mb-1">
        {item.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </Badge>
    ));
  };

  const formatText = (text: string) => {
    return text.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const renderProjectPlanSection = () => {
    const projectType = formData.projectBasics.projectType;
    const plan = formData.projectPlan;

    switch (projectType) {
      case 'biochar':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Biochar Production Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Feedstock Type</Label>
                <p className="text-base">{plan.feedstockType ? formatText(plan.feedstockType) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Production Method</Label>
                <p className="text-base">{plan.productionMethod ? formatText(plan.productionMethod) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Feedstock Volume</Label>
                <p className="text-base">{plan.estimatedFeedstockVolume || 0} tons/year</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Storage Capacity</Label>
                <p className="text-base">{plan.storageCapacity || 0} tons</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Quality Standards</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(plan.qualityStandards || [])}
                </div>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Application Plan</Label>
                <p className="text-base">{plan.applicationPlan || 'Not specified'}</p>
              </div>
            </div>
          </div>
        );

      case 'agroforestry':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Agroforestry Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Management System</Label>
                <p className="text-base">{plan.managementSystem ? formatText(plan.managementSystem) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Planting Density</Label>
                <p className="text-base">{plan.plantingDensity || 0} trees/hectare</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Harvest Schedule</Label>
                <p className="text-base">{plan.harvestSchedule ? formatText(plan.harvestSchedule) : 'Not specified'}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Tree/Crop Species</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(plan.treeCropSpecies || [])}
                </div>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Intercropping Plans</Label>
                <p className="text-base">{plan.intercroppingPlans || 'Not specified'}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Certifications</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(plan.certifications || [])}
                </div>
              </div>
            </div>
          </div>
        );

      case 'enhanced_rock_weathering':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Enhanced Rock Weathering Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Rock/Mineral Type</Label>
                <p className="text-base">{plan.rockMineralType ? formatText(plan.rockMineralType) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Application Rate</Label>
                <p className="text-base">{plan.applicationRate || 0} tons/hectare</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Application Method</Label>
                <p className="text-base">{plan.applicationMethod ? formatText(plan.applicationMethod) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Particle Size</Label>
                <p className="text-base">{plan.particleSize ? formatText(plan.particleSize) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Source Location</Label>
                <p className="text-base">{plan.sourceLocation || 'Not specified'}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Transportation Plan</Label>
                <p className="text-base">{plan.transportationPlan || 'Not specified'}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Safety Measures</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(plan.safetyMeasures || [])}
                </div>
              </div>
            </div>
          </div>
        );

      case 'blue_carbon':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Blue Carbon Restoration Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Ecosystem Type</Label>
                <p className="text-base">{plan.ecosystemType ? formatText(plan.ecosystemType) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Restoration Method</Label>
                <p className="text-base">{plan.restorationMethod ? formatText(plan.restorationMethod) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Water Depth</Label>
                <p className="text-base">{plan.waterDepth ? formatText(plan.waterDepth) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Salinity</Label>
                <p className="text-base">{plan.salinity ? formatText(plan.salinity) : 'Not specified'}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Planting Density</Label>
                <p className="text-base">{plan.plantingDensity || 0} individuals/m²</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Target Species</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(plan.targetSpecies || [])}
                </div>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Stakeholder Engagement</Label>
                <p className="text-base">{plan.stakeholderEngagement || 'Not specified'}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Required Permits</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(plan.permits || [])}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Plan</h3>
            <p className="text-muted-foreground">
              Project plan details for {formatText(projectType)} will be displayed here.
            </p>
          </div>
        );
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Review & Confirm Submission</CardTitle>
        <CardDescription>
          Please review all the information you've provided before submitting your carbon credit project application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Project Basics */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Basics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Project Name</Label>
                <p className="text-base">{formData.projectBasics.projectName}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                <p className="text-base">{formData.projectBasics.location}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Project Type</Label>
                <p className="text-base">{formData.projectBasics.projectType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Estimated Acreage</Label>
                <p className="text-base">{formData.projectBasics.estimatedAcreage} acres</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Timeline</Label>
                <p className="text-base">{formData.projectBasics.timeline.replace(/_/g, ' ')}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Description</Label>
                <p className="text-base">{formData.projectBasics.projectDescription}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Land Use Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Land Use Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Current Land Use</Label>
                <p className="text-base">{formData.landUseDetails.currentLandUse.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Soil Type</Label>
                <p className="text-base">{formData.landUseDetails.soilType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Accessibility</Label>
                <p className="text-base">{formData.landUseDetails.accessibility.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Water Sources</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(formData.landUseDetails.waterSources)}
                </div>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Vegetation</Label>
                <p className="text-base">{formData.landUseDetails.vegetation}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Nearby Infrastructure</Label>
                <p className="text-base">{formData.landUseDetails.nearbyInfrastructure}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Dynamic Project Plan */}
          {renderProjectPlanSection()}

          <Separator />

          {/* MRV Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">MRV (Monitoring, Reporting & Verification)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Monitoring Frequency</Label>
                <p className="text-base">{formData.mrvDetails.monitoringFrequency.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Reporting Schedule</Label>
                <p className="text-base">{formData.mrvDetails.reportingSchedule.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Third-Party Verification</Label>
                <p className="text-base">{formData.mrvDetails.verificationThirdParty.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Data Management System</Label>
                <p className="text-base">{formData.mrvDetails.dataManagementSystem.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Measurement Methods</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(formData.mrvDetails.measurementMethods)}
                </div>
              </div>
              <div className="md:col-span-2">
                <Label className="text-sm font-medium text-muted-foreground">Compliance Standards</Label>
                <div className="flex flex-wrap">
                  {formatArrayDisplay(formData.mrvDetails.complianceStandards)}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Terms and Conditions */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and 
                    <a href="#" className="text-primary hover:underline"> Privacy Policy</a>. I understand that this 
                    submission is an application for carbon credit project evaluation and does not guarantee approval 
                    or project implementation.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="dataConsent"
                    checked={dataProcessingConsent}
                    onCheckedChange={(checked) => setDataProcessingConsent(checked as boolean)}
                  />
                  <Label htmlFor="dataConsent" className="text-sm leading-relaxed">
                    I consent to Mālama Labs processing the provided information for project evaluation, 
                    due diligence, and potential partnership purposes. I understand my data will be handled 
                    in accordance with applicable privacy regulations.
                  </Label>
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
              )}
            </div>

            <div className="flex justify-between pt-6">
              <Button type="button" variant="outline" size="lg" onClick={onPrevious} disabled={isSubmitting}>
                Previous
              </Button>
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfirmationReview;
