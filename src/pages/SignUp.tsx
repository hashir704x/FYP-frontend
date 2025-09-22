import SignupFrame from "../assets/signup-frame.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../assets/google-icon.png";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex bg-black text-white sm:max-h-screen h-[calc(100vh-30px)] overflow-hidden p-6">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="mt-6 sm:mt-4">
                    <h1 className="text-xl text-center sm:text-3xl font-medium">
                        Create an account
                    </h1>
                    <p className="text-white/40 text-sm sm:text-lg mt-1">
                        Already have an account?{" "}
                        <span className="underline text-white cursor-pointer">
                            Login
                        </span>
                    </p>
                </div>

                <form className="mt-4 sm:mt-10 flex flex-col gap-2 xl:gap-4">
                    <div>
                        <label
                            htmlFor="username"
                            className="text-sm sm:text-lg"
                        >
                            Username
                        </label>
                        <Input
                            id="username"
                            placeholder="Enter username"
                            className="mt-1 sm:p-6 border-0 bg-[#212121] text-sm sm:text-lg"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm sm:text-lg">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="mt-1 sm:p-6 border-0 bg-[#212121] text-sm sm:text-lg"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="text-sm sm:text-lg"
                        >
                            Password
                        </label>
                        <Input
                            type={`${showPassword ? "text" : "password"}`}
                            id="password"
                            placeholder="Enter password"
                            className="mt-1 sm:p-6 border-0 bg-[#212121] text-sm sm:text-lg"
                        />
                        <span
                            className="text-white/60 absolute right-2.5 bottom-1.5 sm:bottom-3 cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </span>
                    </div>

                    <div>
                        <p className="mb-1 text-sm sm:text-lg">
                            Select your role
                        </p>
                        <Select>
                            <SelectTrigger className="w-full border-none bg-[#212121] sm:p-6">
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#212121] text-white border-none">
                                <SelectItem value="client">Client</SelectItem>
                                <SelectItem value="freelancer">
                                    Freelancer
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant="custom" className="sm:p-6 mt-4">
                        Create Account
                    </Button>
                    <div className="flex items-center gap-1">
                        <hr className="w-full border-t-white/40" />
                        <span className="text-white/40">or</span>{" "}
                        <hr className="w-full border-t-white/40" />
                    </div>

                    <Button className="sm:p-6 bg-[#212121]">
                        <img src={GoogleIcon} alt="google" /> Continue with
                        Google
                    </Button>
                </form>
            </div>
            <div className="flex-1 hidden lg:block">
                <img
                    src={SignupFrame}
                    alt="signup frame"
                    className="max-h-screen mx-auto"
                />
            </div>
        </div>
    );
};

export default SignUp;
