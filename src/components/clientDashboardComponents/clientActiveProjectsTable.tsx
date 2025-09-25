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
        freelancersNumber: "4",
        startDate: "Jan 25, 2024",
        progress: "70",
    },
    {
        projectTitle: "Mobile App Development",
        projectCost: "18000",
        freelancersNumber: "3",
        startDate: "Dec 17, 2024",
        progress: "40",
    },
    {
        projectTitle: "Social Media Campaign",
        projectCost: "12000",
        freelancersNumber: "2",
        startDate: "Jan 25, 2024",

        progress: "55",
    },
    {
        projectTitle: "Website Redesign",
        projectCost: "15000",
        freelancersNumber: "2",
        startDate: "Sept 25, 2025",
        progress: "50",
    },
    {
        projectTitle: "AI Chatbot Integration",
        projectCost: "22000",
        freelancersNumber: "4",
        startDate: "May 2, 2024",
        progress: "93",
    },
];

function ProgressBar(props: { progress: string }) {
    return (
        <div className="h-[10px] bg-gray-200 rounded-full w-full relative overflow-hidden">
            <div
                className="bg-[var(--my-blue)] absolute top-0 left-0  h-full rounded-full"
                style={{ width: props.progress }}
            />
        </div>
    );
}

export default function ClientActiveProjectsTable() {
    return (
        <Table className="mt-6">
            <TableHeader>
                <TableRow className="bg-[#F5F4F7]">
                    <TableHead className="text-[#707070]">Project Title</TableHead>
                    <TableHead className="text-[#707070]">Project Cost</TableHead>
                    <TableHead className="text-[#707070]">No of freelancers</TableHead>
                    <TableHead className="text-[#707070]">Start Date</TableHead>
                    <TableHead className="text-[#707070]">Progress</TableHead>
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
                        <TableCell>{project.freelancersNumber}</TableCell>
                        <TableCell>{project.startDate}</TableCell>
                        <TableCell className="min-w-[150px] flex items-center gap-2">
                            <ProgressBar
                                progress={`${project.progress}%`}
                                key={project.projectTitle}
                            />
                            {project.progress}%
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
