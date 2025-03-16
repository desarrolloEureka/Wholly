import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "./../../../assets/images";

export const SupplementSession = () => {
  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: "Sun Block 1",
      subtitle: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem  1",
      description: "$10.99",
      rating: 3.5,
    },
    {
      id: 2,
      src: Session_2,
      title: "Sun Block 2",
      subtitle: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem  2",
      description: "$15.99",
      rating: 4.0,
    },
    {
      id: 3,
      src: Session_1,
      title: "Sun Block 3",
      subtitle: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem  3",
      description: "$20.99",
      rating: 4.5,
    },
    {
      id: 4,
      src: variety2,
      title: "Sun Block 3",
      subtitle: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem  3",
      description: "$19.99",
      rating: 4.5,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
          marginLeft: "30px",
          marginTop: "50px",
        }}
      >
        {/* Lista de imágenes a la izquierda */}
        <Box
          sx={{ width: "8%", display: "flex", flexDirection: "column", gap: 2 }}
        >
          {products.map((product) => (
            <Paper
              key={product.id}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: selectedProduct.id === product.id ? 4 : 1,
                width: "90%",
                height: 110,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.src}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Paper>
          ))}
        </Box>

        {/* Producto seleccionado a la derecha */}
        <Box
          sx={{
            width: "80%",
            display: "flex",
            gap: 2,
            alignItems: "center",
            marginLeft: "40px",
          }}
        >
          <img
            src={selectedProduct.src}
            alt={selectedProduct.title}
            style={{
              width: 400,
              height: 400,
              objectFit: "cover", // Asegura que la imagen llene el espacio sin distorsionarse
              borderRadius: "60px",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.27)",
            }}
          />

          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "10%",
              width: "50%",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "#3C3C3C" }}
            >
              {selectedProduct.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 300, color: "#A5AB94" }}
              >
                {selectedProduct.rating.toFixed(1)}
              </Typography>
              <Rating
                name="product-rating"
                value={selectedProduct.rating}
                precision={0.5}
                readOnly // <-- Hace que la calificación sea fija
                size="large"
                sx={{ color: "#A5AB94" }}
              />
            </Box>

            <Typography sx={{ fontSize: "1.5rem", color: "gray" }}>
              {selectedProduct.subtitle}
            </Typography>
            <Typography color="primary" sx={{ fontSize: "2rem" }}>
              {selectedProduct.description}
            </Typography>
            <span
              style={{
                opacity: 0.6,
                marginLeft: "7px",
              }}
            >
              {/* ${selectedProduct.description2 ?? "}*/}
            </span>

            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                backgroundColor: "#A5AB94",
                borderRadius: "40px",
                width: "35%",
              }}
            >
              Add to basket
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ marginLeft: "30px" }}>See all - 12</Typography>
    </Box>
  );
};
