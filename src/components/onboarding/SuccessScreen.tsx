import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { CheckCircle, Copy, ExternalLink } from 'lucide-react';

interface SuccessScreenProps {
  submissionId: string | null;
  onGoToDashboard?: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ submissionId, onGoToDashboard }) => {
  
  const handleCopyId = () => {
    if (submissionId) {
      navigator.clipboard.writeText(submissionId);
      // You could add a toast notification here
    }
  };

  const handleGoToDashboard = () => {
    if (onGoToDashboard) {
      onGoToDashboard();
    }
  };

  const handleDownloadSummary = () => {
    // This would typically generate and download a PDF summary
    console.log('Download summary for submission:', submissionId);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="text-center p-8">
        <div className="pb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Application Submitted Successfully!</h2>
          <p className="text-lg text-muted-foreground">
            Your carbon credit project application has been received and is now under review.
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Submission ID */}
          {submissionId && (
            <div className="bg-muted/50 rounded-lg p-4">
              <Label className="text-sm font-medium text-muted-foreground block mb-2">
                Application Reference ID
              </Label>
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="outline" className="text-base px-3 py-1 font-mono">
                  {submissionId}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyId}
                  className="p-2"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Save this reference ID for tracking your application status
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Initial Review</p>
                  <p className="text-sm text-muted-foreground">
                    Our team will conduct an initial assessment of your project proposal within 5-7 business days.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Technical Evaluation</p>
                  <p className="text-sm text-muted-foreground">
                    If approved for the next stage, we'll schedule a detailed technical review and site assessment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Partnership Discussion</p>
                  <p className="text-sm text-muted-foreground">
                    Approved projects will move to partnership negotiations and project development planning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-4 text-left">
            <h4 className="font-semibold text-blue-900 mb-2">Questions or Need Support?</h4>
            <p className="text-sm text-blue-700 mb-3">
              Our project development team is here to help throughout the review process.
            </p>
            <div className="space-y-1 text-sm">
              <p><strong>Email:</strong> projects@malamalabs.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Response Time:</strong> Within 24 hours on business days</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={handleGoToDashboard} 
              size="lg" 
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleDownloadSummary} 
              size="lg"
              className="flex-1"
            >
              Download Summary
            </Button>
          </div>

          {/* Additional Resources */}
          <div className="text-left pt-4 border-t">
            <h4 className="font-semibold mb-3">While You Wait</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-primary hover:underline block">
                📚 Learn about carbon credit standards and certifications
              </a>
              <a href="#" className="text-primary hover:underline block">
                🌱 Explore our other environmental impact projects
              </a>
              <a href="#" className="text-primary hover:underline block">
                📊 Access our project development resources
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuccessScreen;
