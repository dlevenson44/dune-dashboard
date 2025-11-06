import {
  mockRiskScoreData,
  mockRiskScoreFactors,
  mockTimeSeriesData,
  mockOrganizationStats,
  mockAttackDetails
} from "~/features/dashboard/services/mockData";
import type { RiskScoreFactorStatus } from "../types/dashboard";

export const fetchRiskScoreData = async () => {
  try {
    return mockRiskScoreData;
  } catch (e) {
    console.error(`error fetching riskScoreData: ${e}`);
    return {
      "30days": {
        score: 0,
        change: 0,
        trend: [0],
      },
      "60days": {
        score: 0,
        change: 0,
        trend: [0],
      },
      "90days": {
        score: 0,
        change: 0,
        trend: [0],
      },
      "alltime": {
        score: 0,
        change: 0,
        trend: [0],
      },
    };
  };
};

export const fetchRiskScoreFactors = async () => {
  try {
    return mockRiskScoreFactors;
  } catch (e) {
    console.error(`error fetching riskScoreFactors: ${e}`);
    return [{
        category: "",
        performance: "",
        status: "Average" as RiskScoreFactorStatus,
      }]
  };  
}

export const fetchTimeSeriesData = async () => {
  try {
    return mockTimeSeriesData;
  } catch (e) {
    console.error(`error fetching timeSeriesData: ${e}`);
    return [{
      month: "Jan",
      value: 0,
    }];
  };
}

export const fetchOrganizationStats = async () => {
  try {
    return mockOrganizationStats;
  } catch (e) {
    console.error(`error fetching organizationStats: ${e}`);
    return {
      users: 0,
      newlyOnboardedUsers: 0,
      lowRisk: 0,
      mediumRisk: 0,
      highRisk: 0,
      severeRisk: 0,
    };
  };  
}

export const fetchAttackDetails = async () => {
  try {
    return mockAttackDetails;
  } catch (e) {
    console.error(`error fetching attackDetails: ${e}`);
    return [
      {
        name: "",
        attackModality: "",
        riskScore: 0,
        frequency: 0,
      }
    ];
  };
}
