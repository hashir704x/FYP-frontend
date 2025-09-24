import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const projects = [
    {
        projectTitle: "E-commerce Platform",
        projectCost: "25000",
        freelancersNumber: "4",
        milestoneNumber: "10",
        progress: "70",
    },
    {
        projectTitle: "Mobile App Development",
        projectCost: "18000",
        freelancersNumber: "3",
        milestoneNumber: "6",
        progress: "40",
    },
    {
        projectTitle: "Social Media Campaign",
        projectCost: "12000",
        freelancersNumber: "2",
        milestoneNumber: "5",
        progress: "55",
    },
    {
        projectTitle: "Website Redesign",
        projectCost: "15000",
        freelancersNumber: "2",
        milestoneNumber: "7",
        progress: "50",
    },
    {
        projectTitle: "AI Chatbot Integration",
        projectCost: "22000",
        freelancersNumber: "4",
        milestoneNumber: "8",
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

export default function TableDemo() {
    return (
        <Table className="mt-6">
            <TableHeader>
                <TableRow className="bg-[#F5F4F7]">
                    <TableHead className="text-[#707070]">Project Title</TableHead>
                    <TableHead className="text-[#707070]">Project Cost</TableHead>
                    <TableHead className="text-[#707070]">No of freelancers</TableHead>
                    <TableHead className="text-[#707070]">No of milestones</TableHead>
                    <TableHead className="text-[#707070]">Progress</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((project) => (
                    <TableRow key={project.projectTitle}>
                        <TableCell className="font-medium p-4 flex items-center">
                            {project.projectTitle}
                        </TableCell>
                        <TableCell>{project.projectCost}</TableCell>
                        <TableCell>{project.freelancersNumber}</TableCell>
                        <TableCell>{project.milestoneNumber}</TableCell>
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
