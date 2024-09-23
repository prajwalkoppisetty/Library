import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./Components.css";

export default function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Profile", path: "/" },
    { name: "BookList", path: "/Booklist" },
    { name: "My-Books", path: "/MyBooks" },
    { name: "Activity", path: "/Activity" },
    {name:"Logout",path:"/Logout"}
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="../public/logo.png" alt="logo" className="h-16 w-40" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link to="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <div style={{ display: "flex", gap: "16px" }}>
            <Button as={Link} to="/Login" color="primary" variant="flat">
              Login
            </Button>
            <Button as={Link} to="/signup" color="warning" variant="flat">
              Sign Up
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className={`${isMenuOpen ? "open-menu" : ""}`}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className={`w-full text-lg ${
                index === menuItems.length - 1 ? "text-warning" : "text-black"
              }`}
              to={item.path}
              onClick={() => setIsMenuOpen(false)} // Close menu after click
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
