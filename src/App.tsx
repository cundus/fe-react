import Router from "./router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./stores";
import { checkAuth } from "./stores/auth/async";
import React from "react";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

const App = () => {
   const dispatch = useAppDispatch();

   // React.useEffect(() => {
   //    dispatch(checkAuth());
   // }, []);

   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline />
         <Router />
         <ToastContainer />
      </ThemeProvider>
   );
};

export default App;
