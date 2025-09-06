import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();
   const items = [
    { label: "Conta", path: "/conta" },
    { label: "Conteúdos", path: "/conteudos" },
    { label: "Fórum", path: "/forum" },
    { label: "Especialistas", path: "/especialistas" },
  ];

  return (
    <AppBar position="static" elevation={1} >
      <Toolbar> 
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: "10rem",
          }}>
          {items.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color={location.pathname === item.path ? "text" : "inherit"}
              sx={{ textTransform: "none", marginLeft: 1 }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
