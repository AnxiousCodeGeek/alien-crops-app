import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const mockData = [
  { name: 'Jan', temperature: 4, humidity: 65, soilMoisture: 30 },
  { name: 'Feb', temperature: 6, humidity: 60, soilMoisture: 28 },
  { name: 'Mar', temperature: 10, humidity: 55, soilMoisture: 32 },
  { name: 'Apr', temperature: 14, humidity: 50, soilMoisture: 35 },
  { name: 'May', temperature: 18, humidity: 45, soilMoisture: 40 },
  { name: 'Jun', temperature: 22, humidity: 40, soilMoisture: 38 },
];

const DashboardPage = () => {
  const [location, setLocation] = useState('');

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    console.log(`Fetching data for location: ${location}`);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold" style={{ color: FOREST_GREEN }}>
        AlienCrops Dashboard
      </h2>
      
      <form onSubmit={handleLocationSubmit} className="flex space-x-4">
        <Input 
          placeholder="Enter your location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" style={{ backgroundColor: DEEP_ORANGE }}>
          Update Location
        </Button>
      </form>

      <Tabs defaultValue="season" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="season">Current Season</TabsTrigger>
          <TabsTrigger value="crops">Crops</TabsTrigger>
          <TabsTrigger value="weather">Weather</TabsTrigger>
          <TabsTrigger value="soil">Soil</TabsTrigger>
          <TabsTrigger value="pests">Pests</TabsTrigger>
          <TabsTrigger value="diseases">Diseases</TabsTrigger>
        </TabsList>
        
        <TabsContent value="season">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Current Growing Season
              </h3>
            </CardHeader>
            <CardContent>
              <p>Information about the current alien growing season would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crops">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Alien Crop Status
              </h3>
            </CardHeader>
            <CardContent>
              <p>Details about various alien crops and their current growth status would be shown here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weather">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Extraterrestrial Weather Forecast
              </h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke={DEEP_ORANGE} />
                  <Line type="monotone" dataKey="humidity" stroke={FOREST_GREEN} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="soil">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Alien Soil Analysis
              </h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="soilMoisture" stroke={FOREST_GREEN} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pests">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Extraterrestrial Pest Monitor
              </h3>
            </CardHeader>
            <CardContent>
              <p>Information about current alien pest threats and mitigation strategies would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diseases">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Alien Crop Disease Tracker
              </h3>
            </CardHeader>
            <CardContent>
              <p>Details about potential alien crop diseases, their symptoms, and treatment options would be shown here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;
