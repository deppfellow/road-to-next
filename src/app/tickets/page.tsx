import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { initialTickets } from '@/data';
import { ticketPath } from '@/route';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const TicketIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
      />
    </svg>
  );
};

export default function TicketsPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground">Available ticket:</p>
      </div>

      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center gap-y-4 md:grid md:grid-cols-4 md:gap-4">
        {initialTickets.map((ticket) => {
          return (
            <Card key={ticket.id} className="w-full max-w-[420px]">
              <CardHeader>
                <CardTitle className="flex gap-x-2">
                  <TicketIcon />
                  <span
                    className={clsx('truncate text-lg font-semibold', {
                      'text-slate-500 line-through': ticket.status === 'Done',
                    })}
                  >
                    {ticket.title}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <span
                  className={clsx(
                    'line-clamp-3 whitespace-break-spaces text-sm',
                    {
                      'line-through': ticket.status === 'Done',
                    }
                  )}
                >
                  {ticket.content}
                </span>
              </CardContent>

              <CardFooter>
                <Link
                  href={ticketPath(ticket.id)}
                  className="text-sm underline"
                >
                  See detail
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
