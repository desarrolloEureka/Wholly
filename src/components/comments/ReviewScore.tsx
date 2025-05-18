import { Box, Typography, Avatar } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const ReviewScore = () => {
  const rating = 4.8;
  const totalReviews = 56;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ xs: "column", md: "row" }}
      gap={3}
      sx={{
        marginLeft: { xs: "0px", md: "80px" },
        padding: { xs: "10px", md: "20px" },
        borderRadius: "12px",
      }}
    >
      <Avatar
        sx={{
          width: { xs: 50, md: 70 },
          height: { xs: 50, md: 70 },
          color: "#000",
          fontSize: { xs: 20, md: 24 },
          backgroundColor: "#E8E4DE",
          fontWeight: "bold",
          border: "2px solid #000",
          fontFamily: "Arial, sans-serif",
        }}
      >
        G
      </Avatar>

      <Typography
        fontWeight="bold"
        fontSize={{ xs: "2rem", md: "3.2rem" }}
        sx={{ color: "#3C3C3C" }}
      >
        {rating}
      </Typography>

      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h6"
          component="span"
          fontSize={{ xs: "1.2rem", md: "1.6rem" }}
          sx={{ color: "#3C3C3C" }}
        >
          Wholly
        </Typography>

        <Typography
          variant="h6"
          fontSize={{ xs: "1.2rem", md: "1.6rem" }}
          color="text.secondary"
          sx={{ mb: 0 }}
        >
          Personalized supplements
        </Typography>

        {/* Estrellas */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
          gap={0.5}
          sx={{ mb: 1 }}
        >
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} fontSize="small" sx={{ color: "#A5AB94" }} />
          ))}
          <StarBorder fontSize="small" sx={{ color: "#9e9e9e" }} />
        </Box>

        <Typography
          fontSize={{ xs: "0.85rem", md: "1rem" }}
          color="text.secondary"
        >
          {totalReviews} reviews
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewScore;
