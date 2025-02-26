import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import "./lang/i18n";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { RememberPassword } from "./views/RememberPassword";
import theme from "./providers/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./views/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/remember" element={<RememberPassword />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
