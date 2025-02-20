import { initialTickets } from '@/data';
import { cn } from '@/lib/utils';
import { ticketPath } from '@/route';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground">Available ticket:</p>
      </div>

      <div className="flex flex-1 flex-col items-center gap-y-4 md:grid md:grid-cols-5 md:gap-4">
        {initialTickets.map((ticket) => {
          return (
            <div
              key={ticket.id}
              className="w-full max-w-[420px] rounded border border-slate-700 p-4"
            >
              <h3
                className={clsx('truncate text-lg font-semibold', {
                  'text-slate-500 line-through': ticket.status === 'Done',
                })}
              >
                {ticket.title}
              </h3>
              <p
                className={clsx('truncate text-sm', {
                  'line-through': ticket.status === 'Done',
                })}
              >
                {ticket.content}
              </p>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                See detail
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
