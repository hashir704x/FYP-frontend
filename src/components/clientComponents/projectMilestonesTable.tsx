import type { ProjectMilestonesType } from "@/Types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { HandCoins, Pencil } from "lucide-react";

type Props = {
    milestonesData: ProjectMilestonesType[];
};

const ProjectMilestoneTable = (props: Props) => {
    return (
        <div>
            <Table className="mt-6 rounded-2xl border">
                <TableHeader>
                    <TableRow className="bg-[#F5F4F7]">
                        <TableHead className="text-[#707070] p-3">
                            Number
                        </TableHead>
                        <TableHead className="text-[#707070]">Label</TableHead>
                        <TableHead className="text-[#707070]">Amount</TableHead>
                        <TableHead className="text-[#707070]">
                            Freelancer
                        </TableHead>
                        <TableHead className="text-[#707070]">
                            Date created
                        </TableHead>
                        <TableHead className="text-[#707070]">Status</TableHead>
                        <TableHead className="text-[#707070]"></TableHead>
                        <TableHead className="text-[#707070]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.milestonesData.map((milestone) => (
                        <TableRow key={milestone.milestoneNumber}>
                            <TableCell className="p-6">
                                {milestone.milestoneNumber}
                            </TableCell>
                            <TableCell>{milestone.label}</TableCell>
                            <TableCell>Rs {milestone.amount}</TableCell>
                            <TableCell>
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={milestone.freelancer.img}
                                        alt="user"
                                        className="w-[40px] rounded-full hidden md:static"
                                    />
                                    <span>{milestone.freelancer.name}</span>
                                </div>
                            </TableCell>
                            <TableCell>{milestone.dateCreated}</TableCell>
                            <TableCell>
                                <span
                                    className={`${
                                        milestone.status === "Completed" &&
                                        "text-[#027A48] bg-[#D1FADF]"
                                    }
                                    ${
                                        milestone.status === "In-progress" &&
                                        "text-[#DDB141] bg-[#FFF3D4]"
                                    }
                                    ${
                                        milestone.status === "Unactive" &&
                                        " bg-gray-200"
                                    }
                                    
                                    h-[30px] w-[85px] flex justify-center items-center text-xs rounded-md `}
                                >
                                    {milestone.status}
                                </span>
                            </TableCell>
                            <TableCell>
                                <Button variant="custom">
                                    <Pencil />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="custom">
                                   <HandCoins />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProjectMilestoneTable;
