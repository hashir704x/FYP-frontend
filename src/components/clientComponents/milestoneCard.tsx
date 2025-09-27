type Props = {
    milestoneNumber: number;
    label: string;
    amount: number;
    freelancer: {
        img: string;
        name: string;
    };
    dateCreated: string;
    status: string;
};

const MileStoneCard = (props: Props) => {
    return (
        <div className="border p-2 flex justify-between">
           
        </div>
    );
};

export default MileStoneCard;
