import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, CircleX } from "lucide-react";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../assets/google-icon.png";
import { userAuthStore } from "@/store/userAuthStore";
import { useNavigate, Link } from "react-router-dom";
import LoginFrame from "../assets/login-frame-2.png";
import { toastMaker } from "@/components/toastMaker";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = userAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        if (!email || !password) {
            toastMaker({
                className:
                    "bg-red-600 text-white flex gap-2 items-center sm:p-4 p-2 rounded-md justify-center",
                icon: CircleX,
                text: "Fields are empty",
            });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toastMaker({
                className:
                    "bg-red-600 text-white flex gap-2 items-center sm:p-4 p-2 rounded-md justify-center",
                icon: CircleX,
                text: "Invalid email",
            });
            return;
        }

        if (password.length < 5) {
            toastMaker({
                className:
                    "bg-red-600 text-white flex gap-2 items-center sm:p-4 p-2 rounded-md justify-center",
                icon: CircleX,
                text: "Password is too short",
            });
            return;
        }
        // here user data will be sent to backend, and the response data will be stored in auth store, but for now setting dummy data.
        const role = "client";
        const username = "Hashir";
        setUser({
            id: "user123",
            email: email,
            username: username,
            role: role,
        });
        if (role === "client") navigate("/client-home");
        else navigate("/freelancer-home");
    }

    function handleGoogleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
    }

    return (
        <div className="flex bg-black text-white sm:max-h-screen h-screen overflow-hidden p-6">
            <div className="flex-1 flex flex-col justify-center items-center">
                <div className="mt-6 sm:mt-4">
                    <h1 className="text-xl text-center sm:text-3xl font-medium">Login</h1>
                    <p className="text-white/40 text-sm sm:text-lg mt-1">
                        Don't have an account?{" "}
                        <Link to="/signup">
                            <span className="underline text-white cursor-pointer">
                                Signup
                            </span>
                        </Link>
                    </p>
                </div>

                <form className="mt-4 sm:mt-10 flex flex-col gap-3 xl:gap-4 sm:w-[400px]">
                    <div>
                        <label htmlFor="email" className="text-sm sm:text-lg">
                            Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            className="mt-1 sm:p-6 border-0 bg-[#212121] text-sm sm:text-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="text-sm sm:text-lg">
                            Password
                        </label>
                        <Input
                            type={`${showPassword ? "text" : "password"}`}
                            id="password"
                            placeholder="Enter password"
                            className="mt-1 sm:p-6 border-0 bg-[#212121] text-sm sm:text-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="text-white/60 absolute right-2.5 bottom-1.5 sm:bottom-3 cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </span>
                    </div>

                    <Button
                        onClick={handleLogin}
                        variant="custom"
                        className="sm:p-6 mt-4 cursor-pointer"
                    >
                        Login
                    </Button>
                    <div className="flex items-center gap-1">
                        <hr className="w-full border-t-white/40" />
                        <span className="text-white/40">or</span>{" "}
                        <hr className="w-full border-t-white/40" />
                    </div>

                    <Button
                        onClick={handleGoogleLogin}
                        className="sm:p-6 bg-[#212121] cursor-pointer"
                    >
                        <img src={GoogleIcon} alt="google" /> Continue with Google
                    </Button>
                </form>
            </div>
            <div className="flex-1 hidden lg:flex lg:items-center">
                <img
                    src={LoginFrame}
                    alt="login frame"
                    className="max-h-screen mx-auto rounded-4xl"
                />
            </div>
        </div>
    );
};

export default Login;
