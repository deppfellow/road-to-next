import { TriangleAlert } from 'lucide-react';
import React from 'react';

interface PlaceholderProps {
  label: string;
  icon?: React.ReactNode;
  placeholderButton?: React.ReactNode;
}

const Placeholder = ({
  label,
  icon = <TriangleAlert />,
  placeholderButton = null,
}: PlaceholderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      {icon}
      <h2 className="text-center text-lg">{label}</h2>
      <div className="pt-4">{placeholderButton}</div>
    </div>
  );
};

export default Placeholder;
