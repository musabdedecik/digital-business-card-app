import React, { FC } from "react";
import Dashboard from "../components/Views/Dashboard";
import Login from "../components/Views/Login";

type Route = {
    path: string;
    redirect?: boolean;
    component: any;
    name:string;
    exact: boolean;
    private: boolean;
}

export const routes:Route[] = [
    {
        path:"/dashboard",
        component:Dashboard,
        name:"Anasayfa",
        exact:true,
        private:true
    },
    {
        path:"/dashboard/about",
        component:Dashboard,
        name:"Anasayfa",
        exact:true,
        private:true
    },
    {
        path:"/dashboard/profile",
        component:Dashboard,
        name:"Anasayfa",
        exact:true,
        private:true
    },
]

