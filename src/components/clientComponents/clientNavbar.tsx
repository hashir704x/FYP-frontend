import { Bell, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";

const ClientNavbar = () => {
    const [searchParams] = useSearchParams();
    const activeNav = searchParams.get("active");
    return (
        <header className="border p-4 flex justify-between items-center">
            <SidebarTrigger className="md:hidden"/>
            <Link to="/login">
            <h1 className="font-medium text-lg md:text-2xl text-center">{activeNav?.replaceAll("-", " ")}</h1>
            </Link>
            <div className="flex gap-3 items-center">
                <div className="hidden  bg-[#F5F4F7] py-2 px-3 md:flex items-center gap-2 rounded-md">
                    <Search size={20} color="gray" />
                    <input placeholder="Search Freelancers" className="outline-0" />
                </div>
                <Bell size={20} />
            </div>
        </header>
    );
};

export default ClientNavbar;
