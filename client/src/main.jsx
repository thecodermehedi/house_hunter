import ReactDOM from "react-dom/client";
import {HelmetProvider} from "react-helmet-async";
import {RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import "./index.css";
import router from "./routes";
import {AuthProvider} from "./context/AuthContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>
);
