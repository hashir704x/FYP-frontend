import { useState } from "react";
import TechPicker from "@/components/clientComponents/ProjectTechPicker";
import { toastMaker } from "@/components/toastMaker";
import { CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [budget, setBudget] = useState<number>(0);
    const [techs, setTechs] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !desc || !budget || techs.length === 0) {
            toastMaker({
                className:
                    "bg-red-600 text-white flex gap-2 items-center sm:p-4 p-2 rounded-md justify-center",
                icon: CircleX,
                text: "Fields are empty",
            });
            return;
        }
        if (title.length < 4) {
            toastMaker({
                className:
                    "bg-red-600 text-white flex gap-2 items-center sm:p-4 p-2 rounded-md justify-center",
                icon: CircleX,
                text: "Title is too much short",
            });
            return;
        }

        if (budget < 5000) {
            toastMaker({
                className:
                    "bg-red-600 text-white flex gap-2 items-center sm:p-3 p-2 rounded-md justify-center",
                icon: CircleX,
                text: "Minimum budget must be RS 5000",
            });
            return;
        }
        const projectData = {
            title,
            desc,
            budget,
            techs,
        };

        console.log("Project Data:", projectData);
        navigate("/client/project-details/project-123?active=Project-Details")
        // yahan API call bhej sktay ho
    };

    return (
        <div className="lg:p-5 max-w-2xl mx-auto">
            <h1 className="text-2xl font-semibold text-[#0532A9] p-4">
                Create a New Project
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-md space-y-5 p-4 sm:px-6"
            >
                <div className="flex flex-col space-y-2">
                    <label htmlFor="title" className="font-medium text-gray-700">
                        Project Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="e.g. E-commerce Website"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0532A9] focus:border-[#0532A9]"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="desc" className="font-medium text-gray-700">
                        Project Description
                    </label>
                    <textarea
                        id="desc"
                        rows={5}
                        placeholder="Describe your project in detail..."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-[#0532A9] focus:border-[#0532A9]"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="budget" className="font-medium text-gray-700">
                        Estimated Budget (min Rs 5000)
                    </label>
                    <input
                        id="budget"
                        type="number"
                        min={0}
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#0532A9] focus:border-[#0532A9]"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="font-medium text-gray-700">
                        Required Technologies
                    </label>
                    <TechPicker value={techs} onChange={setTechs} />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-[#0532A9] text-white px-5 py-2 rounded-md hover:bg-[#032a85] transition w-full sm:w-auto"
                >
                    Create Project
                </button>
            </form>
        </div>
    );
};

export default CreateProject;
