import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import FreelancerLayout from "./layouts/FreelancerLayout";
import ClientLayout from "./layouts/ClientLayout";
import SearchPeople from "./pages/SearchPeople";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "signup",
        element: <SignUp />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "search-people",
        element: <SearchPeople />
    },
    {
        path: "client-home",
        element: <ClientLayout />,
        children: [
            {
                index: true,
                element: <div>Client Page</div>,
            },
        ],
    },
    {
        path: "freelancer-home",
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
