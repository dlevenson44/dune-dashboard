'use client'

import { X } from 'lucide-react';

import { navItems } from '~/shared/utils/sidebar/nav-items';

import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static
          inset-y-0 left-0
          w-64 bg-white h-screen
          transform transition-transform duration-300 ease-in-out
          z-50 lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 lg:hidden hover:bg-gray-100 rounded-md"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo Section */}
        <SidebarHeader />

        {/* Navigation Section */}
        <SidebarNav navItems={navItems} />
      </div>
    </>
  );
};

export default Sidebar;
