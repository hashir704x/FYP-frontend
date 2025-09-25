import { Outlet } from "react-router-dom";
import { userAuthStore } from "@/store/userAuthStore";
import { Navigate } from "react-router-dom";
import ClientNavigationSidebar from "@/components/clientNavigationSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ClientNavbar from "@/components/clientNavbar";

const ClientLayout = () => {
    const user = userAuthStore((state) => state.user);
    if (!user) return <Navigate to="/login" />;
    if (user.role !== "client") return <Navigate to="/" />;
    return (
        <div>
            <SidebarProvider>
                <ClientNavigationSidebar />
                <div className="w-full">
                    <ClientNavbar />
                    <Outlet />
                </div>
            </SidebarProvider>
        </div>
    );
};

export default ClientLayout;
