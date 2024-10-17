import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ReplyButton = ({ threadId }: { threadId: number }) => {
   // fetching ada berapa balasan
   // console.log(threadId);
   const navigate = useNavigate();
   const handleClick = () => {
      navigate(`/thread/${threadId}`);
   };

   return (
      <Stack direction={"row"} sx={{ cursor: "pointer" }} onClick={handleClick}>
         <Icon icon="line-md:chat" style={{ fontSize: "1.5rem" }} />
         <Typography>0</Typography>
      </Stack>
   );
};

export default ReplyButton;
