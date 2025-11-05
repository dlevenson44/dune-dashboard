import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className={`w-64 bg-white h-screen`}>
      {/* Logo Section */}
      <SidebarHeader />

      {/* Navigation Section */}
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
