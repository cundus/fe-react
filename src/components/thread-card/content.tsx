import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { IThreadImage } from "../../types/thread";

interface Props {
   content?: string;
   images?: IThreadImage[];
   handleClickImage?: () => void;
}

const Content: React.FC<Props> = ({ content, images, handleClickImage }) => {
   // console.log(content, images);

   return (
      <Stack direction={"column"}>
         <Typography>{content}</Typography>

         {/* <Grid2 container spacing={3}>
            {images?.map((image) => (
               <Grid2 size={{ xs: 6, md: 6 }}>
                  <img
                     key={image.id}
                     src={image.url}
                     style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                     }}
                  />
               </Grid2>
            ))}
         </Grid2> */}
         <Box
            sx={{ display: "flex", flexWrap: "wrap" }}
            onClick={handleClickImage}
         >
            {images?.map((image) => (
               <Box sx={{ flex: "0 0 300px", p: 1 }}>
                  <img
                     key={image.id}
                     src={image.url}
                     style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        border: "1px solid black",
                     }}
                  />
               </Box>
            ))}
         </Box>
      </Stack>
   );
};

export default Content;
