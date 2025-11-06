'use client'

import { useState } from "react";

import {
  OrganizationOverview,
  RiskScore,
  RiskScoreFactors,
  RiskScoreOverTime,
  UserInteraction
} from "~/features/dashboard/components";
import { Header, Sidebar, SwitchFilter } from "~/shared/components";
import {
  mockRiskScoreData,
  mockRiskScoreFactors,
  mockTimeSeriesData,
  mockOrganizationStats,
  mockAttackDetails
} from "~/shared/utils/mockData";
import { timeFilters } from "~/shared/utils/filters/time-filter";

const Dashboard = () => {
  const [filter, setFilter] = useState(timeFilters[0].id)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleFilterClick = (filterId: string) =>
    setFilter(filterId)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={toggleSidebar} />

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-white">
          <div className="mb-8">
            {/* Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl text-gray-900">Risk Insights</h2>
              <SwitchFilter
                activeFilterId={filter}
                filters={timeFilters}
                handleClick={handleFilterClick}
              />
            </div>

            {/* Risk Score and Risk Score Factor Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-4 md:gap-8 mb-6 md:mr-8">
              <RiskScore data={mockRiskScoreData} />
              <RiskScoreFactors factors={mockRiskScoreFactors} />
            </div>

            {/* Risk Score Over Time and Org Overview Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 md:gap-8 mb-6 md:mr-8">
              <RiskScoreOverTime data={mockTimeSeriesData} />
              <OrganizationOverview stats={mockOrganizationStats} />
            </div>

            <div className="mt-16">
              <h2 className="text-2xl text-gray-900 mt-2">Simulated Attacks</h2>
              <div className="mt-12">
                <UserInteraction interactions={mockAttackDetails} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
