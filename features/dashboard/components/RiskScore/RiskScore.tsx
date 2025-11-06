import React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

import RiskScoreCardHeaderPill from "./RiskScoreCardHeaderPill";
import { Card } from "~/shared/components";
import { RiskScoreData } from "~/features/dashboard/types/dashboard";

interface RiskScoreProps {
  data: RiskScoreData;
}

const RiskScore: React.FC<RiskScoreProps> = ({ data }) => {
  const isPositive = data.change > 0;

  // Generate risk level indicator bars
  const getRiskBars = () => {
    const bars = [];
    const score = data.score;
    const totalBars = 20;
    const currentBar = Math.floor((score / 100) * totalBars); // Bar containing the current score
    console.log(score, totalBars)

    for (let i = 0; i < totalBars; i++) {
      let height = 'h-6';
      let opacity = 'opacity-20'; // Default for inactive bars

      // Assign colors based on position
      let color = 'bg-gray-200';
      if (i < totalBars * 0.3) {
        color = 'bg-green-500';
      } else if (i < totalBars * 0.6) {
        color = 'bg-yellow-300';
      } else if (i < totalBars * 0.8) {
        color = 'bg-orange-500';
      } else {
        color = 'bg-red-500';
      }

      // Apply active state to bars up to current
      if (i <= currentBar) {
        // Emphasize the current bar
        if (i === currentBar) {
          height = 'h-8';
          opacity = '';
        } else {
          opacity = 'opacity-50';
        }
      }

      bars.push(
        <div
          key={i}
          className={`w-1.5 ${height} rounded-sm ${color} ${opacity} transition-all`}
        />
      );
    }
    return bars;
  };

  return (
    <Card
      customShadowColor="yellow-100"
      header="Risk Score"
      headerTag={<RiskScoreCardHeaderPill status="warning" />}
    >
      <div className="flex justify-between gap-3 mb-4 p-4">
        <span className="text-5xl text-gray-900">{data.score}</span>
        <div className={`flex items-center gap-1 mb-2`}>
          {/* render downward arrow if results are positive, aka decline in risk */}
          {isPositive ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
          <span className="text-sm font-medium">{Math.abs(data.change)}</span>
        </div>
      </div>
      
      <div className="flex gap-2 mt-2 items-center">
        {getRiskBars()}
      </div>
    </Card>
  )
};

export default RiskScore;
