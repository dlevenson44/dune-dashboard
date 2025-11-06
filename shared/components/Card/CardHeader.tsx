import type { ReactNode } from "react";

export interface CardHeaderProps {
  header: string | ReactNode;
  headerTag?: ReactNode;
  showTooltip?: boolean
}

const CardHeader = ({
  header,
  headerTag,
  showTooltip
}: CardHeaderProps) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center">
      <h3 className="text-2xl font-light text-gray-600">
        {header}
      </h3>
      {showTooltip && <span className="ml-3 text-white text-xs bg-gray-200 rounded-full h-4 w-4 text-center">?</span>}
    </div>
    {headerTag}
  </div>
);

export default CardHeader;
