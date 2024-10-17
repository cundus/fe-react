import { api } from "@/lib/api";
import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LikeButton = ({ threadId }: { threadId: number }) => {
   // fetching ada berapa balasan
   // console.log(threadId);
   const [like, setLike] = useState(false);
   const [likeCount, setLikeCount] = useState(0);
   const checkLike = async () => {
      const res = await api.get(`/like/${threadId}`);

      console.log(res.data);
      setLike(res.data.isLiked);
      setLikeCount(res.data.count);
   };

   const handleLike = async () => {
      const res = await api.post(`/like/`, {
         threadId,
      });

      console.log(res.data);
      await checkLike();
   };

   useEffect(() => {
      checkLike();
   }, []);

   return (
      <Stack direction={"row"} sx={{ cursor: "pointer" }}>
         <Icon
            icon={like ? "line-md:heart-filled" : "line-md:heart"}
            style={{ fontSize: "1.5rem", color: "red" }}
            onClick={handleLike}
         />
         <Typography>{likeCount}</Typography>
      </Stack>
   );
};

export default LikeButton;
