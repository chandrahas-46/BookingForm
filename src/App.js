import React from 'react';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import PatientForm from './Components/Form/BookingForm';

function App() {
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      children:[
        { index:true, element: <PatientForm />},
        { path:"/:city", element: <PatientForm />}
      ]
    }
  ]);

  return (
    <>
      {/* routes */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
