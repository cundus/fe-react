import RegisterForm from "@/components/auth/register";
import { Box } from "@mui/material";

const Register = () => {
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
         <RegisterForm />
      </Box>
   );
};

export default Register;
