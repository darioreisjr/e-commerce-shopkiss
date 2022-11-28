import { useState } from "react";

import "./header.css";

import {
  Link,
  makeStyles,
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Hidden,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Logo from "../Logo/index";
import { useNavigate } from "react-router-dom";

const linksNavegacao = [
  { name: "Home", href: "#" },
  { name: "Fazer Compras", href: "#" },
  { name: "Sobre Nós", href: "#" },
  { name: "Acessórios", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Vendas", href: "#" },
];

const useStyle = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    color: "#FFF",
  },
  linkBlack:{
    color: "#545454",
  },
  avatar: {
    marginLeft: "auto",
    backgroundColor: "black",
    color: "#545454",
  },
  logo: {
    marginRight: "auto",
    width: 60,
  },
  fundo: {
    backgroundColor: "#545454",
  },
}));

export default function Header() {
  const [abrir, setAbrir] = useState(false);

  const navigate = useNavigate();

  const styles = useStyle();

  function hadleLogin() {
    navigate("/login");
  }

  return (
    <AppBar position="sticky" color="default" className={styles.fundo}>
      <Container maxWidth="md" color="">
        <Toolbar disableGutters>
          <Hidden xsDown>
            <Button className={styles.logo}>
              <Logo />
            </Button>
            {linksNavegacao.map((item) => (
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setAbrir(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Avatar onClick={hadleLogin} className={styles.avatar}></Avatar>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="top"
        open={abrir}
        onClose={() => setAbrir(false)}
        onOpen={() => setAbrir(true)}
      >
        <List>
          {linksNavegacao.map((item) => (
            <ListItem>
              <Link
                className={styles.linkBlack}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />

        <IconButton onClick={() => setAbrir(false)}>
          <KeyboardArrowUpIcon />
        </IconButton>
      </SwipeableDrawer>
    </AppBar>
  );
}
