import { ticketsPath } from '@/route';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="text-3xl font-bold tracking-tight">Latest Tickets</div>
      <Link href={ticketsPath()} className="text-sm underline">
        Go to Tickets
      </Link>
    </div>
  );
}
