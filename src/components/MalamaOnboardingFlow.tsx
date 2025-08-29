import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { submitProjectApplication, ProjectSubmissionData } from '@/lib/projects';
import ProjectBasicsForm from './onboarding/ProjectBasicsForm';
import LandUseDetailsForm from './onboarding/LandUseDetailsForm';
import BiocharPlanForm from './onboarding/BiocharPlanForm';
import AgroforestryPlanForm from './onboarding/AgroforestryPlanForm';
import RockWeatheringPlanForm from './onboarding/RockWeatheringPlanForm';
import BlueCarbonPlanForm from './onboarding/BlueCarbonPlanForm';
import MRVDetailsForm from './onboarding/MRVDetailsForm';
import ConfirmationReview from './onboarding/ConfirmationReview';
import SuccessScreen from './onboarding/SuccessScreen';

export interface FormData {
  projectBasics: {
    projectName: string;
    projectDescription: string;
    location: string;
    estimatedAcreage: number;
    projectType: string;
    timeline: string;
  };
  landUseDetails: {
    currentLandUse: string;
    soilType: string;
    vegetation: string;
    waterSources: string[];
    accessibility: string;
    nearbyInfrastructure: string;
  };
  projectPlan: {
    // Biochar Plan
    feedstockType?: string;
    estimatedFeedstockVolume?: number;
    productionMethod?: string;
    applicationPlan?: string;
    storageCapacity?: number;
    qualityStandards?: string[];
    
    // Agroforestry Plan
    treeCropSpecies?: string[];
    plantingDensity?: number;
    managementSystem?: string;
    intercroppingPlans?: string;
    harvestSchedule?: string;
    soilPreparation?: string;
    irrigationPlan?: string;
    certifications?: string[];
    
    // Rock Weathering Plan
    rockMineralType?: string;
    applicationRate?: number;
    applicationMethod?: string;
    particleSize?: string;
    sourceLocation?: string;
    transportationPlan?: string;
    applicationSchedule?: string;
    monitoringProtocol?: string;
    safetyMeasures?: string[];
    
    // Blue Carbon Plan
    ecosystemType?: string;
    restorationMethod?: string;
    targetSpecies?: string[];
    waterDepth?: string;
    salinity?: string;
    tidalInfluence?: string;
    seedlingSource?: string;
    maintenancePlan?: string;
    stakeholderEngagement?: string;
    permits?: string[];
  };
  mrvDetails: {
    monitoringFrequency: string;
    measurementMethods: string[];
    reportingSchedule: string;
    verificationThirdParty: string;
    dataManagementSystem: string;
    complianceStandards: string[];
  };
}

const STORAGE_KEY = 'malama_onboarding_draft';
const TOTAL_STEPS = 6;

interface MalamaOnboardingFlowProps {
  onGoToDashboard?: () => void;
}

