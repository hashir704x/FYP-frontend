// import { useParams } from "react-router-dom";
import face3 from "@/assets/face3.jpeg";
import face2 from "@/assets/face2.webp";
import face4 from "@/assets/face4.webp";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { MessageCircle, UserPlus } from "lucide-react";
import FreelancerCard from "@/components/clientComponents/freelancerCard";

const FreelancersData = [
    {
        id: "f-1",
        name: "Farooq Ali",
        img: face2,
        rating: 4,
        profession: "Web Developer",
        perHourFees: 5000,
        shortDesc:
            "Experienced web developer specializing in responsive and modern web apps.",
    },
    {
        id: "f-2",
        name: "Mike Jackson",
        img: face3,
        rating: 4,
        profession: "UI/UX Designer",
        perHourFees: 8000,
        shortDesc:
            "Creative UI/UX designer focused on intuitive user experiences and clean designs.",
    },
    {
        id: "f-3",
        name: "Sundar Laal",
        img: face4,
        rating: 2,
        profession: "AI Developer",
        perHourFees: 500,
        shortDesc:
            "Beginner AI developer working on machine learning models and data analysis projects.",
    },
];

const SingleProjectDetails = () => {
    // const { projectId } = useParams();
    const [activeOption, setActiveOption] = useState<
        "detail" | "freelancers" | "milestones"
    >("detail");

    return (
        <div className="p-4">
            <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
                <h1 className="text-xl md:text-2xl font-medium text-black">
                    Project:{" "}
                    <span className="font-semibold">Lemon Frontend</span>
                </h1>
                <div className="my-1 md:my-0 max-w-[350px] border flex items-center p-2 rounded-md text-sm md:text-base">
                    <button
                        onClick={() => setActiveOption("detail")}
                        className={`cursor-pointer  py-2 px-3 rounded-md transition-colors duration-300 ease-in-out ${
                            activeOption === "detail" &&
                            "bg-[var(--my-blue)] text-white"
                        }`}
                    >
                        Details
                    </button>
                    <button
                        onClick={() => setActiveOption("freelancers")}
                        className={`cursor-pointer py-2 px-3 rounded-md transition-colors duration-300 ease-in-out ${
                            activeOption === "freelancers" &&
                            "bg-[var(--my-blue)] text-white"
                        }`}
                    >
                        Freelancers
                    </button>
                    <button
                        onClick={() => setActiveOption("milestones")}
                        className={`cursor-pointer py-2 px-3 rounded-md transition-colors duration-300 ease-in-out ${
                            activeOption === "milestones" &&
                            "bg-[var(--my-blue)] text-white"
                        }`}
                    >
                        Milestones
                    </button>
                </div>
            </div>

            <div>
                {activeOption === "detail" && (
                    <div className="mt-3 md:mt-0 font-medium md:text-lg flex flex-col items-start gap-8">
                        <div className="text-[#545454]">
                            <h2>
                                Status:{" "}
                                <span className="text-[#027A48] font-bold">
                                    In Progress
                                </span>
                            </h2>
                            <h2>
                                Budget:{" "}
                                <span className="font-bold">Rs 15000</span>
                            </h2>
                            <h2>
                                Start Date:{" "}
                                <span className="font-bold">June 23, 2025</span>
                            </h2>
                        </div>

                        <div>
                            <Button variant="custom" className="items-center">
                                <MessageCircle />
                                Open Chat
                            </Button>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-3xl font-semibold text-black">
                                Description
                            </h1>
                            <p className="font-normal text-sm md:text-base text-[#545454] mt-1 md:max-w-[1000px]">
                                Mobile App MVP for a new digital product idea.
                                The app will be a cross-platform solution (iOS
                                and Android) focused on solving a specific user
                                pain point (details to be shared with
                                shortlisted candidates). The purpose of this MVP
                                is to validate the core concept with early users
                                and stakeholders, so it will include only the
                                essential features needed for testing usability
                                and market interest.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-3xl font-semibold text-black">
                                Tags
                            </h2>
                            <div className="flex gap-2 flex-wrap mt-2">
                                <span className="bg-[var(--my-blue)] text-white font-medium px-2 py-1 rounded-md text-xs md:text-sm">
                                    React Native
                                </span>
                                <span className="bg-[var(--my-blue)] text-white font-medium px-2 py-1 rounded-md text-xs md:text-sm">
                                    Firebase
                                </span>
                                <span className="bg-[var(--my-blue)] text-white font-medium px-2 py-1 rounded-md text-xs md:text-sm">
                                    UI/UX Design
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-3xl font-semibold text-black">
                                Freelancers
                            </h2>
                            <div className="flex flex-col md:flex-row md:items-center gap-8 text-sm mt-2">
                                <div className="flex items-center gap-2 ">
                                    <img
                                        src={face2}
                                        alt="face"
                                        className="rounded-full w-[50px] sm:w-[60px]"
                                    />
                                    <span className="font-medium">
                                        Khoobsurat
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={face3}
                                        alt="face"
                                        className="rounded-full w-[50px] sm:w-[60px]"
                                    />
                                    <span className="font-medium">Jameel</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={face4}
                                        alt="face"
                                        className="rounded-full w-[50px] sm:w-[60px]"
                                    />
                                    <span className="font-medium">Nabeel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeOption === "freelancers" && (
                    <div>
                        <Button variant="custom" className="mt-4">
                            <UserPlus />
                            Add Freelancer
                        </Button>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold">
                                Working Freelancers
                            </h2>
                            <div className="flex gap-8 flex-wrap items-center justify-center md:justify-start mt-3">
                                {FreelancersData.map((item) => (
                                    <FreelancerCard key={item.id} {...item} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {activeOption === "milestones" && <div>milestones</div>}
            </div>
        </div>
    );
};

export default SingleProjectDetails;
