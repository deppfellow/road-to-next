import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/route';
import clsx from 'clsx';
import { LucideInfo, Ticket as LucideTicket } from 'lucide-react';
import Link from 'next/link';
import { Ticket } from '../types';

interface TicketItemProps {
  ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  const detailButton = (
    <Button variant="ghost" size="icon" asChild>
      <Link href={ticketPath(ticket.id)} className="inline-block text-sm">
        <LucideInfo />
      </Link>
    </Button>
  );
  return (
    <div className="flex gap-x-1">
      <Card className="w-full max-w-[420px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <LucideTicket />
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
            className={clsx('line-clamp-3 whitespace-break-spaces text-sm', {
              'line-through': ticket.status === 'Done',
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">{detailButton}</div>
    </div>
  );
};

export default TicketItem;
