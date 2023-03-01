export interface UserStructure {
  id: number;
  username: string;
  token: string;
  email: string;
  isLogged: boolean;
  address: string;
}

export type UsersStructure = UserStructure[];
