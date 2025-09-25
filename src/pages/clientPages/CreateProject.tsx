// import TechPicker from "@/components/clientComponents/ProjectTechPicker";
// import { useState } from "react";

const CreateProject = () => {
    // const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    return (
        <div className="p-5">
            <form className="border-2">
                <input
                    type="text"
                    placeholder="Project Title"
                    className="outline-0 border p-2"
                />
                <input
                    type="text"
                    placeholder="Project Title"
                    className="outline-0 border p-2"
                />
            </form>
        </div>
    );
};

export default CreateProject;
