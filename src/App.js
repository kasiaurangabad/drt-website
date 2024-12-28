import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/Home/Hero';
import ProductsSection from './components/sections/ProductsSection';
import DevelopersSection from './components/sections/DevelopersSection';
import EcosystemSection from './components/sections/EcosystemSection';
import CommunitySection from './components/sections/CommunitySection';
import AboutSection from './components/sections/AboutSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main>
        {/* Products Section */}
        <section id="products">
          <ProductsSection />
        </section>

        {/* Developers Section */}
        <section id="developers">
          <DevelopersSection />
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem">
          <EcosystemSection />
        </section>

        {/* Community Section */}
        <section id="community">
          <CommunitySection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Brand</h3>
              <p className="text-gray-400">
                Building the future of blockchain technology
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#developers" className="text-gray-400 hover:text-white">Developers</a></li>
                <li><a href="#ecosystem" className="text-gray-400 hover:text-white">Ecosystem</a></li>
                <li><a href="#community" className="text-gray-400 hover:text-white">Community</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/dharitriChanges" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="/dharitriChanges" className="text-gray-400 hover:text-white">GitHub</a></li>
                <li><a href="/dharitriChanges" className="text-gray-400 hover:text-white">Whitepaper</a></li>
                <li><a href="/dharitriChanges" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">contact@yourbrand.com</li>
                <li className="text-gray-400">Twitter: @YourBrand</li>
                <li className="text-gray-400">Discord: YourBrand</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;