import React from "react";
import {
  Box,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { Results } from "@components/Result";
import { StyledButton } from "@components/Questionnaire/styled";

// Usually if re-used these types would be exported from a models directory, but in this case I am using it directly.
export type AnswersType = {
  answer: string;
  weight: number;
};

export type QuestionType = {
  question: string;
  answers: AnswersType[];
};

interface Props {
  questions: QuestionType[];
}

export const SimpleQuestions = ({ questions }: Props) => {
  const [values, setValues] = React.useState([]);
  const [weights, setWeights] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    stepIndex
  ) => {
    let newValues = [...values];
    newValues[stepIndex] = event.target.value;
    setValues(newValues);
  };

  const updateWeights = (index, weight) => {
    weights[index] = weight;
    setWeights(weights);
  };

  const handleReset = () => {
    setWeights([]);
    setValues([]);
    setShowResults(false);
  };

  return (
    <Container maxWidth="lg">
      <Box bgcolor="white" p={4}>
        {!showResults && (
          <FormControl component="fieldset">
            {questions.map((items: QuestionType, index) => {
              return (
                <Box mb={4}>
                  <Typography variant="h2">{items.question}</Typography>
                  <RadioGroup
                    aria-label="questions"
                    name="q"
                    value={values[index] || ""}
                    onChange={(e) => handleChange(e, index)}
                  >
                    {items.answers.map((item: AnswersType) => {
                      return (
                        <FormControlLabel
                          onChange={() => updateWeights(index, item.weight)}
                          value={item.answer}
                          control={<Radio />}
                          label={item.answer}
                          key={item.answer}
                        />
                      );
                    })}
                  </RadioGroup>
                  <Divider />
                </Box>
              );
            })}
          </FormControl>
        )}

        {showResults && <Results weight={weights.reduce((a, b) => a + b, 0)} />}

        {!showResults && (
          <Box textAlign="center">
            <StyledButton
              onClick={() => setShowResults(true)}
              variant="contained"
              color="primary"
            >
              Get results
            </StyledButton>
          </Box>
        )}

        {showResults && (
          <Box textAlign="center">
            <StyledButton
              onClick={() => handleReset()}
              variant="contained"
              color="primary"
            >
              Reset and try again
            </StyledButton>
          </Box>
        )}
      </Box>
    </Container>
  );
};
