import { Outlet } from "react-router-dom";
import { userAuthStore } from "@/store/userAuthStore";
import { Navigate } from "react-router-dom";
import NavigationSidebar from "@/components/navigationSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const ClientLayout = () => {
    const user = userAuthStore((state) => state.user);
    if (!user) return <Navigate to="/login" />;
    if (user.role !== "client") return <Navigate to="/" />;
    return (
        <div>
            <SidebarProvider>
                <NavigationSidebar />
                <div className="w-full">
                    <SidebarTrigger className="md:hidden"/>
                    <Outlet />
                </div>
            </SidebarProvider>
        </div>
    );
};

export default ClientLayout;
