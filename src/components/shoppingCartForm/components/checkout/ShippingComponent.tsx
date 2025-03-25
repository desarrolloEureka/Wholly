import { Box, Button, TextField } from "@mui/material";

export const ShippingComponent = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        gap={2}
        sx={{ width: "100%" }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Recipients Name"
          sx={{
            width: "58%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />
        <TextField
          id="outlined-basic2"
          variant="outlined"
          placeholder="Address name"
          sx={{
            width: "58%",

            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />
        <Box display="flex" flexDirection="row" gap={1} sx={{ width: "100%" }}>
          <TextField
            id="outlined-basic-1"
            variant="outlined"
            placeholder="Adress"
            fullWidth
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
              },
            }}
          />
          <TextField
            id="outlined-basic-2"
            variant="outlined"
            placeholder="Contact Number "
            fullWidth
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
              },
            }}
          />
        </Box>
        <TextField
          id="outlined-basic3"
          variant="outlined"
          placeholder="Zip code"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />
        <Box display="flex" flexDirection="row" gap={1} sx={{ width: "100%" }}>
          <TextField
            id="outlined-basic-1"
            variant="outlined"
            placeholder="City"
            fullWidth
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
              },
            }}
          />
          <TextField
            id="outlined-basic-2"
            variant="outlined"
            placeholder="State"
            fullWidth
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
                height: "48px",
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            borderRadius: "16px",
            boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#A5AB94",
          }}
          onClick={onOpen} // 👈 Llamar la función para abrir el acordeón de Shipping
        >
          CONTINUE PAYMENT
        </Button>
      </Box>
    </Box>
  );
};
