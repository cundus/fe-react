import { Box, Button } from "@mui/material";
import NavContainer from "./nav-container";
import { useAppDispatch } from "@/stores";
import { LOGOUT } from "@/stores/auth/slice";

function Sidebar() {
   const dispatch = useAppDispatch();
   return (
      <Box sx={{ width: "100%", bgcolor: "darkgrey", height: "100vh" }}>
         <NavContainer />
         <Button onClick={() => dispatch(LOGOUT())}>Logout</Button>
      </Box>
   );
}

export default Sidebar;
