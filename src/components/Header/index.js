import { React, useState } from "react";

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
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
  },
  avatar: {
    marginLeft: "auto",
    backgroundColor: "black",
    color: "white",
  },
}));

export default function Header() {
  const [abrir, setAbrir] = useState(false);

  const styles = useStyle();

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Hidden xsDown>
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
          <Avatar className={styles.avatar}></Avatar>
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
                className={styles.link}
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
