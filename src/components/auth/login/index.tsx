import { useAppDispatch, useAppSelector } from "@/stores";
import { loginAsync } from "@/stores/auth/async";
import { loginSchema, LoginSchema } from "@/validations/loginSchema";
import { RegisterSchema } from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack, TextField } from "@mui/material";
import {
   Controller,
   SubmitErrorHandler,
   SubmitHandler,
   useForm,
} from "react-hook-form";
import { toast } from "react-toastify";

const LoginForm = () => {
   const dispatch = useAppDispatch();
   const { loading } = useAppSelector((state) => state.auth);
   const { control, handleSubmit, reset } = useForm<LoginSchema>({
      resolver: zodResolver(loginSchema),
      mode: "all",
      reValidateMode: "onChange",
   });

   const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
      await dispatch(loginAsync(data));

      reset({
         username: "",
         password: "",
      });
   };

   const onError: SubmitErrorHandler<RegisterSchema> = (data) => {
      console.log("DARI DALAM EROR", data);
      toast.error("Form tidak valid");
   };

   return (
      <Box sx={{ p: 3, width: { xs: "100%", sm: "30rem" } }}>
         <form
            style={{
               width: "100%",
            }}
            onSubmit={handleSubmit(onSubmit, onError)}
         >
            <Stack spacing={2} width={"100%"}>
               <Controller
                  control={control}
                  name="username"
                  render={({ field, fieldState }) => (
                     <TextField
                        label="Email / Username"
                        fullWidth
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                     />
                  )}
               />

               <Controller
                  control={control}
                  name="password"
                  render={({ field, fieldState }) => (
                     <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                     />
                  )}
               />

               <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  color="success"
                  disabled={loading}
                  sx={{
                     borderRadius: "20px",
                     bgcolor: "#04a51e",
                     color: "white",
                     fontWeight: "bold",
                  }}
               >
                  {loading ? "Loading..." : "Create"}
               </Button>
            </Stack>
         </form>
      </Box>
   );
};

export default LoginForm;
