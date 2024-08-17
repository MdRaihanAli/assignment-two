export type TuserName = {
  firstName: string;
  lastName: string;
};

export type Taddress = {
  street: string;
  city: string;
  country: string;
};

export type Torder = {
  productName: string;
  price: number;
  quantity: number;
};

export type Tuser = {
  userId: number;
  userName: TuserName;
  password: string,
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Taddress;
  order?: Torder[];
};
