import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import FreelancerLayout from "./Layouts/FreelancerLayout";
import ClientLayout from "./Layouts/ClientLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/client",
        element: <ClientLayout />,
        children: [
            {
                index: true,
                element: <div>Client Page</div>,
            },
        ],
    },
    {
        path: "/freelancer",
        element: <FreelancerLayout />,
        children: [
            {
                index: true,
                element: <div>Freelancer Page</div>,
            },
        ],
    },
    {
        path: "*",
        element: <div>Page not found</div>,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
