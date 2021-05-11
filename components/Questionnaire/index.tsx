import React from "react";
import { Box, BoxProps, Container, Typography } from "@material-ui/core";
import { QuestionStepper } from "../QuestionStepper";
import { StyledButton } from "./styled";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

interface Props extends BoxProps {
  numOfQuestions?: number;
}

export const Questionnaire = ({ numOfQuestions, ...rest }: Props) => {
  const [shouldFetch, setShouldFetch] = React.useState(false);
  const { data, error } = useSWR(
    !shouldFetch ? null : "/api/questions",
    fetcher
  );

  const handleClick = () => {
    setShouldFetch(true);
  };

  return (
    <Container maxWidth="lg">
      <Box {...rest} component="section">
        <Box mb={4}>
          <Typography variant="h1" align="center">
            Are you an introvert or an extrovert?
          </Typography>
        </Box>

        {data && <QuestionStepper questions={data} />}

        {error && <Box my={4}>We had a problem getting questions</Box>}

        {!data && (
          <Box textAlign="center">
            <StyledButton
              color="primary"
              variant="contained"
              onClick={handleClick}
            >
              {!error ? "Get started" : "Try again"}
            </StyledButton>
          </Box>
        )}
      </Box>
    </Container>
  );
};
