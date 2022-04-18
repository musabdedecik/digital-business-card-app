import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { IRoute, Routes } from "../../configures/routes";
import NotFound from "../Pages/NotFound";
import NavigationBar from "../Views/NavigationBar/NavigationBar";

const DashboardLayout: React.FunctionComponent<{}> = () => {
    return (
        <>
            <NavigationBar />
            <div style={{paddingLeft:"26px", paddingRight:"26px"}}>
                <Switch>
                    {Routes.map((route: IRoute) => {
                        return (
                            <Route path={route.path} key={route.name} exact render={(props: RouteComponentProps<any>) => (
                                <route.component {...props} {...route.props} />
                            )} />
                        )
                    })}
                    <Route component={NotFound} />
                </Switch>
            </div>
        </>
    )
}

export default DashboardLayout;