import { initialTickets } from "@/data";

interface TicketPageParams {
  params: {
    ticketId: string;
  };
}

export default function TicketPage({ params }: TicketPageParams) {
  const currentTicket = initialTickets.find(
    (ticket) => ticket.id === params.ticketId
  );

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
