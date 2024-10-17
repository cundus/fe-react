import { Box, Dialog, Stack } from "@mui/material";
import { SwiperComponent } from "./swiper";
import { IThreadImage } from "../../types/thread";

const ModalDetail = ({
   open,
   handleClose,
   images,
}: {
   open: boolean;
   handleClose: () => void;
   images: IThreadImage[];
}) => {
   return (
      <Dialog fullScreen open={open} onClose={handleClose}>
         <Box sx={{ width: "100%" }} onClick={handleClose}>
            close
         </Box>
         <Stack direction={{ xs: "column", md: "row" }}>
            <SwiperComponent images={images} />
            <Box
               sx={{
                  backgroundColor: "primary.main",
                  width: {
                     xs: "100%",
                     md: "50%",
                  },
               }}
            >
               Reply
            </Box>
         </Stack>
      </Dialog>
   );
};

export default ModalDetail;
