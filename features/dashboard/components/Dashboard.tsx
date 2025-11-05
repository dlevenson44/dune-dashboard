import Header from '~/shared/components/Header/Header';
import Sidebar from '~/shared/components/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
