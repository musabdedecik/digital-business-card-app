import About from "../components/Pages/About";
import CardView from "../components/Pages/CardView";
import Login from "../components/Pages/Login";
import Profile from "../components/Pages/Profile";
import { removeToken } from "./auth";

export interface IRoute {
    path: string;
    redirect?: boolean;
    component?: any;
    name: string;
    exact: boolean;
    private: boolean;
    props?: any;
    fn?: any;
}

export const SubRoutes: IRoute[] = [
    {
        path: "/login",
        component: Login,
        name: "Çıkış Yap",
        exact: true,
        private: false,
        fn: () => {
            removeToken();
        }
    },
]

export const Routes: IRoute[] = [
    {
        path: "/dashboard",
        component: CardView,
        name: "Anasayfa",
        exact: true,
        private: true
    },
    {
        path: "/dashboard/about",
        component: About,
        name: "Uygulama Hakkında",
        exact: true,
        private: true
    },
    {
        path: "/dashboard/profile",
        component: Profile,
        name: "Hesabım",
        exact: true,
        private: true
    }
]

