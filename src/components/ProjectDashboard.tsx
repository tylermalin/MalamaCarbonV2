import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Plus, 
  MapPin, 
  Leaf, 
  Activity, 
  TrendingUp, 
  Calendar,
  BarChart3,
  Zap,
  Award,
  Loader2,
  AlertCircle,
  Eye,
  Edit,
  DollarSign,
  CheckCircle,
  Clock,
  FileText
} from 'lucide-react';
import { projectAPI } from '../utils/supabase/client';

interface Project {
  id: string;
  name: string;
  location: string;
  projectType: string;
  description: string;
  status: 'submitted' | 'reviewing' | 'approved' | 'active' | 'completed';
  created_at: string;
  submitted_at?: string;
  review_started_at?: string;
  approved_at?: string;
  carbonSequestered: number;
  sensorsDeployed: number;
  biocharsProduced: number;
  creditsIssued: number;
  yearOneCORCs: number;
  marketCORCPrice: number;
  liquidCarbonValue: number;
  estimatedAcreage: number;
  timeline: string;
}

interface ProjectDashboardProps {
  user: {
    id: string;
    email: string;
    name: string;
    accessToken: string;
  };
}

export function ProjectDashboard({ user }: ProjectDashboardProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // New project form state
  const [newProject, setNewProject] = useState({
    name: '',
    location: '',
    projectType: '',
    description: ''
  });

  const projectTypes = [
    'Biochar Production',
    'Reforestation',
    'Soil Carbon Enhancement',
    'Regenerative Agriculture',
    'Coastal Restoration'
  ];

  // Helper functions
  const getStatusDisplay = (project: Project) => {
    const statusConfig = {
      submitted: { 
        text: 'Date Submitted', 
        date: project.submitted_at || project.created_at,
        icon: FileText,
        color: 'text-blue-600'
      },
      reviewing: { 
        text: 'Reviewing', 
        date: project.review_started_at,
        icon: Clock,
        color: 'text-orange-600'
      },
      approved: { 
        text: 'Approved', 
        date: project.approved_at,
        icon: CheckCircle,
        color: 'text-green-600'
      },
      active: { 
        text: 'Active', 
        date: project.approved_at,
        icon: Activity,
        color: 'text-primary'
      },
      completed: { 
        text: 'Completed', 
        date: project.approved_at,
        icon: Award,
        color: 'text-purple-600'
      }
    };
    return statusConfig[project.status] || statusConfig.submitted;
  };

  const calculateLiquidCarbon = (project: Project) => {
    const fiftyPercentCORCs = project.yearOneCORCs * 0.5;
    const liquidValue = fiftyPercentCORCs * project.marketCORCPrice;
    return {
      corcs: fiftyPercentCORCs,
      value: liquidValue
    };
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  // Load user projects
  useEffect(() => {
    loadProjects();
  }, [user]);

  const loadProjects = async () => {
    try {
      setIsLoading(true);
      
      // Mock data with enhanced fields for testing
      const mockProjects: Project[] = [
        {
          id: '1',
          name: 'Mendocino Biochar Project',
          location: 'Mendocino County, CA, USA',
          projectType: 'Biochar Production',
          description: 'Large-scale biochar production facility converting agricultural waste into stable carbon.',
          status: 'approved',
          created_at: '2024-01-15T00:00:00Z',
          submitted_at: '2024-01-15T00:00:00Z',
          review_started_at: '2024-02-01T00:00:00Z',
          approved_at: '2024-02-15T00:00:00Z',
          carbonSequestered: 1250.5,
          sensorsDeployed: 12,
          biocharsProduced: 450,
          creditsIssued: 1100,
          yearOneCORCs: 2400,
          marketCORCPrice: 85,
          liquidCarbonValue: 102000,
          estimatedAcreage: 500,
          timeline: '3 years'
        },
        {
          id: '2',
          name: 'Coastal Restoration Initiative',
          location: 'Monterey Bay, CA, USA',
          projectType: 'Coastal Restoration',
          description: 'Blue carbon project focused on kelp forest restoration and carbon sequestration.',
          status: 'reviewing',
          created_at: '2024-02-10T00:00:00Z',
          submitted_at: '2024-02-10T00:00:00Z',
          review_started_at: '2024-02-20T00:00:00Z',
          carbonSequestered: 850.2,
          sensorsDeployed: 8,
          biocharsProduced: 0,
          creditsIssued: 0,
          yearOneCORCs: 1800,
          marketCORCPrice: 90,
          liquidCarbonValue: 81000,
          estimatedAcreage: 200,
          timeline: '5 years'
        },
        {
          id: '3',
          name: 'Regenerative Agriculture Pilot',
          location: 'Central Valley, CA, USA',
          projectType: 'Regenerative Agriculture',
          description: 'Soil carbon enhancement through regenerative farming practices.',
          status: 'submitted',
          created_at: '2024-03-01T00:00:00Z',
          submitted_at: '2024-03-01T00:00:00Z',
          carbonSequestered: 0,
          sensorsDeployed: 6,
          biocharsProduced: 0,
          creditsIssued: 0,
          yearOneCORCs: 1200,
          marketCORCPrice: 75,
          liquidCarbonValue: 45000,
          estimatedAcreage: 1000,
          timeline: '2 years'
        }
      ];

      setProjects(mockProjects);
    } catch (error) {
      setError('Failed to load projects');
      console.error('Load projects error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    setError('');

    try {
      const { data, error } = await projectAPI.createProject(newProject, user.accessToken);
      
      if (error) {
        setError(error);
        return;
      }

      setProjects(prev => [data.project, ...prev]);
      setNewProject({ name: '', location: '', projectType: '', description: '' });
      setIsCreateModalOpen(false);
    } catch (error) {
      setError('Failed to create project');
      console.error('Create project error:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const getTotalStats = () => {
    return {
      totalCarbon: projects.reduce((sum, p) => sum + p.carbonSequestered, 0),
      totalSensors: projects.reduce((sum, p) => sum + p.sensorsDeployed, 0),
      totalBiochar: projects.reduce((sum, p) => sum + p.biocharsProduced, 0),
      totalCredits: projects.reduce((sum, p) => sum + p.creditsIssued, 0)
    };
  };

  const stats = getTotalStats();

  if (isLoading) {
    return (
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading your projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl mb-4 text-primary">
              Welcome back, {user.name}
            </h2>
            <p className="text-xl text-muted-foreground">
              Track and manage your carbon removal projects
            </p>
          </div>
          
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="hover:scale-105 transition-transform duration-300">
                <Plus className="w-5 h-5 mr-2" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Carbon Project</DialogTitle>
                <DialogDescription>
                  Fill out the form below to create a new carbon removal project and start tracking your environmental impact.
                </DialogDescription>
              </DialogHeader>
              
              {error && (
                <Alert className="border-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input
                    id="project-name"
                    placeholder="Enter project name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    required
                    disabled={isCreating}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-location">Location</Label>
                  <Input
                    id="project-location"
                    placeholder="e.g., Maui, Hawaii"
                    value={newProject.location}
                    onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                    required
                    disabled={isCreating}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-type">Project Type</Label>
                  <Select 
                    value={newProject.projectType} 
                    onValueChange={(value) => setNewProject({ ...newProject, projectType: value })}
                    required
                    disabled={isCreating}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Description (Optional)</Label>
                  <Textarea
                    id="project-description"
                    placeholder="Describe your carbon removal project"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    disabled={isCreating}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isCreating}>
                  {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Project
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Carbon Sequestered</p>
                    <p className="text-2xl font-medium text-primary">
                      {stats.totalCarbon.toFixed(1)} tCO₂
                    </p>
                  </div>
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Sensors</p>
                    <p className="text-2xl font-medium text-primary">{stats.totalSensors}</p>
                  </div>
                  <Activity className="w-8 h-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Biochar Produced</p>
                    <p className="text-2xl font-medium text-primary">
                      {stats.totalBiochar.toFixed(1)} tons
                    </p>
                  </div>
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Credits Issued</p>
                    <p className="text-2xl font-medium text-primary">{stats.totalCredits}</p>
                  </div>
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl mb-2 text-primary">No projects yet</h3>
            <p className="text-muted-foreground mb-6">
              Create your first carbon removal project to start tracking your impact
            </p>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              Create Your First Project
            </Button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card className="border-none bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-primary">{project.name}</CardTitle>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{project.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          {(() => {
                            const statusDisplay = getStatusDisplay(project);
                            const StatusIcon = statusDisplay.icon;
                            return (
                              <div className={`flex items-center gap-1 ${statusDisplay.color}`}>
                                <StatusIcon className="w-4 h-4" />
                                <span className="text-xs font-medium">{statusDisplay.text}</span>
                              </div>
                            );
                          })()}
                          <span className="text-xs text-muted-foreground">
                            {(() => {
                              const statusDisplay = getStatusDisplay(project);
                              return statusDisplay.date 
                                ? new Date(statusDisplay.date).toLocaleDateString()
                                : 'Pending';
                            })()}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Type:</span>
                          <span className="font-medium">{project.projectType}</span>
                        </div>
                        
                        {/* Liquid Carbon Section */}
                        {project.status === 'approved' && (
                          <div className="bg-primary/5 rounded-lg p-3 space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                              <DollarSign className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium text-primary">Liquid Carbon</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <span className="text-muted-foreground">Year 1 CORCs (50%):</span>
                                <p className="font-medium">{calculateLiquidCarbon(project).corcs.toFixed(1)}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Market Value:</span>
                                <p className="font-medium text-green-600">
                                  ${calculateLiquidCarbon(project).value.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div className="text-center">
                            <p className="text-lg font-medium text-primary">
                              {project.carbonSequestered.toFixed(1)}
                            </p>
                            <p className="text-xs text-muted-foreground">tCO₂ sequestered</p>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-lg font-medium text-secondary">
                              {project.creditsIssued}
                            </p>
                            <p className="text-xs text-muted-foreground">Credits issued</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-muted">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleViewDetails(project)}
                            className="flex-1"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditProject(project)}
                            className="flex-1"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Project Details: {selectedProject.name}
              </DialogTitle>
              <DialogDescription>
                Comprehensive project information and performance metrics
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Status & Timeline */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Project Status</h4>
                  {(() => {
                    const statusDisplay = getStatusDisplay(selectedProject);
                    const StatusIcon = statusDisplay.icon;
                    return (
                      <div className={`flex items-center gap-2 ${statusDisplay.color}`}>
                        <StatusIcon className="w-5 h-5" />
                        <div>
                          <p className="font-medium">{statusDisplay.text}</p>
                          <p className="text-sm text-muted-foreground">
                            {statusDisplay.date 
                              ? new Date(statusDisplay.date).toLocaleDateString()
                              : 'Pending'}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Project Info</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium">{selectedProject.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{selectedProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Acreage:</span>
                      <span className="font-medium">{selectedProject.estimatedAcreage} acres</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{selectedProject.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liquid Carbon Section for Approved Projects */}
              {selectedProject.status === 'approved' && (
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Liquid Carbon Valuation
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Year 1 CORCs:</span>
                      <p className="text-lg font-semibold">{selectedProject.yearOneCORCs.toFixed(1)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">50% Available:</span>
                      <p className="text-lg font-semibold">{calculateLiquidCarbon(selectedProject).corcs.toFixed(1)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Market Value:</span>
                      <p className="text-lg font-semibold text-green-600">
                        ${calculateLiquidCarbon(selectedProject).value.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">
                    Based on market CORC price of ${selectedProject.marketCORCPrice}/credit
                  </div>
                </div>
              )}

              {/* Performance Metrics */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Performance Metrics</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <Leaf className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-semibold text-primary">
                      {selectedProject.carbonSequestered.toFixed(1)}
                    </p>
                    <p className="text-sm text-muted-foreground">tCO₂ Sequestered</p>
                  </div>
                  
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="text-2xl font-semibold text-secondary">
                      {selectedProject.creditsIssued}
                    </p>
                    <p className="text-sm text-muted-foreground">Credits Issued</p>
                  </div>
                  
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <Activity className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-2xl font-semibold text-orange-600">
                      {selectedProject.sensorsDeployed}
                    </p>
                    <p className="text-sm text-muted-foreground">Active Sensors</p>
                  </div>
                  
                  <div className="bg-card/50 rounded-lg p-4 text-center">
                    <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-semibold text-purple-600">
                      {selectedProject.biocharsProduced}
                    </p>
                    <p className="text-sm text-muted-foreground">Biochar Produced (tons)</p>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="font-semibold text-primary mb-2">Project Description</h4>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Project Modal */}
      {selectedProject && (
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Edit className="w-5 h-5 text-primary" />
                Edit Project: {selectedProject.name}
              </DialogTitle>
              <DialogDescription>
                Update your project information and settings
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Project Name</Label>
                <Input
                  id="edit-name"
                  defaultValue={selectedProject.name}
                  placeholder="Enter project name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-location">Location</Label>
                <Input
                  id="edit-location"
                  defaultValue={selectedProject.location}
                  placeholder="City, State/Province, Country"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-type">Project Type</Label>
                <Select defaultValue={selectedProject.projectType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  defaultValue={selectedProject.description}
                  placeholder="Project description"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button className="flex-1">
                  Save Changes
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}