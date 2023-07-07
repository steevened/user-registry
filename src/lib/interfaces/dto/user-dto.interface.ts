export interface UserDto {
  names: string;
  lastNames: string;
  dniNumber: number | null;
  email: string;
  cellphone: string;
  address: string;
  note?: string;
}
