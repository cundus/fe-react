import React from "react";
import { IThread } from "../../types/thread";
import { Avatar, Box, Stack } from "@mui/material";
import UserInformation from "./user-information";
import Content from "./content";
import ReplyButton from "./reply-button";
import LikeButton from "@/components/thread-card/like-button";
import ModalDetail from "@components/modal-detail";

interface Props {
   thread: IThread;
}

const ThreadCard: React.FC<Props> = ({ thread }) => {
   const [open, setOpen] = React.useState(false);

   return (
      <Box sx={{ p: 3, borderBottom: "1px solid black" }}>
         <Stack direction={"row"} alignItems={"flex-start"} spacing={2}>
            <Avatar
               alt="Remy Sharp"
               sx={{ width: 60, height: 60, border: "1px solid black" }}
               src={thread?.user?.profile?.avatar}
            />
            <Stack direction={"column"} spacing={1}>
               <UserInformation
                  createdAt={thread?.createdAt}
                  fullname={thread?.user.profile.fullname}
                  username={thread?.user.username}
               />
               <Content
                  content={thread?.content}
                  images={thread?.images}
                  handleClickImage={() => setOpen(true)}
               />
               <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <LikeButton threadId={thread?.id} />
                  <ReplyButton threadId={thread?.id} />
               </Stack>
            </Stack>
         </Stack>
         {thread?.images && (
            <ModalDetail
               handleClose={() => setOpen(false)}
               images={thread.images}
               open={open}
            />
         )}
      </Box>
   );
};

export default ThreadCard;
