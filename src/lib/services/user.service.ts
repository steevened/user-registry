import useSWR from 'swr';
import { UsersResponse } from '../interfaces/user.interface';

export function useUsers() {
  const { data, error, isLoading, mutate } = useSWR<UsersResponse[]>('users');

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
}
