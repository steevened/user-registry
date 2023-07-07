import { useUsers } from '@/lib/services/user.service';
import Navbar from '../components/ui/navbar';
import UserCardItem from '@/components/ui/userCardItem';
import Head from 'next/head';
import { Toaster } from '@/components/ui/toaster';
import { Loader2, ServerCrash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Home() {
  const { data, isLoading, error } = useUsers();
  const [inputValue, SetInputValue] = useState<string>('');

  if (error) return <div>Error...</div>;

  return (
    <>
      <Head>
        <title>Registro de usuarios</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        {isLoading && (
          <div className="h-screen pt-[70px] flex items-center justify-center">
            <Loader2 className="animate-spin" size={100} />
          </div>
        )}

        {error && (
          <div className="h-screen pt-[70px] flex flex-col gap-5 items-center justify-center">
            <ServerCrash size={100} />
            <span className="font-semibold md:text-3xl">
              SOMETHING WRONG - TRY AGAIN LATER
            </span>
          </div>
        )}
        <div className="container  mx-auto py-24 ">
          <Input
            className="my-6 md:mt-0"
            placeholder="Buscar..."
            value={inputValue}
            onChange={(e) => SetInputValue(e.target.value)}
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {data
              ?.filter(
                (user) =>
                  user.names.toLowerCase().includes(inputValue.toLowerCase()) ||
                  user.lastNames
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  user.email.toLowerCase().includes(inputValue.toLowerCase()) ||
                  user.dniNumber
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  user.cellphone
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  user.address
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  user.note?.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((user) => (
                <UserCardItem key={user.id} user={user} />
              ))}
          </div>
        </div>
      </main>
      <Toaster />
    </>
  );
}
