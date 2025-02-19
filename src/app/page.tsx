import { ticketsPath } from "@/route";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <Link href={ticketsPath()} className="underline text-sm">
        Go to Tickets
      </Link>
    </div>
  );
}
