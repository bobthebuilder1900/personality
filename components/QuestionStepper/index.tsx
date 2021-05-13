import {
  Box,
  BoxProps,
  StepLabel,
  Typography,
  Button,
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Results } from "components/Result";

export type AnswersType = {
  answer: string;
  weight: number;
};

export type QuestionType = {
  question: string;
  answers: AnswersType[];
};

interface Props extends BoxProps {
  questions: QuestionType[];
}

export const QuestionStepper = ({ questions, ...rest }: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = React.useState([]);
  const [weight, setWeight] = React.useState([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    stepIndex
  ) => {
    let weights = [...weight];
    let values = [...value];

    let answerWeight = questions[stepIndex].answers.find(
      (i) => i.answer === event.target.value
    ).weight;

    weights[stepIndex] = answerWeight;

    values[stepIndex] = event.target.value;

    setValue(values);
    setWeight(weights);
  };

  const getSteps = (questions: QuestionType[]) => {
    return questions.map((item: QuestionType) => {
      return item.question;
    });
  };

  const getStepContent = (stepIndex: number, questions: QuestionType[]) => {
    const { question } = questions[stepIndex];

    switch (stepIndex) {
      case stepIndex:
        return (
          <>
            <Box mb={2}>
              <Typography variant="h3">{question}</Typography>
            </Box>

            <FormControl component="fieldset">
              <RadioGroup
                aria-label="questions"
                name="questions"
                value={value[stepIndex] || ""}
                onChange={(e) => handleChange(e, stepIndex)}
              >
                {questions[stepIndex].answers.map(
                  (item: AnswersType, index) => {
                    return (
                      <FormControlLabel
                        value={item.answer}
                        control={<Radio />}
                        label={item.answer}
                        key={index}
                      />
                    );
                  }
                )}
              </RadioGroup>
            </FormControl>
          </>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const steps = getSteps(questions);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    // reset the initial state to an empty array;
    setValue([]);
    setWeight([]);
    setActiveStep(0);
  };

  const getWeight = (weights) => {
    // Take in the object created and get the total from each step.
    let total = 0;
    weights.map((weight) => {
      total += weight;
    });
    return total;
  };

  return (
    <Container maxWidth="lg">
      <Box {...rest} component="section">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {activeStep === steps.length ? (
            <Box>
              <Card elevation={0}>
                <CardContent>
                  <Results weight={getWeight(weight)} />
                  <Box textAlign="center" my={2}>
                    <Button
                      onClick={handleReset}
                      color="primary"
                      variant="contained"
                    >
                      Reset and start again
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ) : (
            <Box>
              <Card elevation={0}>
                <CardContent>
                  {getStepContent(activeStep, questions)}
                </CardContent>
              </Card>
              <Box mt={4} textAlign="center">
                <Button
                  disabled={activeStep === 0}
                  color="secondary"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Get Results" : "Next"}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};
