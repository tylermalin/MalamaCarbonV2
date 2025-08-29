// Mock API endpoint for project submissions
// In a real application, this would be handled by your backend server

export interface ProjectSubmissionData {
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
  biocharPlan: {
    feedstockType: string;
    estimatedFeedstockVolume: number;
    productionMethod: string;
    applicationPlan: string;
    storageCapacity: number;
    qualityStandards: string[];
  };
  mrvDetails: {
    monitoringFrequency: string;
    measurementMethods: string[];
    reportingSchedule: string;
    verificationThirdParty: string;
    dataManagementSystem: string;
    complianceStandards: string[];
  };
  termsAccepted: boolean;
  dataProcessingConsent: boolean;
}

export interface ProjectSubmissionResponse {
  id: string;
  status: 'submitted' | 'under_review' | 'approved' | 'rejected';
  submittedAt: string;
  message: string;
}

// Mock API function that simulates a backend submission
export const submitProjectApplication = async (
  data: ProjectSubmissionData
): Promise<ProjectSubmissionResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Simulate random API failures (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('Network error: Unable to submit application. Please try again.');
  }

  // Generate a mock submission ID
  const submissionId = `MLM-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  // Simulate validation errors (rare)
  if (!data.termsAccepted || !data.dataProcessingConsent) {
    throw new Error('Terms and conditions must be accepted to proceed.');
  }

  // Mock successful response
  const response: ProjectSubmissionResponse = {
    id: submissionId,
    status: 'submitted',
    submittedAt: new Date().toISOString(),
    message: 'Your carbon credit project application has been successfully submitted and is now under review.'
  };

  // Store submission data in localStorage for demo purposes
  if (typeof window !== 'undefined') {
    const submissions = JSON.parse(localStorage.getItem('malama_submissions') || '[]');
    submissions.push({
      ...response,
      data: data
    });
    localStorage.setItem('malama_submissions', JSON.stringify(submissions));
  }

  return response;
};

// Mock function to retrieve submission status (for future dashboard use)
export const getSubmissionStatus = async (submissionId: string) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (typeof window === 'undefined') {
    throw new Error('This function can only be called on the client side');
  }

  const submissions = JSON.parse(localStorage.getItem('malama_submissions') || '[]');
  const submission = submissions.find((sub: any) => sub.id === submissionId);

  if (!submission) {
    throw new Error('Submission not found');
  }

  return submission;
};
