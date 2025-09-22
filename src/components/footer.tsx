import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-white text-2xl font-bold">Freelansync</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Connecting clients and freelancers for short tasks and
                        long-term projects.
                    </p>
                </div>

                {/* Internal links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-white">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4 mt-4 items-center">
                        <Link
                            to="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="GitHub"
                        >
                            <SiGithub size={20} />
                        </Link>

                        <Link
                            to="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="LinkedIn"
                        >
                            <SiLinkedin size={20} />
                        </Link>

                        <Link
                            to="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="Facebook"
                        >
                            <SiFacebook size={20} />
                        </Link>

                        <Link
                            to="mailto:info@example.com"
                            className="text-gray-300 hover:text-white transition"
                            aria-label="Email"
                        >
                            <MdEmail size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-6">
                <p className="text-center text-sm text-gray-500 py-4">
                    © {new Date().getFullYear()} FYP App. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
