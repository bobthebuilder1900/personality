import connectDb from "utils/dbConnect";
import { QuestionList } from "./models";

export const getQuestionList = async (): Promise<QuestionList[]> => {
  const db = await connectDb();
  const questionsCollection = db.collection<QuestionList>("questions");
  const questions = await questionsCollection.find({}).limit(5).toArray();
  return questions.map((p) => ({ ...p, _id: p._id.toString() }));
};
