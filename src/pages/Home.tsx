import { Rocket, Shield, Zap } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          AI-Powered Content Moderation
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Protect your community with intelligent, real-time content moderation powered by advanced AI technology.
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            icon={Rocket}
            onClick={() => navigate('/moderate-text')}
          >
            Get Started
          </Button>
          <Button variant="secondary">
            Learn More
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
          <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
          <p className="text-gray-400">
            Instant content moderation with advanced AI processing for immediate results.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
          <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Smart Protection</h3>
          <p className="text-gray-400">
            Advanced algorithms detect and filter inappropriate content automatically.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
          <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
          <p className="text-gray-400">
            Simple API integration with your existing platforms and workflows.
          </p>
        </div>
      </div>
    </main>
  );
}