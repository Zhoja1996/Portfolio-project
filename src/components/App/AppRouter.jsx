import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import ProjectsPage  from "../../pages/ProjectsPage/ProjectsPage";
import ProjectPage  from "../../pages/ProjectPage/ProjectPage";
import BaseLayout from "./layouts/BaseLayout";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

export const AppRouter = createBrowserRouter([
    {
        element: <BaseLayout/>,
        errorElement: <div>Error</div>,
        children: [
            {path: "/", element: <MainPage/>},
            {path: "/Projects", element: <ProjectsPage/>},
            {path: "/Project/:id", element: <ProjectPage/>},
            {path: "/Contacts", element: <ContactsPage/>}
        ]
    }
]);