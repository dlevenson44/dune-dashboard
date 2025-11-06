import { Card } from "~/shared/components";
import { RiskScoreFactor } from "~/features/dashboard/types/dashboard";

interface RiskScoreFactorsProps {
  factors: RiskScoreFactor[];
}

const RiskScoreFactors = ({ factors }: RiskScoreFactorsProps) => {
  const getStatusDotColor = (status: RiskScoreFactor['status']) => {
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

  return (
    <Card header="Risk Score Factors" showTooltip>
      <div className="grid grid-cols-3 gap- mt-3">
        {factors.map((factor, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-md font-light text-gray-900 mb-1">
              {factor.category}
            </h4>
            <p className="text-xs text-gray-500 my-3">
              {factor.performance}
            </p>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusDotColor(factor.status)}`} />
              <span className="text-3xl">
                {factor.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
};

export default RiskScoreFactors;
