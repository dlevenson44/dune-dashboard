'use client'

import type { Status } from "~/features/dashboard/types/dashboard"

interface RiskScoreCardHeaderPillProps {
  status: Status;
}

interface StatusProperties {
  color: string;
  text: string;
}

const statusClasses: Record<Status, StatusProperties> = {
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

const RiskScoreCardHeaderPill = ({
  status
}: RiskScoreCardHeaderPillProps) => {
  const colorClass = statusClasses[status].color
  const statusText = statusClasses[status].text
  const formattedText = `${statusText.charAt(0).toUpperCase()}${statusText.slice(1)}`

  return (
    <span className={`px-3 py-1 text-xs font-extralight rounded-full border-1 ${colorClass}`}>
      {formattedText}
    </span>
  );
};

export default RiskScoreCardHeaderPill;
