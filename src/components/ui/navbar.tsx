import { ModeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';
import { FC } from 'react';
import AddUser from './add-user';

interface navbarProps {}

const Navbar: FC<navbarProps> = ({}) => {
  return (
    <header className="fixed inset-x-0 py-4 border-b shadow border-stone-900/10 dark:border-stone-50/10 bg-stone-50/60 backdrop-blur dark:bg-stone-950/80">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold">REGISTRO DE USUARIOS</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <ModeToggle />
            </li>
            <li>
              <AddUser />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
