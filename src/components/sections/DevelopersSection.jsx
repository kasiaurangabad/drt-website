import React from 'react';
import { Code2, BookOpen, Wrench, FileText } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="absolute top-0 right-0 -mr-3 -mt-3 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const DevelopersSection = () => {
  const features = [
    {
      title: 'Build',
      description: 'Access powerful SDKs, APIs, and smart contract templates to build your blockchain applications.',
      icon: Code2
    },
    {
      title: 'Learn',
      description: 'Comprehensive tutorials, documentation, and resources to help you get started.',
      icon: BookOpen
    },
    {
      title: 'Tools',
      description: 'Development tools including IDE plugins, testing frameworks, and debugging utilities.',
      icon: Wrench
    },
    {
      title: 'Documentation',
      description: 'Detailed technical documentation covering all aspects of the platform.',
      icon: FileText
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Developer Resources
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Everything you need to build the next generation of blockchain applications
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/dharitriChanges"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Start Building
          </a>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Latest Updates</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 mt-2"></span>
                </div>
                <p className="ml-3 text-gray-600">New SDK version released</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 mt-2"></span>
                </div>
                <p className="ml-3 text-gray-600">Smart contract templates updated</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 mt-2"></span>
                </div>
                <p className="ml-3 text-gray-600">New developer tutorials added</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Developer Community</h3>
            <p className="text-gray-600 mb-4">
              Join our active developer community to get help, share knowledge, and collaborate on projects.
            </p>
            <div className="space-y-3">
              <a href="/dharitriChanges" className="block text-indigo-600 hover:text-indigo-500">Discord Community →</a>
              <a href="/dharitriChanges" className="block text-indigo-600 hover:text-indigo-500">Developer Forum →</a>
              <a href="/dharitriChanges" className="block text-indigo-600 hover:text-indigo-500">GitHub Repository →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Getting Started</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">1. Setup Environment</h4>
                <p className="text-gray-600">Configure your development environment</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">2. Create Project</h4>
                <p className="text-gray-600">Initialize your first project</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">3. Build & Deploy</h4>
                <p className="text-gray-600">Deploy your first smart contract</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;