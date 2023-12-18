import { Outlet } from "react-router-dom";

const Ingresso = () => {
    document.title = "CodeChella | Ingresso"
    return (
        <>
            <Outlet />
        </>
    );
}

export default Ingresso;
