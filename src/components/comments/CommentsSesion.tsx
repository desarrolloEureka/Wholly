import {
  Box,
  Typography,
  IconButton,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  PersonOutline,
} from "@mui/icons-material";
import { useState } from "react";

export const CommentsSesion = () => {
  const [comments] = useState([
    {
      id: 1,
      name: "Angela Calle",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 4,
      date: "01 Oct 2024",
    },
    {
      id: 2,
      name: "Andres García",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 4.5,
      date: "15 Oct 2024",
    },
    {
      id: 3,
      name: "Shantal Smith1",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 5,
      date: "22 Jul 2024",
    },
    {
      id: 4,
      name: "Shantal Smith2",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 5,
      date: "22 Jul 2024",
    },
    {
      id: 5,
      name: "Shantal Smith3",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 5,
      date: "22 Jul 2024",
    },
    {
      id: 6,
      name: "Shantal Smith4",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 5,
      date: "22 Jul 2024",
    },
    {
      id: 7,
      name: "Shantal Smith5",
      comment:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
      rating: 5,
      date: "22 Jul 2024",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount < comments.length ? prev + 1 : prev
    );
  };

  const visibleComments = comments.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1100px",
          position: "relative",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: -60,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#8B8F7C",
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflow: "hidden",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {visibleComments.map((comment) => (
            <Paper
              key={comment.id}
              elevation={3}
              sx={{
                borderRadius: 4,
                padding: 3,
                backgroundColor: "#eef0ee",
                minWidth: 350,
                maxWidth: 60,
                flexShrink: 0,
                textAlign: "left",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "self-start",
                  gap: 1,
                  mb: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "#A5AB94", width: 66, height: 66 }}>
                  <PersonOutline sx={{ fontSize: 38 }} />
                </Avatar>
                <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                  {comment.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography
                    sx={{ fontSize: 19, fontWeight: 500, color: "#A5AB94" }}
                  >
                    {comment.rating.toFixed(1)}
                  </Typography>
                  <Rating
                    value={comment.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{ color: "#A5AB94" }}
                  />
                </Box>
              </Box>

              <Typography sx={{ fontSize: 18, mb: 2 }}>
                {comment.comment}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#777", fontSize: 12 }}
              >
                {comment.date}
              </Typography>
            </Paper>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: -60,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#8B8F7C",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Indicadores de navegación */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
        {Array.from({
          length: Math.ceil(comments.length / visibleCount),
        }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor:
                currentIndex / visibleCount === index ? "#A5AB94" : "#ccc",
              border:
                currentIndex / visibleCount === index
                  ? "2px solid #A5AB94"
                  : "none",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
