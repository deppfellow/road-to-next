import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ticketPath } from '@/route';
import clsx from 'clsx';
import { LucideInfo, Ticket as LucideTicket } from 'lucide-react';
import Link from 'next/link';
import { Ticket } from '../types';

interface TicketItemProps {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="ghost" size="icon" asChild>
      <Link href={ticketPath(ticket.id)} className="inline-block text-sm">
        <LucideInfo />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx('flex w-full gap-x-1', {
        'max-w-[420px]': !isDetail,
        'max-w-[600px]': isDetail,
      })}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-x-2">
            <LucideTicket />
            <span
              className={clsx('truncate text-lg font-semibold', {
                'text-slate-500 line-through':
                  ticket.status === 'Done' && !isDetail,
              })}
            >
              {ticket.title}
            </span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <span
            className={clsx('flex truncate whitespace-break-spaces text-sm', {
              'line-through': ticket.status === 'Done' && !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>

      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export default TicketItem;
