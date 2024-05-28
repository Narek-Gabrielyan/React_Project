// Libraries
import { NavLink } from "react-router-dom";
// CSS
import cssHeader from "./Header.module.css";

export default function Header() {
  return (
    <header className={cssHeader.box}>
      <NavLink to="/" className={cssHeader.logo} title="Logo">
        <img src="./Images/logo_React.png" alt="Logo" />
      </NavLink>

      <NavLink to="/products" className={cssHeader.nav} title="Products">
        <img src="./Images/new-product.png" alt="Products" />
      </NavLink>

      <div className={cssHeader.shop_profile}>
        <NavLink to="/shopCarts" className={cssHeader.nav} title="Shop Carts">
          <img src="./Images/shopping-cart.png" alt="Shop" />
        </NavLink>
        <NavLink
          to="/profileUser"
          className={cssHeader.nav}
          title="Profile User"
        >
          <img src="./Images/account.png" alt="Logo" />
        </NavLink>
      </div>
    </header>
  );
}
