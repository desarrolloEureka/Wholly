import { useState } from "react";
import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesVariety } from "../../globals/types";
import { useNavigate } from "react-router-dom";

const CustomCarouselVariety = ({ images }: { images: ImagesVariety[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const backgroundColor = "#ffff";
  const textColor = "#3C3C3C";
  const navigate = useNavigate();

  const itemTemplate = (item: ImagesVariety) => {
    return (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",

          width: {
            xs: "55%", // en móviles ocupa casi todo el ancho
            sm: "70%", // mismo valor en pantallas medianas o más grandes
            md: "63%", // mismo valor en pantallas medianas o más grandes
          },
          borderRadius: "10px",
          marginBottom: {
            xs: "20px",
            md: "15px",
          },
          marginTop: {
            xs: "10px",
            md: "5px",
          },
          margin: "0 auto",
          cursor: "pointer",
        }}
        onClick={() => navigate("/Supplements")}
      >
        <Box
          component="img"
          src={item.src}
          alt={item.title}
          sx={{
            width: "100%",
            height: {
              xs: "290px", // altura para móviles
              sm: "220px", // tablets pequeñas
              md: "275px", // pantallas medianas en adelante
            },
            objectFit: "cover",
            transition: "transform 0.3s ease",
            borderRadius: "10px 10px 0 0",
          }}
        />

        <Box
          sx={{
            width: "100%",
            backgroundColor: backgroundColor,
            padding: {
              xs: "10px 12px",
              md: "10px 15px",
            },
            textAlign: "start",
            border: "1px solid rgba(60, 60, 60, 0.64)",
            borderTop: "none",
            borderRadius: "0 0 10px 10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              marginTop: "8px",
              color: textColor,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "0.95rem",
                md: "1.0rem",
              },
              marginTop: "3px",
              color: textColor,
              marginBottom: "8px",
            }}
          >
            {item.subtitle}
          </Typography>

          <Typography
            sx={{
              display: "flex",
              alignItems: "start",
              width: {
                xs: "100%",
                md: "50%",
              },
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "bold",
              fontSize: {
                xs: "0.75rem",
                md: "0.8rem",
              },
            }}
          >
            {item.description}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={images}
        numVisible={4}
        numScroll={2}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
        showIndicators={false}
        onPageChange={(e) => setActiveIndex(e.page)}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "60px",
          gap: "15px",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "#000" : "#bbb",

              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>
    </div>
  );
};

export default CustomCarouselVariety;
