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
import { Textarea } from './textarea';
import { useForm } from 'react-hook-form';
import { UserDto } from '@/lib/interfaces/dto/user-dto.interface';
import { createUser, useUsers } from '@/lib/services/user.service';

interface AddUserProps {}

const AddUser: FC<AddUserProps> = ({}) => {
  const { mutate } = useUsers();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { isValid, dirtyFields, touchedFields, errors },
  } = useForm<UserDto>({
    defaultValues: {
      address: '',
      dniNumber: null,
      email: '',
      lastNames: '',
      cellphone: '',
      names: '',
      note: '',
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await createUser({
        ...data,
        dniNumber: Number(data.dniNumber),
      });
      mutate();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <FilePlus2 size={20} />
        </Button>
      </SheetTrigger>
      <form onSubmit={onSubmit}>
        <SheetContent className="overflow-y-auto">
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
              <div className="col-span-3">
                <Input
                  {...register('names', { required: true, minLength: 3 })}
                  id="names"
                  className=""
                  placeholder="Agregar nombres"
                />

                {touchedFields.names && !getValues('names') && (
                  <span className="p-1 text-xs text-red-500">
                    Campo requerido
                  </span>
                )}
              </div>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="lastnames" className="text-right">
                Apellidos
              </Label>
              <div className="col-span-3">
                <Input
                  {...register('lastNames', { required: true, minLength: 3 })}
                  id="lastnames"
                  placeholder="Agregar apellidos"
                />
                {touchedFields.lastNames && !getValues('lastNames') && (
                  <span className="p-1 text-xs text-red-500">
                    Campo requerido
                  </span>
                )}
              </div>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <div className="col-span-3">
                <Input
                  {...register('email', { required: true })}
                  type="email"
                  id="email"
                  placeholder="Agregar correo electrónico"
                />
                {touchedFields.email && !getValues('email') && (
                  <span className="p-1 text-xs text-red-500">
                    Campo requerido
                  </span>
                )}
              </div>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="dniNumber" className="text-right">
                N. Cédula
              </Label>
              <div className="col-span-3">
                <Input
                  {...register('dniNumber', { required: true })}
                  type="number"
                  id="dniNumber"
                  placeholder="Agregar Número de identificación"
                />
                {touchedFields.dniNumber && !getValues('dniNumber') && (
                  <span className="p-1 text-xs text-red-500">
                    Campo requerido
                  </span>
                )}
              </div>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="address" className="text-right">
                N. Celular
              </Label>
              <div className="col-span-3">
                <Input
                  {...register('cellphone', { required: true })}
                  id="cellphone"
                  placeholder="Agregar número de celular"
                />
                {touchedFields.cellphone && !getValues('cellphone') && (
                  <span className="p-1 text-xs text-red-500">
                    Campo requerido
                  </span>
                )}
              </div>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="address" className="text-right">
                Dirección
              </Label>
              <div className="col-span-3">
                <Input
                  {...register('address', { required: true })}
                  id="address"
                  placeholder="Agregar dirección de domicilio"
                />
                {touchedFields.address && !getValues('address') && (
                  <span className="p-1 text-xs text-red-500">
                    Campo requerido
                  </span>
                )}
              </div>
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="note" className="text-right">
                Nota
              </Label>
              <Textarea
                {...register('note')}
                id="note"
                className="col-span-3"
                placeholder="Agregar nota"
              />
            </div>
          </div>
          <SheetFooter className="gap-4">
            <SheetClose asChild>
              <Button variant={'outline'} type="reset" onClick={() => reset()}>
                Cancelar
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                type="submit"
                disabled={!isValid}
                onClick={() => {
                  onSubmit();
                }}
              >
                Guardar cambios
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </form>
    </Sheet>
  );
};

export default AddUser;
