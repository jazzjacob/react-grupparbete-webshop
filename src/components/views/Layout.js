import { Outlet } from "react-router-dom";
import Navbar from "../general/Navbar";

const Layout = () => {
    return(
        <>
            {/* <Navbar/> */}
            <Outlet/>
        </>
    );
};

export default Layout;