import { ArrowDropUp, ArrowDropDown, Delete } from "@mui/icons-material";
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
import { useTranslation } from "react-i18next";

type Product = {
  id: number;
  src: string;
  title: string;
  price: string;
  quantity: number;
};

export const CheckoutSummarySelect = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([
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
      id: 3,
      src: variety2,
      title: "Lorem Ipsum z",
      price: "$15.99",
      quantity: 1,
    },
  ]);

  const changeQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  return (
    <Box sx={{ maxHeight: "300px", overflowY: "auto", pr: "10px" }}>
      {products.map((product, index) => (
        <Card
          key={product.id}
          sx={{
            display: "flex",
            alignItems: "center",
            p: 1,
            boxShadow: "none",
            backgroundColor: "transparent",
            mb: index !== products.length - 1 ? 1 : 0,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 80,
              height: 80,
              m: 1,
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
              pl: 0,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontSize: "18px" }}>
                {product.title}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                <Typography sx={{ color: "rgba(0, 0, 0, 0.63)", mr: 0.5 }}>
                  {t("shoppingCart.quantity")}
                </Typography>

                <IconButton
                  onClick={() => changeQuantity(product.id, -1)}
                  sx={{ p: 0.25, mx: -0.5 }}
                >
                  <ArrowDropDown fontSize="small" />
                </IconButton>

                <Typography variant="body1" sx={{ mx: 0.5, minWidth: 16 }}>
                  {product.quantity}
                </Typography>

                <IconButton
                  onClick={() => changeQuantity(product.id, 1)}
                  sx={{ p: 0.25, mx: -1.2 }}
                >
                  <ArrowDropUp fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            <IconButton sx={{ color: "#A5AB94", mx: 4 }}>
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
