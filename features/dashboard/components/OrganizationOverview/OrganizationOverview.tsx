import { OrganizationStats } from '~/features/dashboard/types/dashboard';
import { Card } from "~/shared/components"

interface OrganizationOverviewProps {
  stats: OrganizationStats;
}

const OrganizationOverview = ({ stats }: OrganizationOverviewProps) => {
  const riskCategories = [
    { label: 'Low risk', value: stats.lowRisk, color: 'bg-green-500' },
    { label: 'Medium Risk', value: stats.mediumRisk, color: 'bg-yellow-500' },
    { label: 'High risk', value: stats.highRisk, color: 'bg-orange-500' },
    { label: 'Severe risk', value: stats.severeRisk, color: 'bg-red-500' },
  ];

  return (
    // <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
    //   <h3 className="text-sm font-medium text-gray-600 mb-6">Organization Overview</h3>
    <Card header="Organization Overview">
      {/* User Stats */}
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-200">
        <div>
          <p className="text-xs text-gray-500 mb-2">Users</p>
          <p className="text-3xl text-gray-900">{stats.users}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Newly Onboarded Users</p>
          <p className="text-3xl text-gray-900">{stats.newlyOnboardedUsers}</p>
        </div>
      </div>

      {/* Risk Categories */}
      <div className="grid grid-cols-4 gap-6">
        {riskCategories.map((category, index) => {
          const percentage = (category.value / stats.users) * 100;
          return (
            <div key={index}>
              <p className="text-xs text-gray-500 mb-2">{category.label}</p>
              <p className="text-2xl text-gray-900 mb-2">{category.value}</p>
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${category.color}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default OrganizationOverview;
