import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className={`w-64 bg-white border-r border-gray-200 h-screen`}>
      {/* Logo Section */}
      <SidebarHeader />

      {/* Navigation Section */}
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
