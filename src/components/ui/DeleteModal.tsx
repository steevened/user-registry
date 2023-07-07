import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { deleteUser, useUsers } from '@/lib/services/user.service';
import { Trash2 } from 'lucide-react';
import { FC } from 'react';

interface Props {
  id: string;
}

const DeleteModal: FC<Props> = ({ id }) => {
  const { mutate } = useUsers();

  const handleDelete = async () => {
    const res = await deleteUser(id);
    mutate();
    console.log(res);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant={'outline'}>
          <Trash2 size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estás seguro/a?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Este usuario será eliminado
            permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
