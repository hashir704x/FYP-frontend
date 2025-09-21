import { Outlet } from "react-router-dom";
import { userAuthStore } from "@/store/userAuthStore";
import { Navigate } from "react-router-dom";

const ClientLayout = () => {
    const user = userAuthStore((state) => state.user);
    if (!user) return <Navigate to="/login" />;
    if (user.role !== "client") return <Navigate to="/" />;
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default ClientLayout;
