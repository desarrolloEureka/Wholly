import {
  Box,
  CardMedia,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Session_1, Session_2, variety2 } from "../../../assets/images";
import { useTranslation } from "react-i18next";

export const PurchaseSummaryForm = () => {
  const { t } = useTranslation();

  const [products] = useState([
    {
      id: 1,
      src: Session_1,
      title: "Lorem Ipsum x",
      price: 10.99,
      quantity: 1,
    },
    {
      id: 2,
      src: Session_2,
      title: "Lorem Ipsum y",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 3,
      src: variety2,
      title: "Lorem Ipsum z",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 4,
      src: variety2,
      title: "Lorem Ipsum z",
      price: 15.99,
      quantity: 1,
    },
  ]);

  return (
    <Box sx={{ p: { xs: 0, md: 2 }, borderRadius: 2, width: "100%" }}>
      {/* Encabezado sólo visible en md+ */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Table
          sx={{
            tableLayout: "fixed",
            width: "100%",
            minWidth: "100%",
          }}
        >
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid #A5AB94" }}>
              <TableCell
                sx={{
                  width: "40%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#A5AB94",
                  }}
                >
                  {t("PurchaseSummary.Products")}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  width: "20%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#A5AB94",
                  }}
                >
                  {t("PurchaseSummary.Amount")}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  width: "20%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#A5AB94",
                  }}
                >
                  {t("PurchaseSummary.UnitValue")}
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  width: "20%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#A5AB94",
                  }}
                >
                  {t("PurchaseSummary.Total")}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Box>

      {/* Body para escritorio */}
      <Box
        sx={{
          maxHeight: 248,
          overflowY: "auto",
          overflowX: "visible",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Table
          sx={{
            tableLayout: "fixed",
            width: "100%",
            minWidth: "100%",
          }}
        >
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell sx={{ width: "40%" }}>
                  <Box display="flex" alignItems="center">
                    <CardMedia
                      component="img"
                      image={product.src}
                      alt={product.title}
                      sx={{ width: 50, height: 50, borderRadius: 1, mr: 2 }}
                    />
                    <Typography>{product.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ width: "20%" }}>{product.quantity}</TableCell>
                <TableCell sx={{ width: "20%" }}>
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell sx={{ width: "20%" }}>
                  {index === 0 ? "$64.18" : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Layout móvil tipo card */}

      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
              px: 2,

              fontWeight: "bold",
              fontSize: "0.9rem",
              color: "#A5AB94",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#A5AB94" }}
              >
                {t("PurchaseSummary.Products")}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#A5AB94" }}
              >
                {t("PurchaseSummary.UnitValue")}
              </Typography>
            </Box>
          </Box>
          {products.map((product) => (
            <Box
              key={product.id}
              sx={{
                borderRadius: 2,
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={product.src}
                alt={product.title}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 1,
                  mr: 2,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  backgroundColor: "#e0e0d4",
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                  {product.title}
                </Typography>
                <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                  0.7 0z / 20 ml
                </Typography>
              </Box>
              <Box sx={{ textAlign: "right", minWidth: 80 }}>
                <Typography sx={{ fontWeight: 500, fontSize: "1rem" }}>
                  ${product.price.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            bgcolor: "#F1F3F7",
            p: 2,
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "##000000",
          }}
        >
          Total
          <br />
          $64.18
        </Box>
      </Box>
    </Box>
  );
};
