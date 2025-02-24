import Placeholder from '@/components/global/placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import TicketItem from '@/features/ticket/components/ticket-item';
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

  return <TicketItem ticket={currentTicket} isDetail />;
}
