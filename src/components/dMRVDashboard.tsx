import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Activity, 
  Thermometer, 
  Droplets, 
  Wind, 
  Zap, 
  TrendingUp, 
  MapPin,
  Wifi,
  WifiOff
} from 'lucide-react';

const COLORS = ['#1B4332', '#0A3D3F', '#ECE6DA', '#FAFAF9'];

interface SensorData {
  time: string;
  soilCarbon: number;
  temperature: number;
  moisture: number;
  ph: number;
  co2Flux: number;
}

interface BiocharsProduction {
  month: string;
  volume: number;
  credits: number;
}

interface SensorStatus {
  id: string;
  location: string;
  status: 'online' | 'offline';
  lastReading: string;
  batteryLevel: number;
}

export function DMRVDashboard() {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [biocharsData, setBiocharsData] = useState<BiocharsProduction[]>([]);
  const [sensorStatuses, setSensorStatuses] = useState<SensorStatus[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    totalCarbon: 1247.5,
    activeSensors: 127,
    biocharsProduced: 342.8,
    creditsIssued: 1580
  });

  // Generate initial data
  useEffect(() => {
    const generateSensorData = () => {
      const data: SensorData[] = [];
      const now = new Date();
      
      for (let i = 23; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000);
        data.push({
          time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          soilCarbon: 2.3 + Math.random() * 0.5,
          temperature: 22 + Math.random() * 4,
          moisture: 45 + Math.random() * 15,
          ph: 6.5 + Math.random() * 0.8,
          co2Flux: -2.1 + Math.random() * 0.8
        });
      }
      setSensorData(data);
    };

    const generateBiocharsData = () => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const data: BiocharsProduction[] = months.map(month => ({
        month,
        volume: Math.floor(Math.random() * 50) + 30,
        credits: Math.floor(Math.random() * 200) + 150
      }));
      setBiocharsData(data);
    };

    const generateSensorStatuses = () => {
      const locations = [
        'Maui - Macadamia Farm A',
        'Oahu - Research Station B',
        'Big Island - Volcano Site C',
        'Kauai - Coastal Farm D',
        'Molokai - Highland E'
      ];
      
      const statuses: SensorStatus[] = locations.map((location, index) => ({
        id: `sensor-${index + 1}`,
        location,
        status: Math.random() > 0.15 ? 'online' : 'offline',
        lastReading: `${Math.floor(Math.random() * 30) + 1} min ago`,
        batteryLevel: Math.floor(Math.random() * 40) + 60
      }));
      setSensorStatuses(statuses);
    };

    generateSensorData();
    generateBiocharsData();
    generateSensorStatuses();
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => {
        const newData = [...prev.slice(1)];
        const lastData = prev[prev.length - 1];
        const now = new Date();
        
        newData.push({
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          soilCarbon: Math.max(0, lastData.soilCarbon + (Math.random() - 0.5) * 0.1),
          temperature: Math.max(0, lastData.temperature + (Math.random() - 0.5) * 0.5),
          moisture: Math.max(0, Math.min(100, lastData.moisture + (Math.random() - 0.5) * 2)),
          ph: Math.max(0, Math.min(14, lastData.ph + (Math.random() - 0.5) * 0.1)),
          co2Flux: lastData.co2Flux + (Math.random() - 0.5) * 0.2
        });
        
        return newData;
      });

      setCurrentMetrics(prev => ({
        ...prev,
        totalCarbon: prev.totalCarbon + Math.random() * 0.5,
        biocharsProduced: prev.biocharsProduced + Math.random() * 0.1
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const pieData = [
    { name: 'Biochar', value: 65 },
    { name: 'Soil Carbon', value: 25 },
    { name: 'Biomass', value: 10 }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-6 text-primary font-bold">
            Live dMRV Dashboard Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of carbon sequestration across Hawaiian sites with AI-powered sensors
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Carbon Sequestered</p>
                    <p className="text-2xl font-medium text-primary">
                      {currentMetrics.totalCarbon.toFixed(1)} tCO₂
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Sensors</p>
                    <p className="text-2xl font-medium text-primary">{currentMetrics.activeSensors}</p>
                  </div>
                  <Activity className="w-8 h-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Biochar Produced</p>
                    <p className="text-2xl font-medium text-primary">
                      {currentMetrics.biocharsProduced.toFixed(1)} tons
                    </p>
                  </div>
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Credits Issued</p>
                    <p className="text-2xl font-medium text-primary">{currentMetrics.creditsIssued}</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">LC02</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Real-time Sensor Data */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Real-time Environmental Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ECE6DA" />
                    <XAxis dataKey="time" stroke="#1B4332" />
                    <YAxis stroke="#1B4332" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#FAFAF9', 
                        border: '1px solid #ECE6DA',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line type="monotone" dataKey="soilCarbon" stroke="#1B4332" strokeWidth={2} name="Soil Carbon %" />
                    <Line type="monotone" dataKey="temperature" stroke="#0A3D3F" strokeWidth={2} name="Temperature °C" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Biochar Production */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  Monthly Biochar Production
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={biocharsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ECE6DA" />
                    <XAxis dataKey="month" stroke="#1B4332" />
                    <YAxis stroke="#1B4332" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#FAFAF9', 
                        border: '1px solid #ECE6DA',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="volume" fill="#1B4332" name="Volume (tons)" />
                    <Bar dataKey="credits" fill="#0A3D3F" name="Credits Issued" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Carbon Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Carbon Sequestration Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {pieData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm">{entry.name}: {entry.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sensor Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-none bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Sensor Network Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sensorStatuses.map((sensor) => (
                    <div key={sensor.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {sensor.status === 'online' ? (
                          <Wifi className="w-5 h-5 text-primary" />
                        ) : (
                          <WifiOff className="w-5 h-5 text-destructive" />
                        )}
                        <div>
                          <p className="font-medium">{sensor.location}</p>
                          <p className="text-sm text-muted-foreground">Last reading: {sensor.lastReading}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={sensor.status === 'online' ? 'default' : 'destructive'}>
                          {sensor.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {sensor.batteryLevel}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="hover:scale-105 transition-transform duration-300">
            Access Full Dashboard
          </Button>
        </motion.div>
      </div>
    </section>
  );
}