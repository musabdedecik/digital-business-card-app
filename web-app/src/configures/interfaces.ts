
export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  title: string;
  phone: string;
  address?: string;
  image: string;
}

export interface FormValues {
  email: string;
  password: string;
}
