import { Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

interface Props {
   username: string;
   fullname: string;
   createdAt: string;
}

const UserInformation: React.FC<Props> = ({
   username,
   fullname,
   createdAt,
}) => {
   dayjs.extend(relativeTime);

   return (
      <Stack direction={"row"} spacing={1}>
         <Typography>{fullname}</Typography>
         <Typography>@{username}</Typography>
         <Typography>|</Typography>
         {/* <Typography>{dayjs(createdAt).fromNow()}</Typography> */}
      </Stack>
   );
};

export default UserInformation;
