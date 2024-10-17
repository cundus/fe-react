import { Avatar, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../stores";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
   CreateThreadDTO,
   createThreadSchema,
} from "@/validations/threadSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createThread, getFeed } from "@/stores/thread/async";

const InputThread = () => {
   const dispatch = useAppDispatch();
   const authState = useAppSelector((state) => state.auth);
   const { loading } = useAppSelector((state) => state.thread);
   const { control, handleSubmit, reset, setValue, watch } =
      useForm<CreateThreadDTO>({
         resolver: zodResolver(createThreadSchema),
         defaultValues: {
            userId: authState.user!.id,
            content: "",
         },
      });

   const onSubmit: SubmitHandler<CreateThreadDTO> = async (data) => {
      await dispatch(createThread(data));
      await dispatch(getFeed(10));
      reset();
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}
         style={{ width: "100%" }}
      >
         <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar
               sx={{ width: 40, height: 40 }}
               src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
            <Controller
               control={control}
               name="content"
               render={({ field }) => (
                  <TextField
                     fullWidth
                     type="text"
                     placeholder="Write a message..."
                     {...field}
                  />
               )}
            />

            <Controller
               control={control}
               name="images"
               render={({ field }) => (
                  <>
                     <label htmlFor="file-upload">file</label>
                     <input
                        id="file-upload"
                        type="file"
                        hidden
                        multiple
                        onChange={(e) => {
                           console.log(e.target.files);
                           field.onChange(e.target.files);
                        }}
                     />
                  </>
               )}
            />

            <Button type="submit" disabled={loading}>
               {loading ? "Posting..." : "Post"}
            </Button>
         </Stack>
         {watch("images") &&
            Array.from(watch("images")).map((image, index) => (
               <img
                  key={index}
                  src={URL.createObjectURL(image as Blob)}
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "contain",
                  }}
               />
            ))}
      </form>
   );
};

export default InputThread;
