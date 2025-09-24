import ClientPieChart from "@/components/clientDashboardComponents/clientPieChart";
import ClientLineChart from "@/components/clientDashboardComponents/clientLineChart";
import { userAuthStore } from "@/store/userAuthStore";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import ProjectsTable from "../components/clientDashboardComponents/clientProjectsTable";

const ClientDashboard = () => {
    const user = userAuthStore((state) => state.user);
    return (
        <div className=" flex">
            {/* Left */}
            <div className="w-full xl:flex-2 h-fit py-2 px-2 lg:px-4 ">
                <p className="font-medium text-xl py-4">
                    Welcome back, {user?.username}!
                </p>
                <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <ClientPieChart />
                    <ClientLineChart />
                </div>

                <div className="mt-5">
                    <div className="flex gap-3 flex-col lg:flex-row justify-between items-center">
                        <h1 className="text-xl font-medium">
                            Active Projects{" "}
                            <span className="text-sm text-[#959595]">(04)</span>
                        </h1>
                        <div className="flex gap-4 items-center">
                            <Button className="bg-[#F5F4F7] text-black hover:bg-[#cdcad3] cursor-pointer text-xs lg:text-sm">
                                View all projects
                            </Button>
                            <Button variant="custom" className="text-xs lg:text-sm">
                                <SquarePlus /> Add new project
                            </Button>
                        </div>
                    </div>
                    <ProjectsTable />
                </div>
            </div>
            {/* Right */}
            <div className="hidden xl:flex xl:flex-1 h-[600px]"></div>
        </div>
    );
};

export default ClientDashboard;
