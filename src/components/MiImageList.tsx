import { Stack, Typography, ImageList, ImageListItem } from "@mui/material";
const MiImageList = () => {
  const data = [
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
    {
      img: "https://source.unsplash.com/random",
    },
  ];
  return (
    <>
      <Typography variant="h4" my={3}>
        Card Component
      </Typography>
      <Stack spacing={4}>
        <ImageList sx={{width:500, height:450}} rowHeight={164} cols={3}>
            {
                data.map((img)=> (<ImageListItem> <img src={`${img.img}?w=164&h=164`} alt="" loading="lazy"/></ImageListItem>))
            }
        </ImageList>
        <ImageList variant="woven" sx={{width:500, height:450}} rowHeight={164} cols={3}>
            {
                data.map((img)=> (<ImageListItem> <img src={`${img.img}?w=164&h=164`} alt="" loading="lazy"/></ImageListItem>))
            }
        </ImageList>
      </Stack>
    </>
  );
};

export default MiImageList;
