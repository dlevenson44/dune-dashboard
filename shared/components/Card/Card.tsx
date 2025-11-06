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
}: CardProps) => {
  return (
    <div className={`flex flex-col justify-around bg-white/90 rounded-lg shadow-lg p-6 border border-gray-200 ${customShadowColor ? `shadow-${customShadowColor}` : ''}`}>
      <CardHeader
        header={header}
        headerTag={headerTag}
      />
      {children}
    </div>
  );
};

export default Card;
