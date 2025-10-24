import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";
import { router } from "./Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="arvo-regular">
      <AuthProvider>
        <RouterProvider router={router}/>
        <Toaster />
      </AuthProvider>
    </div>
    
  </StrictMode>
);
