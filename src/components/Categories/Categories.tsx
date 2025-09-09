import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";

export const Categories: React.FC = () => {
  const [abaSelecionada, setAbaSelecionada] = useState("Populares");

  const abas = ["Para você", "Recentes", "Populares"];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{ fontFamily: "'Alexandria', sans-serif", mb: 2, textAlign: "left", fontSize: "2.5rem", color: "#777777" }}
      >
        Categorias
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        {abas.map((aba) => (
          <Typography
            key={aba}
            component="h2"
            onClick={() => setAbaSelecionada(aba)}
            sx={{
              cursor: "pointer",
              fontFamily: "'Alexandria', sans-serif",
              color: abaSelecionada === aba ? "#777777" : "#aaa",
              fontWeight: abaSelecionada === aba ? "bold" : "normal",
              fontSize: "1.25rem",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            {aba}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};
