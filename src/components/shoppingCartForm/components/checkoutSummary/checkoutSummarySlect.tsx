import { Delete } from "@mui/icons-material";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "../../../../assets/images";

export const CheckoutSummarySelect = () => {
  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: "Lorem Ipsum x",
      price: "$10.99",
      quantity: 1,
    },
    {
      id: 2,
      src: Session_2,
      title: "Lorem Ipsum y",
      price: "$15.99",
      quantity: 1,
    },
    {
      id: 2,
      src: variety2,
      title: "Lorem Ipsum z",
      price: "$15.99",
      quantity: 1,
    },
  ]);

  return (
    <Box
      sx={{
        maxHeight: "300px",
        overflowY: "auto",
        paddingRight: "10px",
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      {products.map((product, index) => (
        <Card
          key={product.id}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            boxShadow: "none",
            backgroundColor: "transparent",
            marginBottom: index !== products.length - 1 ? 1 : 0,
          }}
        >
          {/* Imagen con borde redondeado y sombra */}
          <CardMedia
            component="img"
            sx={{
              width: 80,
              height: 80,
              margin: 1,
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.37)",
            }}
            image={product.src}
            alt={product.title}
          />

          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1">
                Quantity {product.quantity}
              </Typography>
            </Box>

            <IconButton sx={{ color: "#A5AB94", marginX: 9 }}>
              <Delete />
            </IconButton>

            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body1" fontWeight="bold">
                {product.price}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
