import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import "./lang/i18n";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { RememberPassword } from "./views/RememberPassword";
import theme from "./providers/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./views/Home";
import { Categories } from "./views/Categories";
import { InternalCategoriesty } from "./views/InternalCategoriesty";
import { Supplements } from "./views/Supplements";
import { ShoppingCart } from "./views/ShoppingCart";
import { PaymentVerification } from "./views/PaymentVerification";
import { PurchaseSummary } from "./views/PurchaseSummary";
import { Blog } from "./views/Blog";
import { InternalBlog } from "./views/InternalBlog";
import { Support } from "./views/Support";
import { Us } from "./views/Us";
import { Kits } from "./views/Kits";
import { InternalKits } from "./views/InternalKits";
import { Comments } from "./views/Comments";
import { EditProfile } from "./views/EditProfile";
import { Addresses } from "./views/Addresses";
import { PaymentMethods } from "./views/PaymentMethods";
import { Orders } from "./views/Orders";
import { ScrollTop } from "./globals/ScrollTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/remember" element={<RememberPassword />} />
          <Route path="/Supplements" element={<Supplements />} />
          <Route
            path="/internalCategoriesty"
            element={<InternalCategoriesty />}
          />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route
            path="/PaymentVerification"
            element={<PaymentVerification />}
          />
          <Route path="/PurchaseSummary" element={<PurchaseSummary />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/internalBlog" element={<InternalBlog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about_us" element={<Us />} />
          <Route path="/Kits" element={<Kits />} />
          <Route path="/InternalKits" element={<InternalKits />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/EditProfile/:edit" element={<EditProfile />} />
          <Route path="/Addresses" element={<Addresses />} />
          <Route path="/PaymentMethods" element={<PaymentMethods />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
