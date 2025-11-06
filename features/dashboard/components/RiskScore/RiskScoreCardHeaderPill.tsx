'use client'

import type { Status } from "~/features/dashboard/types/dashboard"
import { statusClasses } from "~/features/dashboard/utils/riskScore";

interface RiskScoreCardHeaderPillProps {
  status: Status;
}

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
