import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/NavBar";

export default function Layout({user, handleLogout}) {
    return(
        <div className="font-theme bg-primary">
            <NavBar user={user} handleLogout={handleLogout}/>
            <Outlet />
        </div>
    )
}