const MalamaOnboardingFlow: React.FC<MalamaOnboardingFlowProps> = ({ onGoToDashboard }) => {
  const [step, setStep] = useState<number>(1);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    projectBasics: {
      projectName: '',
      projectDescription: '',
      location: '',
      estimatedAcreage: 0,
      projectType: '',
      timeline: '',
    },
    landUseDetails: {
      currentLandUse: '',
      soilType: '',
      vegetation: '',
      waterSources: [],
      accessibility: '',
      nearbyInfrastructure: '',
    },
    projectPlan: {},
    mrvDetails: {
      monitoringFrequency: '',
      measurementMethods: [],
      reportingSchedule: '',
      verificationThirdParty: '',
      dataManagementSystem: '',
      complianceStandards: [],
    },
  });

  // Load data from localStorage on mount
  useEffect(() => {
    // Load draft from localStorage
    const savedDraft = localStorage.getItem(STORAGE_KEY);
    if (savedDraft) {
      try {
        const { formData: savedFormData, step: savedStep } = JSON.parse(savedDraft);
        if (savedFormData) {
          setFormData(savedFormData);
        }
        if (savedStep) {
          setStep(savedStep);
        }
      } catch (error) {
        console.error('Failed to load saved draft:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save to localStorage whenever step or formData changes
  useEffect(() => {
    if (step < TOTAL_STEPS) {
      const draftData = { formData, step };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draftData));
    }
  }, [step, formData]);

  const updateFormData = (stepKey: keyof FormData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [stepKey]: { ...prev[stepKey], ...data }
    }));
  };

  const handleNext = (stepKey: keyof FormData, data: any) => {
    updateFormData(stepKey, data);
    setError(null);
    setStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setError(null);
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError(null);

    // Update form data with confirmation data
    const finalFormData: ProjectSubmissionData = { ...formData, ...data };

    try {
      const result = await submitProjectApplication(finalFormData);
      setSubmissionId(result.id);
      
      // Clear draft and move to success
      localStorage.removeItem(STORAGE_KEY);
      setStep(TOTAL_STEPS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateProgress = () => {
    return ((step - 1) / (TOTAL_STEPS - 1)) * 100;
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Project Basics';
      case 2: return 'Land Use Details';
      case 3: return getProjectPlanTitle();
      case 4: return 'MRV Details';
      case 5: return 'Review & Confirm';
      case 6: return 'Success!';
      default: return 'Onboarding';
    }
  };

  const getProjectPlanTitle = () => {
    const projectType = formData.projectBasics.projectType;
    switch (projectType) {
      case 'biochar': return 'Biochar Plan';
      case 'agroforestry': return 'Agroforestry Plan';
      case 'enhanced_rock_weathering': return 'Rock Weathering Plan';
      case 'blue_carbon': return 'Blue Carbon Plan';
      default: return 'Project Plan';
    }
  };

  const renderProjectPlanStep = () => {
    const projectType = formData.projectBasics.projectType;
    
    switch (projectType) {
      case 'biochar':
        return (
          <BiocharPlanForm
            data={{
              feedstockType: formData.projectPlan.feedstockType || '',
              estimatedFeedstockVolume: formData.projectPlan.estimatedFeedstockVolume || 0,
              productionMethod: formData.projectPlan.productionMethod || '',
              applicationPlan: formData.projectPlan.applicationPlan || '',
              storageCapacity: formData.projectPlan.storageCapacity || 0,
              qualityStandards: formData.projectPlan.qualityStandards || [],
            }}
            onNext={(data) => handleNext('projectPlan', data)}
            onPrevious={handlePrevious}
          />
        );
      
      case 'agroforestry':
        return (
          <AgroforestryPlanForm
            data={{
              treeCropSpecies: formData.projectPlan.treeCropSpecies || [],
              plantingDensity: formData.projectPlan.plantingDensity || 0,
              managementSystem: formData.projectPlan.managementSystem || '',
              intercroppingPlans: formData.projectPlan.intercroppingPlans || '',
              harvestSchedule: formData.projectPlan.harvestSchedule || '',
              soilPreparation: formData.projectPlan.soilPreparation || '',
              irrigationPlan: formData.projectPlan.irrigationPlan || '',
              certifications: formData.projectPlan.certifications || [],
            }}
            onNext={(data) => handleNext('projectPlan', data)}
            onPrevious={handlePrevious}
          />
        );
      
      case 'enhanced_rock_weathering':
        return (
          <RockWeatheringPlanForm
            data={{
              rockMineralType: formData.projectPlan.rockMineralType || '',
              applicationRate: formData.projectPlan.applicationRate || 0,
              applicationMethod: formData.projectPlan.applicationMethod || '',
              particleSize: formData.projectPlan.particleSize || '',
              sourceLocation: formData.projectPlan.sourceLocation || '',
              transportationPlan: formData.projectPlan.transportationPlan || '',
              applicationSchedule: formData.projectPlan.applicationSchedule || '',
              monitoringProtocol: formData.projectPlan.monitoringProtocol || '',
              safetyMeasures: formData.projectPlan.safetyMeasures || [],
            }}
            onNext={(data) => handleNext('projectPlan', data)}
            onPrevious={handlePrevious}
          />
        );
      
      case 'blue_carbon':
        return (
          <BlueCarbonPlanForm
            data={{
              ecosystemType: formData.projectPlan.ecosystemType || '',
              restorationMethod: formData.projectPlan.restorationMethod || '',
              targetSpecies: formData.projectPlan.targetSpecies || [],
              waterDepth: formData.projectPlan.waterDepth || '',
              salinity: formData.projectPlan.salinity || '',
              tidalInfluence: formData.projectPlan.tidalInfluence || '',
              seedlingSource: formData.projectPlan.seedlingSource || '',
              plantingDensity: formData.projectPlan.plantingDensity || 0,
              maintenancePlan: formData.projectPlan.maintenancePlan || '',
              stakeholderEngagement: formData.projectPlan.stakeholderEngagement || '',
              permits: formData.projectPlan.permits || [],
            }}
            onNext={(data) => handleNext('projectPlan', data)}
            onPrevious={handlePrevious}
          />
        );
      
      default:
        // For other project types, show a generic message or the biochar form as fallback
        return (
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Project Plan</h2>
            <p className="text-muted-foreground mb-8">
              Project planning for "{projectType}" is coming soon. Please contact our team for assistance.
            </p>
            <div className="flex justify-between">
              <Button variant="outline" size="lg" onClick={handlePrevious}>
                Previous
              </Button>
              <Button size="lg" onClick={() => handleNext('projectPlan', {})}>
                Next: MRV Details
              </Button>
            </div>
          </div>
        );
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <ProjectBasicsForm
            data={formData.projectBasics}
            onNext={(data: any) => handleNext('projectBasics', data)}
          />
        );
      case 2:
        return (
          <LandUseDetailsForm
            data={formData.landUseDetails}
            onNext={(data) => handleNext('landUseDetails', data)}
            onPrevious={handlePrevious}
          />
        );
      case 3:
        return renderProjectPlanStep();
      case 4:
        return (
          <MRVDetailsForm
            data={formData.mrvDetails}
            onNext={(data) => handleNext('mrvDetails', data)}
            onPrevious={handlePrevious}
          />
        );
      case 5:
        return (
          <ConfirmationReview
            formData={formData}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
            isSubmitting={isSubmitting}
          />
        );
      case 6:
        return (
          <SuccessScreen
            submissionId={submissionId}
            onGoToDashboard={onGoToDashboard}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Carbon Credit Project <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Onboarding</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Let's get your carbon credit project started with Mālama Labs
            </p>
          </div>

          {/* Progress Bar */}
          {step < TOTAL_STEPS && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Step {step} of {TOTAL_STEPS - 1}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {Math.round(calculateProgress())}% Complete
                </span>
              </div>
              <Progress value={calculateProgress()} className="h-2" />
              <div className="mt-2 text-center">
                <h2 className="text-xl font-semibold">{getStepTitle()}</h2>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 border border-red-200 bg-red-50 text-red-700 rounded-lg">
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default MalamaOnboardingFlow;
