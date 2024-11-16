import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/images/armatech-logo.png";
import theme from "../../theme";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Ana Sayfa", "Hakkımızda", "Ürünler", "İletişim"];

const productMenu = [
  { title: "TAKIM TUTUCULAR", link: "takim-tutucular" },
  {
    title: "VERO-S HIZLI PALET DEĞİŞTİRME SİSTEMİ",
    link: "vero-s-hizli-palet-degistirme-sistemi",
  },
  { title: "TORNA AYNALARI", link: "torna-aynalari" },
  { title: "KUVVET BLOKLARI", link: "kuvvet-bloklari" },
  { title: "MENGENELER", link: "mengeneler" },
  { title: "KULELER", link: "kuleler" },
  { title: "MANYETİK TABLALAR", link: "manyetik-tablalar" },
  { title: "VAKUM TABLA", link: "vakum-tabla" },
  { title: "ÇAPAK ALMA", link: "capak-alma" },
  { title: "OTOMATİK", link: "otomatik" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleProductMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleAnaSayfaClick = () => {
    if (location.pathname === "/") {
      const targetSection = document.getElementById("Ana Sayfa");
      if (!targetSection) return;
      const elementPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 64;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleHakkimizdaClick = () => {
    if (location.pathname === "/") {
      const targetSection = document.getElementById("Hakkımızda");
      if (!targetSection) return;
      const elementPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 64;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleIletisimClick = () => {
    if (location.pathname === "/") {
      const targetSection = document.getElementById("İletişim");
      if (!targetSection) return;
      const elementPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 64;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleProductClick = (link: string) => {
    window.location.href = `/${link}`;
    handleClose();
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          padding: theme.spacing(1),
          background:
            "linear-gradient(135deg, rgb(0, 2, 8) 0%, rgb(0, 1, 10) 30%, rgb(6, 11, 21) 55%, rgb(0, 23, 30) 70%, rgb(0, 17, 22) 100%)",
        }}
      >
        <Toolbar>
          <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            justifyContent="space-between"
            alignItems="center"
            width="1400px"
            marginInline="auto"
          >
            <Box
              width="150px"
              onClick={handleLogoClick}
              sx={{ cursor: "pointer" }}
            >
              <img src={Logo} width="100%" />
            </Box>

            <Box>
              <Button onClick={handleAnaSayfaClick}>Ana Sayfa</Button>
              <Button onClick={handleHakkimizdaClick}>Hakkımızda</Button>
              <Button
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleProductMenuClick}
                sx={{ color: "white" }}
              >
                Ürünler
              </Button>
              <Button onClick={handleIletisimClick}>İletişim</Button>
            </Box>
          </Box>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              backgroundColor: "white",
              marginLeft: "auto",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Product Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {productMenu.map((item) => (
          <MenuItem
            key={item.link}
            onClick={() => handleProductClick(item.link)}
          >
            {item.title}
          </MenuItem>
        ))}
      </Menu>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
