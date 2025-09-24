import ClientPieChart from "@/components/clientDashboardComponents/clientPieChart";
import ClientLineChart from "@/components/clientDashboardComponents/clientLineChart";

const ClientDashboard = () => {
    return (
        <div>
            <div className="flex">
                {/* Left */}
                <div className="p-2 lg:p-4 flex flex-col lg:flex-row gap-4 flex-2">
                    <ClientPieChart />
                    <ClientLineChart />
                </div>

                {/* Right */}
                <div className="hidden xl:flex flex-1"></div>
            </div>
        </div>
    );
};

export default ClientDashboard;
