import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      title: 'Individuals',
      dropdownItems: ['Personal Account', 'Investments', 'Benefits', 'Support']
    },
    {
      title: 'Developers',
      dropdownItems: ['Build', 'Learn', 'Tools', 'Documentation']
    },
    {
      title: 'The Farmer',
      dropdownItems: ['Resources', 'Programs', 'Training', 'Community']
    },
    {
      title: 'Mother Earth',
      dropdownItems: ['Sustainability', 'Green Initiatives', 'Impact', 'Projects']
    },
    {
      title: 'Accountability',
      dropdownItems: ['Transparency', 'Reports', 'Governance', 'Compliance']
    },
    {
      title: 'Ecosystem',
      dropdownItems: ['Partners', 'Projects', 'Growth', 'Participate']
    },
    {
      title: 'Community',
      dropdownItems: ['Events', 'Forums', 'Social', 'Support']
    },
    {
      title: 'About',
      dropdownItems: ['Mission', 'Team', 'Roadmap', 'Contact']
    }
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Your Brand</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-300 hover:bg-gray-800 rounded-md"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  >
                    {item.title}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.title && (
                    <div
                      className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-1">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <a
                            key={idx}
                            href={`#${item.title.toLowerCase()}-${dropdownItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                  onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                >
                  <div className="flex justify-between items-center">
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </div>
                </button>
                {activeDropdown === item.title && (
                  <div className="pl-4 bg-gray-800">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <a
                        key={idx}
                        href={`#${item.title.toLowerCase()}-${dropdownItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;