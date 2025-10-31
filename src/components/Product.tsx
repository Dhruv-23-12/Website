import React, { useState } from 'react';
import { Headphones, Shield, RotateCcw, Play, Phone, Mic, FileText, TrendingUp, Users, Calendar, MessageSquare, Target } from 'lucide-react';

const Product = () => {
  const [activeTab, setActiveTab] = useState('call-coaching');

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Call Recording",
      description: "Automatically record every sales call with crystal clear audio quality."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Call Transcripts",
      description: "Review every word spoken with AI-powered transcription and analysis."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Live Call Listening",
      description: "Silently monitor live calls to provide real-time coaching opportunities."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Whisper & Barge Coaching",
      description: "Give reps in-ear live whispering guidance during important calls."
    }
  ];

  const coachingTools = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Coach with clarity",
      description: "Listen to live calls, give feedback, and coach with context."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ramp reps faster",
      description: "Onboard new hires with real calls and coaching sessions."
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Drive consistent performance",
      description: "Build a repeatable playbook that increases win rates."
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Scale your sales playbook",
      description: "Share best practices and improve your team's skills."
    }
  ];

  const metrics = [
    { label: "Calls Made", value: "968", icon: <Phone className="w-4 h-4" /> },
    { label: "Emails Sent", value: "1,422", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Meetings Booked", value: "976", icon: <Calendar className="w-4 h-4" /> },
    { label: "SMS Sent", value: "2M+", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Opportunities Created", value: "1,245", icon: <Target className="w-4 h-4" /> },
    { label: "Deals Won", value: "1,389", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Revenue Generated", value: "$287K", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Average Deal Size", value: "$182K", icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <section id="product" className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 text-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-64 h-64 border border-black transform rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 border border-black transform -rotate-12 animate-float-delayed"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-black rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-32 w-8 h-8 bg-black transform rotate-45 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black">
            Build a team of closers, not just callers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto">
            Jump on calls, coach reps, track progress, and improve your team's performance with our all-in-one CRM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Try it free
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
              Book a demo
            </button>
          </div>
        </div>

        {/* Activity Comparison UI */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-black">Activity Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-black">User</th>
                    <th className="text-center py-3 px-4 text-black">Calls</th>
                    <th className="text-center py-3 px-4 text-black">Emails</th>
                    <th className="text-center py-3 px-4 text-black">SMS</th>
                    <th className="text-center py-3 px-4 text-black">Meetings</th>
                    <th className="text-center py-3 px-4 text-black">Tasks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-black">Sarah Johnson</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">45</td>
                    <td className="text-center py-3 px-4 text-gray-600">89</td>
                    <td className="text-center py-3 px-4 text-gray-600">156</td>
                    <td className="text-center py-3 px-4 text-gray-600">12</td>
                    <td className="text-center py-3 px-4 text-gray-600">23</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-black">Mike Chen</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">38</td>
                    <td className="text-center py-3 px-4 text-gray-600">67</td>
                    <td className="text-center py-3 px-4 text-gray-600">134</td>
                    <td className="text-center py-3 px-4 text-gray-600">8</td>
                    <td className="text-center py-3 px-4 text-gray-600">19</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-black">Alex Rodriguez</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold">52</td>
                    <td className="text-center py-3 px-4 text-gray-600">94</td>
                    <td className="text-center py-3 px-4 text-gray-600">178</td>
                    <td className="text-center py-3 px-4 text-gray-600">15</td>
                    <td className="text-center py-3 px-4 text-gray-600">28</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Coaching Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Coaching to grow your team—and grow results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coachingTools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black rounded-sm flex items-center justify-center mx-auto mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call Review Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Built-in coaching tools to sell smarter on every call
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black">Call Review & Transcripts</h3>
              <p className="text-gray-600 text-lg mb-6">
                Give precise coaching with call reviews and transcripts. Every word matters, and now you can capture and analyze every conversation.
              </p>
            </div>
            <div className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-black">Call with David Smith</h4>
                <span className="text-sm text-gray-500">0:00 / 5:21</span>
              </div>
              <div className="bg-gray-50 rounded-sm p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium text-black">Mia Rossi</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  "Hi David, thanks for taking my call today. I wanted to discuss how our solution can help streamline your sales process..."
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-black">David Smith</span>
                </div>
                <p className="text-sm text-gray-600">
                  "That sounds interesting. Can you tell me more about the integration capabilities?"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Toolbox */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            The coaching toolbox built for high-performing sales teams
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-sm p-1 flex">
              {['call-coaching', 'rep-performance', 'coaching-dashboard'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-sm p-6 border border-gray-200 shadow-sm hover:border-black transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            Real-time performance insights
          </h2>
          <div className="bg-white rounded-sm p-8 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-black mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Put us in, coach
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free 14-day trial and see how our coaching tools can transform your sales team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start my free trial
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

