import ClientActiveProjectsTable from "@/components/clientComponents/clientActiveProjectsTable";
import ClientCompletedProjectsTable from "@/components/clientComponents/clientCompletedProjectsTable";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";

const ClientProjects = () => {
    return (
        <div className="p-5">
            <div>
                <div className="flex gap-3 flex-col lg:flex-row justify-between lg:items-center">
                    <h1 className="text-xl font-medium">
                        Active Projects{" "}
                        <span className="text-sm text-[#959595]">(04)</span>
                    </h1>
                    <div>
                        <Button variant="custom" className="text-xs lg:text-sm">
                            <SquarePlus /> Add new project
                        </Button>
                    </div>
                </div>
                <ClientActiveProjectsTable />
            </div>

            <div className="mt-7">
             <div className="">
                    <h1 className="text-xl font-medium">
                        Completed Projects{" "}
                        <span className="text-sm text-[#959595]">(04)</span>
                    </h1>
                </div>   
                <ClientCompletedProjectsTable />
            </div>
        </div>
    );
};

export default ClientProjects;
