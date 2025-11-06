import Dashboard from "~/features/dashboard/components/Dashboard/Dashboard";
import {
  fetchRiskScoreData,
  fetchRiskScoreFactors,
  fetchTimeSeriesData,
  fetchOrganizationStats,
  fetchAttackDetails,
} from "~/features/dashboard/services/data"

export default async function Home() {
  const [
    riskScoreData,
    riskScoreFactors,
    timeSeriesData,
    organizaitonStats,
    attackDetails
  ] = await Promise.all([
  fetchRiskScoreData(),
  fetchRiskScoreFactors(),
  fetchTimeSeriesData(),
  fetchOrganizationStats(),
  fetchAttackDetails(),
  ])
  
  return (
    <Dashboard
      riskScoreData={riskScoreData}
      riskScoreFactors={riskScoreFactors}
      timeSeriesData={timeSeriesData}
      organizationStats={organizaitonStats}
      attackDetails={attackDetails}
    />
  );
}
