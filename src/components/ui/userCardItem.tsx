import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import { Trash2, Edit } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
import { UsersResponse } from '@/lib/interfaces/user.interface';
import { Label } from './label';
import DeleteModal from './DeleteModal';

interface UserCardItemProps {
  user: UsersResponse;
}

const UserCardItem: FC<UserCardItemProps> = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">
          {user.names} {user.lastNames}
        </CardTitle>
        <CardDescription className="capitalize">{user.note}</CardDescription>
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
        <DeleteModal id={user.id} />
        <Button size="icon">
          <Edit size={20} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCardItem;