import { NextApiRequest, NextApiResponse } from "next";
import { getQuestionList } from "domain/questions/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const questions = await getQuestionList();
  res.status(200).json(questions);
};
