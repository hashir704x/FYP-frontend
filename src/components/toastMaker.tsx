import type { LucideProps } from "lucide-react";
import { toast } from "sonner";

type Props = {
    className: string;
    text: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
};

function toastMaker(props: Props) {
    toast.custom(
        () => (
            <div className={props.className}>
                <props.icon />
                <span className="sm:text-lg">{props.text}</span>
            </div>
        ),
        { duration: 3000 }
    );
}

export { toastMaker };
