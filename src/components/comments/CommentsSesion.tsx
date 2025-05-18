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
import { useEffect, useState } from "react";

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
  const [visibleCount, setVisibleCount] = useState(3); // inicial por defecto

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCount(3); // escritorio
      } else if (width >= 768) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(1); // móvil
      }
    };

    updateVisibleCount(); // al cargar
    window.addEventListener("resize", updateVisibleCount); // al cambiar tamaño
    return () => window.removeEventListener("resize", updateVisibleCount); // cleanup
  }, []);

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
        width: { xs: "65%", md: "88%", lg: "100%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        margin: "0 auto",
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
        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflow: "hidden",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: -40, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#8B8F7C",
            }}
          >
            <ArrowBackIos />
          </IconButton>
          {visibleComments.map((comment) => (
            <Paper
              key={comment.id}
              elevation={3}
              sx={{
                borderRadius: 4,
                padding: 3,
                backgroundColor: "#eef0ee",
                minWidth: { xs: 225, md: 280, lg: 350 },
                maxWidth: 60,
                height: { xs: 390, md: 380, lg: 400 },
                flexShrink: 0,
                overflow: "hidden", // ✅ previene contenido desbordado
                textAlign: "left",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "self-start",
                  overflowX: "auto",
                  gap: 1,

                  mb: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "#A5AB94", width: 66, height: 66 }}>
                  <PersonOutline sx={{ fontSize: 38 }} />
                </Avatar>
                <Typography variant="h4" sx={{ fontSize: 18 }}>
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

              <Typography sx={{ fontSize: { xs: 14, md: 18 }, mb: 2 }}>
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
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: -45, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#8B8F7C",
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
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
