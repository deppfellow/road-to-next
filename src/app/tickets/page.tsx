import Heading from '@/components/global/heading';
import TicketItem from '@/features/ticket/components/ticket-item';
import { getTickets } from '@/features/ticket/queries/get-tickets';
import { Ticket } from '@/features/ticket/types';
// import { useEffect, useState } from 'react';

// const TicketIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="size-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
//       />
//     </svg>
//   );
// };

export default async function TicketsPage() {
  const tickets = await getTickets();

  // const [tickets, setTickets] = useState<Ticket[]>([]);

  // useEffect(() => {
  //   const fetchTickets = async () => {
  //     const result = await getTickets();
  //     setTickets(result);
  //   };

  //   fetchTickets();
  // }, []);

  return (
    <div className="flex flex-1 flex-col">
      <Heading
        headingTitle="All Tickets"
        headingDescription="Get your project. Achieve 200k million!!"
      />

      <div className="flex flex-col gap-y-8">
        <div className="flex flex-1 animate-fade-in-from-top flex-col items-center gap-y-4 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {tickets.map((ticket) => {
            return (
              <TicketItem key={ticket.id} ticket={ticket} isDetail={false} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
