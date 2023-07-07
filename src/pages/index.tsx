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

export default function Home() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <main className="min-h-screen">
      <Navbar />
      <ul className="container grid grid-cols-1 gap-5 mx-auto py-28 md:grid-cols-2">
        {data?.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle className="capitalize">
                {user.names} {user.lastNames}
              </CardTitle>
              <CardDescription className="capitalize">
                {user.note}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Email"
                      value={user.email}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="dni">
                      Documento de Identificación / Pasaporte
                    </Label>
                    <Input
                      id="dni"
                      placeholder="Documento de Identificación / Pasaporte"
                      value={user.dniNumber}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="cellphone">Teléfono de contacto</Label>
                    <Input
                      id="cellphone"
                      placeholder="Teléfono de contacto / Celular"
                      value={user.cellphone}
                      disabled
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address">Dirección de domicilio</Label>
                    <Input
                      id="address"
                      placeholder="Dirección de domicilio"
                      value={user.address}
                      disabled
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-5">
              <Button size="icon" variant={'outline'}>
                <Trash2 size={20} />
              </Button>
              <Button size="icon">
                <Edit size={20} />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </main>
  );
}
