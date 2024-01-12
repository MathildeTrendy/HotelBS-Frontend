import React from 'react';
import ReactDOM from 'react-dom/client';
import Frontpage from './pages/Frontpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Hotels from "./pages/Hotels";
import ViewHotel from "./pages/ViewHotel";
import CreateHotel from "./pages/CreateHotel";
import UpdateHotel from "./pages/UpdateHotel";
import CreateRoom from "./pages/CreateRoom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Frontpage/>,
    },
    {
        path: "/hotels",
        element: <Hotels/>
    },
    {
        path: "/hotels/:id",
        element: <ViewHotel/>
    },
    {
        path: "/hotels/create",
        element: <CreateHotel/>
    },
    {
        path: "/hotels/update/:id",
        element: <UpdateHotel/>
    },
    {
        path: "/hotels/:id/rooms/create",
        element: <CreateRoom/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
