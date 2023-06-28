import SolidMarkdown from "solid-markdown";
import { professionalSkills } from "./resumeContent";

const Skill = () => {
  return (
    <SolidMarkdown class="work-responsible" children={professionalSkills} />
  );
};
const ProfessionalSkill = () => {
  return (
    <div class="area">
      <h2>专业技能</h2>
      <Skill />
    </div>
  );
};

export default ProfessionalSkill;
