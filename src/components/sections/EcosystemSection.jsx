import React, { useState } from 'react';
import { Activity, Shield, Users, TrendingUp, ExternalLink } from 'lucide-react';

const EcosystemCard = ({ title, description, stats, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {stats && (
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{stats.label}</span>
            <span className="font-semibold text-indigo-600">{stats.value}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ name, category, description, metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded mt-1">
            {category}
          </span>
        </div>
        <a href="/dharitriChanges" className="text-gray-400 hover:text-gray-600">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="mt-3 text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex justify-between text-sm">
        <div>
          <span className="text-gray-500">TVL</span>
          <div className="font-semibold text-gray-900">{metrics.tvl}</div>
        </div>
        <div>
          <span className="text-gray-500">Users</span>
          <div className="font-semibold text-gray-900">{metrics.users}</div>
        </div>
        <div>
          <span className="text-gray-500">Volume</span>
          <div className="font-semibold text-gray-900">{metrics.volume}</div>
        </div>
      </div>
    </div>
  );
};

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const ecosystemStats = [
    {
      title: 'DApps & Projects',
      description: 'Discover and explore decentralized applications built on our blockchain.',
      icon: Activity,
      stats: { label: 'Total DApps', value: '200+' }
    },
    {
      title: 'Staking',
      description: 'Secure the network and earn rewards by staking your tokens.',
      icon: Shield,
      stats: { label: 'Total Staked', value: '$500M+' }
    },
    {
      title: 'Partners',
      description: 'Strategic partnerships driving ecosystem growth and adoption.',
      icon: Users,
      stats: { label: 'Active Partners', value: '50+' }
    },
    {
      title: 'Growth',
      description: 'Ecosystem growth metrics and development statistics.',
      icon: TrendingUp,
      stats: { label: 'Monthly Growth', value: '15%' }
    }
  ];

  const featuredProjects = [
    {
      name: 'DeFi Protocol',
      category: 'DeFi',
      description: 'Leading decentralized exchange with advanced trading features.',
      metrics: { tvl: '$100M', users: '50K+', volume: '$2M/day' }
    },
    {
      name: 'NFT Marketplace',
      category: 'NFT',
      description: 'Premium marketplace for digital collectibles and artwork.',
      metrics: { tvl: '$20M', users: '25K+', volume: '$500K/day' }
    },
    {
      name: 'GameFi Platform',
      category: 'Gaming',
      description: 'Play-to-earn gaming platform with multiple game titles.',
      metrics: { tvl: '$30M', users: '100K+', volume: '$1M/day' }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Thriving Ecosystem
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore the diverse range of applications, services, and opportunities in our ecosystem
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4">
            {['overview', 'dapps', 'staking', 'partners'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {ecosystemStats.map((stat, index) => (
                <EcosystemCard key={index} {...stat} />
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Featured Projects</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <a href="/dharitriChanges"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Join Our Ecosystem
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;