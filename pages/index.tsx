import Layout from "../components/Layout";
import { Introduction } from "../components/Introduction";
import { Questionnaire } from "../components/Questionnaire";

export default function Home() {
  return (
    <Layout title="Personality test">
      <Introduction my={4} />
      <Questionnaire numOfQuestions={5} my={4} />
    </Layout>
  );
}
