'use client'

import { navItems } from '~/shared/utils/sidebar/nav-items';

import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className={`w-64 bg-white h-screen`}>
      {/* Logo Section */}
      <SidebarHeader />

      {/* Navigation Section */}
      <SidebarNav navItems={navItems} />
    </div>
  );
};

export default Sidebar;
