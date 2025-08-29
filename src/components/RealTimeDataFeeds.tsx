import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap, 
  Leaf, 
  Globe,
  Timer,
  Database
} from 'lucide-react';

interface DataFeed {
  id: string;
  title: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: React.ElementType;
  color: string;
}

interface ProjectUpdate {
  id: string;
  project: string;
  action: string;
  timestamp: string;
  value?: number;
  type: 'carbon' | 'sensor' | 'credit' | 'biochar';
}

export function RealTimeDataFeeds() {
  const [dataFeeds, setDataFeeds] = useState<DataFeed[]>([
    {
      id: 'global-carbon',
      title: 'Global Carbon Sequestered',
      value: 2847.3,
      unit: 'tCO₂',
      change: 0.8,
      trend: 'up',
      icon: Globe,
      color: 'text-primary'
    },
    {
      id: 'active-projects',
      title: 'Active Projects',
      value: 23,
      unit: 'sites',
      change: 2,
      trend: 'up',
      icon: Activity,
      color: 'text-secondary'
    },
    {
      id: 'biochar-rate',
      title: 'Current Biochar Production Rate',
      value: 4.2,
      unit: 'tons/day',
      change: -0.3,
      trend: 'down',
      icon: Zap,
      color: 'text-accent-foreground'
    },
    {
      id: 'verification-rate',
      title: 'Real-time Verification Rate',
      value: 98.7,
      unit: '%',
      change: 0.2,
      trend: 'up',
      icon: Database,
      color: 'text-primary'
    }
  ]);

  const [projectUpdates, setProjectUpdates] = useState<ProjectUpdate[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Generate initial project updates
  useEffect(() => {
    const projects = [
      'Maui Macadamia Farm',
      'Oahu Research Station',
      'Big Island Volcano Site',
      'Kauai Coastal Farm',
      'Molokai Highland Project'
    ];

    const actions = [
      { action: 'Carbon measurement recorded', type: 'carbon' as const },
      { action: 'New sensor deployed', type: 'sensor' as const },
      { action: 'Credits issued', type: 'credit' as const },
      { action: 'Biochar production batch completed', type: 'biochar' as const }
    ];

    const generateUpdate = (): ProjectUpdate => {
      const project = projects[Math.floor(Math.random() * projects.length)];
      const actionData = actions[Math.floor(Math.random() * actions.length)];
      const now = new Date();
      
      return {
        id: `update-${Date.now()}-${Math.random()}`,
        project,
        action: actionData.action,
        timestamp: now.toLocaleTimeString(),
        value: actionData.type === 'carbon' ? Math.floor(Math.random() * 50) + 10 : undefined,
        type: actionData.type
      };
    };

    // Initial updates
    const initialUpdates: ProjectUpdate[] = [];
    for (let i = 0; i < 5; i++) {
      initialUpdates.push(generateUpdate());
    }
    setProjectUpdates(initialUpdates);
  }, []);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update data feeds
      setDataFeeds(prev => prev.map(feed => {
        const changeAmount = (Math.random() - 0.5) * 2;
        const newValue = Math.max(0, feed.value + changeAmount);
        const newChange = changeAmount;
        
        return {
          ...feed,
          value: newValue,
          change: newChange,
          trend: newChange > 0.1 ? 'up' : newChange < -0.1 ? 'down' : 'stable'
        };
      }));

      // Add new project update
      setProjectUpdates(prev => {
        const projects = [
          'Maui Macadamia Farm',
          'Oahu Research Station',
          'Big Island Volcano Site',
          'Kauai Coastal Farm',
          'Molokai Highland Project'
        ];

        const actions = [
          { action: 'Carbon measurement recorded', type: 'carbon' as const },
          { action: 'New sensor deployed', type: 'sensor' as const },
          { action: 'Credits issued', type: 'credit' as const },
          { action: 'Biochar production batch completed', type: 'biochar' as const }
        ];

        const project = projects[Math.floor(Math.random() * projects.length)];
        const actionData = actions[Math.floor(Math.random() * actions.length)];
        const now = new Date();
        
        const newUpdate: ProjectUpdate = {
          id: `update-${Date.now()}-${Math.random()}`,
          project,
          action: actionData.action,
          timestamp: now.toLocaleTimeString(),
          value: actionData.type === 'carbon' ? Math.floor(Math.random() * 50) + 10 : undefined,
          type: actionData.type
        };

        return [newUpdate, ...prev.slice(0, 9)]; // Keep last 10 updates
      });

      setLastUpdate(new Date());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: ProjectUpdate['type']) => {
    switch (type) {
      case 'carbon': return <Leaf className="w-4 h-4 text-primary" />;
      case 'sensor': return <Activity className="w-4 h-4 text-secondary" />;
      case 'credit': return <TrendingUp className="w-4 h-4 text-accent-foreground" />;
      case 'biochar': return <Zap className="w-4 h-4 text-primary" />;
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      case 'stable': return <div className="w-4 h-1 bg-yellow-600 rounded" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-primary">
            Real-Time Carbon Data Feeds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Live updates from our global network of carbon removal projects and monitoring systems
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>
        </motion.div>

        {/* Live Data Feeds */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dataFeeds.map((feed, index) => (
            <motion.div
              key={feed.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <feed.icon className={`w-8 h-8 ${feed.color}`} />
                    {getTrendIcon(feed.trend)}
                  </div>
                  
                  <h3 className="text-sm text-muted-foreground mb-2">{feed.title}</h3>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-medium text-primary">
                      {feed.value.toFixed(1)}
                    </span>
                    <span className="text-sm text-muted-foreground">{feed.unit}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    <span className={`text-xs ${
                      feed.change > 0 ? 'text-green-600' : feed.change < 0 ? 'text-red-600' : 'text-yellow-600'
                    }`}>
                      {feed.change > 0 ? '+' : ''}{feed.change.toFixed(1)} {feed.unit}
                    </span>
                    <span className="text-xs text-muted-foreground">vs last hour</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border-none bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-primary" />
                Live Project Activity Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projectUpdates.map((update, index) => (
                  <motion.div
                    key={update.id}
                    className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {getTypeIcon(update.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-primary truncate">{update.project}</h4>
                        <Badge variant="outline" className="text-xs">
                          {update.type}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-1">
                        {update.action}
                        {update.value && (
                          <span className="ml-1 font-medium text-primary">
                            ({update.value} tCO₂)
                          </span>
                        )}
                      </p>
                      
                      <span className="text-xs text-muted-foreground">{update.timestamp}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Real-time Stats Summary */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-none bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg mb-2">Network Status</h3>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-secondary text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg mb-2">Data Accuracy</h3>
              <div className="text-2xl font-medium">99.7%</div>
              <p className="text-sm opacity-90">Blockchain verified</p>
            </CardContent>
          </Card>

          <Card className="border-none bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg mb-2">Response Time</h3>
              <div className="text-2xl font-medium">&lt; 2s</div>
              <p className="text-sm opacity-75">Average data latency</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}