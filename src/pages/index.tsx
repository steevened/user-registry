import { useUsers } from '@/lib/services/user.service';
import Navbar from '../components/ui/navbar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import UserCardItem from '@/components/ui/userCardItem';

export default function Home() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <main className="min-h-screen">
      <Navbar />
      <ul className="container grid grid-cols-1 gap-5 mx-auto py-28 md:grid-cols-2">
        {data?.map((user) => (
          <UserCardItem key={user.id} user={user} />
        ))}
      </ul>
    </main>
  );
}
