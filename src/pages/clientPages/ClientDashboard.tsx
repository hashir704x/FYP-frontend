import ClientPieChart from "@/components/clientComponents/clientPieChart";
import ClientLineChart from "@/components/clientComponents/clientLineChart";
import { userAuthStore } from "@/store/userAuthStore";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import ProjectsTable from "../../components/clientComponents/clientActiveProjectsTable";
import UserImage from "../../assets/face1.webp";
import { type ClientActivityItemType } from "@/Types";

const ActivityItemsData: ClientActivityItemType[] = [
    {
        date: "Jan 22, 2025",
        description: "Final testing for 'Mobile App MVP'",
        title: "John D. submitted milestone",
        type: "Milestone",
    },
    {
        date: "Jan 18, 2025",
        description: "Second installment for project work received",
        title: "Client made a payment",
        type: "Payment",
    },
    {
        date: "Jan 15, 2025",
        description: "Development phase 2 completed successfully",
        title: "Alice W. submitted milestone",
        type: "Milestone",
    },
    {
        date: "Jan 12, 2025",
        description: "First installment for project confirmed",
        title: "Client made a payment",
        type: "Payment",
    },
    {
        date: "Jan 08, 2025",
        description: "UI/UX designs delivered and approved",
        title: "Michael B. submitted milestone",
        type: "Milestone",
    },
];

const ActivityItem = ({ date, description, title, type }: ClientActivityItemType) => {
    return (
        <div className="px-3 py-4 border-b">
            <div className="flex justify-between">
                <span
                    className={`text-xs py-1 px-2 rounded-xl ${
                        type === "Payment"
                            ? "bg-[#D1FADF] text-[#027A48]"
                            : "bg-[#FFF3D4] text-[#DDB141]"
                    }`}
                >
                    {type}
                </span>
                <span className="text-xs">{date}</span>
            </div>
            <p className="my-2 font-semibold">{title}</p>
            <p className="text-xs text-[#677487]">{description}</p>
        </div>
    );
};

const ClientDashboard = () => {
    const user = userAuthStore((state) => state.user);
    return (
        <div className="flex p-4 gap-4">
            {/* Left */}
            {/* py-2 px-2 lg:px-4 */}
            <div className="w-full xl:flex-[2.5] h-fit  ">
                <p className="font-semibold text-xl py-4">
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
            <div className="hidden xl:flex xl:flex-col xl:flex-1">
                <div className="w-full h-[200px] bg-[var(--my-blue)] flex items-center flex-col justify-center rounded-lg">
                    <img src={UserImage} alt="user-image" className="rounded-full" />
                    <p className="font-semibold text-xl text-white mt-1">
                        {user?.username}
                    </p>
                </div>

                <div className="mt-2 border-2 p-2 rounded-xl">
                    <h1 className="p-2 text-xl">Recent Activity</h1>
                    <div className="py-2">
                        {ActivityItemsData.map((item, index) => (
                            <ActivityItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
