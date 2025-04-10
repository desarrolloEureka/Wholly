import { Box, Button, Portal } from "@mui/material";
import { AlertHook } from "./hooks/AlertHook";

const Alert = ({
  showLogOut,
  setShowLogOut,
  description,
  icon,
}: {
  showLogOut: boolean;
  setShowLogOut: (e: boolean) => void;
  title?: string;
  description?: string;
  icon: JSX.Element;
  isConfirm?: boolean;
}) => {
  const { handleCloseLogOut, handleConfirmLogOut, t } = AlertHook({
    setShowLogOut,
  });

  return (
    showLogOut && (
      <Portal>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "270px",
              backgroundColor: "white",
              borderRadius: "11px",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <ErrorIcon sx={{ color: "red", fontSize: 60 }} /> */}
            {icon}
            {/* ¿Seguro que deseas cerrar tu sesión? */}
            {description}
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                variant="contained"
                onClick={handleCloseLogOut}
                sx={{
                  width: "162.22px",
                  height: "53.99px",
                  backgroundColor: "#BDBDBD",
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  "&:hover": { backgroundColor: "#9E9E9E" },
                }}
              >
                {t("general.no")}
              </Button>

              <Button
                variant="contained"
                onClick={handleConfirmLogOut}
                sx={{
                  width: "162.22px",
                  height: "53.99px",
                  backgroundColor: "#A3AD8C",
                  borderRadius: "14px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  "&:hover": { backgroundColor: "#8A966F" },
                }}
              >
                {t("general.yes")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Portal>
    )
  );
};

export default Alert;
