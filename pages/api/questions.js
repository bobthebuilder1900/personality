import { getQuestionList } from "../../domain/questions/index";

export default async (req, res) => {
  const questions = await getQuestionList();
  res.status(200).json(questions);
};
