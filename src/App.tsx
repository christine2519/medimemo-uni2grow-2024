import {
  createBrowserRouter,
  redirect,
  RouterProvider
} from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Login from "./pages/login/Login";
import { Medications } from "./pages/medications/Medications.tsx";
import { Therapies } from "./pages/therapies/Therapies.tsx";
import AddEditContact from "./pages/contacts/actions/AddEditContact.tsx";
import { ViewContact } from "./pages/viewContacts/ViewContact.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    loader: () => redirect("/login")
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/medications",
        element: <Medications />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/addEditContact",
        element: <AddEditContact />
      },
      {
        path: "/addEditContact/:id",
        element: <AddEditContact />
      },
      {
        path: "/viewContact/:id",
        element: <ViewContact />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/Therapies",
        element: <Therapies />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
