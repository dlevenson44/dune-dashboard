import type { ReactNode } from "react";

export interface CardHeaderProps {
  header: string;
  headerTag?: ReactNode
}

const CardHeader = ({
  header,
  headerTag,
}: CardHeaderProps) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-2xl font-light text-gray-600">
      {header}
    </h3>
    {headerTag}
  </div>
);

export default CardHeader;
