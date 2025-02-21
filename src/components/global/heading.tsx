import { Separator } from '@/components/ui/separator';
import React from 'react';

interface HeadingProps {
  headingTitle: string;
  headingDescription?: string;
}

const Heading = ({ headingTitle, headingDescription }: HeadingProps) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{headingTitle}</h2>
        <p className="text-sm text-muted-foreground">{headingDescription}</p>
      </div>

      <div className="py-4">
        <Separator />
      </div>
    </>
  );
};

export default Heading;
