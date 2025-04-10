import { Box, Typography, Avatar } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const ReviewScore = () => {
  const rating = 4.8;
  const totalReviews = 56;

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={3}
      sx={{
        marginLeft: "80px",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <Avatar
        sx={{
          width: 70,
          height: 70,
          color: "#000",
          fontSize: 24,
          backgroundColor: "#E8E4DE",
          fontWeight: "bold",
          border: "2px solid #000",
          fontFamily: "Arial, sans-serif",
        }}
      >
        G
      </Avatar>
      <Typography fontWeight="bold" fontSize="3.2rem">
        {rating}
      </Typography>

      <Box>
        <Typography
          component="span"
          fontWeight="normal"
          fontSize="1.5rem"
          sx={{ marginLeft: "10px" }}
        >
          Wholly
        </Typography>

        <Typography fontSize="1.2rem" color="text.secondary" sx={{ mb: 1 }}>
          Personalized supplements
        </Typography>

        {/* Estrellas */}
        <Box display="flex" alignItems="center" gap={0.5} sx={{ mb: 1 }}>
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} fontSize="medium" sx={{ color: "#A5AB94" }} />
          ))}
          <StarBorder fontSize="medium" sx={{ color: "#9e9e9e" }} />
        </Box>

        <Typography fontSize="1rem" color="text.secondary">
          {totalReviews} reviews
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewScore;
