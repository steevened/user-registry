import useSWR from 'swr';
import { UsersResponse } from '../interfaces/user.interface';
import { UserDto } from '../interfaces/dto/user-dto.interface';
import { axiosInstance } from '../fetcher';

export function useUsers() {
  const { data, error, isLoading, mutate } = useSWR<UsersResponse[]>('users');

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}

export function useUserById(id: string) {
  const { data, error, isLoading, mutate } = useSWR<UsersResponse>(
    id ? `users/${id}` : null
  );

  return {
    data,
    isLoading,
    error,
  };
}

export async function createUser(data: UserDto) {
  const res = await axiosInstance.post('/users', data);
  return res;
}

export async function updateUser(id: string, data: UserDto) {
  const res = await axiosInstance.patch(`/users/${id}`, data);
  return res;
}

export async function deleteUser(id: string) {
  const res = await axiosInstance.delete(`/users/${id}`);
  return res;
}
