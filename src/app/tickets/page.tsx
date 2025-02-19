import { initialTickets } from "@/data";
import { ticketPath } from "@/route";
import Link from "next/link";
import React from "react";

export default function TicketsPage() {
  return (
    <div>
      <h2>Available ticket:</h2>

      {initialTickets.map((ticket) => {
        return (
          <div key={ticket.id}>
            <h3>{ticket.title}</h3>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              See detail
            </Link>
          </div>
        );
      })}
    </div>
  );
}
