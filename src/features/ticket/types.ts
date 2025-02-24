export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: 'Open' | 'In Progress' | 'Done';
}
