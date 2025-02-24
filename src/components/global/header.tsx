import { Button, buttonVariants } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/route';
import { HardHat } from 'lucide-react';
import Link from 'next/link';
import ThemeSwitcher from '../theme/theme-switcher';

const Header = () => {
  return (
    <>
      <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 flex w-full justify-between border-b bg-background/95 px-8 py-2.5 backdrop-blur">
        <div>
          <Button asChild variant="ghost">
            <Link href={homePath()}>
              <HardHat size={48} />
              <h1 className="text-lg font-semibold">LelangProject</h1>
            </Link>
          </Button>
        </div>

        <div className="flex gap-x-2">
          <ThemeSwitcher />
          <Link
            href={ticketsPath()}
            className={buttonVariants({ variant: 'default' })}
          >
            Tickets
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
