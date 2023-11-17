import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Logo from "../assets/logo5bg.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      to: "home", // Specify the element's ID
    },
    {
      text: "About",
      icon: <InfoIcon />,
      to: "about", // Specify the element's ID
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      to: "testimonials", // Specify the element's ID
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      to: "contact", // Specify the element's ID
    },
    // Note: No need for "Cart" here since it's not a scroll-to-section link
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" className="logo_nav" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <ScrollLink
            key={item.text}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-50} // Adjust the offset if needed
            duration={500}
            className="desktopMenuListItem"
          >
            {item.text}
          </ScrollLink>
        ))}
        <button className="primary-button" onClick={scrollToTop}>
          Bookings Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => setOpenMenu(false)}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-50} // Adjust the offset if needed
                    duration={500}
                    className="desktopMenuListItem"
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ScrollLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
