import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { Box, Stack } from "@mui/material";
import { useAppSelector } from "@/stores";

const RootLayout = () => {
   const authState = useAppSelector((state) => state.auth);

   if (!authState.token) {
      return <Navigate to="/login" replace />;
   }

   return (
      <Stack direction="row" height="100vh" width="100vw">
         <Box
            sx={{
               maxWidth: "300px",
               flex: 1,
               display: { xs: "none", md: "block" },
            }}
         >
            <Sidebar />
         </Box>
         <Box sx={{ flex: 2, overflow: "auto" }}>
            <Outlet />
         </Box>
         <Box
            sx={{
               maxWidth: "300px",
               flex: 1,
               display: { xs: "none", md: "block" },
               bgcolor: "darkblue",
            }}
         >
            test
         </Box>
      </Stack>
   );
};

export default RootLayout;
