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
import ErrorIcon from "@mui/icons-material/Error";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Alert from "../alert/Alert";

export const UserMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: t("userMenu.editProfile"),
      icon: <EditOutlinedIcon sx={{ fontSize: 30, marginRight: "10px" }} />,
      onClick: () => navigate("/EditProfile"),
    },
    {
      label: t("userMenu.myClinicalHistory"),
      icon: <SettingsOutlinedIcon sx={{ fontSize: 35, marginRight: "10px" }} />,
      onClick: () => navigate("/"),
    },
    {
      label: t("userMenu.myOrders"),
      icon: (
        <ShoppingBagOutlinedIcon sx={{ fontSize: 35, marginRight: "10px" }} />
      ),
      onClick: () => navigate("/Orders"),
    },
    {
      label: t("userMenu.myAddresses"),
      icon: <LocationOnIcon sx={{ fontSize: 35, marginRight: "10px" }} />,
      onClick: () => navigate("/Addresses"),
    },
    {
      label: t("userMenu.myPaymentMethods"),
      icon: <CreditCardIcon sx={{ fontSize: 35, marginRight: "10px" }} />,
      onClick: () => navigate("/PaymentMethods"),
    },
    {
      label: t("userMenu.support"),
      icon: (
        <HelpOutlineOutlinedIcon sx={{ fontSize: 35, marginRight: "10px" }} />
      ),
    },
    {
      label: t("userMenu.logOut"),
      icon: <LogoutOutlinedIcon sx={{ fontSize: 35, marginRight: "10px" }} />,
      onClick: () => {
        setShowDropdown(false);
        setShowLogOut(true);
      },
    },
  ];

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
        <PersonOutlineIcon sx={{ fontSize: 21 }} />
      </Button>

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
          sx={{ display: "flex", alignItems: "center", marginLeft: "-38px" }}
        >
          <Button onClick={() => setShowDropdown(false)}>
            <ArrowBackIosIcon
              sx={{ fontSize: 21, color: "black", marginRight: "5px" }}
            />
          </Button>
          <Typography
            sx={{
              color: "#3C3C3C",
              fontFamily: "Roboto,sans-serif",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {t("userMenu.settings")}
          </Typography>
        </Box>

        {menuItems.map((item, index) => (
          <Box key={index}>
            <Button
              variant="text"
              onClick={item.onClick}
              sx={{
                color: "#858585",
                backgroundColor: "white",
                justifyContent: "left",
                fontSize: "18px",
                textTransform: "none",
                width: "250px",
                marginLeft: "10px",
              }}
            >
              {item.icon}
              {item.label}
            </Button>
          </Box>
        ))}
      </Drawer>

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
