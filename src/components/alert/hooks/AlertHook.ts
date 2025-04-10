import { useTranslation } from "react-i18next";

export const AlertHook = ({
  setShowLogOut,
}: {
  setShowLogOut: (e: boolean) => void;
}) => {
  const { t } = useTranslation();

  const handleLogOutClick = () => {
    setShowLogOut(true); // Mostrar el modal
  };

  const handleCloseLogOut = () => {
    setShowLogOut(false); // Ocultar el modal
  };

  const handleConfirmLogOut = () => {
    // Aquí pones tu lógica real de cerrar sesión
    console.log("Sesión cerrada");
    setShowLogOut(false);
  };
  return { t, handleCloseLogOut, handleConfirmLogOut, handleLogOutClick };
};
