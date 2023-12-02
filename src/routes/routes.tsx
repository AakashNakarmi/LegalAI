import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Hero from "../Layout/HeroComponent/Hero";
import DocGenerator from "../DocsGenerator/DocGenerator";
import NotFound from "../Layout/NotFound";
import AboutTeam from "../AboutTeam/AboutTeam";
import ExpertPage from "../ExpertHelp/ExpertPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Hero /> },
      { path: "DocGenerator", element: <DocGenerator /> },
      { path: "AboutUs", element: <AboutTeam /> },
      { path: "ExpertHelp", element: <ExpertPage /> },
    ],
  },
]);

export default router;
