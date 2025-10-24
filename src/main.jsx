import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";
import { router } from "./Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="arvo-regular">
      <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}/>
        <Toaster />
      </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
