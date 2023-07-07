import { useUsers } from '@/lib/services/user.service';
import Navbar from '../components/ui/navbar';
import UserCardItem from '@/components/ui/userCardItem';
import Head from 'next/head';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      <Head>
        <title>Registro de usuarios</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <ul className="container grid grid-cols-1 gap-5 mx-auto py-28 md:grid-cols-2">
          {data?.map((user) => (
            <UserCardItem key={user.id} user={user} />
          ))}
        </ul>
      </main>
      <Toaster />
    </>
  );
}
