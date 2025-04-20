import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";

export const ActiveOrders = ({ onAddNew }: { onAddNew: () => void }) => {
  const { t } = useTranslation();
  const orders = [
    {
      id: "#A021",
      date: "5/07/2024",
      status: "On the way",
      guide: "52856341",
      tracking: "www.transport/usa/a.....",
      total: "$50.09",
    },
    {
      id: "#A085",
      date: "8/07/2024",
      status: "In preparation",
      guide: "62401638",
      tracking: "www.transport/usa/a.....",
      total: "$20.99",
    },
    {
      id: "#A085",
      date: "8/07/2024",
      status: "In preparation",
      guide: "62401638",
      tracking: "www.transport/usa/a.....",
      total: "$20.99",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        overflowX: "auto",
        width: "100%",
        mr: "250px",
      }}
    >
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                borderBottom: "1px solid #ccc", // solo esta línea de separación
              }}
            >
              {[
                t("ActiveOrders.Order"),
                t("ActiveOrders.Date"),
                t("ActiveOrders.OrderStatus"),
                t("ActiveOrders.GuideNumber"),
                t("ActiveOrders.TrackOrder"),
                t("ActiveOrders.Total"),
                t("ActiveOrders.Detail"),
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    color: "#A5AB94",
                    fontWeight: "bold",
                    borderBottom: "none", // quitamos la línea individual de cada celda
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "12px" }}>
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell sx={{ borderBottom: "none" }}>{order.id}</TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {order.date}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {order.status}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {order.guide}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <a
                    href={`https://${order.tracking}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {order.tracking}
                  </a>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {order.total}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <IconButton onClick={onAddNew}>
                    <VisibilityIcon sx={{ color: "#7B7F72" }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2" align="center" sx={{ color: "#777", mt: 10 }}>
        Page 1/1
      </Typography>
    </Box>
  );
};
