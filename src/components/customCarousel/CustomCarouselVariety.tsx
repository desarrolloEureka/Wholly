import { useState } from "react";
import { Carousel } from "primereact/carousel";
import { Box, Typography } from "@mui/material";
import { ImagesVariety } from "../../globals/types";
import { useNavigate } from "react-router-dom";

const responsiveOptions = [
  { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
  { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
  { breakpoint: "991px", numVisible: 2, numScroll: 1 },
  { breakpoint: "767px", numVisible: 1, numScroll: 1 },
];
const textColor = "#3C3C3C";

const CustomCarouselVariety = ({ images }: { images: ImagesVariety[] }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item: ImagesVariety) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: "350px",
          height: "430px",
          borderRadius: "10px",
          mx: "auto",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: {
            xs: "20px",
            md: "15px",
          },
          marginTop: {
            xs: "10px",
            md: "5px",
          },
        }}
        onClick={() => navigate(`/Supplements/${item.id}`)}
      >
        <Box
          component="img"
          src={item.src}
          alt={item.title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        />

        <Box sx={{ flexGrow: 1, width: "100%", p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: textColor }}>
            {item.title}
          </Typography>

          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "bold",
              fontSize: "0.8rem",
              color: textColor,
              minHeight: "4em",
              mt: 1,
            }}
          >
            {item.description}
          </Typography>

          <Typography sx={{ opacity: 0.8, mt: 1 }}>
            SKU-<strong>{item.code}</strong>
          </Typography>

          <Typography sx={{ fontWeight: "bold", mt: 1 }}>
            ${item.amount?.toLocaleString("es-CO")}
          </Typography>
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
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
        showIndicators={false}
        onPageChange={(e) => setActiveIndex(e.page)}
      />

      <Box
        sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 6, gap: 2 }}
      >
        {Array.from({ length: Math.ceil(images.length / 3) }).map(
          (_, index) => (
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
          )
        )}
      </Box>
    </div>
  );
};

export default CustomCarouselVariety;
