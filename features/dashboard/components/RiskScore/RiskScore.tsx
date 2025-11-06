import { TrendingDown, TrendingUp } from "lucide-react";

import RiskScoreCardHeaderPill from "./RiskScoreCardHeaderPill";
import { Card } from "~/shared/components";
import { RiskScoreData } from "~/features/dashboard/types/dashboard";
import { getRiskBars } from "~/features/dashboard/utils/riskScore";

interface RiskScoreProps {
  data: RiskScoreData;
}

const RiskScore = ({ data }: RiskScoreProps) => {
  const isPositive = data.change > 0;
  // Generate risk level indicator bars
  const riskBars = getRiskBars(data)

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
          <span className="text-sm font-medium">{data.change}</span>
        </div>
      </div>
      
      <div className="flex gap-2 mt-2 items-center">
        {riskBars}
      </div>
    </Card>
  )
};

export default RiskScore;
