import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Login from "./pages/login/Login";

import Medications from "./pages/medications/Medications.tsx";
import MedicationDetails from "./pages/medicationDetails/MedicationDetails.tsx";
import AddEditTherapie from "./pages/addEditTherapie/AddEditTherapie.tsx";
import TherapieDetails from "./pages/therapieDetails/TherapieDetails.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import AddEditContact from "./pages/addEditContact/AddEditContact.tsx";
import DoctorDetails from "./pages/doctorDetails/DoctorDetails.tsx";
import Profil from "./pages/profil/Profil.tsx";
import Program from "./pages/program/Program.tsx";
import { Therapies } from "./pages/therapies/Therapies.tsx";
import Drugspecification from "./pages/drugspecification/Drugspecification.tsx";

const router = createBrowserRouter([
  {
    path: "",
    loader: () => redirect("/login"),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "medications",
        children: [
          {
            path: "",
            element: <Medications />,
          },
          {
            path: "details",
            element: <MedicationDetails />,
          },
        ],
      },
      {
        path: "therapies",
        children: [
          {
            path: "",
            element: <Therapies />,
          },
          {
            path: "edit",
            children: [
              {
                path: "",
                element: <AddEditTherapie />,
              },
              {
                path: "program",
                element: <Program />,
              },
            ],
          },
          {
            path: "add",
            children: [
              {
                path: "",
                element: <AddEditTherapie />,
              },
              {
                path: "program",
                element: <Program />,
              },
            ],
          },
          {
            path: "details",
            element: <TherapieDetails />,
          },
        ],
      },
      {
        path: "contacts",
        children: [
          {
            path: "",
            element: <Contacts />,
          },
          {
            path: "edit",
            element: <AddEditContact />,
          },
          {
            path: "add",
            element: <AddEditContact />,
          },
          {
            path: "details",
            element: <DoctorDetails />,
          },
        ],
      },
      {
        path: "profil",
        element: <Profil />,
      },
      {
        path: "/drugspecification",
        element: <Drugspecification />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
