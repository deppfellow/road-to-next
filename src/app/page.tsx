import Heading from '@/components/global/heading';
import { ticketsPath } from '@/route';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Heading
        headingTitle="Home"
        headingDescription="Find project. Achieve Target. Be Green!"
      />
      <Link href={ticketsPath()} className="text-sm underline">
        Go to Tickets
      </Link>
    </div>
  );
}
