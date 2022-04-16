export interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  title: string;
  birthday: Date;
  SocialMedia?: ISocialMedia[];
  phone: string;
  address: string;
}

export interface ISocialMedia {
  name: string;
  url: string;
  icon: string;
}
