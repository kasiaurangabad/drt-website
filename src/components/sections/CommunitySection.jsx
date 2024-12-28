import React from 'react';
import { MessageCircle, Calendar, Award, Twitter, Globe } from 'lucide-react';

const SocialCard = ({ platform, username, followers, icon: Icon }) => {
  return (
    <a href="/dharitriChanges" className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-center">
        <Icon className="w-6 h-6 text-indigo-600" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{platform}</h3>
          <p className="text-gray-500">{username}</p>
        </div>
        <div className="ml-auto">
          <span className="text-sm font-medium text-gray-900">{followers}</span>
          <span className="text-sm text-gray-500"> followers</span>
        </div>
      </div>
    </a>
  );
};

const EventCard = ({ title, date, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{date}</p>
          <p className="mt-1 text-sm text-indigo-600">{location}</p>
        </div>
        <Calendar className="w-6 h-6 text-gray-400" />
      </div>
      <p className="mt-3 text-gray-600">{description}</p>
      <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
        Learn more →
      </button>
    </div>
  );
};

const CommunitySection = () => {
  const socialPlatforms = [
    { platform: 'Twitter', username: '@YourChain', followers: '150K', icon: Twitter },
    { platform: 'Discord', username: 'YourChain Community', followers: '75K', icon: MessageCircle },
    { platform: 'Telegram', username: 'YourChain Official', followers: '50K', icon: Globe }
  ];

  const upcomingEvents = [
    {
      title: 'Global Blockchain Summit',
      date: 'June 15-16, 2024',
      location: 'Virtual Event',
      description: 'Join us for two days of insights, networking, and blockchain innovation discussions.'
    },
    {
      title: 'Developer Workshop',
      date: 'July 1, 2024',
      location: 'London, UK',
      description: 'Hands-on workshop for developers building on our blockchain.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Connect, collaborate, and grow with our global community of blockchain enthusiasts
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
          {socialPlatforms.map((platform, index) => (
            <SocialCard key={index} {...platform} />
          ))}
        </div>

        {/* Blog and News */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <span className="text-sm font-medium text-indigo-600">Blog</span>
              <h4 className="mt-2 text-xl font-semibold text-gray-900">
                The Future of Blockchain Technology
              </h4>
              <p className="mt-2 text-gray-600">
                Explore our vision for the next generation of blockchain infrastructure and applications.
              </p>
              <a href="/dharitriChanges" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
                Read more →
              </a>
            </div>
            <div>
              <span className="text-sm font-medium text-indigo-600">News</span>
              <h4 className="mt-2 text-xl font-semibold text-gray-900">
                Major Protocol Upgrade Announcement
              </h4>
              <p className="mt-2 text-gray-600">
                Learn about the upcoming protocol upgrade and its benefits for the ecosystem.
              </p>
              <a href="/dharitriChanges" className="mt-4 inline-block text-indigo-600 hover:text-indigo-500">
                Read more →
              </a>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Grants Program */}
        <div className="bg-indigo-700 rounded-lg shadow-xl p-8 text-white">
          <div className="flex items-start">
            <Award className="w-12 h-12 flex-shrink-0" />
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Grants Program</h3>
              <p className="mt-2 text-indigo-100">
                We support innovative projects building on our blockchain through our grants program.
                Apply now to receive funding and technical support.
              </p>
              <button className="mt-6 px-6 py-3 bg-white text-indigo-700 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Apply for Grant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;