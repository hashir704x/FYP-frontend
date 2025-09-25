import {
    Computer,
    Palette,
    PenTool,
    Bot,
    Megaphone,
    BookOpen,
    DollarSign,
    Camera,
} from "lucide-react";

const cardsData = [
    {
        icon: Computer,
        label: "Development & IT",
    },
    {
        icon: Palette,
        label: "Design & Creative",
    },
    {
        icon: Bot,
        label: "AI & Data Science",
    },
    {
        icon: Megaphone,
        label: "Sales & Marketing",
    },
    {
        icon: PenTool,
        label: "Writing & Translation",
    },
    {
        icon: BookOpen,
        label: "Admin & Support",
    },
    {
        icon: DollarSign,
        label: "Finance & Accounting",
    },
    {
        icon: Camera,
        label: "Video & Photography",
    },
];

const SmallCards = () => {
    return (
        <div>
            <h1 className="text-2xl sm:text-4xl font-medium">
                Explore Different Pros
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 items-center justify-center w-[130px] h-[100px] sm:w-[280px] sm:h-[180px] shadow-lg hover:shadow-xl transition-shadow bg-white"
                    >
                        <div className="text-[var(--my-blue)]">
                            <card.icon size={40} />
                        </div>
                        <h2 className="font-medium text-xs sm:text-xl">
                            {card.label}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmallCards;
