import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const CorpoApp = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default CorpoApp;
