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

const drawerWidth = 240;
const navItems = ["Ana Sayfa", "Hakkımızda", "Ürünler", "İletişim"];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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

  const handleClick = (section: string) => {
    const targetSection = document.getElementById(section);
    if (!targetSection) return;

    const elementPosition =
      targetSection.getBoundingClientRect().top + window.scrollY;

    const offsetPosition = elementPosition - 64;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  {item}
                </Button>
              ))}
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
