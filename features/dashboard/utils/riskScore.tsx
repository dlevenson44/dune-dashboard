import type { RiskScoreData, Status } from "~/features/dashboard/types/dashboard";

interface StatusProperties {
  color: string;
  text: string;
}

export const getRiskBars = (data: RiskScoreData) => {
  const bars = [];
  const score = data.score;
  const totalBars = 20;
  const currentBar = Math.floor((score / 100) * totalBars); // Bar containing the current score

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



export const statusClasses: Record<Status, StatusProperties> = {
  success: {
    color: "bg-green-100 text-green-700 border-green-400",
    text: "Low",
  },
  warning: {
    color: "bg-yellow-100 text-yellow-700 border-yellow-400",
    text: "Moderate",
  },
  danger: {
    color: "bg-red-100 text-red-700 border-red-400",
    text: "Critical"
  },
  caution: {
    color: "bg-orange-100 text-orange-700 border-orange-400",
    text: "Severe"
  },
};
