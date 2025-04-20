import { Box, Typography, IconButton, Button, Stack } from "@mui/material";
import { Edit, Delete, Add, LocationOn } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type Address = {
  id: number;
  label: string;
  addressLine: string;
  city: string;
  phone: string;
};

// Simula más de 3 direcciones
const addressList: Address[] = [
  {
    id: 1,
    label: "Default address",
    addressLine: "8001 S Orange Blossom Trl",
    city: "Orlando, FL 32809",
    phone: "+01 309 749 4631",
  },
  {
    id: 2,
    label: "Mom",
    addressLine: "8001 S Orange Blossom Trl",
    city: "Orlando, FL 32809",
    phone: "+01 309 749 4631",
  },
  {
    id: 3,
    label: "Mom",
    addressLine: "8001 S Orange Blossom Trl",
    city: "Orlando, FL 32809",
    phone: "+01 309 749 4631",
  },
];

const AddressList = ({ onAddNew }: { onAddNew: () => void }) => {
  const { t } = useTranslation();

  const handleEdit = (id: number) => {
    console.log(`Editar dirección ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar dirección ${id}`);
  };

  return (
    <Box p={4} sx={{ backgroundColor: "#ece8e1", minHeight: "100vh" }}>
      <Button
        variant="outlined"
        startIcon={<Add />}
        sx={{ mb: 4, borderRadius: 8, textTransform: "none" }}
      >
        {t("addressesForm.newAddress")}
      </Button>

      {/* Scroll  */}
      <Box
        sx={{
          maxHeight: 420,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Stack spacing={2}>
          {addressList.map((address) => (
            <Box
              key={address.id}
              onClick={onAddNew}
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#fff",
                p: 2,
                width: "100%",
                maxWidth: 600,
                position: "relative",
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              <Box display="flex" alignItems="center" mb={1}>
                <LocationOn sx={{ color: "#94a18c", mr: 1 }} />
                <Typography sx={{ fontWeight: "bold", color: "#94a18c" }}>
                  {address.label}
                </Typography>
              </Box>

              <Typography variant="body2">{address.addressLine}</Typography>
              <Typography variant="body2">{address.city}</Typography>
              <Typography variant="body2">{address.phone}</Typography>

              <Box
                onClick={(e) => e.stopPropagation()} // Evita navegar al hacer click en botones
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  gap: 1,
                }}
              >
                <IconButton
                  onClick={() => handleDelete(address.id)}
                  sx={{ color: "#a8b49a" }}
                >
                  <Edit />
                </IconButton>
              </Box>
              <IconButton
                onClick={() => handleEdit(address.id)}
                sx={{
                  display: "flex",
                  left: "94%",
                  alignItems: "center",
                  color: "#e57373",
                }}
              >
                <Delete />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AddressList;
