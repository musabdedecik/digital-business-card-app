export interface IUser {
    name: String;
    surname: String;
    email: String;
    password: String;
    title: String;
    birthday: Date;
    SocialMedia: ISocialMedia[];
    phone: String;
    address: String;
}

export interface ISocialMedia {
    name: string;
    url:string;
    icon:string
}