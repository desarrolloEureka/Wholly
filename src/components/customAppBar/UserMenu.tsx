import { Box, Button, Drawer, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";
import Alert from "../alert/Alert";
import ErrorIcon from "@mui/icons-material/Error";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        onClick={() => setShowDropdown(!showDropdown)}
        sx={{
          color: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <PersonOutlineIcon
          sx={{
            fontSize: 21,
          }}
        ></PersonOutlineIcon>
      </Button>
      {showDropdown && (
        <Drawer
          anchor="right"
          open={showDropdown}
          onClose={() => setShowDropdown(false)}
          PaperProps={{
            sx: {
              padding: "15px",
              backgroundColor: "white",
              display: "flex",
              paddingLeft: "38px",
              flexDirection: "column",
              gap: "30px",
              width: "310px",
              height: "100vh",
              borderRadius: "20px",
              top: "85px",
              right: "10px",
              marginRight: "60px",
              paddingBottom: "110px",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "5px",
              display: "flex",
              flexDirection: "file",
              marginLeft: "-38px",
            }}
          >
            <Button onClick={() => setShowDropdown(false)}>
              <ArrowBackIosIcon
                sx={{
                  fontSize: 21,
                  color: "black",
                  marginRight: "5px",
                }}
              ></ArrowBackIosIcon>
            </Button>
            <Typography
              sx={{
                color: "#3C3C3C",
                fontFamily: "Roboto,sans-serif",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              settingss
            </Typography>
          </Box>

          <Box>
            <Button
              onClick={() => navigate("/EditProfile")}
              sx={{
                backgroundColor: "white",
                color: "#858585",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <EditOutlinedIcon
                sx={{
                  fontSize: 30,
                  backgroundColor: "transparent",
                  marginRight: "10px",
                }}
              ></EditOutlinedIcon>
              Edit profile
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              sx={{
                color: "#858585",
                backgroundColor: "white",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <SettingsOutlinedIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "transparent",
                  marginRight: "10px",
                }}
              ></SettingsOutlinedIcon>
              My clinical history
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              sx={{
                color: "#858585",
                backgroundColor: "white",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <ShoppingBagOutlinedIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "transparent",
                  marginRight: "10px",
                }}
              ></ShoppingBagOutlinedIcon>
              My orders
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              sx={{
                color: "#858585",
                backgroundColor: "white",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <LocationOnIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "transparent",
                  marginRight: "10px",
                }}
              ></LocationOnIcon>
              My Addresses
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              sx={{
                color: "#858585",
                backgroundColor: "white",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <CreditCardIcon
                sx={{
                  fontSize: 35,
                  marginRight: "10px",
                }}
              ></CreditCardIcon>
              My payment methods
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              sx={{
                color: "#858585",
                backgroundColor: "white",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <HelpOutlineOutlinedIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "transparent",
                  marginRight: "10px",
                }}
              ></HelpOutlineOutlinedIcon>
              Support
            </Button>
          </Box>

          <Box>
            <Button
              variant="text"
              onClick={() => {
                setShowDropdown(false);
                setShowLogOut(true);
              }}
              sx={{
                color: "#858585",
                backgroundColor: "white",

                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <LogoutOutlinedIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "transparent",
                  marginRight: "10px",
                }}
              ></LogoutOutlinedIcon>
              log out
            </Button>
          </Box>
        </Drawer>
      )}
      <Alert
        showLogOut={showLogOut}
        setShowLogOut={setShowLogOut}
        isConfirm={true}
        icon={<ErrorIcon sx={{ color: "red", fontSize: 60 }} />}
        description={t("alertError.description")}
      />
    </Box>
  );
};
