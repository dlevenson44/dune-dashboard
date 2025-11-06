import type { ReactNode } from "react";

import CardHeader, { CardHeaderProps } from './CardHeader'

interface CardProps extends CardHeaderProps {
  children: ReactNode;
  customShadowColor?: string;
}

const Card = ({
  children,
  customShadowColor,
  header,
  headerTag,
  showTooltip,
}: CardProps) => {
  return (
    <div className={`flex flex-col bg-white/90 rounded-lg shadow-lg p-6 border border-gray-200 ${customShadowColor ? `shadow-${customShadowColor}` : ''}`}>
      <CardHeader
        header={header}
        headerTag={headerTag}
        showTooltip={showTooltip}
      />
      {children}
    </div>
  );
};

export default Card;
