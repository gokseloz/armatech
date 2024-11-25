import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../../assets/images/armatech-logo.png";
import LogoBLue from "../../assets/images/armatech-logo-blue.jpg";
import theme from "../../theme";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const productMenu = [
  { title: "TAKIM TUTUCULAR", link: "takim-tutucular" },
  { title: "MANYETİK TABLALAR", link: "manyetik-tablalar" },
  {
    title: "VERO-S HIZLI PALET DEĞİŞTİRME SİSTEMİ",
    link: "vero-s-hizli-palet-degistirme-sistemleri",
  },
  { title: "TORNA AYNALARI", link: "torna-aynalari" },
  { title: "KUVVET BLOKLARI", link: "kuvvet-bloklari" },
  { title: "MENGENELER", link: "mengeneler" },
  { title: "KULELER", link: "kuleler" },
  { title: "VAKUM TABLA", link: "vakum-tabla" },
  { title: "ÇAPAK ALMA", link: "capak-alma" },
  { title: "OTOMATİK TALAŞLI İMALAT", link: "otomatik" },
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

  const handleAnaSayfaClick = () => {
    if (location.pathname === "/") {
      console.log(location.pathname);
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

  const handleBizeUlasinlick = () => {
    if (location.pathname === "/") {
      const targetSection = document.getElementById("bize-ulasin");
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

  const handleProductClick = (link: string) => {
    window.location.href = `/${link}`;
    handleClose();
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
      }}
    >
      <Box
        width="150px"
        paddingY={1}
        marginInline="auto"
        onClick={handleAnaSayfaClick}
        sx={{ cursor: "pointer" }}
      >
        <img src={LogoBLue} width="100%" />
      </Box>
      <List>
        <ListItem onClick={handleAnaSayfaClick} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Ana Sayfa" />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={handleHakkimizdaClick} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Hakkımızda" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="button"
            onClick={handleProductMenuClick}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Ürünler" />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={handleIletisimClick} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="İletişim" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          display: "grid",
          placeItems: "center",
          padding: theme.spacing(1, 3),
          backgroundColor: "transparent",
          background:
            "linear-gradient(90deg, rgb(45,56,138), rgb(0,174,239),rgb(45,56,138))",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          width="100%"
          maxWidth="1400px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          zIndex={2}
        >
          <Box
            width="150px"
            onClick={handleAnaSayfaClick}
            sx={{ cursor: "pointer" }}
          >
            <img src={Logo} width="100%" />
          </Box>
          <Toolbar sx={{ padding: 0, flexShrink: 0 }}>
            <Box
              sx={{ display: { xs: "none", sm: "flex" } }}
              justifyContent="space-between"
              alignItems="center"
              marginInline="auto"
            >
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
                <Button onClick={handleBizeUlasinlick}>Bize Ulaşın</Button>
              </Box>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "white",
                marginLeft: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>
      {/* Product Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
