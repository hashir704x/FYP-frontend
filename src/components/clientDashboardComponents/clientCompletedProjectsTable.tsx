import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        projectTitle: "E-commerce Platform",
        projectCost: "25000",

        startDate: "Jan 25, 2024",
        endDate: "Jun 30, 2024",
        progress: "70",
    },
    {
        projectTitle: "Mobile App Development",
        projectCost: "18000",

        startDate: "Dec 17, 2024",
        endDate: "Apr 15, 2025",
        progress: "40",
    },
    {
        projectTitle: "Social Media Campaign",
        projectCost: "12000",

        startDate: "Jan 25, 2024",
        endDate: "Mar 30, 2024",
        progress: "55",
    },
    {
        projectTitle: "Website Redesign",
        projectCost: "15000",

        startDate: "Sept 25, 2025",
        endDate: "Dec 20, 2025",
        progress: "50",
    },
    {
        projectTitle: "AI Chatbot Integration",
        projectCost: "22000",
        startDate: "May 2, 2024",
        endDate: "Aug 25, 2024",
        progress: "93",
    },
];

const ClientCompletedProjectsTable = () => {
    return (
        <Table className="mt-4">
            <TableHeader>
                <TableRow className="bg-[#F5F4F7]">
                    <TableHead className="text-[#707070]">Project Title</TableHead>
                    <TableHead className="text-[#707070]">Project Cost</TableHead>

                    <TableHead className="text-[#707070]">Start Date</TableHead>
                    <TableHead className="text-[#707070]">End Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((project) => (
                    <TableRow key={project.projectTitle}>
                        <TableCell className="font-medium p-4 flex items-center gap-2">
                            <Link to="#">
                                <SquareArrowOutUpRight
                                    size={16}
                                    className="stroke-[var(--my-blue)]"
                                />
                            </Link>
                            {project.projectTitle}
                        </TableCell>
                        <TableCell>{project.projectCost}</TableCell>

                        <TableCell>{project.startDate}</TableCell>
                        <TableCell>{project.endDate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ClientCompletedProjectsTable;
