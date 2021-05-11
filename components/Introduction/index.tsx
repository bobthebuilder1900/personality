import { Box, BoxProps, Container, Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";

export const Introduction = (props: BoxProps) => {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" {...props} component="section">
        <Image
          src="/logo-sticky-justeret-logo-nyt-og-mobil.png"
          alt="teamway.io"
          width="300"
          height="88"
        />
        <Typography>
          The goal is to Build a simple personality test application, that takes
          3-5 different questions, maps them into a score and produces a
          personality trait of either Introvert or Extrovert.
        </Typography>
      </Box>
    </Container>
  );
};
