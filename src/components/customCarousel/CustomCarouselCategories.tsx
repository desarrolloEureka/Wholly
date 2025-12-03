import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesCategories } from "../../globals/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CustomCarouselCategories = ({
  images,
}: {
  images: ImagesCategories[];
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

    return (
      <Box>
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: {
              xs: "45%", // Para pantallas móviles
              md: "96%",
            },
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.38)",
            borderRadius: "10px",
            marginBottom: "30px",
            marginTop: "10px",
            height: { xs: "450px" },
            mx: "auto",
            margin: { xs: " 0 auto", sm: "10px" },
            cursor: "pointer",
          }}
          onClick={() => navigate("/category")}
        >
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
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
              height: "100%",
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

            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                width: {
                  xs: "100%", // que ocupe todo en móvil
                  sm: "95%", // igual que ya tenías
                },
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                fontWeight: "bold",
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.9rem",
                },
                marginTop: '5px',
                color: textColor,
                "&:hover": {
                  transform: "translateX(5px)",
                },
                minHeight: "3.5em",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "17px" }}>
                {item.description}
              </Typography>
            </Box>
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
                {t("homeform.ShopNow")}
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
    <div className="card" style={{ width: "100%", overflow: "hidden" }}>
      <Carousel
        value={images}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        showIndicators={false}
        showNavigators={false}
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
      />
    </div>
  );
};

export default CustomCarouselCategories;
