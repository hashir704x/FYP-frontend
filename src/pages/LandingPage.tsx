import { Link } from "react-router-dom";
import { userAuthStore } from "@/store/userAuthStore";
import { Button } from "@/components/ui/button";
import BannerImage from "../assets/landing-page-image.jpg";
import { Search } from "lucide-react";
import SmallCards from "@/components/landingPageComponents/smallCards";
import Slider from "@/components/landingPageComponents/slider";
import Footer from "@/components/footer";

const LandingPage = () => {
    const user = userAuthStore((state) => state.user);

    return (
        <div>
            <header className="py-4 px-2 sm:px-6 flex items-center justify-between">
                <h1 className="font-semibold text-lg sm:text-2xl ">
                    Freelansync
                </h1>

                {user ? (
                    <div>
                        <Link
                            to={
                                user.role === "client"
                                    ? "/client?active=Dashboard"
                                    : "/freelancer?active=Dashboard"
                            }
                        >
                            <Button variant="custom">Home</Button>
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

            <section className="sm:px-28 flex flex-col gap-10">
                {/* Image section */}
                <div className="h-[450px] sm:h-[550px] sm:mt-8 relative rounded-3xl sm:overflow-hidden">
                    <img
                        src={BannerImage}
                        alt="Banner-image"
                        className="w-full h-full object-cover "
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
                    <div className="absolute top-36 sm:top-14 sm:left-12 sm:w-[650px] px-5">
                        <h1 className="text-3xl sm:text-7xl sm:leading-20 font-semibold text-white text-wrap">
                            Connecting clients in need to freelancers who
                            deliver
                        </h1>
                        <div className="w-fit mt-2">
                            {!user ? (
                                <div className="flex gap-3 sm:gap-6 mt-4 sm:mt-8 flex-col sm:flex-row">
                                    <Link to="/signup?role=client">
                                        <Button
                                            variant="custom"
                                            className="sm:p-6 font-medium sm:text-lg w-[250px]"
                                        >
                                            Signup as Client
                                        </Button>
                                    </Link>
                                    <Link to="/signup?role=freelancer">
                                        <Button
                                            variant="custom"
                                            className="sm:p-6 font-medium sm:text-lg w-[250px]"
                                        >
                                            Signup as Freelancer
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <Link
                                
                                    to={
                                        user.role === "client"
                                            ? "/client?active=Dashboard"
                                            : "/freelancer?active=Dashboard"
                                    }
                                >
                                    <Button variant="custom" className="w-[150px] h-[40px]">
                                        Start working
                                    </Button>
                                </Link>
                            )}
                            <Link to="/search-people">
                                <button className="mt-3 bg-white text-[var(--my-blue)] font-semibold flex justify-center items-center gap-3 h-[40px] rounded-sm cursor-pointer  w-full text-sm">
                                    Search People <Search size={20}/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="px-4 flex flex-col gap-16">
                    {/* Small Cards Section */}
                    <SmallCards />

                    {/* Slider */}
                    <Slider />

                    <div className="bg-gradient-to-tl from-[#0a1f63] via-[#0532a9] to-[#3b82f6] h-[220px] rounded-lg flex flex-col items-center justify-center gap-6 px-4">
                        <h1 className="text-xl sm:text-4xl font-semibold text-white">
                            Find your next hire for a short task or long-term
                            growth
                        </h1>
                        <Link to="#">
                            <button className="text-black bg-white p-3 text-xs sm:text-lg rounded-lg cursor-pointer">
                                Explore Freelancers
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LandingPage;
