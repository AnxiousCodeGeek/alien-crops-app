import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const SignUpPage = () => (
  <div className="max-w-md mx-auto space-y-8">
    <h2 className="text-3xl font-bold text-center" style={{ color: FOREST_GREEN }}>
      Join AlienCrops
    </h2>
    <form className="space-y-4">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm Password" type="password" />
      <Button className="w-full" style={{ backgroundColor: