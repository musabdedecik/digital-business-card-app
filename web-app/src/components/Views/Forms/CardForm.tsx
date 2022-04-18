import { useEffect, useState } from "react";
import BusinessCard from "../Card/BusinessCard";
import Form from "./Form";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IUser } from "../../../configures/interfaces";
import { FormControl } from "@mui/material";
import StandartTextField from "../TextFields/StandartTextField";

export default function CardForm() {
    const initialUser = useSelector((state: RootState) => state.usersReducer.users)
    const [currentUser, setCurrentUser] = useState<IUser>(initialUser[0]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        setCurrentUser(initialUser[0])
    },[initialUser]);

    return (
        <div className="card-form-wrapper">
            <Form>
                <FormControl className="form-control-mui">
                    <StandartTextField
                        type="email"
                        name="email"
                        label="E-Posta"
                        onChange={handleChange}
                        value={currentUser?.email}
                    />
                </FormControl>
                <FormControl className="form-control-mui">
                    <StandartTextField
                        type="text"
                        name="phone"
                        label="Telefon Numarası"
                        onChange={handleChange}
                        value={currentUser?.phone}
                    />
                </FormControl>
                <FormControl className="form-control-mui">
                    <StandartTextField
                        type="text"
                        name="name"
                        label="Ad"
                        onChange={handleChange}
                        value={currentUser?.name}
                    />
                </FormControl>
                <FormControl className="form-control-mui">
                    <StandartTextField
                        type="text"
                        name="surname"
                        label="Soyad"
                        onChange={handleChange}
                        value={currentUser?.surname}
                    />
                </FormControl>
                <FormControl className="form-control-mui">
                    <StandartTextField
                        type="text"
                        name="title"
                        label="Ünvan"
                        onChange={handleChange}
                        value={currentUser?.title}
                    />
                </FormControl>
                <FormControl className="form-control-mui">
                    <StandartTextField
                        type="text"
                        name="image"
                        label="Fotoğraf Linki"
                        onChange={handleChange}
                        value={currentUser?.image}
                    />
                </FormControl>
            </Form>
            <BusinessCard {...currentUser} />
        </div>
    )
}