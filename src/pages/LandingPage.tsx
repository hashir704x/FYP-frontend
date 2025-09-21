import { Link } from "react-router-dom";
import { userAuthStore } from "@/store/userAuthStore";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
    const user = userAuthStore((state) => state.user);

    return (
        <div>
            <header className="py-4 px-2 sm:px-6 border flex items-center justify-between">
                <h1 className="font-semibold text-lg sm:text-2xl ">
                    Freelansync
                </h1>

                {user ? (
                    <div>
                        <Link
                            to={
                                user.role === "client"
                                    ? "/client-home"
                                    : "/freelancer-home"
                            }
                            className="bg-[var(--my-blue)] text-white px-3 py-2 rounded-md font-medium"
                        >
                            Home
                        </Link>
                    </div>
                ) : (
                    <div className="flex gap-2 sm:gap-4">
                        <Link to="/signup">
                            <Button variant="custom">Signup</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="custom">Login</Button>
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
};

export default LandingPage;
