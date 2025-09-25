import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
    useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Home,
    PlusCircle,
    FolderKanban,
    FileText,
    Wallet,
    MessageSquare,
    AlertTriangle,
    Settings,
    LogOut,
    CircleX,
    // type LucideProps,
} from "lucide-react";
import { Link } from "react-router-dom";
import { userAuthStore } from "@/store/userAuthStore";

const clientSidebarItems = [
    { title: "Dashboard", url: "/client?active=Dashboard", icon: Home },
    { title: "Post a Project", url: "/client/post-project", icon: PlusCircle },
    { title: "My Projects", url: "/client/all-projects?active=All-Projects", icon: FolderKanban },
    { title: "Proposals", url: "/client/proposals", icon: FileText },
    { title: "Payments", url: "/client/milestones", icon: Wallet },
    { title: "Messages", url: "/client/messages", icon: MessageSquare },
    { title: "Disputes", url: "/client/disputes", icon: AlertTriangle },
    { title: "Profile & Settings", url: "/client/settings", icon: Settings },
];

// const freelancerSidebarItems = [
//     { title: "Dashboard", url: "/freelancer", icon: Home },
//     { title: "Browse Projects", url: "/freelancer/browse-projects", icon: FolderKanban },
//     { title: "My Proposals", url: "/freelancer/proposals", icon: FileText },
//     { title: "My Contracts", url: "/freelancer/contracts", icon: Wallet },
//     { title: "Messages", url: "/freelancer/messages", icon: MessageSquare },
//     { title: "Disputes", url: "/freelancer/disputes", icon: AlertTriangle },
//     { title: "Profile & Settings", url: "/freelancer/settings", icon: Settings },
// ];

export default function ClientNavigationSidebar() {
    const { toggleSidebar } = useSidebar();
    const isMobile = useIsMobile();
    const resetUser = userAuthStore((state) => state.reset);

    return (
        <Sidebar>
            <SidebarHeader className="p-6 bg-[#2E2E2E]">
                <div className="flex justify-between items-center">
                    <span className="font-semibold text-xl ">Freelansync</span>{" "}
                    <CircleX className="md:hidden" onClick={toggleSidebar} />
                </div>
            </SidebarHeader>

            <SidebarContent className="mt-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-white">Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {clientSidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="p-6">
                                        <Link
                                            to={item.url}
                                            onClick={() => {
                                                if (isMobile) toggleSidebar();
                                            }}
                                        >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className=" py-4 px-6 bg-[#2E2E2E]">
                <button onClick={resetUser} className="flex items-center gap-2 font-semibold cursor-pointer text-sm">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </SidebarFooter>
        </Sidebar>
    );
}
