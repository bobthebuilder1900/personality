import Layout from "components/Layout";
import { Introduction } from "components/Introduction";
import { Questionnaire } from "components/Questionnaire";
import { SimpleQuestionnaire } from "@components/SimpleQuestionnaire";

export default function Simple() {
  return (
    <Layout title="Personality test simplified">
      <Introduction my={4} />
      <SimpleQuestionnaire my={4} />
    </Layout>
  );
}
