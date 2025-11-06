import { 
  RiskScoreData, 
  RiskScoreFactor, 
  TimeSeriesData, 
  OrganizationStats, 
  SimulatedAttack, 
  AttackDetails 
} from "~/features/dashboard/types/dashboard";

export const mockRiskScoreData: RiskScoreData = {
  score: 48,
  change: 46,
  trend: [20, 25, 30, 35, 40, 35, 30, 35, 40, 45, 48, 50],
};

export const mockRiskScoreFactors: RiskScoreFactor[] = [
  {
    category: 'Simulated Attacks',
    performance: 'Performance',
    status: 'Excellent',
  },
  {
    category: 'Training Activity',
    performance: 'Performance and Engagement',
    status: 'Poor',
  },
  {
    category: 'Risk Signals',
    performance: 'Cyber Hygiene',
    status: 'Average',
  },
];

export const mockTimeSeriesData: TimeSeriesData[] = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 65 },
  { month: 'Mar', value: 55 },
  { month: 'Apr', value: 20 },
  { month: 'May', value: 45 },
  { month: 'Jun', value: 60 },
];

export const mockOrganizationStats: OrganizationStats = {
  users: 4600,
  newlyOnboardedUsers: 32,
  lowRisk: 2760,
  mediumRisk: 920,
  highRisk: 575,
  severeRisk: 345,
};

export const mockSimulatedAttacks: SimulatedAttack[] = [
  {
    id: '1',
    name: 'Clicked Link',
    type: 'Clicked Link',
    count: 2736,
    status: 'info',
  },
  {
    id: '2',
    name: 'Scanned QR Code',
    type: 'Scanned QR',
    count: 2736,
    status: 'info',
  },
  {
    id: '3',
    name: 'Hybrid Tests',
    type: 'Hybrid Test',
    count: 2736,
    status: 'info',
  },
  {
    id: '4',
    name: 'SMS Link Clicked',
    type: 'SMS Link Clicked',
    count: 2736,
    status: 'info',
  },
  {
    id: '5',
    name: 'Downloaded Attachment',
    type: 'Downloaded Attachment',
    count: 2736,
    status: 'info',
  },
  {
    id: '6',
    name: 'Responded to Phishing',
    type: 'Responded',
    count: 190,
    status: 'success',
  },
  {
    id: '7',
    name: 'Ignored Phishing',
    type: 'Ignored',
    count: 350,
    status: 'success',
  },
  {
    id: '8',
    name: 'Entered Credentials',
    type: 'Submitted Credentials',
    count: 300,
    status: 'warning',
  },
  {
    id: '9',
    name: 'Submitted Credentials',
    type: 'Submitted Credentials',
    count: 54,
    status: 'danger',
  },
  {
    id: '10',
    name: 'Entered MFA',
    type: 'Entered MFA',
    count: 44,
    status: 'danger',
  },
];

export const mockAttackDetails: AttackDetails[] = [
  {
    name: 'Seymour Brooks',
    attackModality: 'Email',
    riskScore: 98,
    frequency: 2,
  },
  {
    name: 'Callie Hammond',
    attackModality: 'Email',
    riskScore: 32,
    frequency: 2,
  },
  {
    name: 'Sean Broad',
    attackModality: 'SMS',
    riskScore: 57,
    frequency: 2,
  },
  {
    name: 'Suzanne McIntosh',
    attackModality: 'Email',
    riskScore: 21,
    frequency: 1,
  },
  {
    name: 'Justin Timber',
    attackModality: 'Hybrid',
    riskScore: 93,
    frequency: 3,
  },
];

export const getTotalInteractions = () => {
  return mockSimulatedAttacks.reduce((total, attack) => total + attack.count, 0);
};
