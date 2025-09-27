export type ClientActivityItemType = {
    type: "Milestone" | "Payment";
    date: string;
    title: string;
    description: string;
};

export type ProjectMilestonesType = {
    milestoneNumber: number;
    label: string;
    amount: number;
    freelancer: {
        img: string;
        name: string;
    };
    dateCreated: string;
    status: "Completed" | "In-progress" | "Unactive";
};
