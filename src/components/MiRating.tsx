import { Stack, Rating, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const MiRating = () => {
  const [ratingValue, setRatingValue] = useState<number | null>(3);
  console.log(ratingValue);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRatingValue(newValue);
  };
  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h4" color="secondary">
          Rating Component
        </Typography>
        <Rating
          value={ratingValue}
          onChange={handleChange}
          precision={0.5}
          size="large"
          icon={<EmojiEmotionsIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
          //   readOnly
        />
      </Stack>
      <hr />
    </>
  );
};

export default MiRating;
