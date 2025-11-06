import type { OrganizationStats } from "~/features/dashboard/types/dashboard";

export const generateRiskCategories = (stats: OrganizationStats) => ([
    { label: 'Low risk', value: stats.lowRisk, color: 'bg-green-500' },
    { label: 'Medium Risk', value: stats.mediumRisk, color: 'bg-yellow-500' },
    { label: 'High risk', value: stats.highRisk, color: 'bg-orange-500' },
    { label: 'Severe risk', value: stats.severeRisk, color: 'bg-red-500' },
]);
