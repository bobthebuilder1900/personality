import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import Image from "next/image";

interface Props {
  weight: number;
}

export const Results = ({ weight }: Props) => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" my={2}>
        {weight == 0 && (
          <Box>
            <Typography variant="h2" gutterBottom>
              Chances are you found out I didn't add any validation to the radio
              buttons ;)
            </Typography>
            <Box my={4}>
              <Image src="/fail.gif" width="480px" height="270px" />
            </Box>
          </Box>
        )}

        {weight > 0 && weight < 10 && (
          <Box>
            <Typography variant="h2" gutterBottom>
              Chances are you are introverted.
            </Typography>
            <Box my={4}>
              <Image src="/introvert.gif" width="480px" height="270px" />
            </Box>
          </Box>
        )}

        {weight > 10 && (
          <Box>
            <Typography variant="h2" gutterBottom>
              Chances are you are extroverted.
            </Typography>
            <Box my={4}>
              <Image src="/extrovert.gif" width="480px" height="270px" />
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};
