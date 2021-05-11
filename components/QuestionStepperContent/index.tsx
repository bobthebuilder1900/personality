import React from "react";
import {
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

function getStepContent(stepIndex, questions) {
  switch (stepIndex) {
    case stepIndex:
      return (
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value="Test">
            {questions[stepIndex].answers.map((item, index) => {
              return (
                <FormControlLabel
                  value={item.answer}
                  control={<Radio />}
                  label={item.answer}
                  key={index}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      );
    default:
      return "Unknown stepIndex";
  }
}

export const QuestionStepperContent = (activeStep, questions) => {
  return (
    <Card elevation={0}>
      <CardContent>{getStepContent(activeStep, questions)}</CardContent>
    </Card>
  );
};
