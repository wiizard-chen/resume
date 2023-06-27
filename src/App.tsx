import type { Component } from "solid-js";
import BasicInfo from "./parts/basicInfo";
import EduInfo from "./parts/eduInfo";
import DividerLine from "./parts/dividerLine";
import WorkExp from "./parts/workExp";
import ProfessionalSkill from "./parts/professionalSkill";

const App: Component = () => {
  return (
    <div id="id-div-app" class="">
      <BasicInfo />
      <DividerLine />
      <EduInfo />
      <DividerLine />
      <WorkExp />
      <DividerLine />
      <ProfessionalSkill />
    </div>
  );
};

export default App;
