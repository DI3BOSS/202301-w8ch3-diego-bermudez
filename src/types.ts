export interface userStructure {
  id: number;
  username: string;
  token: string;
  email: string;
  isLogged: boolean;
  address: string;
}

export type usersStructure = userStructure[];
