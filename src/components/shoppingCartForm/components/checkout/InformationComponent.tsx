import { Box, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const InformationComponent = ({ onOpen }: { onOpen: () => void }) => {
  const { t } = useTranslation();

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
          placeholder={t("shoppingCart.YourName")}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder={t("shoppingCart.YourEmail")}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder={t("shoppingCart.YourPhoneNumber")}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              height: "48px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: "16px",
            boxShadow: "2px 3px 10px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#A5AB94",
          }}
          onClick={onOpen}
        >
          {t("shoppingCart.ContinueToShipping")}
        </Button>
      </Box>
    </Box>
  );
};
