import React from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
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
    <AppBar 
      position="static" 
      elevation={1}
      sx={{
        backgroundColor: "#3F96DF",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "center" }}> 
          <Box sx={{
              display: "flex",
              justifyContent: "center", 
              width: "100%",
              gap: { xs: "1rem", sm: "2rem", md: "4rem", lg: "6rem" },
            }}>
            {items.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ 
                  textTransform: "none", 
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                  borderBottom: location.pathname === item.path ? "2px solid #fff" : "none",
                  padding: "10px 5px",
                  fontSize: "16px",
                  fontFamily: "'Alexandria', sans-serif",
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: 0.9,
                    borderBottom: '2px solid rgba(255,255,255,0.5)',
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
