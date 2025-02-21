import Placeholder from '@/components/global/placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/route';
import Link from 'next/link';

interface TicketPageParams {
  params: {
    ticketId: string;
  };
}

export default function TicketPage({ params }: TicketPageParams) {
  const currentTicket = initialTickets.find(
    (ticket) => ticket.id === params.ticketId
  );

  if (!currentTicket) {
    return (
      <Placeholder
        label="Ticket Not Found"
        placeholderButton={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Back to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h1 className="text-2xl">{currentTicket?.title}</h1>
      <span className="text-sm">
        ID: {currentTicket?.id} | {currentTicket?.status}
      </span>

      <p className="my-4">{currentTicket?.content}</p>
    </div>
  );
}
