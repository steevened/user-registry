import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserDto } from '@/lib/interfaces/dto/user-dto.interface';
import { Edit, Loader2 } from 'lucide-react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Textarea } from './textarea';
import { updateUser, useUserById, useUsers } from '@/lib/services/user.service';
import { UsersResponse } from '@/lib/interfaces/user.interface';

interface Props {
  user: UsersResponse;
}

const EditForm: FC<Props> = ({ user }) => {
  const { mutate } = useUsers();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, isDirty, touchedFields, isSubmitting, isSubmitted },
  } = useForm<UserDto>({
    defaultValues: {
      names: user?.names || '',
      lastNames: user?.lastNames || '',
      email: user?.email || '',
      dniNumber: user?.dniNumber || '',
      cellphone: user?.cellphone || '',
      address: user?.address || '',
      note: user?.note || '',
    },
    mode: 'all',
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await updateUser(user.id, data);
      await mutate();
      console.log(res);

      console.log(res);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  });

  console.log(isDirty);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <Edit size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar información</DialogTitle>
          <DialogDescription>
            Actualiza la información de este usuario. Click en el botón de
            guardar cuando los datos estén listos.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={onSubmit}>
          <div className="grid items-center grid-cols-4 gap-4 ">
            <Label htmlFor="names" className="text-right">
              Nombres
            </Label>
            <div className="col-span-3">
              <Input
                {...register('names', {
                  required: true,
                  minLength: 3,
                })}
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
                {...register('lastNames', {
                  required: true,
                  minLength: 3,
                })}
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
                {...register('email', {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
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
                {...register('dniNumber', {
                  required: true,
                  minLength: 5,
                })}
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
                {...register('cellphone', {
                  required: true,
                  minLength: 5,
                })}
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
                {...register('address', {
                  required: true,
                  minLength: 2,
                })}
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
              {...register('note', {})}
              id="note"
              className="col-span-3"
              placeholder="Agregar nota"
            />
          </div>

          <DialogFooter>
            <Button type="submit" disabled={!isDirty || !isValid}>
              {isSubmitting && <Loader2 className="animate-spin mr-2" />}
              <span>{isSubmitting ? 'Guardando' : 'Guardar'}</span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditForm;
