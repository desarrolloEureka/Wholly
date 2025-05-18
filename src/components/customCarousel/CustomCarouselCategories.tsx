import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesCategories } from "../../globals/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const CustomCarouselCategories = ({
  images,
}: {
  images: ImagesCategories[];
}) => {
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const backgroundColors = ["#EEF1F0", "#A5AB94", "#E8E4DF"];
  const textColors = ["#3C3C3C", "#FBFFDD", "#3C3C3C"];

  const itemTemplate = (item: ImagesCategories) => {
    const index = images.indexOf(item);
    const backgroundColor = backgroundColors[index % backgroundColors.length];
    const textColor = textColors[index % textColors.length];

    const navigate = useNavigate();
    return (
      <Box sx={{ height: { xs: "470px" }, marginTop: { xs: "10px" } }}>
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: {
              xs: "50%",
              sm: "89%",
              md: "96%",
            },
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
            borderRadius: "10px",
            marginBottom: "30px",
            marginTop: "10px",
            height: { xs: "450px" },

            margin: "0 auto",
            cursor: "pointer",
          }}
          onClick={() => navigate("/category")}
        >
          <img
            src={item.src}
            alt={item.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              borderRadius: "10px 10px 0 0 ",
            }}
          />

          <Box
            sx={{
              width: "100%",
              backgroundColor: backgroundColor,
              padding: "15px 20px",
              textAlign: "start",
              borderRadius: "0 0 10px 10px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "1rem", // Más pequeño para móvil
                  sm: "1.4rem",
                },
                fontWeight: 600,
                color: textColor,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                },
                marginTop: "4px",
                color: textColor,
                marginBottom: "28px",
              }}
            >
              {item.subtitle}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                width: {
                  xs: "100%", // que ocupe todo en móvil
                  sm: "50%", // igual que ya tenías
                },
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                fontWeight: "bold",
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.9rem",
                },
                color: textColor,
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "17px" }}>
                {item.description}
              </Typography>
              <ChevronRightIcon
                sx={{
                  fontSize: 20,
                  color: textColor,
                  position: "relative",
                  bottom: "-2.9px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={images}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
      />
    </div>
  );
};

export default CustomCarouselCategories;
