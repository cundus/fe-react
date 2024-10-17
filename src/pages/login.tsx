import LoginForm from "@/components/auth/login";
import { Box } from "@mui/material";

const Login = () => {
   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#1d1d1d",
            height: "100vh",
         }}
      >
         <LoginForm />
      </Box>
   );
};

export default Login;
