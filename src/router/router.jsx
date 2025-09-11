
import App from "../App";
import Anniversary from "../pages/AnniversaryDecoration";
import About from "../pages/About";
import Home from "../pages/Home";
import BirthdayDecoration from "../pages/BirthdayDecoration";
import BabyShower from "../pages/BabyShower";
import KidsBirthday from "../pages/KidsBirthday";
import BanquetHalls from "../pages/BanquetHalls";
import JustMarried from "../pages/JustMarried";
import RoomDecoration from "../pages/RoomDecoration";
import Ourgallery from "../pages/Ourgallery";
import Contact from "../pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import Independence from "../pages/Independence";
import Blog from "../pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
       {
        path: "/independenceday",
        element: <Independence />,
      },

      {
        path: "/birthday-decoration",
        element: <BirthdayDecoration />,
      },
      {
        path: "/anniversary-decoration",
        element: <Anniversary />,
      },
      {
        path: "/baby-shower",
        element: <BabyShower />,
      },
      {
        path: "/kids-birthday",
        element: <KidsBirthday />,
      },
      {
        path: "/banquet-hall",
        element: <BanquetHalls />,
      },
      {
        path: "/just-married",
        element: <JustMarried />,
      },
      {
        path: "/room-decoration",
        element: <RoomDecoration />,
      },
      {
        path: "/gallery",
        element: <Ourgallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      // {
      //   path: "/admin-login",
      //   element: <Login />,
      // },
      // {
      //   path: "/admin-signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/dashboard-admin",
      //   element: <Dashboard />,
      //   children: [
      //     {
      //       path: "add-blogs",
      //       element: <AddBlogs />,
      //     },
      //     {
      //       path: "edit-blogs/:id",
      //       element: <EeditBlog />,
      //     },
      //     {
      //       path: "all-blogs",
      //       element: <AllBlogs />,
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
