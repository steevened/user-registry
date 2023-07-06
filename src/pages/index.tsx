import { ModeToggle } from '@/components/ui/theme-toggle';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="py-4 border-b border-stone-900/20 dark:border-stone-50/10">
        <div className="container flex items-center justify-between mx-auto">
          <Link href="/">
            <h1 className="text-xl font-bold">USERS CRUD</h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </main>
  );
}
