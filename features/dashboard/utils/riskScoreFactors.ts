import type { RiskScoreFactor } from "~/features/dashboard/types/dashboard";

export const getStatusDotColor = (status: RiskScoreFactor['status']) => {
  switch (status) {
    case 'Excellent':
      return 'bg-green-500';
    case 'Poor':
      return 'bg-yellow-500';
    case 'Average':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};
