import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Edit, Delete, Add, LocationOn } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import { type Dispatch, type SetStateAction } from "react";

// external components
import useSWR from "swr";

// utils
import { fetcher } from "../../../globals/fetcher/fetcher";

// types
import type { Address } from "../../../globals/types";

const AddressList = ({
  onAddNew,
  setCurrentItem,
}: {
  onAddNew: () => void;
  setCurrentItem: Dispatch<SetStateAction<Address | null>>;
}) => {
  const { t } = useTranslation();

  // GET data addresses
  const {
    data: DataAddresses,
    error,
    isLoading,
  } = useSWR({ url: "/regions/apiCreateAddress" }, fetcher);

  const handleDelete = (id: number) => {
    console.log(`Eliminar dirección ${id}`);
  };

  return (
    <Box
      p={4}
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {/* Wrapper que contiene todo el contenido */}
      <Box sx={{ width: "80%" }}>
        <Button
          variant="outlined"
          onClick={() => {
            setCurrentItem(null);
            onAddNew();
          }}
          startIcon={<Add />}
          sx={{ mb: 4, borderRadius: 8, textTransform: "none" }}
        >
          <Typography variant="h6" fontSize={17}>
            {t("addressesForm.newAddress")}
          </Typography>
        </Button>

        <Box
          sx={{
            maxHeight: 560,
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
          {error && (
            <span
              style={{
                fontSize: 16,
                color: "red",
              }}
            >
              {error}
            </span>
          )}
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingY: 8,
              }}
            >
              <CircularProgress color="primary" size={60} />
            </Box>
          ) : (
            <Stack spacing={2}>
              {(DataAddresses ?? []).map((address: Address) => (
                <Box
                  key={`address-${address.id}`}
                  onClick={onAddNew}
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "#fff",
                    p: 2,
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
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#94a18c",
                      }}
                    >
                      {address.address_name}
                    </Typography>
                  </Box>

                  <Typography variant="body2">{address.address}</Typography>
                  <Typography variant="body2">{address.city.name}</Typography>
                  <Typography variant="body2">
                    {address.contact_number}
                  </Typography>

                  <Box
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <IconButton
                      onClick={() => {
                        setCurrentItem(address);
                        onAddNew();
                      }}
                      sx={{ color: "#a8b49a" }}
                    >
                      <Edit />
                    </IconButton>
                  </Box>
                  <Box
                    onClick={(e) => e.stopPropagation()}
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      display: "flex",
                      gap: 1,
                    }}
                  >
                    <IconButton
                      onClick={() => handleDelete(address.id)}
                      sx={{
                        display: "flex",
                        right: 0,
                        alignItems: "center",
                        color: "#e57373",
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddressList;
