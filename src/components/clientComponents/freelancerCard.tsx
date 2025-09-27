import { MessageCircle, Star } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
    id: string;
    name: string;
    img: string;
    rating: number;
    profession: string;
    perHourFees: number;
    shortDesc: string;
};

const count = [1, 2, 3, 4, 5];

const FreelancerCard = (props: Props) => {
    return (
        <div className="border p-4 rounded-md h-[300px] w-[350px] flex flex-col justify-between shadow-xl">
            <div className="flex gap-4 items-center">
                <img
                    src={props.img}
                    alt="image"
                    className="rounded-full w-[80px]"
                />
                <div>
                    <p className="text-xl font-semibold">{props.name}</p>
                    <p className="text-[#545454]">{props.profession}</p>
                </div>
            </div>

            <p className="text-[#545454] font-medium mt-2">
                Rs {props.perHourFees} per hour
            </p>
            <p className="text-[#545454] text-sm">{props.shortDesc}</p>
            <div className="flex gap-2 items-center ">
                <p className="text-sm">Rating:</p>
                <div className="flex gap-1">
                    {count.map((star, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={`${
                                star <= props.rating
                                    ? "fill-blue-600 stroke-blue-600"
                                    : "stroke-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="custom">View Profile</Button>
                <Button variant="custom" className="items-center">
                    <MessageCircle />
                    Message
                </Button>
            </div>
        </div>
    );
};

export default FreelancerCard;
