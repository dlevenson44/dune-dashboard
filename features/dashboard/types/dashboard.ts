export type Status = 'success' | 'warning' | 'caution' | 'danger'

export interface RiskScoreData {
  score: number;
  change: number;
  trend: number[];
}

export interface RiskScoreFactor {
  category: string;
  performance: string;
  status: 'Excellent' | 'Poor' | 'Average';
}

export interface TimeSeriesData {
  month: string;
  value: number;
}

export interface OrganizationStats {
  users: number;
  newlyOnboardedUsers: number;
  lowRisk: number;
  mediumRisk: number;
  highRisk: number;
  severeRisk: number;
}

export interface SimulatedAttack {
  id: string;
  name: string;
  type: 'Clicked Link' | 'Scanned QR' | 'Hybrid Test' | 'SMS Link Clicked' | 'Downloaded Attachment' | 'Responded' | 'Ignored' | 'Submitted Credentials' | 'Entered MFA';
  count: number;
  status: 'success' | 'warning' | 'danger' | 'info';
  flowPosition?: {
    x: number;
    y: number;
  };
}

export interface UserInteractionResponse {
  name: string;
  attackModality: string;
  riskScore: number;
  frequency: number;
}

export type TabType = 'clickedLink' | 'scannedQR' | 'hybridTest' | 'smsLinkClicked' | 'downloadedAttachment' | 'responded' | 'ignored' | 'submittedCredentials' | 'enteredMFA';
