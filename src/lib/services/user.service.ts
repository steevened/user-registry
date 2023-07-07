import useSWR from 'swr';
import { UsersResponse } from '../interfaces/user.interface';
import { UserDto } from '../interfaces/dto/user-dto.interface';
import { axiosInstance } from '../fetcher';

export function useUsers() {
  const { data, error, isLoading, mutate } = useSWR<UsersResponse[]>('users');

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
}

export async function createUser(data: UserDto) {
  const res = await axiosInstance.post('/users', data);
  return res;
}
