import Body from "./Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Chats from "./chats/Chats";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chats/:id",
          element: <Chats />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
