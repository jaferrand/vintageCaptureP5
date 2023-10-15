import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logout from "../../components/logout/Logout";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/cartContext/cartContext";
import CartIcon from "../../components/cart/cart-icon/Cart-icon";
import CartDropdown from "../../components/cart/cart-dropdown/Cart-dropdown";

const logoUrl =
  "https://res.cloudinary.com/dgvipi8hx/image/upload/v1697245027/logoVintageCapture/logolargoblanco_vs3ykr.png";

const Navigation = () => {
  const { userState } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <Navbar
        style={{
          position: "fixed", // Fija el Navbar
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100, // Asegura que el Navbar esté por encima de otros elementos
        }}
        collapseOnSelect
        expand="lg"
        variant="dark"
        bg="dark"
      >
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src={logoUrl}
            alt="Logo"
            width="300"
            height="100"
            className="mr-2"
          />
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/products">
              PRODUCTOS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              CARRITO
            </Nav.Link>
            <NavDropdown title={userState.info2.firstname}>
              <NavDropdown.Item as={NavLink} to="/user/myprofile">
                perfil
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {userState.authStatus ? (
              <Logout />
            ) : (
              <Nav.Link as={NavLink} to="/auth">
                Login
              </Nav.Link>
            )}

            <CartIcon />
          </Nav>
          {isCartOpen && <CartDropdown />} {/* Renderiza CartDropdown si isCartOpen es verdadero */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
