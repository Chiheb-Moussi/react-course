import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/About";

const root = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/contact/:id",
    element: <ContactPage />,
  },
]);

export default root;
