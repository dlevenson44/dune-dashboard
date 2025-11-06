'use client'

import { useState } from 'react';

import OrganizationOverview from './OrganizationOverview';
import RiskScore from './RiskScore';
import RiskScoreFactors from './RiskScoreFactors';
import Header from '~/shared/components/Header/Header';
import Sidebar from '~/shared/components/Sidebar/Sidebar';
import SwitchFilter from '~/shared/components/Filters/SwitchFilter';
import {
  mockRiskScoreData,
  // mockRiskScoreFactors,
  // mockTimeSeriesData,
  // mockOrganizationStats,
  // mockSimulatedAttacks,
  // mockAttackDetails,
  // getTotalInteractions,
} from "~/shared/utils/mockData";
import { timeFilters } from '~/shared/utils/filters/time-filter';

const Dashboard = () => {
  const [filter, setFilter] = useState(timeFilters[0].id)

  const handleFilterClick = (filterId: string) =>
    setFilter(filterId)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-white">
          <div className="mb-8">
            {/* Filter */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-gray-900">Risk Insights</h2>
              <SwitchFilter
                activeFilterId={filter}
                filters={timeFilters}
                handleClick={handleFilterClick}
              />
            </div>

          {/* Top Row Cards */}
          <div className="grid grid-cols-[30%_70%] lg:grid-cols-[30%_70%] gap-8 mb-6 mr-8">
            <RiskScore data={mockRiskScoreData} />
            {/* <RiskScoreFactors factors={mockRiskScoreFactors} /> */}
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
