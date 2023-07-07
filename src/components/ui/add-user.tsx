import { FC } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import { Button } from './button';
import { Label } from './label';
import { Input } from './input';
import { FilePlus2 } from 'lucide-react';

interface AddUserProps {}

const AddUser: FC<AddUserProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <FilePlus2 size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Añadir nuevo usuario</SheetTitle>
          <SheetDescription>
            Completa los campos para añadir un nuevo usuario
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="names" className="text-right">
              Nombres
            </Label>
            <Input
              id="names"
              className="col-span-3"
              placeholder="Agregar nombres"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="lastnames" className="text-right">
              Apellidos
            </Label>
            <Input
              id="lastnames"
              className="col-span-3"
              placeholder="Agregar apellidos"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="col-span-3"
              placeholder="Agregar correo electrónico"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="dniNumber" className="text-right">
              N. Cédula
            </Label>
            <Input
              id="dniNumber"
              className="col-span-3"
              placeholder="Agregar Número de identificación"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="address" className="text-right">
              Dirección
            </Label>
            <Input
              id="address"
              className="col-span-3"
              placeholder="Agregar dirección de domicilio"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default AddUser;
