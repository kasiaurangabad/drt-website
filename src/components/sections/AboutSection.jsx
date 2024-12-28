import React from 'react';
import { Server, Zap, Lock, Users, CheckCircle } from 'lucide-react';

const TechnologyCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TeamMemberCard = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4">
        <img
          src={image || "/api/placeholder/96/96"}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const RoadmapItem = ({ quarter, year, title, status, description }) => {
  const isCompleted = status === 'completed';
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">
        {quarter} {year}
      </div>
      <div className="flex-grow">
        <div className="flex items-center space-x-2">
          <CheckCircle className={`w-5 h-5 ${isCompleted ? 'text-green-500' : 'text-gray-300'}`} />
          <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        </div>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const technologies = [
    {
      title: 'High Performance',
      description: 'Advanced blockchain architecture delivering superior throughput and scalability.',
      icon: Zap
    },
    {
      title: 'Security',
      description: 'Industry-leading security measures protecting network and assets.',
      icon: Lock
    },
    {
      title: 'Scalability',
      description: 'Innovative sharding solution for unlimited horizontal scaling.',
      icon: Server
    },
    {
      title: 'Governance',
      description: 'Decentralized governance enabling community-driven decision making.',
      icon: Users
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'Chief Executive Officer',
      image: null
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      image: null
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Research',
      image: null
    },
    {
      name: 'Emma Wilson',
      role: 'Head of Ecosystem',
      image: null
    }
  ];

  const roadmapItems = [
    {
      quarter: 'Q2',
      year: '2024',
      title: 'Protocol Upgrade',
      status: 'completed',
      description: 'Major protocol upgrade implementing advanced sharding capabilities.'
    },
    {
      quarter: 'Q3',
      year: '2024',
      title: 'DeFi Framework',
      status: 'in-progress',
      description: 'Launch of comprehensive DeFi development framework.'
    },
    {
      quarter: 'Q4',
      year: '2024',
      title: 'Cross-chain Bridge',
      status: 'planned',
      description: 'Implementation of secure cross-chain bridge protocol.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision and Mission */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Building the Future of Blockchain
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-500">
            Our mission is to create a more accessible, efficient, and interconnected blockchain ecosystem
            that empowers developers and users worldwide.
          </p>
        </div>

        {/* Technology Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Technology</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} {...tech} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Roadmap</h3>
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <RoadmapItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-indigo-700 rounded-lg shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-indigo-100 mb-6">
              Have questions or want to learn more about our blockchain platform?
              Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-indigo-700 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Contact Us
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-indigo-600 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;