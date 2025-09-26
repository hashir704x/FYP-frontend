import CreatableSelect from "react-select/creatable";
import { type StylesConfig } from "react-select";

type Option = { value: string; label: string };

const customStyles: StylesConfig<Option> = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "white",
        borderColor: state.isFocused ? "#0532A9" : "#e5e7eb",
        borderRadius: "0.5rem",
        padding: "2px 4px",
        boxShadow: state.isFocused ? "0 0 0 2px rgba(5, 50, 169, 0.2)" : "none",
        "&:hover": {
            borderColor: "#0532A9",
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#9ca3af",
        fontSize: "0.875rem",
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: "0.875rem",
        padding: "8px 12px",
        cursor: "pointer",
        backgroundColor: state.isFocused
            ? "#e0e7ff" // hover effect
            : "white",
        color: "#111827",
        "&:active": {
            backgroundColor: "#0532A9",
            color: "white",
        },
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: "#e0e7ff",
        borderRadius: "0.375rem",
        padding: "0 2px",
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: "#0532A9",
        fontWeight: 500,
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: "#0532A9",
        cursor: "pointer",
        ":hover": {
            backgroundColor: "#c7d2fe",
            color: "#031f6d",
        },
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "0.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        border: "1px solid #e5e7eb",
        marginTop: 4,
    }),
};

type TechPickerProps = {
    value: string[];
    onChange: (newValue: string[]) => void;
};

export default function TechPicker({ value, onChange }: TechPickerProps) {
    const options: Option[] = [
        { value: "react", label: "React" },
        { value: "java", label: "Java" },
        { value: "python", label: "Python" },
        { value: "node", label: "Node.js" },
    ];

    const selectedOptions = value.map((v) => ({ value: v, label: v }));

    return (
        <div className="w-full max-w-sm">
            <CreatableSelect
                isMulti
                isSearchable
                options={options}
                styles={customStyles}
                placeholder="Select technologies..."
                value={selectedOptions}
                onChange={(newValue) =>
                    onChange((newValue as Option[]).map((opt) => opt.value))
                }
            />
        </div>
    );
}
