export interface UserStructure {
  id: number;
  username: string;
  token: string;
  email: string;
  isLogged: boolean;
  address: string;
}

export type UsersStructure = UserStructure[];

export interface CarStructure {
  id: number;
  model: string;
  brand: string;
  stock: number;
  price: number;
}

export type CarsStructure = CarStructure[];
